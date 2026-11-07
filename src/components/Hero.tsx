import { Compass, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { playGongSound } from '../utils/audio';

interface HeroProps {
  onExplore: (sectionId: string) => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section id="story" className="relative pt-8 pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header Decker */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-4 font-mono">
          <span>Sarawak Living Heritage</span>
          <span aria-hidden="true">·</span>
          <span>Sibu & Mukah Cultural Delta</span>
          <span aria-hidden="true">·</span>
          <span>Melanau Kaul Festival</span>
        </div>

        {/* 2-Column Split: Editorial Narrative & Authentic Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Context, Problem Statement & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] text-balance">
                Preserving the Sacred Kaul Festival for Sarawak’s Next Generation
              </h1>

              <p className="mt-5 text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
                Every year at the close of the northeast monsoon, the Melanau community gathers at the meeting of river and sea. Through the sacred <strong className="font-semibold text-stone-900">Serahang</strong> offering basket and the gravity-defying <strong className="font-semibold text-stone-900">Tibau</strong> swing, ancestors gave thanks to <em className="font-serif">Ipok Raja Laut</em> (the sea guardian) and renewed their communal bonds.
              </p>

              {/* The Core Problem & Solution Callout (Without thick left borders) */}
              <div className="mt-6 p-5 bg-stone-100/80 rounded-xl border border-stone-200 space-y-3">
                <div className="text-xs uppercase tracking-wider font-semibold text-amber-900">
                  Cultural Challenge & Mission
                </div>
                <div className="text-sm text-stone-700 space-y-2">
                  <p>
                    <strong className="text-stone-900">The Problem:</strong> Young people are increasingly drawn toward digital media and disconnected from ancestral rituals, leading to declining youth participation and the risk of forgotten customs.
                  </p>
                  <p>
                    <strong className="text-amber-950 font-medium">The Prototype Solution:</strong> An interactive, gamified cultural lab for schools and youth to assemble the ceremonial Serahang, simulate the daring physics of the Tibau swing, explore Melanau sago cuisine, and lead their own classroom heritage projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  playGongSound();
                  onExplore('serahang');
                }}
                className="px-5 py-2.5 bg-amber-900 hover:bg-amber-800 text-white font-medium text-sm rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Assemble Sacred Serahang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  playGongSound();
                  onExplore('tibau');
                }}
                className="px-5 py-2.5 bg-stone-200/90 hover:bg-stone-300 text-stone-800 font-medium text-sm rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-800" />
                <span>Play Tibau Swing Game</span>
              </button>

              <button
                onClick={() => {
                  playGongSound();
                  onExplore('quiz');
                }}
                className="text-stone-600 hover:text-stone-900 text-sm font-medium transition-colors underline underline-offset-4 cursor-pointer"
              >
                Youth Cultural Quiz
              </button>
            </div>
          </div>

          {/* Right Column: High Fidelity Cultural Photography */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 flex-1 min-h-[340px] group shadow-sm">
              <img
                src="/src/assets/images/kaul_festival_serahang_1794020178430.jpg"
                alt="Melanau Kaul Festival ceremonial Serahang basket carried in procession along the beach in Sarawak"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="text-[11px] uppercase tracking-widest text-amber-300 font-mono">
                  Festival Kaul Mukah & Sibu Coast
                </div>
                <div className="text-base font-serif font-semibold mt-1">
                  The Sacred Serahang Offering Basket
                </div>
                <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                  Carried to the Batang Mukah estuary to bless the fishing boats and welcome sea peace.
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-500 italic mt-2.5 text-center">
              Elders leading the annual Kaul seaside procession with ceremonial regalia and woven offerings.
            </p>
          </div>

        </div>

        {/* 4-Item Operational Metric Strip */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tabular-nums">
              400+
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-mono">
              Years of Living Oral Lore
            </div>
            <p className="text-xs text-stone-600">Passed down through generations of Batang Rajang delta elders.</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 tabular-nums">
              10–12m
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-mono">
              Tibau Giant Swing Height
            </div>
            <p className="text-xs text-stone-600">Pyramid timber structure testing youth courage and synchronization.</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tabular-nums">
              7
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-mono">
              Sacred Offerings in Serahang
            </div>
            <p className="text-xs text-stone-600">From golden turmeric pulut to sago tebaloi and betel quid.</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 tabular-nums">
              100%
            </div>
            <div className="text-xs uppercase tracking-wider text-stone-500 font-mono">
              Interactive Living Lab
            </div>
            <p className="text-xs text-stone-600">Discover authentic oral customs, architecture, and living crafts.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
