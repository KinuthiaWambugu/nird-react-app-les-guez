import { useState, useRef, useEffect } from "react";
import ChatBubble from "./chatBubble";
import TypingIndicator from "./TypingIndicator";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatRef = useRef(null);

  const scrollToBottom = () => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    const messageText = input;
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText , settings: {
            prompt:"Jean-Michel Profond, philosophe du dimanche...",
            length:"medium",
            chaos:70
        } }),
      });
      const data = await res.json();
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: data.reply || "…" }]);
    } catch (err) {
      console.error(err);
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: "Erreur serveur…" }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="flex flex-col bg-gray-900 rounded-xl border border-gray-700 shadow-xl flex-1 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-700">
        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-xl">🧠</div>
        <div>
          <h1 className="text-sm font-bold flex items-center gap-2">
            Jean-Michel Profond
            <span className="text-yellow-400 text-xs border border-yellow-400 px-2 rounded-full uppercase">Philosophe du dimanche</span>
          </h1>
          <p className="text-gray-400 text-xs">"Je ne réponds pas à tes questions. Je les complique."</p>
        </div>
      </div>

      {/* Chat */}
      <div ref={chatRef} className="flex-1 p-3 overflow-y-auto space-y-2 bg-gradient-to-t from-yellow-50/5 to-transparent">
        {messages.map((msg, i) => <ChatBubble key={i} role={msg.role} text={msg.text} />)}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-gray-700 bg-gray-800 flex flex-col gap-2">
        <input
          type="text"
          className="rounded-full p-2 px-4 bg-gray-900 border border-gray-700 text-gray-200 outline-none"
          placeholder="Pose ta grande question existentielle..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="bg-gradient-to-br from-orange-500 to-yellow-400 text-gray-900 font-semibold py-2 rounded-full hover:scale-105 transition-transform"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Chat;
