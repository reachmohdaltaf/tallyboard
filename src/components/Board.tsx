"use client";
import { useState } from "react";
import ListCard from "./ListCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Board = () => {
  const [lists, setLists] = useState([
    { id: 1, title: "To Do", items: ["Task 1", "Task 2"] },
    { id: 2, title: "In Progress", items: ["Task 3"] },
    { id: 3, title: "Done", items: ["Task 4"] },
  ]);

  const [draggedItem, setDraggedItem] = useState({ fromListIndex: null, itemIndex: null });
  const [draggedItemHeight, setDraggedItemHeight] = useState(0);
  const [dragOverItem, setDragOverItem] = useState({ toListIndex: null, itemIndex: null });

  const AddNewList = () => {
    const title = prompt("Enter list title");
    if (!title) return;
    setLists((prev) => [...prev, { id: Date.now(), title, items: [] }]);
  };

  const addItem = (listIndex: number, itemIndex: number | null = null) => {
    const title = prompt("Enter item title");
    if (!title) return;
    const newLists = [...lists];
    if (itemIndex !== null) {
      newLists[listIndex].items.splice(itemIndex, 0, title);
    } else {
      newLists[listIndex].items.push(title);
    }
    setLists(newLists);
  };

  const handleDragStart = (fromListIndex: number, itemIndex: number, e: any) => {
    setDraggedItem({ fromListIndex, itemIndex });
    setDraggedItemHeight(e.target.offsetHeight);
  };

  const handleDragEnter = (toListIndex: number, itemIndex: number) => {
    setDragOverItem({ toListIndex, itemIndex });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = () => {
    const { fromListIndex, itemIndex } = draggedItem;
    const { toListIndex, itemIndex: toItemIndex } = dragOverItem;
    if (fromListIndex === null || itemIndex === null || toListIndex === null || toItemIndex === null) return;

    const newLists = [...lists];
    const [movedItem] = newLists[fromListIndex].items.splice(itemIndex, 1);

    let insertAt = toItemIndex;
    if (fromListIndex === toListIndex && itemIndex < toItemIndex) {
      insertAt -= 1;
    }

    newLists[toListIndex].items.splice(insertAt, 0, movedItem);

    setLists(newLists);
    setDraggedItem({ fromListIndex: null, itemIndex: null });
    setDragOverItem({ toListIndex: null, itemIndex: null });
    setDraggedItemHeight(0);
  };

  return (
    <div className="p-4 min-h-screen bg-accent">
      <div className="mb-4">
        <Button onClick={AddNewList} variant="outline">
          <Plus className="mr-2" />
          Add another list
        </Button>
      </div>

      <div className="flex gap-4 overflow-x-auto scroll-hidden">
        {lists.map((list, index) => (
          <ListCard
            key={list.id}
            list={list}
            listIndex={index}
            draggedItem={draggedItem}
            draggedItemHeight={draggedItemHeight}
            dragOverItem={dragOverItem}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onAddItem={addItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
