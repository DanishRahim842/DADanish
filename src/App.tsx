/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SerahangBuilder } from './components/SerahangBuilder';
import { TibauGame } from './components/TibauGame';
import { CulinaryLab } from './components/CulinaryLab';
import { YouthPassportQuiz } from './components/YouthPassportQuiz';
import { LanguageVault } from './components/LanguageVault';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('story');
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('melanau_kaul_badges');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleUnlockBadge = (badgeId: string) => {
    setUnlockedBadges((prev) => {
      if (prev.includes(badgeId)) return prev;
      const updated = [...prev, badgeId];
      try {
        localStorage.setItem('melanau_kaul_badges', JSON.stringify(updated));
      } catch {
        // LocalStorage fallback
      }
      return updated;
    });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={scrollToSection}
        badgeCount={unlockedBadges.length}
      />

      <main className="flex-1">
        {/* Hero & Problem Statement */}
        <Hero onExplore={scrollToSection} />

        {/* Interactive Pillar 1: Sacred Serahang Offering Builder */}
        <SerahangBuilder
          onUnlockBadge={handleUnlockBadge}
          unlockedBadges={unlockedBadges}
        />

        {/* Interactive Pillar 2: The Tibau Giant Swing Challenge Mini-Game */}
        <TibauGame
          onUnlockBadge={handleUnlockBadge}
          unlockedBadges={unlockedBadges}
        />

        {/* Interactive Pillar 3: Sago Processing, Umai, Linut & Tall House */}
        <CulinaryLab
          onUnlockBadge={handleUnlockBadge}
          unlockedBadges={unlockedBadges}
        />

        {/* Interactive Pillar 4: Youth Heritage Passport & Quiz */}
        <YouthPassportQuiz
          onUnlockBadge={handleUnlockBadge}
          unlockedBadges={unlockedBadges}
        />

        {/* Interactive Pillar 5: Melanau Language Glossary & Pronunciation */}
        <LanguageVault />
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
