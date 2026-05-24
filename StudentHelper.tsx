import { motion } from "motion/react";
import { GraduationCap, BookOpen, Code, Zap } from "lucide-react";

export default function StudentHelper() {
  const handleCardClick = (title: string) => {
    const chatbotSection = document.getElementById("chatbot");
    const chatbotInput = document.getElementById("chatbot-input");
    
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: "smooth" });
    }
    
    if (chatbotInput) {
      setTimeout(() => {
        chatbotInput.focus();
      }, 500);
    }
  };

  const cards = [
    {
      title: "Homework Solver",
      description: "Upload your exact problem set and get step-by-step verified solutions.",
      icon: BookOpen,
      color: "from-brand-blue to-cyan-500",
      glow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] border-brand-blue/20"
    },
    {
      title: "Code Tutor",
      description: "Paste your broken code. We analyze, debug, and explain the fix comprehensively.",
      icon: Code,
      color: "from-brand-purple to-purple-600",
      glow: "hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] border-brand-purple/20"
    },
    {
      title: "Science Explainer",
      description: "Understand complex physics or chemistry via interactive atomic-level analogies.",
      icon: Zap,
      color: "from-pink-500 to-rose-500",
      glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] border-pink-500/20"
    }
  ];

  return (
    <section id="student-helper" className="py-8 relative z-10">
      <div className="absolute left-0 bottom-0 w-[50vw] h-[50vw] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass text-white border border-white/10 text-sm font-semibold mb-6 shadow-xl"
          >
            <GraduationCap className="w-5 h-5 text-pink-400" /> Academic Engine
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold max-w-3xl mx-auto leading-tight"
          >
            Accelerate your learning trajectory.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              onClick={() => handleCardClick(card.title)}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`bg-glass-card rounded-3xl p-8 border ${card.glow} transition-all duration-300 group cursor-pointer relative overflow-hidden`}
            >
              {/* Background gradient sweep on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${card.color} p-1 mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-brand-dark rounded-xl flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-100 leading-relaxed font-medium drop-shadow-sm">
                  {card.description}
                </p>

                <div className="mt-8 flex items-center text-sm font-bold tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover:text-brand-blue transition-colors">
                  Initialize <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all ml-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
