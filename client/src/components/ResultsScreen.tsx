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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-8 px-4 overflow-auto">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#a855f7', '#ec4899', '#6366f1', '#22c55e', '#f59e0b']}
        />
      )}
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Your Personality Type
          </h1>
          <p className="text-purple-200">
            Based on your responses, here's what makes you unique
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
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
                className="text-4xl md:text-5xl font-bold text-white mb-2"
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
            className="text-lg text-purple-100 leading-relaxed mb-8"
          >
            {result.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Key Strengths</h3>
              </div>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <motion.li
                    key={strength}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-2 text-purple-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    {strength}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Ideal Careers</h3>
              </div>
              <ul className="space-y-2">
                {result.careers.map((career, index) => (
                  <motion.li
                    key={career}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-2 text-purple-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
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
            className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Most Compatible Types</h3>
            </div>
            <p className="text-purple-200 text-sm mb-4">
              These personality types complement yours well and often form strong connections
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
                    className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/15 transition-colors"
                  >
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ color: compatType?.color || '#a855f7' }}
                    >
                      {type}
                    </div>
                    <div className="text-purple-200 text-xs">
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
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 rounded-xl"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Take Again
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 rounded-xl"
              onClick={() => {
                playHit();
                if (navigator.share) {
                  navigator.share({
                    title: `I'm a ${result.type} - ${result.name}!`,
                    text: `I just discovered my Myers-Briggs personality type. I'm a ${result.type} (${result.name})!`,
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
