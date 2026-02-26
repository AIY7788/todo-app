import IconCkeck from "../assets/images/icon-check.svg?react";
import IconCross from "../assets/images/icon-cross.svg?react"
import { useFilterContext } from "../contexts/context";

function ItemLists() {
  const { filteredData } = useFilterContext();
  
  return (
    <ul className="h-78 overflow-auto">
      {filteredData.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-4 py-3 px-5 border-b border-gray-300 dark:border-purple-700 group"
        >
          <div className="bg-linear-120 hover:from-check-from hover:to-check-to rounded-full dark:from-purple-700 dark:to-purple-700 p-0.5 transition-colors duration-300 from-purple-300 to-purple-300">
            <button
              className={`size-4.5 dark:bg-navy-900 bg-purple-50 rounded-full flex items-center justify-center cursor-pointer ${item.completed && "bg-linear-120 from-check-from to-check-to"}`}
            >
              {item.completed && <IconCkeck />}
            </button>
          </div>

          {/* <input
            id={`${item.id}`}
            type="checkbox"
            checked={item.completed}
            className="absolute w-0 border-none"
          /> */}
          <label
            htmlFor={`${item.id}`}
            className={`${item.completed && "line-through text-purple-300 dark:text-purple-700"} cursor-pointer`}
          >
            {item.title}
          </label>
          <button
            type="button"
            className="ml-auto sm:hidden cursor-pointer hover:scale-150 transition-transform duration-200 group-hover:block"
          >
            <IconCross />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemLists;