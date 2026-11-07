interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand & Cultural Homage */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-serif text-xl font-bold text-white tracking-tight">
              Kaul · Melanau Living Heritage
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
              An educational prototype created to foster youth participation and preserve the sacred oral lore, culinary science, and architectural heritage of the Melanau Kaul Festival in Sibu, Mukah, and Sarawak.
            </p>
            <div className="text-xs text-stone-500 font-mono">
              Dedicated to the indigenous elders and knowledge keepers of central Sarawak.
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Interactive Lab
            </div>
            <ul className="text-xs space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Festival Story & Origins
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('serahang')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sacred Serahang Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tibau')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tibau Giant Swing Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cuisine')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sago & Culinary Lab
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Youth Resources
            </div>
            <ul className="text-xs space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Youth Heritage Passport & Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cuisine')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sago Processing & Tall House
                </button>
              </li>
              <li>
                <span className="text-stone-500">
                  Batang Rajang & Mukah Cultural Archive
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            Preserving indigenous Sarawak heritage through interactive youth engagement.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Sibu</span>
            <span aria-hidden="true">·</span>
            <span>Mukah</span>
            <span aria-hidden="true">·</span>
            <span>Dalat</span>
            <span aria-hidden="true">·</span>
            <span>Sarawak, Borneo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
