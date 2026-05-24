import { motion } from "motion/react";
import { Sparkles, Atom } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["Ask Anything", "Solve Problems", "Learn Faster", "Code Better"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse"></div>
      
      <div className="text-center px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-brand-blue/30 text-brand-blue mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-semibold tracking-wider uppercase">Next-Gen AI Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4"
        >
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 text-glow-blue animate-gradient-x bg-[length:200%_auto]">
            Neuro AI
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-3xl text-gray-100 font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] mb-8 h-12 flex items-center justify-center gap-2"
        >
          Empowering you to 
          <span className="font-medium text-white min-w-[200px] text-left inline-block relative border-b-2 border-brand-purple pb-1">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 whitespace-nowrap"
            >
              {words[currentWord]}
            </motion.span>
            <span className="invisible">{words[0]}</span> {/* Layout placeholder */}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4"
        >
          <a href="#chatbot" className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-100 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center gap-2 group hover:shadow-[0_0_40px_rgba(0,240,255,0.8)]">
            Start Exploring 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              →
            </motion.span>
          </a>
          <a href="#student-helper" className="px-8 py-4 rounded-full bg-glass text-white font-bold text-lg border border-brand-blue hover:bg-brand-blue/20 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]">
            View Capabilities
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 relative lg:mt-16 w-40 h-40 mx-auto"
        >
          <div className="absolute inset-0 border-4 border-brand-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-2 border-4 border-t-brand-purple border-r-brand-blue border-b-transparent border-l-transparent rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
          <div className="absolute inset-8 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-full shadow-[0_0_40px_rgba(138,43,226,0.8)] animate-pulse flex items-center justify-center">
            <Atom className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
