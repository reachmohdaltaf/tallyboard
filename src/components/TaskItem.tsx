const TaskItem = ({ item, onDragStart }: any) => {
  return (
    <div
      className="cursor-grab rounded border bg-white p-2"
      draggable
      onDragStart={onDragStart}
    >
      {item}
    </div>
  );
};

export default TaskItem;
