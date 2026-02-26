import { useFilterContext } from "../contexts/context";

function FilterBtnGroup() {
  const {filter, setFilter} = useFilterContext()

  return (
    <>
      <button
        onClick={() => setFilter("all")}
        className={`${filter === "all" ? "text-primary" : "hover:text-navy-850 dark:hover:text-purple-100"} cursor-pointer transition-colors duration-300`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`${filter === "active" ? "text-primary" : "hover:text-navy-850 dark:hover:text-purple-100"} cursor-pointer transition-colors duration-300`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`${filter === "completed" ? "text-primary" : "hover:text-navy-850 dark:hover:text-purple-100"} cursor-pointer transition-colors duration-300`}
      >
        Completed
      </button>
    </>
  );
}

export default FilterBtnGroup;