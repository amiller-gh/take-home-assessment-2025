import { useEffect, useId } from "react";
import "./SortPill.css"

export type SortPillState = 'asc' | 'desc' | null;

export interface ISortPill {
  name: string;
  label: string;
  state: SortPillState;
  onChange: (state: SortPillState, name: string) => void;
}

// A likely too-clever-for-it's-own-good little sort pill component that
// uses the checkbox's "indeterminate" state to give native screen reader
// and a11y support. However, we should either 1) take an accessible 
// component that does this already off the shelf, or 2) consult a11y
// guildelines on how these should behave!
export default function SortPill({ name, label, state, onChange }) {
  const id = useId();
  useEffect(() => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (!el) return;
    switch (state) {
      case "asc":
        el.checked = true;
        el.indeterminate = false;
        break;
      case "desc":
        el.checked = false;
        el.indeterminate = false;
        break;
      default:
        el.indeterminate = true;
    }
  }, [state, id]);
  return <fieldset className={`sort-pill sort-pill--${state || 'indeterminate'}`}>
    <input
        className="sort-pill__checkbox"
        type="checkbox"
        name={name}
        id={id}
        checked={state === 'asc'}
        onChange={() => {
          switch (state) {
            case 'asc':
              return onChange('desc', name)
            case 'desc':
              return onChange(null, name)
            case null:
              return onChange('asc', name)
          }
        }}
      />
    <label className="sort-pill__label" htmlFor={id}>
      {label}
    </label>
  </fieldset>
}