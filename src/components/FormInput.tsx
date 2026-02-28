import { useState } from "react";
import { useContexts } from "../contexts/context";

function FormInput() {
  const { filteredData, addNewTodo } = useContexts();
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = value.trim();
    if (!trimmed) return;

    addNewTodo(trimmed);
    setValue("");
    console.table(filteredData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-gray-50 dark:bg-navy-900 rounded-md px-5 py-2.5"
    >
      <label
        htmlFor="new_todos"
        className="size-5.5 border-2 border-gray-300 dark:border-purple-700 rounded-full"
      ></label>
      <input
        id="new_todos"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Create a new todo..."
        className="outline-none flex-1 border-none placeholder:text-gray-600 text-lg placeholder:text-sm dark:placeholder:text-purple-600"
      />
    </form>
  );
}
export default FormInput;