import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/lib/stores/useQuiz";
import { useAudio } from "@/lib/stores/useAudio";
import { Brain, Sparkles, ArrowRight } from "lucide-react";

export function WelcomeScreen() {
  const { startQuiz } = useQuiz();
  const { playHit } = useAudio();

  const handleStart = () => {
    playHit();
    startQuiz();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
            Discover Your
            <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Personality Type
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-purple-200 text-center text-lg mb-8"
          >
            Take our Myers-Briggs personality assessment to uncover insights about your unique traits, strengths, and ideal career paths.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 text-purple-200">
              <Sparkles className="w-5 h-5" />
              <span>20 Questions</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Sparkles className="w-5 h-5" />
              <span>5 Minutes</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Sparkles className="w-5 h-5" />
              <span>16 Types</span>
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
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
