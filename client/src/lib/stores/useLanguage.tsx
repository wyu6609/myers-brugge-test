import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'zh';

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      toggleLanguage: () => set((state) => ({ 
        language: state.language === 'en' ? 'zh' : 'en' 
      })),
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'cat-quiz-language',
    }
  )
);
