import { useLanguage } from "@/lib/stores/useLanguage";
import { useAudio } from "@/lib/stores/useAudio";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const { playHit } = useAudio();
  
  const handleToggle = () => {
    playHit();
    toggleLanguage();
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="sm"
      className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm border-orange-200 hover:bg-orange-50 text-orange-600 gap-2 rounded-full px-4"
    >
      <Globe className="w-4 h-4" />
      {language === 'en' ? '中文' : 'English'}
    </Button>
  );
}
