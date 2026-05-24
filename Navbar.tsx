import { motion } from "motion/react";
import { Atom, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/40 backdrop-blur-xl border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="relative">
            <Atom className="w-8 h-8 text-brand-blue animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 bg-brand-blue blur-lg opacity-60"></div>
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-white border-b-2 border-brand-purple pb-0.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Neuro<span className="text-brand-blue">AI</span>
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "Chatbot", "Student Helper"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-300 hover:text-brand-blue hover:text-glow-blue transition-colors text-sm font-medium tracking-wide"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue font-medium text-sm text-white shadow-[0_0_15px_rgba(138,43,226,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] transition-shadow"
          >
            Get Started
          </motion.button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-glass border-b border-glass-border px-6 py-4 flex flex-col gap-4"
        >
          {["Features", "Chatbot", "Student Helper"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-300 hover:text-brand-blue text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
