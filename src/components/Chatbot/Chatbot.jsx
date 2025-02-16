import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const api_call = async (script) => {
    const apikey = import.meta.env.VITE_CHATBOT_API;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apikey}`;
    const data = { contents: [{ parts: [{ text: script }] }] };
    const headers = { "Content-Type": "application/json" };

    try {
      const res = await axios.post(url, data, { headers });
      if (res.data && res.data.candidates) {
        return res.data.candidates[0].content.parts[0].text;
      } else {
        return "No response from the bot.";
      }
    } catch (error) {
      console.error("API Error:", error.message);
      return "Error fetching response.";
    }
  };

  const sendMessage = async () => {
    if (inputValue.trim() !== "") {
      const userMessage = { text: inputValue, sender: "user" };
      setMessages((prev) => [...prev, userMessage]);
      setInputValue("");

      const botResponse = await api_call(inputValue);
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }
  };

  return (
    <>
      {/* Chat Button (Visible when chatbot is closed) */}
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 w-[200px] h-[40px] bg-blue-600 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
          onClick={() => setIsOpen(true)}
        >
          Chat with Zero-Bot 🤖
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-300 flex flex-col z-[9999]">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">ZERO-BOT 🤖</h2>
            <button
              className="text-xl bg-red-500 text-white w-8 h-8 rounded-full hover:scale-110 transition-all"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 border border-gray-400 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-inner">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl text-sm w-fit max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex mt-3">
            <input
              type="text"
              placeholder="Ask something..."
              className="w-full p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all shadow-md"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
