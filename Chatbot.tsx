import { motion } from "motion/react";
import { MessageSquare, Send, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("neuro_chat_history");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }
    return [{ role: "assistant", text: "Hello! I'm Neuro AI. How can I assist you today?" }];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("neuro_chat_history", JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send history up to current message
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessages(prev => [...prev, { role: "assistant", text: data.text }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        text: `Error: ${err.message}. Ensure your GEMINI_API_KEY is configured.` 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="chatbot" className="py-8 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass text-brand-purple border border-brand-purple/30 text-sm font-semibold mb-4"
          >
            <MessageSquare className="w-4 h-4" /> Cognitive Core
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Conversational Intelligence
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-glass-card rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-glass-border flex flex-col h-[600px]"
        >
          {/* Header */}
          <div className="p-4 border-b border-glass-border flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple p-0.5">
                <div className="w-full h-full bg-brand-dark rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-brand-blue" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white">Neuro Assistant</h3>
                <p className="text-xs text-brand-blue flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
            {messages.map((msg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl p-4 ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue text-brand-dark rounded-tr-sm font-bold shadow-[0_0_15px_rgba(0,240,255,0.5)]' 
                    : 'bg-white/10 border border-white/20 text-white rounded-tl-sm font-medium drop-shadow-md'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 flex gap-2 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-glass-border bg-black/40">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl opacity-30 group-focus-within:opacity-100 transition duration-500 blur-sm"></div>
              <div className="relative flex items-center bg-brand-dark rounded-xl p-2 border border-white/10">
                <input
                  id="chatbot-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Neuro AI anything..."
                  className="flex-1 bg-transparent text-white font-bold text-lg p-2 outline-none placeholder-gray-100 drop-shadow-md placeholder:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] font-sans"
                />
                <button 
                  onClick={handleSend}
                  className="p-3 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  disabled={!input.trim()}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 mt-3 font-mono">Gemini API Integration Ready</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
