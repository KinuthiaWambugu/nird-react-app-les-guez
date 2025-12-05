const ChatBubble = ({ role, text }) => {
  const baseClasses = "p-2.5 rounded text-sm leading-relaxed whitespace-pre-line";
  const userClasses = "bg-yellow-400 text-gray-900 self-end rounded-br-sm";
  const botClasses = "bg-gray-900 border border-gray-700 self-start rounded-bl-sm text-white";

  return (
    <div className={`flex flex-col max-w-3/4 ${role === "user" ? "items-end text-right" : "items-start text-left"}`}>
      <div className="text-gray-400 text-xs mb-1">{role === "user" ? "Toi" : "Jean-Michel"}</div>
      <div className={`${baseClasses} ${role === "user" ? userClasses : botClasses}`}>
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
