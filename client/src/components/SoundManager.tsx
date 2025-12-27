import { useEffect } from "react";
import { useAudio } from "@/lib/stores/useAudio";

export function SoundManager() {
  const { setBackgroundMusic, setHitSound, setSuccessSound } = useAudio();

  useEffect(() => {
    const bgMusic = new Audio("/sounds/background.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    setBackgroundMusic(bgMusic);

    const meow = new Audio("/sounds/meow.mp3");
    meow.volume = 0.6;
    setHitSound(meow);

    const purr = new Audio("/sounds/purr.mp3");
    purr.volume = 0.5;
    setSuccessSound(purr);
  }, [setBackgroundMusic, setHitSound, setSuccessSound]);

  return null;
}
