const ChapterContent = ({
  name,
  content,
  id,
  isActive,
  onClick,
}: {
  name: string;
  content: string;
  id: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b-2 mb-2 py-2">
      <h3
        className="text-xl cursor-pointer"
        id={id}
        style={{ color: isActive ? "blue" : "" }}
        onClick={() => onClick()}
      >
        {name}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default ChapterContent;
