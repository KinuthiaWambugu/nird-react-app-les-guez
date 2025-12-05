// ./pages/NirdChat.jsx
import React from "react";
import Chat from "../components/chatbot/chat";

const NirdChat = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-cyan-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-4">
            Digital Village
          </h1>
        </header>

        {/* Footer / CTA */}
        <div className="mt-10 text-center">
          <p className="text-sky-700 mb-4">
            Want to dive deeper into the Digital Village? Start exploring and ask Jean-Michel anything!
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Chatting
          </button>
        </div>


        {/* Chatbot Section */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-cyan-200">
          <div className="p-6 md:p-8">
            <Chat />
          </div>
        </div>


      </div>
    </div>
  );
};

export default NirdChat;
