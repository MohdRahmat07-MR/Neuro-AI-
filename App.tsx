/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./Navbar";
import Hero from "./Hero";
import Chatbot from "./Chatbot";
import StudentHelper from "./StudentHelper";
import BackgroundParticles from "./BackgroundParticles";
import { Atom, Heart } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-brand-dark text-white relative">
      <BackgroundParticles />
      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-0 pb-8">
        <Hero />
        
        {/* Separation Line */}
        <div className="w-full max-w-7xl mx-auto px-6 py-2">
           <div className="w-full h-px bg-gradient-to-r from-brand-blue/30 via-brand-purple/50 to-brand-blue/30 shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
        </div>

        <Chatbot />
        
        <div className="w-full max-w-7xl mx-auto px-6 py-2">
           <div className="w-full h-px bg-gradient-to-r from-brand-blue/30 via-brand-purple/50 to-brand-blue/30 shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
        </div>

        <StudentHelper />
      </div>

      <footer className="relative z-10 border-t border-glass-border bg-black/40 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Atom className="w-6 h-6 text-brand-blue" />
                <div className="absolute inset-0 bg-brand-blue blur-md opacity-60"></div>
              </div>
              <span className="font-display font-bold text-white text-xl tracking-wider drop-shadow-md drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Neuro AI</span>
            </div>
            <p className="text-white text-sm font-bold font-mono drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">&copy; 2026 Neuro AI Platform. Built with React & Framer Motion.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Sticky Badge for Author */}
      <div className="fixed bottom-4 right-4 z-[999] pointer-events-none">
        <div className="bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2">
          <span className="font-display font-bold text-sm text-[#00f0ff] [text-shadow:0_0_10px_#00f0ff,0_0_20px_#00f0ff] whitespace-nowrap">
            Crafted by Mohd Rahmat
          </span>
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,1)] animate-pulse" />
        </div>
      </div>
    </main>
  );
}

