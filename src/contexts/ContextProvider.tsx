import { useEffect, useMemo, useState } from "react";
import { Contexts } from "./context";
import type { Filter } from "../types/contexts.type";
import { todoDB } from "../data/todoLists";
import type { Todo } from "../types/data.type";

const STORAGE_KEY = "todoDB";

export function ContextsProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : todoDB;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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

  const value = {
    filter,
    todos,
    filteredData,
    updateStatus,
    setFilter,
    addNewTodo,
    setTodos,
  }
  
  return (
    <Contexts.Provider value={value}>
      {children}
    </Contexts.Provider>
  );
};