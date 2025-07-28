const DropZone = ({ active, height, onDragEnter, extraClass = "", defaultHeight = "4px" }: any) => {
  return (
    <div
      className={`transition-all duration-150 ease-in-out ${extraClass} ${
        active ? "border-2 border-dotted border-[#a89ed6] rounded" : ""
      }`}
      style={{
        height: active ? `${height}px` : defaultHeight,
      }}
      onDragEnter={onDragEnter}
    />
  );
};

export default DropZone;
