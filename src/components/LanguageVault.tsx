import { useState } from 'react';
import { MELANAU_WORDS } from '../data/melanauData';
import { Volume2, Search, Sparkles } from 'lucide-react';

export function LanguageVault() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  const categories = ['All', 'Festival', 'Food', 'Nature', 'People'];

  const filteredWords = MELANAU_WORDS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.malay.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const speak = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'ms-MY'; // Closest native phonetic match for coastal Austronesian sounds
      utterance.rate = 0.85;
      utterance.onstart = () => setSpeakingWord(word);
      utterance.onend = () => setSpeakingWord(null);
      utterance.onerror = () => setSpeakingWord(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">
              <span>Linguistic Heritage</span>
              <span aria-hidden="true">·</span>
              <span>Aen Likou (Melanau Language)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Melanau Vocabulary & Oral Glossary
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Language is the vessel of identity. Learn the authentic terms spoken by coastal elders along the Batang Rajang and Batang Igan deltas.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search vocabulary..."
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
            />
          </div>
        </div>

        {/* Category Filters (Interactive Filter Controls - Allowed by Design Skill) */}
        <div className="mt-8 flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Word Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredWords.map((item) => (
            <div
              key={item.word}
              className="p-5 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-300 transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <button
                    onClick={() => speak(item.word)}
                    aria-label={`Listen to pronunciation of ${item.word}`}
                    className={`p-1.5 rounded-md border transition-colors cursor-pointer ${
                      speakingWord === item.word
                        ? 'bg-amber-900 text-white border-amber-900'
                        : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {item.word}
                  </h3>
                  <div className="text-xs font-mono text-amber-900/80">
                    {item.phonetic}
                  </div>
                </div>

                <div className="text-xs text-stone-700 leading-relaxed pt-1 border-t border-stone-200/60">
                  <p className="font-medium text-stone-900">{item.english}</p>
                  <p className="text-stone-500 italic mt-0.5">{item.malay}</p>
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-stone-200/40 text-[11px] text-stone-500 italic">
                "{item.context}"
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
