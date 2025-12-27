import { motion } from "framer-motion";
import { useLanguage } from "@/lib/stores/useLanguage";
import { translations } from "@/data/translations";
import type { DimensionScores } from "@/lib/stores/useQuiz";

interface PersonalityStatsProps {
  scores: DimensionScores;
}

export function PersonalityStats({ scores }: PersonalityStatsProps) {
  const { language } = useLanguage();
  const t = translations[language].results;

  const dimensions = [
    { left: 'E', right: 'I', leftLabel: t.social, rightLabel: t.reserved, leftScore: scores.E, rightScore: scores.I, color: '#f97316' },
    { left: 'S', right: 'N', leftLabel: t.practical, rightLabel: t.imaginative, leftScore: scores.S, rightScore: scores.N, color: '#ec4899' },
    { left: 'T', right: 'F', leftLabel: t.logical, rightLabel: t.emotional, leftScore: scores.T, rightScore: scores.F, color: '#8b5cf6' },
    { left: 'J', right: 'P', leftLabel: t.organized, rightLabel: t.spontaneous, leftScore: scores.J, rightScore: scores.P, color: '#10b981' },
  ];

  return (
    <div className="space-y-6">
      {dimensions.map((dim, index) => {
        const total = dim.leftScore + dim.rightScore;
        const leftPercent = total > 0 ? Math.round((dim.leftScore / total) * 100) : 50;
        const rightPercent = 100 - leftPercent;
        const isLeftDominant = leftPercent >= 50;

        return (
          <motion.div
            key={dim.left + dim.right}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <span 
                  className="font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: isLeftDominant ? dim.color : '#d1d5db' }}
                >
                  {dim.left}
                </span>
                <span className={`font-medium ${isLeftDominant ? 'text-gray-800' : 'text-gray-400'}`}>
                  {dim.leftLabel}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-medium ${!isLeftDominant ? 'text-gray-800' : 'text-gray-400'}`}>
                  {dim.rightLabel}
                </span>
                <span 
                  className="font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: !isLeftDominant ? dim.color : '#d1d5db' }}
                >
                  {dim.right}
                </span>
              </div>
            </div>

            <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '50%' }}
                animate={{ width: `${leftPercent}%` }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full rounded-l-full flex items-center justify-end pr-3"
                style={{ backgroundColor: dim.color }}
              >
                <span className="text-white font-bold text-sm">
                  {leftPercent}%
                </span>
              </motion.div>
              <motion.div
                initial={{ width: '50%' }}
                animate={{ width: `${rightPercent}%` }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="absolute right-0 top-0 h-full bg-gray-200 rounded-r-full flex items-center justify-start pl-3"
              >
                <span className="text-gray-600 font-bold text-sm">
                  {rightPercent}%
                </span>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
