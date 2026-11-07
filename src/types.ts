export interface SerahangItem {
  id: string;
  name: string;
  melanauName: string;
  category: 'structure' | 'decoration' | 'offering' | 'sacred';
  symbolism: string;
  icon: string;
  description: string;
  stepOrder: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  factTag: string;
}

export interface MelanauWord {
  word: string;
  phonetic: string;
  english: string;
  malay: string;
  context: string;
  category: 'Festival' | 'Food' | 'Nature' | 'People';
}

