"use client"

import "./StateList.css";

import { useEffect, useState, useId } from 'react';
import { getState } from '@universe/fips';

import { IRegistrationDeadline, State, SortField } from "../../models";

import StateSeal from "../StateSeal/StateSeal";
import type { SortPillState } from "../SortPill/SortPill";

const TIME_FORMATTER_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
}

// Creae our DateTimeFormatter once an re-use it.
// Bonus points: switch out the language if the user's preferred language changes. 
function useDateTimeFormatter(): Intl.DateTimeFormat {
  const [ formatter, setFormatter ] = useState(() => {
    return new Intl.DateTimeFormat(globalThis.navigator?.language, TIME_FORMATTER_OPTIONS)
  });

  useEffect(() => {
    function onLanguageChange() {
       setFormatter(new Intl.DateTimeFormat(globalThis.navigator?.language, TIME_FORMATTER_OPTIONS))
    }
    addEventListener("languagechange", onLanguageChange);
    return () => removeEventListener('languagechange', onLanguageChange);
  }, []);

  return formatter;
}

export interface IStateListProps {
  deadlines: IRegistrationDeadline[];
  active: State;
  search: string;
  sortField: SortField;
  sortState: SortPillState
  onChange: (state: State) => void;
}

export default function Table({ deadlines, active, search, sortField, sortState, onChange } : IStateListProps) {
  const dateTimeFormatter = useDateTimeFormatter();
  const listId = useId();
  
  // Re-running the filter and sort on every re-render is not the most performant,
  // but on a list this small it's not an issue. If this list were longer, we would
  // want to cache this computation between renders.
  deadlines = deadlines.filter((datum) => {
    const state = getState(datum.state);
    return !!state.stateName?.toLowerCase().includes(search?.toLowerCase());
  }).sort((a, b) => {
    let res = 0;
    if (sortField === SortField.NAME) {
      const aState = getState(a.state);
      const bState = getState(b.state);
      res = aState.stateName > bState.stateName ? 1 : -1
    }

    if (sortField === SortField.IN_PERSON) {
      res = a.reg_deadline_in_person > b.reg_deadline_in_person ? 1 : -1
    }

    if (sortField === SortField.MAIL) {
      res = a.reg_deadline_mail > b.reg_deadline_mail ? 1 : -1
    }

    if (sortField === SortField.ONLINE) {
      res = a.reg_deadline_online > b.reg_deadline_online ? 1 : -1
    }

    res = sortState === 'desc' ? res * -1 : res;
    return res;
  });
  
  useEffect(() => {
    // This is complicated! There are more performant ways to do this without
    // using getBoundingClientRect and computedStyleMap, which both cause re-layouts.
    // However, this is an interview – and this was not in the question scope! – so
    // this will do for now :)
    let nextCall;
    let prevScrollTop = 0;
    function findActiveState() {
      nextCall = requestAnimationFrame(findActiveState);
      const el = document.getElementById(listId);
      if (!el) { return; }
      const scrollTop = el.scrollTop;
      if (scrollTop === prevScrollTop) { return; }
      prevScrollTop = scrollTop;
      const cardHeight = el.firstElementChild.getBoundingClientRect().height;
      const gapHeight = Number(el.computedStyleMap().get('gap').toString().slice(0, -2))
      const activeIdx = Math.floor((scrollTop + (cardHeight / 2) + (gapHeight / 2)) / (cardHeight + gapHeight));
      onChange(deadlines[Math.min(activeIdx, deadlines.length - 1)].state);
    }

    findActiveState();

    // Ideally, we'd use something like this to catch the scroll snap change events to do the
    // same effect, but this is not currently supported by Firefox or Safari.
    // document.getElementById(listId).addEventListener('scrollsnapchanging', (event) => {
    //   const target = event.snapTargetBlock;
    //   const activeIdx = Array.prototype.indexOf.call(target.parentElement.children, target);
    //   const state = deadlines[Math.min(activeIdx, deadlines.length - 1)].state;
    //   onChange(state);
    // });

    // Clean up on un-render.
    return () => cancelAnimationFrame(nextCall);
  }, [deadlines, listId, onChange]);

  return <ol id={listId} className={`state-list state-list--${sortState ? 'sorted' : 'un-sorted'}`}>{deadlines.map((datum, idx) => {
    const state = getState(datum.state);

    // Format our dates for human readability.
    const inPersonDate = dateTimeFormatter.format(new Date(datum.reg_deadline_in_person));
    const mailDate = dateTimeFormatter.format(new Date(datum.reg_deadline_mail));
    const onlineDate = dateTimeFormatter.format(new Date(datum.reg_deadline_online));

    return <li
      key={datum.state}
      className={`state-list__state state-list__state--${datum.state === active ? 'active' : 'inactive'}`}
      onClick={(evt) => {
        // Smoothly scroll to the clicked card. Highlight is handled by the
        // requestAnimationFrame in the useEffect above.
        const cardHeight = evt.currentTarget.getBoundingClientRect().height;
        const gapHeight = Number(evt.currentTarget.parentElement.computedStyleMap().get('gap').toString().slice(0, -2))
        document.getElementById(listId).scrollTo({
          top: idx * (cardHeight + gapHeight),
          behavior: 'smooth',
        });
      }}
    >
      <StateSeal state={datum.state} />
      <header className="state-list__state-header">
        <h2 className="state-list__state-name">{state.stateName}</h2>
        <dl className="state-list__data">
          <dt className="state-list__data-tag">In Person</dt>
          <dd className="state-list__data-detail">{inPersonDate}</dd>
          <dt className="state-list__data-tag">By Mail</dt>
          <dd className="state-list__data-detail">{mailDate}</dd>
          <dt className="state-list__data-tag">Online</dt>
          <dd className="state-list__data-detail">{onlineDate}</dd>
        </dl>
      </header>
      {datum.same_day_reg 
        ? <label className="state-list__same-day">{datum.same_day_reg}</label> 
        : <label className="state-list__same-day state-list__same-day--none">No same day registrion</label> }
        <p className="state-list__description">{datum.description}</p>
      <a className="state-list__register-button" href={datum.reg_url} target="_blank">Register</a>
    </li>;
  })}</ol>
} 