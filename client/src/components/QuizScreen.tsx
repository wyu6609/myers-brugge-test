import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuiz } from "@/lib/stores/useQuiz";
import { useAudio } from "@/lib/stores/useAudio";
import { questions } from "@/data/mbtiData";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState, useEffect } from "react";

export function QuizScreen() {
  const { currentQuestion, answers, answerQuestion, nextQuestion, previousQuestion, calculateResult } = useQuiz();
  const { playHit } = useAudio();
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);
  
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[currentQuestion] || selectedAnswer;
  const isLastQuestion = currentQuestion === questions.length - 1;

  useEffect(() => {
    setSelectedAnswer(answers[currentQuestion] || null);
  }, [currentQuestion, answers]);

  const handleAnswer = (answer: 'A' | 'B') => {
    playHit();
    setSelectedAnswer(answer);
    answerQuestion(answer);
    if (!isLastQuestion) {
      setTimeout(() => nextQuestion(), 400);
    }
  };

  const handleNext = () => {
    playHit();
    nextQuestion();
  };

  const handlePrevious = () => {
    playHit();
    previousQuestion();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-200 font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-purple-200 font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-3 bg-white/20" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
            >
              {question.text}
            </motion.h2>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer('A')}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  currentAnswer === 'A'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white shadow-lg'
                    : 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-purple-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                    currentAnswer === 'A'
                      ? 'bg-white border-white'
                      : 'border-white/40'
                  }`}>
                    {currentAnswer === 'A' && <Check className="w-5 h-5 text-purple-600" />}
                  </div>
                  <span className="text-lg font-medium">{question.optionA}</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer('B')}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  currentAnswer === 'B'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white shadow-lg'
                    : 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-purple-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                    currentAnswer === 'B'
                      ? 'bg-white border-white'
                      : 'border-white/40'
                  }`}>
                    {currentAnswer === 'B' && <Check className="w-5 h-5 text-purple-600" />}
                  </div>
                  <span className="text-lg font-medium">{question.optionB}</span>
                </div>
              </motion.button>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="ghost"
                className="text-white hover:bg-white/10 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6"
              >
                {isLastQuestion ? (
                  <>
                    See Results
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuestion
                  ? 'bg-white scale-125'
                  : answers[index]
                    ? 'bg-purple-400'
                    : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
