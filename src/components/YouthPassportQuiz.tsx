import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/melanauData';
import { Award, CheckCircle, XCircle, ArrowRight, Printer, Share2, Sparkles, BookOpen } from 'lucide-react';
import { playSuccessChime, playGongSound } from '../utils/audio';

interface YouthPassportQuizProps {
  onUnlockBadge: (badgeId: string) => void;
  unlockedBadges: string[];
}

export function YouthPassportQuiz({ onUnlockBadge, unlockedBadges }: YouthPassportQuizProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Sarawak Heritage Student');
  const [copiedNotice, setCopiedNotice] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);

    if (idx === currentQ.correctIndex) {
      setCorrectCount((prev) => prev + 1);
      playSuccessChime();
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      playGongSound();
      if (!unlockedBadges.includes('kaul-scholar')) {
        onUnlockBadge('kaul-scholar');
      }
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectCount(0);
    setQuizCompleted(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const copyCertificate = () => {
    const text = `🏆 CERTIFICATE OF CULTURAL ACHIEVEMENT
Recipient: ${studentName}
Honored as: Melanau Kaul Youth Cultural Ambassador
Issued by: Kaul Living Heritage Lab & Sarawak Cultural Preservation Initiative
Badges Earned: ${unlockedBadges.length}/4 Badges
Quiz Score: ${correctCount}/${QUIZ_QUESTIONS.length} Questions Correct
Preserving the Sacred Traditions of Sibu & Mukah for Future Generations.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 3000);
    }
  };

  const badges = [
    {
      id: 'serahang-keeper',
      name: 'Keeper of Serahang',
      icon: '🎋',
      desc: 'Assembled the 7 sacred offering layers',
    },
    {
      id: 'tibau-skyrider',
      name: 'Tibau Skyrider',
      icon: '🎪',
      desc: 'Mastered the courage & timing of the giant swing',
    },
    {
      id: 'sago-master',
      name: 'Sago Artisan',
      icon: '🥣',
      desc: 'Explored Umai curing and Linut sago chemistry',
    },
    {
      id: 'kaul-scholar',
      name: 'Kaul Scholar',
      icon: '📜',
      desc: 'Passed the Melanau heritage knowledge quiz',
    },
  ];

  return (
    <section id="quiz" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">
            <span>Educational Passport & Knowledge Assessment</span>
            <span aria-hidden="true">·</span>
            <span>Youth Certification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Youth Heritage Passport & Cultural Quiz
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Test what you've learned about the Melanau Kaul Festival, complete your passport badges, and receive your personalized Youth Ambassador certificate for your school portfolio.
          </p>
        </div>

        {/* Subtle Animated Milestone Progress Bar */}
        <div className="mt-8 p-5 bg-stone-50 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-stone-500 uppercase tracking-wider text-[11px]">
                Passport Milestone Progress:
              </span>
              <span className="font-serif font-semibold text-stone-900 text-sm">
                {unlockedBadges.length === 0 && 'Beginner Explorer'}
                {unlockedBadges.length === 1 && 'Heritage Apprentice'}
                {unlockedBadges.length === 2 && 'Cultural Steward'}
                {unlockedBadges.length === 3 && 'Senior Guardian'}
                {unlockedBadges.length === 4 && 'Kaul Youth Ambassador 🏆'}
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-amber-900 font-bold tabular-nums">
                {Math.round((unlockedBadges.length / 4) * 100)}% Complete
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-600 tabular-nums">
                {unlockedBadges.length} of 4 Badges Earned
              </span>
            </div>
          </div>

          {/* Animated Track */}
          <div className="relative w-full h-3 bg-stone-200/80 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 rounded-full transition-all duration-700 ease-out relative"
              style={{ width: `${Math.max(4, (unlockedBadges.length / 4) * 100)}%` }}
            >
              {/* Subtle inner highlight shimmer */}
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-50" />
            </div>
          </div>

          {/* Milestone Waypoints */}
          <div className="grid grid-cols-4 text-[11px] text-stone-500 font-mono pt-1">
            <div className="text-left">
              <span className={unlockedBadges.length >= 1 ? 'text-amber-900 font-semibold' : ''}>
                25% · Serahang
              </span>
            </div>
            <div className="text-center">
              <span className={unlockedBadges.length >= 2 ? 'text-amber-900 font-semibold' : ''}>
                50% · Tibau
              </span>
            </div>
            <div className="text-center">
              <span className={unlockedBadges.length >= 3 ? 'text-amber-900 font-semibold' : ''}>
                75% · Sago
              </span>
            </div>
            <div className="text-right">
              <span className={unlockedBadges.length === 4 ? 'text-amber-900 font-semibold' : ''}>
                100% · Scholar
              </span>
            </div>
          </div>

          {/* Celebration Notification when milestone reached */}
          {unlockedBadges.length > 0 && (
            <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-600">
              <span className="flex items-center gap-1.5 text-amber-900 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                {unlockedBadges.length === 4
                  ? 'All milestones unlocked! You are eligible for the certified Youth Ambassador certificate.'
                  : `Milestone ${unlockedBadges.length} of 4 reached. Complete remaining activities to achieve full certification.`}
              </span>
              {unlockedBadges.length < 4 && (
                <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
                  {4 - unlockedBadges.length} badge{4 - unlockedBadges.length > 1 ? 's' : ''} remaining
                </span>
              )}
            </div>
          )}
        </div>

        {/* Passport Badges Strip */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b) => {
            const isUnlocked = unlockedBadges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`p-4 rounded-xl border transition-all duration-500 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-amber-50/90 border-amber-300 ring-1 ring-amber-400/20 shadow-xs scale-101'
                    : 'bg-stone-50 border-stone-200 opacity-70 hover:opacity-90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" aria-hidden="true">{b.icon}</span>
                    <span
                      className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded transition-colors ${
                        isUnlocked
                          ? 'bg-amber-800 text-white font-medium shadow-2xs'
                          : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      {isUnlocked ? 'EARNED' : 'LOCKED'}
                    </span>
                  </div>
                  <div className="mt-2.5 text-sm font-semibold text-stone-900">
                    {b.name}
                  </div>
                  <div className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                    {b.desc}
                  </div>
                </div>

                {/* Micro Animated Progress Bar for Badge */}
                <div className="mt-4 pt-3 border-t border-stone-200/60">
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1 text-stone-500">
                    <span>STATUS</span>
                    <span className={isUnlocked ? 'text-amber-900 font-semibold' : ''}>
                      {isUnlocked ? '100% COMPLETE' : 'PENDING'}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        isUnlocked ? 'w-full bg-amber-800' : 'w-0'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiz or Certificate View */}
        <div className="mt-10">
          {!quizCompleted ? (
            /* Quiz Active Card */
            <div className="max-w-3xl bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs text-stone-500 font-mono">
                <span>QUESTION {currentIdx + 1} OF {QUIZ_QUESTIONS.length}</span>
                <span className="text-amber-900 font-semibold">{currentQ.factTag}</span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = selectedAnswer === optIdx;
                  const isCorrect = optIdx === currentQ.correctIndex;

                  let style = 'bg-white border-stone-200 hover:border-stone-400 text-stone-800';
                  if (showExplanation) {
                    if (isCorrect) {
                      style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium';
                    } else if (isSelected) {
                      style = 'bg-rose-50 border-rose-300 text-rose-950';
                    } else {
                      style = 'bg-stone-100/50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={showExplanation}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${style}`}
                    >
                      <span className="font-mono text-xs w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-relaxed">{option}</span>
                      {showExplanation && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {showExplanation && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Reveal */}
              {showExplanation && (
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2 text-xs sm:text-sm text-amber-950">
                  <div className="font-semibold text-amber-900 font-mono text-xs uppercase tracking-wide">
                    Historical Lore & Context:
                  </div>
                  <p className="leading-relaxed">{currentQ.explanation}</p>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={nextQuestion}
                      className="px-5 py-2 bg-amber-900 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>{currentIdx + 1 < QUIZ_QUESTIONS.length ? 'Next Question' : 'View Certificate'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Certificate View */
            <div className="max-w-4xl bg-stone-50 p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
                    Assessment Complete
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900">
                    Your Melanau Heritage Certificate
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    You answered {correctCount} of {QUIZ_QUESTIONS.length} questions correctly and unlocked cultural passport credentials.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyCertificate}
                    className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copiedNotice ? 'Copied!' : 'Copy Text'}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 bg-amber-900 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print / Save PDF</span>
                  </button>
                </div>
              </div>

              {/* Student Name Input */}
              <div className="max-w-sm">
                <label className="block text-xs font-semibold text-stone-700 uppercase font-mono tracking-wider mb-1">
                  Enter Your Name for the Certificate:
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Student Name / School Group"
                  className="w-full px-3.5 py-2 bg-white rounded-lg border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
                />
              </div>

              {/* Rendered Certificate Sheet */}
              <div className="p-8 sm:p-12 bg-[#FAF8F5] rounded-xl border-2 border-dashed border-stone-300 text-center space-y-6 relative overflow-hidden shadow-xs">
                
                {/* Decorative border frame */}
                <div className="absolute inset-2 border border-stone-300 pointer-events-none rounded-lg" />

                <div className="text-xs uppercase tracking-widest text-stone-500 font-mono">
                  SARAWAK INDIGENOUS CULTURAL ARCHIVE · SIBU & MUKAH
                </div>

                <div>
                  <h4 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                    Certificate of Cultural Stewardship
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-amber-900 font-mono mt-1">
                    Melanau Kaul Festival Youth Ambassador
                  </p>
                </div>

                <div className="py-2">
                  <p className="text-xs text-stone-500 italic">This is proudly presented to</p>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 underline decoration-amber-600 underline-offset-8 mt-1">
                    {studentName || 'Cultural Heritage Student'}
                  </div>
                </div>

                <p className="max-w-lg mx-auto text-xs sm:text-sm text-stone-600 leading-relaxed">
                  For actively studying and demonstrating knowledge of the <strong className="text-stone-900">Melanau Kaul Festival</strong>, the sacred <strong className="text-stone-900">Serahang</strong> offering, the traditional <strong className="text-stone-900">Tibau</strong> swing, and the living foodways of central Sarawak, contributing directly to the preservation of our elders’ heritage.
                </p>

                <div className="pt-6 border-t border-stone-200 flex flex-wrap justify-around items-center gap-4 text-xs text-stone-600 font-mono">
                  <div>
                    <div className="text-stone-400 text-[10px]">ISSUED BY</div>
                    <div className="font-semibold text-stone-800">Kaul Heritage Preservation Lab</div>
                  </div>
                  <div>
                    <div className="text-stone-400 text-[10px]">BADGES EARNED</div>
                    <div className="font-semibold text-amber-900">{unlockedBadges.length} / 4 Milestones</div>
                  </div>
                  <div>
                    <div className="text-stone-400 text-[10px]">REGION</div>
                    <div className="font-semibold text-stone-800">Mukah & Sibu, Sarawak</div>
                  </div>
                </div>

              </div>

              {/* Retake Button */}
              <div className="text-center pt-2">
                <button
                  onClick={resetQuiz}
                  className="text-xs text-stone-500 hover:text-stone-800 transition-colors underline cursor-pointer"
                >
                  Retake Knowledge Quiz
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
