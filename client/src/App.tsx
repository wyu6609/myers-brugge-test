import { useQuiz } from "@/lib/stores/useQuiz";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { ResultsScreen } from "@/components/ResultsScreen";
import { SoundManager } from "@/components/SoundManager";
import { MuteButton } from "@/components/MuteButton";
import { LanguageToggle } from "@/components/LanguageToggle";
import "@fontsource/inter";

function App() {
  const { phase } = useQuiz();

  return (
    <>
      <SoundManager />
      <MuteButton />
      <LanguageToggle />
      
      {phase === 'welcome' && <WelcomeScreen />}
      {phase === 'quiz' && <QuizScreen />}
      {phase === 'results' && <ResultsScreen />}
    </>
  );
}

export default App;
