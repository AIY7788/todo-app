import { useContexts } from "../contexts/context";
import { DndContext, closestCenter, type DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

function EmptyList({content}:{content: string}) {
  return (
    <div className="h-77.5 flex items-center justify-center text-gray-600 dark:text-purple-700">
      {content}
    </div>
  );
}

function ItemLists() {
  const { filter, filteredData, setTodos } = useContexts();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = filteredData.findIndex((t) => t.id === active.id);
    const newIndex = filteredData.findIndex((t) => t.id === over.id);

    setTodos(arrayMove(filteredData, oldIndex, newIndex));
  };

  if (filteredData.length === 0) {
    let message = "No todo items left";

    if (filter === "active") message = "No active items left";
    if (filter === "completed") message = "No completed items left";

    return <EmptyList content={message} />;
  }
  
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={filteredData.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <ul className="h-77.5 overflow-y-auto rounded-t-md overflow-x-hidden scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-primary dark:scrollbar-track-purple-700 scrollbar-thumb-rounded-xl scrollbar-track-rounded-2xl scrollbar-hover:cursor-grab">
          {filteredData.map((item) => (
            <SortableItem key={item.id} item={item} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

export default ItemLists;