import { useState } from 'react';
import { Menu, X, Award } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  badgeCount: number;
}

export function Navbar({ activeTab, setActiveTab, badgeCount }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'story', label: 'Festival Story' },
    { id: 'serahang', label: 'Serahang Builder' },
    { id: 'tibau', label: 'Tibau Swing' },
    { id: 'cuisine', label: 'Culinary Lab' },
    { id: 'quiz', label: 'Youth Passport' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            setActiveTab('story');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Kaul · Melanau Living Heritage
        </button>

        {/* Zone 2: 4–6 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                  isActive
                    ? 'text-amber-900 border-amber-800 font-semibold'
                    : 'border-transparent hover:text-stone-900 hover:border-stone-400'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              setActiveTab('quiz');
              const el = document.getElementById('quiz');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-900 rounded-lg hover:bg-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Youth Passport</span>
            <span className="font-mono text-[11px] bg-amber-800/80 px-1.5 py-0.2 rounded text-amber-100">
              {badgeCount}/4
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                activeTab === item.id
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
