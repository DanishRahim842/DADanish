import { useState } from 'react';
import { SERAHANG_PARTS } from '../data/melanauData';
import { SerahangItem } from '../types';
import { Check, Sparkles, RefreshCw, Info, Award } from 'lucide-react';
import { playGongSound, playSuccessChime } from '../utils/audio';

interface SerahangBuilderProps {
  onUnlockBadge: (badgeId: string) => void;
  unlockedBadges: string[];
}

export function SerahangBuilder({ onUnlockBadge, unlockedBadges }: SerahangBuilderProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>(['bamboo-frame']);
  const [activeItem, setActiveItem] = useState<SerahangItem>(SERAHANG_PARTS[0]);

  const isCompleted = selectedIds.length === SERAHANG_PARTS.length;
  const isBadgeUnlocked = unlockedBadges.includes('serahang-keeper');

  const togglePart = (item: SerahangItem) => {
    setActiveItem(item);
    if (!selectedIds.includes(item.id)) {
      const updated = [...selectedIds, item.id];
      setSelectedIds(updated);
      playGongSound();

      if (updated.length === SERAHANG_PARTS.length) {
        playSuccessChime();
        onUnlockBadge('serahang-keeper');
      }
    }
  };

  const addAllParts = () => {
    setSelectedIds(SERAHANG_PARTS.map((p) => p.id));
    playSuccessChime();
    onUnlockBadge('serahang-keeper');
  };

  const resetAssembly = () => {
    setSelectedIds(['bamboo-frame']);
    setActiveItem(SERAHANG_PARTS[0]);
  };

  return (
    <section id="serahang" className="py-16 border-b border-stone-200 bg-[#F7F4EE]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">
            <span>Ceremonial Laboratory</span>
            <span aria-hidden="true">·</span>
            <span>Step-by-Step Indigenous Craft</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            The Serahang: Assembling the Sacred Offering Basket
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            The Serahang is the ceremonial heart of the Kaul Festival. Crafted by Melanau elders and youth working side by side, every layer carries intentional symbolism that honors nature, ancestors, and sea safety.
          </p>
        </div>

        {/* Builder Container */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Visual Display (The Assembled Serahang SVG Representation) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-3 border-b border-stone-100 text-xs text-stone-500">
              <span className="font-mono uppercase tracking-wider">Serahang Assembly State</span>
              <span className="font-mono font-medium text-amber-900">
                {selectedIds.length} of {SERAHANG_PARTS.length} Offerings
              </span>
            </div>

            {/* Visual SVG Stage */}
            <div className="relative w-full max-w-[340px] aspect-[4/5] my-4 flex items-center justify-center bg-stone-50 rounded-xl border border-stone-100 overflow-hidden">
              <svg viewBox="0 0 320 400" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="sandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f5edd6" />
                    <stop offset="100%" stopColor="#e3d4b6" />
                  </linearGradient>
                  <linearGradient id="bambooGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bfa15f" />
                    <stop offset="50%" stopColor="#dfc384" />
                    <stop offset="100%" stopColor="#a68846" />
                  </linearGradient>
                </defs>

                {/* Beach sand base */}
                <ellipse cx="160" cy="370" rx="140" ry="25" fill="url(#sandGrad)" />

                {/* Wooden foundation pallet */}
                <rect x="90" y="340" width="140" height="14" rx="3" fill="#694d35" />
                <rect x="100" y="354" width="120" height="8" rx="2" fill="#523924" />

                {/* Tier 1: Bamboo Frame (Base basket) */}
                {selectedIds.includes('bamboo-frame') && (
                  <g className="transition-all duration-300">
                    {/* Lower large basket */}
                    <path d="M 80 340 L 100 240 L 220 240 L 240 340 Z" fill="url(#bambooGrad)" stroke="#8c6d32" strokeWidth="2" />
                    {/* Cross-hatch weaves */}
                    <path d="M 90 340 L 210 240 M 110 340 L 220 250 M 230 340 L 110 240 M 210 340 L 100 250" stroke="#755a28" strokeWidth="1.2" opacity="0.6" />
                    
                    {/* Middle basket tier */}
                    <path d="M 110 240 L 125 160 L 195 160 L 210 240 Z" fill="url(#bambooGrad)" stroke="#8c6d32" strokeWidth="2" />
                    
                    {/* Top finial tier */}
                    <path d="M 135 160 L 145 90 L 175 90 L 185 160 Z" fill="url(#bambooGrad)" stroke="#8c6d32" strokeWidth="2" />
                    <polygon points="160,50 148,90 172,90" fill="#a68846" stroke="#755a28" strokeWidth="1.5" />
                  </g>
                )}

                {/* Tier 2: Woven Coconut Leaves (Lidung) */}
                {selectedIds.includes('coconut-leaves') && (
                  <g className="transition-all duration-300">
                    {/* Fan of leaves at crest */}
                    <path d="M 160 50 Q 110 20 80 40 Q 130 50 160 65" fill="#4a7c36" opacity="0.9" />
                    <path d="M 160 50 Q 210 20 240 40 Q 190 50 160 65" fill="#5c9943" opacity="0.9" />
                    <path d="M 160 50 Q 160 10 160 0 Q 165 25 160 65" fill="#416d2f" />
                    <path d="M 160 50 Q 130 15 110 30" stroke="#365d25" strokeWidth="2" fill="none" />
                    <path d="M 160 50 Q 190 15 210 30" stroke="#365d25" strokeWidth="2" fill="none" />

                    {/* Skirts of coconut fronds draped from each tier */}
                    <path d="M 75 340 Q 160 360 245 340 L 240 325 Q 160 340 80 325 Z" fill="#699e46" />
                    <path d="M 95 240 Q 160 255 225 240 L 220 230 Q 160 242 100 230 Z" fill="#7ab352" />
                  </g>
                )}

                {/* Tier 3: Yellow Glutinous Rice (Pulut Kuning) */}
                {selectedIds.includes('pulut-kuning') && (
                  <g className="transition-all duration-300">
                    {/* Golden rice heaps on banana leaves */}
                    <ellipse cx="160" cy="240" rx="35" ry="12" fill="#eab308" stroke="#ca8a04" strokeWidth="1.5" />
                    <ellipse cx="125" cy="246" rx="20" ry="8" fill="#facc15" />
                    <ellipse cx="195" cy="246" rx="20" ry="8" fill="#facc15" />
                    {/* Banana leaf trim */}
                    <path d="M 90 252 Q 160 268 230 252" stroke="#225414" strokeWidth="3" fill="none" />
                  </g>
                )}

                {/* Tier 4: Sago Tebaloi and Pellets */}
                {selectedIds.includes('sago-tebaloi') && (
                  <g className="transition-all duration-300">
                    {/* Crispy square Tebaloi crackers stacked */}
                    <rect x="135" y="222" width="22" height="12" rx="1" fill="#d97706" stroke="#92400e" strokeWidth="1" transform="rotate(-6 146 228)" />
                    <rect x="165" y="222" width="22" height="12" rx="1" fill="#b45309" stroke="#78350f" strokeWidth="1" transform="rotate(8 176 228)" />
                    <circle cx="120" cy="235" r="4" fill="#fef3c7" stroke="#d97706" />
                    <circle cx="127" cy="237" r="3.5" fill="#fef3c7" stroke="#d97706" />
                    <circle cx="195" cy="235" r="4" fill="#fef3c7" stroke="#d97706" />
                  </g>
                )}

                {/* Tier 5: Sirih, Pinang & Kapur */}
                {selectedIds.includes('sirih-pinang') && (
                  <g className="transition-all duration-300">
                    {/* Folded betel leaf packets */}
                    <polygon points="150,155 160,145 170,155 160,165" fill="#15803d" stroke="#166534" strokeWidth="1" />
                    <circle cx="145" cy="162" r="3" fill="#be123c" />
                    <circle cx="175" cy="162" r="3" fill="#ffffff" stroke="#94a3b8" />
                  </g>
                )}

                {/* Tier 6: Consecrated Hardboiled Eggs */}
                {selectedIds.includes('hardboiled-eggs') && (
                  <g className="transition-all duration-300">
                    <ellipse cx="140" cy="148" rx="6" ry="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" transform="rotate(10 140 148)" />
                    <ellipse cx="180" cy="148" rx="6" ry="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" transform="rotate(-10 180 148)" />
                    <ellipse cx="160" cy="88" rx="5" ry="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                  </g>
                )}

                {/* Tier 7: Yellow Ceremonial Silk Ribbons */}
                {selectedIds.includes('yellow-ribbons') && (
                  <g className="transition-all duration-300">
                    {/* Silk banners streaming from top and middle */}
                    <path d="M 160 90 Q 210 120 220 180 Q 230 240 250 310" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M 160 90 Q 110 120 100 180 Q 90 240 70 310" stroke="#fbbf24" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M 160 160 Q 210 200 230 270" stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 160 160 Q 110 200 90 270" stroke="#eab308" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </g>
                )}
              </svg>

              {/* Status Overlay Badge if Finished */}
              {isCompleted && (
                <div className="absolute top-3 right-3 bg-amber-900/90 text-amber-100 text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5 backdrop-blur-sm">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span className="font-mono text-[11px]">Serahang Blessed</span>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="w-full flex items-center justify-between gap-3 pt-2">
              <button
                onClick={resetAssembly}
                className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              {!isCompleted && (
                <button
                  onClick={addAllParts}
                  className="text-xs font-medium text-amber-900 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  Assemble All Layers
                </button>
              )}
            </div>
          </div>

          {/* Right: Interactive Component Selector & Educational Explanations */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Component Selector List */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider font-mono">
                Select an offering to weave into the Serahang:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERAHANG_PARTS.map((item) => {
                  const isAdded = selectedIds.includes(item.id);
                  const isSelected = activeItem.id === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => togglePart(item)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-amber-950/5 border-amber-800 ring-1 ring-amber-800/30'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xl shrink-0" aria-hidden="true">
                          {item.icon}
                        </span>
                        <div className="truncate">
                          <div className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-stone-500 italic truncate font-serif">
                            {item.melanauName}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-colors ${
                          isAdded
                            ? 'bg-amber-800 border-amber-800 text-white'
                            : 'border-stone-300 bg-stone-50'
                        }`}
                      >
                        {isAdded && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Item Deep Dive Card */}
            <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                  Step {activeItem.stepOrder} of 7 · Cultural Significance
                </div>
                <span className="text-xs text-amber-900 font-serif italic">
                  {activeItem.melanauName}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  {activeItem.name}
                </h3>
                <p className="mt-1 text-sm text-stone-700 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <div className="text-xs text-stone-500 uppercase tracking-wider font-mono">
                  Sacred Symbolism
                </div>
                <p className="text-sm text-amber-950 font-medium mt-0.5">
                  "{activeItem.symbolism}"
                </p>
              </div>
            </div>

            {/* Completion & Student Badge Unlock Alert */}
            {isCompleted && (
              <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Award className="w-5 h-5 text-amber-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-amber-950">
                    Badge Earned: Keeper of the Serahang
                  </div>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    You have mastered the 7 ceremonial components of the Melanau offering basket. In authentic Kaul, this basket is carried in procession along the Mukah and Batang Igan beaches to bestow blessings upon the fishermen.
                  </p>
                  <div className="text-[11px] font-mono text-amber-800/80 pt-1">
                    Recorded in your Youth Heritage Passport.
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
