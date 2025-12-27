import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/lib/stores/useQuiz";
import { useAudio } from "@/lib/stores/useAudio";
import { Sparkles, ArrowRight } from "lucide-react";

function CatFace() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <ellipse cx="50" cy="55" rx="35" ry="30" fill="#f8b4d9" />
      <polygon points="20,40 15,5 40,30" fill="#f8b4d9" />
      <polygon points="80,40 85,5 60,30" fill="#f8b4d9" />
      <polygon points="20,40 18,10 35,28" fill="#fce7f3" />
      <polygon points="80,40 82,10 65,28" fill="#fce7f3" />
      <ellipse cx="35" cy="50" rx="8" ry="10" fill="#1f2937" />
      <ellipse cx="65" cy="50" rx="8" ry="10" fill="#1f2937" />
      <ellipse cx="37" cy="48" rx="3" ry="4" fill="white" />
      <ellipse cx="67" cy="48" rx="3" ry="4" fill="white" />
      <ellipse cx="50" cy="62" rx="5" ry="4" fill="#ec4899" />
      <path d="M 50 66 Q 45 72 40 68" stroke="#1f2937" strokeWidth="2" fill="none" />
      <path d="M 50 66 Q 55 72 60 68" stroke="#1f2937" strokeWidth="2" fill="none" />
      <line x1="15" y1="55" x2="30" y2="58" stroke="#1f2937" strokeWidth="1.5" />
      <line x1="15" y1="60" x2="30" y2="60" stroke="#1f2937" strokeWidth="1.5" />
      <line x1="15" y1="65" x2="30" y2="62" stroke="#1f2937" strokeWidth="1.5" />
      <line x1="85" y1="55" x2="70" y2="58" stroke="#1f2937" strokeWidth="1.5" />
      <line x1="85" y1="60" x2="70" y2="60" stroke="#1f2937" strokeWidth="1.5" />
      <line x1="85" y1="65" x2="70" y2="62" stroke="#1f2937" strokeWidth="1.5" />
    </svg>
  );
}

function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className}>
      <ellipse cx="25" cy="35" rx="12" ry="10" fill="currentColor" opacity="0.3" />
      <ellipse cx="15" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.3" />
      <ellipse cx="35" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.3" />
      <ellipse cx="10" cy="32" rx="5" ry="6" fill="currentColor" opacity="0.3" />
      <ellipse cx="40" cy="32" rx="5" ry="6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function WelcomeScreen() {
  const { startQuiz } = useQuiz();
  const { playHit } = useAudio();

  const handleStart = () => {
    playHit();
    startQuiz();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      <PawPrint className="absolute top-10 left-10 w-20 h-20 text-orange-300 rotate-[-20deg]" />
      <PawPrint className="absolute top-20 right-20 w-16 h-16 text-pink-300 rotate-[15deg]" />
      <PawPrint className="absolute bottom-20 left-20 w-24 h-24 text-amber-300 rotate-[30deg]" />
      <PawPrint className="absolute bottom-10 right-10 w-14 h-14 text-rose-300 rotate-[-10deg]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-6"
          >
            <CatFace />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4"
          >
            What Kind of
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Cat Are You?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-orange-700 text-center text-lg mb-8"
          >
            Take our purrsonality quiz to discover your feline alter ego! Answer 20 questions to find your inner cat. 🐱
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 text-orange-600 bg-orange-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span>20 Questions</span>
            </div>
            <div className="flex items-center gap-2 text-pink-600 bg-pink-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span>5 Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-amber-600 bg-amber-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span>16 Cat Types</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <Button
              onClick={handleStart}
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start the Quiz
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
