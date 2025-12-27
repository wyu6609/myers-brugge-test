import { useQuiz } from "@/lib/stores/useQuiz";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { ResultsScreen } from "@/components/ResultsScreen";
import { SoundManager } from "@/components/SoundManager";
import { MuteButton } from "@/components/MuteButton";
import "@fontsource/inter";

function App() {
  const { phase } = useQuiz();

  return (
    <div className="w-screen h-screen overflow-hidden">
      <SoundManager />
      <MuteButton />
      
      {phase === 'welcome' && <WelcomeScreen />}
      {phase === 'quiz' && <QuizScreen />}
      {phase === 'results' && <ResultsScreen />}
    </div>
  );
}

export default App;
