import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useContexts } from "../contexts/context";
import IconCkeck from "../assets/images/icon-check.svg?react";
import IconCross from "../assets/images/icon-cross.svg?react";
import type { Todo } from "../types/data.type";

function SortableItem({ item }: {item: Todo}) {
  const { updateStatus, setTodos } = useContexts();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleCompletedBtn = (id: string, completed: boolean) => {
    updateStatus(id, !completed);
  };

  const handleRemovedBtn = (id: string) => {
    setTodos(prev => prev.filter(i => i.id !== id))
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center gap-4 py-4 px-5 border-b rounded-t-md bg-gray-50 dark:bg-navy-900 border-gray-300 dark:border-purple-700 group"
    >
      <div className="bg-linear-120 hover:from-check-from hover:to-check-to rounded-full dark:from-purple-700 dark:to-purple-700 p-0.5 transition-colors duration-300 from-purple-300 to-purple-300">
        <button
          type="button"
          onClick={() => handleCompletedBtn(item.id, item.completed)}
          className={`size-4.5 dark:bg-navy-900 bg-purple-50 rounded-full flex items-center justify-center cursor-pointer ${item.completed && "bg-linear-120 from-check-from to-check-to"}`}
        >
          {item.completed && <IconCkeck />}
        </button>
      </div>

      <p
        {...listeners}
        className={`${item.completed && "peer line-through text-purple-300 dark:text-purple-700"} flex-1 cursor-grab transition-all duration-500 active:cursor-grabbing select-none`}
      >
        {item.title}
      </p>

      <button
        onClick={() => handleRemovedBtn(item.id)}
        type="button"
        className="ml-auto sm:hidden cursor-pointer hover:scale-150 transition-transform duration-200 group-hover:block"
      >
        <IconCross />
      </button>
    </li>
  );
}

export default SortableItem;