"use client"
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Alex, representative of AutomationBots. How can I help you?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Clear backend history on page load
  useEffect(() => {
    fetch("https://shyamiii-chatbotapv2.hf.space/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "message": "", "reset": true }) // empty message to trigger clear
    }).catch(err => console.error("Failed to clear history:", err));
  }, []); 

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((msgs) => [...msgs, { from: 'user', text: userMessage }]);
    setInput('');

    try {
      const res = await fetch("https://shyamiii-chatbotapv2.hf.space/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: data.reply || "No response from bot." }
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: "Error connecting to the chatbot." }
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2M15 3h-6a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            className="w-80 sm:w-96 h-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mt-4 border border-gray-200"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
              <div className="font-bold text-lg flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2M15 3h-6a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z" />
                </svg>
                ALEX
              </div>
              <button onClick={() => setOpen(false)} className="text-white hover:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50" style={{ scrollbarWidth: 'thin' }}>
              {messages.map((msg, i) => (
                <div key={i} className={`mb-3 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-xl px-4 py-2 max-w-[75%] text-sm shadow ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200 flex gap-2">
              <input
                type="text"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 font-body"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus={open}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold disabled:opacity-50"
                disabled={!input.trim()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
