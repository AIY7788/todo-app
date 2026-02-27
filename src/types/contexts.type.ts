import type { Todo } from "./data.type";

export type Filter = "all" | "active" | "completed";

export interface ContextsType {
  filter: Filter;
  filteredData: Todo[];
  updateStatus: (id: string, completed: boolean) => void;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  addNewTodo: (newTodo: string) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}