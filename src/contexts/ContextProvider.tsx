import { useMemo, useState } from "react";
import { Contexts } from "./context";
import type { Filter } from "../types/contexts.type";
import { todoDB } from "../data/todoLists";

export function ContextsProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [todos, setTodos] = useState(todoDB);

  const updateStatus = (id: string, completed: boolean) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    );
  };

  const addNewTodo = (newTodo: string) => {
    setTodos((prev) => [
      {
        id: crypto.randomUUID(),
        title: newTodo,
        completed: false,
      },
      ...prev,
    ]);
  }

  const filteredData = useMemo(() => {
    switch (filter) {
      case "active":
        return todos.filter((item) => !item.completed);
      case "completed":
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  }, [filter, todos]);

  const value = useMemo(
    () => ({
      filter,
      filteredData,
      updateStatus,
      setFilter,
      addNewTodo,
      setTodos,
    }),
    [filter, filteredData],
  );

  return (
    <Contexts.Provider value={value}>
      {children}
    </Contexts.Provider>
  );
};