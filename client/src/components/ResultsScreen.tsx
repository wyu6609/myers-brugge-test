import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/lib/stores/useQuiz";
import { useAudio } from "@/lib/stores/useAudio";
import { useEffect, useState } from "react";
import { RotateCcw, Briefcase, Star, Share2, Heart } from "lucide-react";
import Confetti from "react-confetti";
import { personalityTypes } from "@/data/mbtiData";

const typeImages: Record<string, string> = {
  INTJ: "/images/intj_architect_personality_abstract.png",
  INTP: "/images/intj_architect_personality_abstract.png",
  ENTJ: "/images/entj_commander_personality_abstract.png",
  ENTP: "/images/entj_commander_personality_abstract.png",
  INFJ: "/images/infj_advocate_personality_abstract.png",
  INFP: "/images/infj_advocate_personality_abstract.png",
  ENFJ: "/images/infj_advocate_personality_abstract.png",
  ENFP: "/images/esfp_entertainer_personality_abstract.png",
  ISTJ: "/images/intj_architect_personality_abstract.png",
  ISFJ: "/images/infj_advocate_personality_abstract.png",
  ESTJ: "/images/entj_commander_personality_abstract.png",
  ESFJ: "/images/esfp_entertainer_personality_abstract.png",
  ISTP: "/images/intj_architect_personality_abstract.png",
  ISFP: "/images/infj_advocate_personality_abstract.png",
  ESTP: "/images/entj_commander_personality_abstract.png",
  ESFP: "/images/esfp_entertainer_personality_abstract.png",
};

function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className}>
      <ellipse cx="25" cy="35" rx="12" ry="10" fill="currentColor" opacity="0.15" />
      <ellipse cx="15" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.15" />
      <ellipse cx="35" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.15" />
      <ellipse cx="10" cy="32" rx="5" ry="6" fill="currentColor" opacity="0.15" />
      <ellipse cx="40" cy="32" rx="5" ry="6" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

export function ResultsScreen() {
  const { result, resetQuiz } = useQuiz();
  const { playSuccess, playHit } = useAudio();
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    playSuccess();
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [playSuccess]);

  const handleReset = () => {
    playHit();
    resetQuiz();
  };

  if (!result) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100 py-8 px-4 pb-24 relative">
      <PawPrint className="absolute top-10 left-5 w-16 h-16 text-orange-400 rotate-[-15deg]" />
      <PawPrint className="absolute top-40 right-10 w-20 h-20 text-pink-400 rotate-[20deg]" />
      <PawPrint className="absolute bottom-40 left-10 w-24 h-24 text-amber-400 rotate-[10deg]" />
      
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            colors={['#f97316', '#ec4899', '#f59e0b', '#fb7185', '#fbbf24']}
          />
        </div>
      )}
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Your Cat Purrsonality Type
          </h1>
          <p className="text-orange-600">
            Based on your responses, here's your feline alter ego
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div 
                className="w-40 h-40 rounded-3xl overflow-hidden shadow-2xl"
                style={{ 
                  boxShadow: `0 0 60px ${result.color}50`
                }}
              >
                <img 
                  src={typeImages[result.type]} 
                  alt={result.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl text-white font-bold text-xl shadow-lg"
                style={{ backgroundColor: result.color }}
              >
                {result.type}
              </div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
              >
                {result.name}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-block px-4 py-1 rounded-full text-white font-medium"
                style={{ backgroundColor: result.color }}
              >
                {result.type}
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-gray-700 leading-relaxed mb-8"
          >
            {result.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Key Strengths</h3>
              </div>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <motion.li
                    key={strength}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    {strength}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Ideal Careers</h3>
              </div>
              <ul className="space-y-2">
                {result.careers.map((career, index) => (
                  <motion.li
                    key={career}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 rounded-full bg-pink-400" />
                    {career}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Purrfect Matches</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              These cat purrsonality types complement yours well and make great companions
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {result.compatibleTypes.map((type, index) => {
                const compatType = personalityTypes[type];
                return (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-rose-100"
                  >
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ color: compatType?.color || '#f97316' }}
                    >
                      {type}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {compatType?.name || type}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              onClick={handleReset}
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 rounded-xl"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Take Again
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 rounded-xl"
              onClick={() => {
                playHit();
                if (navigator.share) {
                  navigator.share({
                    title: `I'm a ${result.type} Cat - ${result.name}!`,
                    text: `I just discovered my cat purrsonality type. I'm a ${result.type} (${result.name})! Meow!`,
                  });
                }
              }}
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share Result
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
