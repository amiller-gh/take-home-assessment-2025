import "./SearchControls.css";

import { SortField } from "../../models";
import SortPill, { SortPillState } from "../SortPill/SortPill";

export interface ISortConfig {
  search: string;
  sortField: SortField;
  sortState: SortPillState;
}

export interface ISortControlsProps extends ISortConfig {
  onChange: (config: ISortConfig) => void;
}

export default function SearchControls({search, sortField, sortState, onChange}: ISortControlsProps) {
  function updateSortState(val: SortPillState, name: string) {
    onChange({
      search,
      sortField: !val ? SortField.NAME : name as SortField,
      sortState: val,
    })
  }

  return <form className="search-controls">
    <input
      className="search-controls__search" 
      type="search" 
      placeholder="Search for a State"
      onChange={e => onChange({
        search: e.currentTarget.value,
        sortField,
        sortState,
      })}
    />
    <ul className="search-controls__sort-pills">
      <li><label>Sort By:</label></li>
      <li><SortPill name={SortField.NAME} label="State Name" state={sortField === SortField.NAME ? sortState : null} onChange={updateSortState} /></li>
      <li><SortPill name={SortField.IN_PERSON} label="In Person Reg Date" state={sortField === SortField.IN_PERSON ? sortState : null} onChange={updateSortState} /></li>
      <li><SortPill name={SortField.MAIL} label="Mail Reg Date" state={sortField === SortField.MAIL ? sortState : null} onChange={updateSortState} /></li>
      <li><SortPill name={SortField.ONLINE} label="Online Reg Date" state={sortField === SortField.ONLINE ? sortState : null} onChange={updateSortState} /></li>
    </ul>
  </form>;
}
