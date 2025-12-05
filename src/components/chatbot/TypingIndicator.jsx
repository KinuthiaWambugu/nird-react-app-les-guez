const TypingIndicator = () => (
  <div className="flex flex-col max-w-3/4 items-start text-left">
    <div className="text-gray-400 text-xs mb-1">Jean-Michel</div>
    <div className="p-2.5 rounded border border-gray-700 bg-gray-900 text-sm inline-flex items-center gap-2">
      Jean-Michel réfléchit beaucoup trop...
      <span className="inline-flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-150"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-300"></span>
      </span>
    </div>
  </div>
);

export default TypingIndicator;
