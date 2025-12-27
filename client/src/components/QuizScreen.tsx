import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuiz } from "@/lib/stores/useQuiz";
import { useAudio } from "@/lib/stores/useAudio";
import { useLanguage } from "@/lib/stores/useLanguage";
import { translations, questionsZh } from "@/data/translations";
import { questions } from "@/data/mbtiData";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useState, useEffect } from "react";

function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className}>
      <ellipse cx="25" cy="35" rx="12" ry="10" fill="currentColor" opacity="0.2" />
      <ellipse cx="15" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.2" />
      <ellipse cx="35" cy="20" rx="6" ry="7" fill="currentColor" opacity="0.2" />
      <ellipse cx="10" cy="32" rx="5" ry="6" fill="currentColor" opacity="0.2" />
      <ellipse cx="40" cy="32" rx="5" ry="6" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export function QuizScreen() {
  const { currentQuestion, answers, answerQuestion, nextQuestion, previousQuestion } = useQuiz();
  const { playHit } = useAudio();
  const { language } = useLanguage();
  const t = translations[language].quiz;
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);
  
  const question = questions[currentQuestion];
  const questionZh = questionsZh[currentQuestion];
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

  const displayQuestion = language === 'zh' ? questionZh : question;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      <PawPrint className="absolute top-10 left-10 w-20 h-20 text-orange-400 rotate-[-20deg]" />
      <PawPrint className="absolute bottom-20 right-20 w-24 h-24 text-pink-400 rotate-[15deg]" />
      
      <div className="max-w-3xl w-full relative z-10">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-orange-700 font-medium">
              {t.question} {currentQuestion + 1} {t.of} {questions.length}
            </span>
            <span className="text-orange-700 font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-3 bg-orange-200" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200"
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8"
            >
              {displayQuestion.text}
            </motion.h2>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer('A')}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  currentAnswer === 'A'
                    ? 'bg-gradient-to-r from-orange-400 to-pink-400 border-transparent text-white shadow-lg'
                    : 'bg-white/50 border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                    currentAnswer === 'A'
                      ? 'bg-white border-white'
                      : 'border-orange-300'
                  }`}>
                    {currentAnswer === 'A' && <Check className="w-5 h-5 text-orange-500" />}
                  </div>
                  <span className="text-lg font-medium">{displayQuestion.optionA}</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer('B')}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-300 border-2 ${
                  currentAnswer === 'B'
                    ? 'bg-gradient-to-r from-orange-400 to-pink-400 border-transparent text-white shadow-lg'
                    : 'bg-white/50 border-orange-200 text-gray-700 hover:bg-orange-50 hover:border-orange-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                    currentAnswer === 'B'
                      ? 'bg-white border-white'
                      : 'border-orange-300'
                  }`}>
                    {currentAnswer === 'B' && <Check className="w-5 h-5 text-orange-500" />}
                  </div>
                  <span className="text-lg font-medium">{displayQuestion.optionB}</span>
                </div>
              </motion.button>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="ghost"
                className="text-orange-600 hover:bg-orange-100 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                {t.previous}
              </Button>

              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
                className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-6"
              >
                {isLastQuestion ? (
                  <>
                    {t.seeResults}
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </>
                ) : (
                  <>
                    {t.next}
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
                  ? 'bg-orange-500 scale-125'
                  : answers[index]
                    ? 'bg-pink-400'
                    : 'bg-orange-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
