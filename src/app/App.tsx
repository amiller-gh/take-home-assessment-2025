"use client"

import StateList from "./components/StateList/StateList";
import Map from "./components/Map/Map";
import Logo from "./components/Logo/Logo";
import { useState, use, Suspense } from "react";
import { IRegistrationDeadline, State, SortField } from "./models";
import { type SortPillState } from "./components/SortPill/SortPill";
import SearchControls, { type ISortConfig } from "./components/SearchControls/SearchControls";

export default function App({ data }: { data: Promise<IRegistrationDeadline[]> }) {
  const deadlines = use(data);
  const [ activeState, setActiveState ] = useState<State | null>(deadlines?.[0]?.state || null);

  const [search, setSearch] = useState<string>('');
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortState, setSortState] = useState<SortPillState>(null);

  return <main>
    <nav className="nav">
      <Logo />
      <h1 className="nav__title">Find Your State <div className="nav__title-highlight">Registration</div></h1>
      <Map active={activeState} />
    </nav>
    <section className="main">
      <SearchControls 
        search={search} 
        sortField={sortField}
        sortState={sortState}
        onChange={({ search, sortField, sortState }: ISortConfig) => {
          setSearch(search);
          setSortField(sortField);
          setSortState(sortState)
        }}
      />
      {/* TODO: Better fallback loading state. */}
      <Suspense fallback={<div>Loading</div>}>
        <StateList
          deadlines={deadlines}
          onChange={setActiveState}
          active={activeState}
          search={search}
          sortField={sortField}
          sortState={sortState}
        />
      </Suspense>
    </section>
    
  </main>
}