import type { Todo } from "./data.type";

export type Filter = "all" | "active" | "completed";

export interface FilterContextType {
  filter: Filter;
  filteredData: Todo;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}