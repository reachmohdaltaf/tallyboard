import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TaskItem from "./TaskItem";
import DropZone from "./DropZone";

const ListCard = ({
  list,
  listIndex,
  draggedItem,
  draggedItemHeight,
  dragOverItem,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDrop,
  onAddItem,
}: any) => {
  return (
    <Card
      className="w-full gap-0 py-0 max-w-xs flex flex-col flex-shrink-0"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <CardHeader className="bg-accent rounded-t-md">
        <h1 className="font-bold py-2 text-lg">{list.title}</h1>
      </CardHeader>

      <CardContent className="p-4 flex-1 flex flex-col space-y-0 min-h-[60px]">
        {list.items.length === 0 ? (
          <DropZone
            active={
              dragOverItem.toListIndex === listIndex &&
              dragOverItem.itemIndex === 0
            }
            height={draggedItemHeight}
            onDragEnter={() => onDragEnter(listIndex, 0)}
          />
        ) : (
          <>
            {list.items.map((item: string, itemIndex: number) => (
              <div key={itemIndex} className="flex flex-col">
                <DropZone
                  active={
                    dragOverItem.toListIndex === listIndex &&
                    dragOverItem.itemIndex === itemIndex
                  }
                  height={draggedItemHeight}
                  onDragEnter={() => onDragEnter(listIndex, itemIndex)}
                />

                <TaskItem
                  item={item}
                  onDragStart={(e: any) =>
                    onDragStart(listIndex, itemIndex, e)
                  }
                />
              </div>
            ))}

            <DropZone
              active={
                dragOverItem.toListIndex === listIndex &&
                dragOverItem.itemIndex === list.items.length
              }
              height={draggedItemHeight}
              onDragEnter={() =>
                onDragEnter(listIndex, list.items.length)
              }
              extraClass="mt-1"
              defaultHeight="8px"
            />
          </>
        )}
      </CardContent>

      <CardFooter className="py-2 mt-auto">
        <Button
          onClick={() => onAddItem(listIndex)}
          variant="ghost"
          className="w-full text-sm"
        >
          + Add item
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ListCard;
