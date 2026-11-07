interface IllustrationProps {
  className?: string;
}

// 1. Kaul Festival at Kala Dana Beach, Mukah
export function KaulFestivalIllustration({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 800 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of Melanau Kaul Festival coastal gathering at Mukah beach with decorated boats and procession"
    >
      <defs>
        <linearGradient id="kaulSky" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
        <linearGradient id="kaulSea" x1="0" y1="200" x2="0" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="45%" stopColor="#0369a1" />
          <stop offset="85%" stopColor="#075985" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
        <linearGradient id="kaulSand" x1="0" y1="340" x2="0" y2="480" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="40%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="300" fill="url(#kaulSky)" />

      {/* Sun */}
      <circle cx="680" cy="110" r="55" fill="#fef08a" opacity="0.85" />
      <circle cx="680" cy="110" r="70" fill="#fef9c3" opacity="0.35" />

      {/* Distant Clouds */}
      <path d="M 120 90 Q 150 70 190 85 Q 230 75 270 95 Q 310 80 340 100 L 100 100 Z" fill="#ffffff" opacity="0.75" />
      <path d="M 440 120 Q 480 100 520 115 Q 560 105 600 125 L 430 125 Z" fill="#ffffff" opacity="0.65" />

      {/* Distant Coastline & Palms */}
      <path d="M 0 220 Q 180 215 360 218 Q 540 210 800 225 L 800 250 L 0 250 Z" fill="#14532d" opacity="0.7" />

      {/* Sea Waters */}
      <rect y="220" width="800" height="150" fill="url(#kaulSea)" />

      {/* Ocean Waves */}
      <path d="M 0 240 Q 80 232 160 240 T 320 240 T 480 240 T 640 240 T 800 240" stroke="#7dd3fc" strokeWidth="2.5" fill="none" opacity="0.6" />
      <path d="M 0 270 Q 100 260 200 270 T 400 270 T 600 270 T 800 270" stroke="#bae6fd" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M 0 305 Q 120 295 240 305 T 480 305 T 720 305 T 800 305" stroke="#e0f2fe" strokeWidth="4" fill="none" />
      {/* Surf foam line */}
      <path d="M 0 340 Q 100 332 200 340 T 400 338 T 600 342 T 800 338" stroke="#ffffff" strokeWidth="6" fill="none" strokeLinecap="round" />

      {/* Sandy Beach Shore */}
      <path d="M 0 342 Q 220 335 440 345 Q 660 338 800 345 L 800 480 L 0 480 Z" fill="url(#kaulSand)" />

      {/* Decorated Traditional Melanau Fishing Boats on Water */}
      {/* Boat 1 (Left Forefront) */}
      <g transform="translate(60, 240)">
        {/* Boat Hull */}
        <path d="M 10 75 Q 80 100 190 75 Q 215 70 230 50 Q 200 65 100 65 Q 15 65 0 52 Q 5 68 10 75 Z" fill="#854d0e" stroke="#451a03" strokeWidth="2" />
        <path d="M 20 62 L 180 62" stroke="#eab308" strokeWidth="3" />
        {/* Colorful Pennants & Flag Poles */}
        <line x1="40" y1="62" x2="40" y2="5" stroke="#1c1917" strokeWidth="2.5" />
        <polygon points="40,5 90,15 40,28" fill="#dc2626" />
        <line x1="120" y1="62" x2="120" y2="-15" stroke="#1c1917" strokeWidth="3" />
        <polygon points="120,-15 190,0 120,18" fill="#eab308" />
        <line x1="190" y1="62" x2="190" y2="10" stroke="#1c1917" strokeWidth="2.5" />
        <polygon points="190,10 235,20 190,32" fill="#2563eb" />
        {/* Bunting between masts */}
        <path d="M 40 28 Q 80 40 120 18 Q 155 35 190 32" stroke="#f8fafc" strokeWidth="1.5" fill="none" />
        {/* Boat Banner "KAUL MUKAH" */}
        <rect x="65" y="45" width="85" height="15" fill="#fef08a" stroke="#ca8a04" rx="2" />
        <text x="107" y="56" fill="#78350f" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">KAUL MUKAH</text>
        {/* Crew Figures */}
        <circle cx="75" cy="40" r="5" fill="#fca5a5" />
        <circle cx="105" cy="38" r="5" fill="#fca5a5" />
        <circle cx="145" cy="40" r="5" fill="#fca5a5" />
      </g>

      {/* Boat 2 (Midground Right) */}
      <g transform="translate(320, 220)">
        <path d="M 10 60 Q 65 80 150 60 Q 170 55 180 42 Q 155 52 80 52 Q 15 52 0 44 Q 5 55 10 60 Z" fill="#9a3412" stroke="#431407" strokeWidth="1.5" />
        <line x1="90" y1="52" x2="90" y2="0" stroke="#1c1917" strokeWidth="2" />
        <polygon points="90,0 145,12 90,24" fill="#16a34a" />
        <line x1="45" y1="52" x2="45" y2="15" stroke="#1c1917" strokeWidth="2" />
        <polygon points="45,15 80,23 45,32" fill="#eab308" />
        {/* Crew */}
        <circle cx="65" cy="35" r="4" fill="#fca5a5" />
        <circle cx="115" cy="35" r="4" fill="#fca5a5" />
      </g>

      {/* Boat 3 (Distant Left) */}
      <g transform="translate(560, 205)">
        <path d="M 10 45 Q 45 60 110 45 Q 125 40 135 32 Q 115 39 60 39 Q 10 39 0 33 Z" fill="#78350f" />
        <line x1="65" y1="39" x2="65" y2="5" stroke="#1c1917" strokeWidth="1.5" />
        <polygon points="65,5 105,14 65,23" fill="#ea580c" />
      </g>

      {/* Beach Shorelines Crowds & Festive Flags */}
      {/* Tall Festival Banners along beach */}
      <g transform="translate(480, 280)">
        <line x1="0" y1="120" x2="0" y2="0" stroke="#52525b" strokeWidth="3" />
        <path d="M 0 0 C 30 15 30 45 0 65 L 0 0 Z" fill="#eab308" />
        <line x1="50" y1="125" x2="50" y2="10" stroke="#52525b" strokeWidth="3" />
        <path d="M 50 10 C 80 25 80 55 50 75 L 50 10 Z" fill="#dc2626" />
        <line x1="100" y1="130" x2="100" y2="20" stroke="#52525b" strokeWidth="3" />
        <path d="M 100 20 C 130 35 130 65 100 85 L 100 20 Z" fill="#2563eb" />
        <line x1="150" y1="135" x2="150" y2="30" stroke="#52525b" strokeWidth="3" />
        <path d="M 150 30 C 180 45 180 75 150 95 L 150 30 Z" fill="#16a34a" />
      </g>

      {/* Seaside Community Crowd Figures */}
      <g transform="translate(180, 360)">
        {[...Array(18)].map((_, i) => {
          const x = i * 32 + (i % 3) * 6;
          const y = (i % 2) * 12;
          const colors = ['#dc2626', '#eab308', '#2563eb', '#16a34a', '#9333ea', '#ea580c', '#0d9488'];
          const color = colors[i % colors.length];
          return (
            <g key={i} transform={`translate(${x}, ${y})`}>
              <circle cx="8" cy="8" r="4.5" fill="#fca5a5" />
              {/* Headband / Serukup */}
              <rect x="4" y="4" width="8" height="2" fill="#ca8a04" rx="0.5" />
              {/* Body */}
              <path d="M 3 13 L 13 13 L 11 36 L 5 36 Z" fill={color} />
              {/* Legs */}
              <line x1="6" y1="36" x2="6" y2="48" stroke="#1c1917" strokeWidth="2.5" />
              <line x1="10" y1="36" x2="10" y2="48" stroke="#1c1917" strokeWidth="2.5" />
            </g>
          );
        })}
      </g>

      {/* Elders Carrying Ceremonial Serahang Basket in Procession */}
      <g transform="translate(20, 340)">
        {/* Four bearer poles */}
        <line x1="30" y1="80" x2="150" y2="80" stroke="#78350f" strokeWidth="4" />
        {/* Miniature Serahang on Pallet */}
        <polygon points="90,20 70,78 110,78" fill="#eab308" stroke="#a16207" strokeWidth="1.5" />
        <path d="M 90 20 Q 75 5 60 15" stroke="#15803d" strokeWidth="2" fill="none" />
        <path d="M 90 20 Q 105 5 120 15" stroke="#15803d" strokeWidth="2" fill="none" />
        {/* Bearer Men */}
        <g transform="translate(35, 45)">
          <circle cx="8" cy="8" r="4.5" fill="#fca5a5" />
          <path d="M 4 13 L 12 13 L 10 38 L 6 38 Z" fill="#1c1917" />
          <line x1="6" y1="38" x2="6" y2="52" stroke="#1c1917" strokeWidth="2" />
          <line x1="10" y1="38" x2="10" y2="52" stroke="#1c1917" strokeWidth="2" />
        </g>
        <g transform="translate(130, 45)">
          <circle cx="8" cy="8" r="4.5" fill="#fca5a5" />
          <path d="M 4 13 L 12 13 L 10 38 L 6 38 Z" fill="#1c1917" />
          <line x1="6" y1="38" x2="6" y2="52" stroke="#1c1917" strokeWidth="2" />
          <line x1="10" y1="38" x2="10" y2="52" stroke="#1c1917" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}

// 2. The Sacred Seraheng (Serahang) Offering Basket
export function SerahengIllustration({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 600 640"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of Melanau Seraheng sacred ceremonial offering basket with woven bamboo, young coconut leaves and yellow rice"
    >
      <defs>
        <linearGradient id="serahangBg" x1="0" y1="0" x2="0" y2="640" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#fef9c3" />
          <stop offset="100%" stopColor="#f3e8d2" />
        </linearGradient>
        <linearGradient id="bambooGold" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="35%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="palmGreen" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#65a30d" />
          <stop offset="50%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#4d7c0f" />
        </linearGradient>
      </defs>

      {/* Warm Background */}
      <rect width="600" height="640" rx="16" fill="url(#serahangBg)" />

      {/* Wooden Ceremonial Altar Stand / Pallet */}
      <rect x="150" y="560" width="300" height="24" rx="4" fill="#5c381d" stroke="#36200e" strokeWidth="2" />
      <rect x="175" y="584" width="250" height="18" rx="3" fill="#442813" />
      <circle cx="200" cy="572" r="4" fill="#a16207" />
      <circle cx="400" cy="572" r="4" fill="#a16207" />

      {/* ================= TIER 1: BASE WOVEN BASKET ================= */}
      {/* Lower Big Bamboo Basket */}
      <path
        d="M 120 560 L 160 410 L 440 410 L 480 560 Z"
        fill="url(#bambooGold)"
        stroke="#78350f"
        strokeWidth="3"
      />
      {/* Weave Diamond Grid Patterns */}
      {[...Array(6)].map((_, i) => (
        <path
          key={`w1-${i}`}
          d={`M ${130 + i * 50} 560 L ${190 + i * 40} 410`}
          stroke="#78350f"
          strokeWidth="1.5"
          opacity="0.65"
        />
      ))}
      {[...Array(6)].map((_, i) => (
        <path
          key={`w2-${i}`}
          d={`M ${470 - i * 50} 560 L ${410 - i * 40} 410`}
          stroke="#78350f"
          strokeWidth="1.5"
          opacity="0.65"
        />
      ))}

      {/* Decorative Woven Coconut Frond Skirt (Lidung) on Tier 1 */}
      <path
        d="M 110 560 Q 300 585 490 560 L 480 540 Q 300 560 120 540 Z"
        fill="url(#palmGreen)"
        stroke="#3f6212"
        strokeWidth="2"
      />
      {/* Leaf tabs hanging down */}
      {[...Array(14)].map((_, i) => (
        <path
          key={`leaf1-${i}`}
          d={`M ${130 + i * 26} 560 L ${143 + i * 26} 582 L ${156 + i * 26} 560`}
          fill="#84cc16"
          stroke="#4d7c0f"
          strokeWidth="1.5"
        />
      ))}

      {/* ================= TIER 2: MIDDLE BASKET & OFFERINGS ================= */}
      {/* Middle Basket Body */}
      <path
        d="M 180 410 L 210 270 L 390 270 L 420 410 Z"
        fill="url(#bambooGold)"
        stroke="#78350f"
        strokeWidth="3"
      />
      {/* Middle Weave Pattern */}
      {[...Array(5)].map((_, i) => (
        <path
          key={`w3-${i}`}
          d={`M ${190 + i * 45} 410 L ${230 + i * 35} 270`}
          stroke="#78350f"
          strokeWidth="1.5"
          opacity="0.6"
        />
      ))}

      {/* Offerings on Middle Tier Rim (Yellow Turmeric Rice Cones & Sago Tebaloi) */}
      {/* Pulut Kuning (Yellow Rice Cones in banana leaves) */}
      <polygon points="215,405 235,340 255,405" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
      <polygon points="250,405 270,335 290,405" fill="#eab308" stroke="#a16207" strokeWidth="2" />
      <polygon points="285,405 305,325 325,405" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
      <polygon points="320,405 340,335 360,405" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
      <polygon points="355,405 375,340 395,405" fill="#eab308" stroke="#a16207" strokeWidth="2" />

      {/* Crispy Square Tebaloi Sago Biscuits stacked */}
      <rect x="235" y="400" width="35" height="18" fill="#d97706" stroke="#92400e" strokeWidth="1.5" rx="2" transform="rotate(-8 245 405)" />
      <rect x="330" y="400" width="35" height="18" fill="#b45309" stroke="#78350f" strokeWidth="1.5" rx="2" transform="rotate(6 345 405)" />

      {/* Decorative Coconut Leaf Skirt on Tier 2 */}
      <path
        d="M 175 410 Q 300 428 425 410 L 420 395 Q 300 412 180 395 Z"
        fill="url(#palmGreen)"
        stroke="#3f6212"
        strokeWidth="1.5"
      />
      {[...Array(10)].map((_, i) => (
        <path
          key={`leaf2-${i}`}
          d={`M ${195 + i * 23} 410 L ${206 + i * 23} 428 L ${218 + i * 23} 410`}
          fill="#a3e635"
          stroke="#4d7c0f"
          strokeWidth="1.2"
        />
      ))}

      {/* ================= TIER 3: UPPER BASKET CROWN & FINIAL ================= */}
      <path
        d="M 230 270 L 255 160 L 345 160 L 370 270 Z"
        fill="url(#bambooGold)"
        stroke="#78350f"
        strokeWidth="2.5"
      />

      {/* Crown Offerings: Sirih Pinang, Consecrated Eggs */}
      {/* 3 Eggs */}
      <ellipse cx="270" cy="255" rx="10" ry="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" transform="rotate(-12 270 255)" />
      <ellipse cx="300" cy="250" rx="10" ry="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      <ellipse cx="330" cy="255" rx="10" ry="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" transform="rotate(12 330 255)" />

      {/* Sirih Pinang folded betel leaf packets */}
      <polygon points="280,268 290,248 300,268 290,278" fill="#15803d" stroke="#14532d" strokeWidth="1.5" />
      <polygon points="305,268 315,248 325,268 315,278" fill="#166534" stroke="#14532d" strokeWidth="1.5" />

      {/* Top Fan of Palm Fronds (Crest / Mahkota) */}
      <path d="M 300 160 C 220 110 160 140 120 180 C 180 180 240 180 300 170" fill="#65a30d" stroke="#3f6212" strokeWidth="2" />
      <path d="M 300 160 C 380 110 440 140 480 180 C 420 180 360 180 300 170" fill="#65a30d" stroke="#3f6212" strokeWidth="2" />
      <path d="M 300 160 C 240 60 210 90 200 130 C 240 140 270 150 300 165" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
      <path d="M 300 160 C 360 60 390 90 400 130 C 360 140 330 150 300 165" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
      {/* Central Spire */}
      <path d="M 300 160 C 290 60 295 20 300 10 C 305 20 310 60 300 160" fill="#a3e635" stroke="#4d7c0f" strokeWidth="2" />
      <line x1="300" y1="160" x2="300" y2="10" stroke="#365314" strokeWidth="2.5" />

      {/* ================= CEREMONIAL YELLOW SILK RIBBONS & BOWS ================= */}
      {/* Silk Ribbon Banners Streaming Down */}
      <path d="M 300 160 C 380 220 440 340 470 550" stroke="#eab308" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M 300 160 C 220 220 160 340 130 550" stroke="#eab308" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M 300 270 C 370 320 420 420 445 560" stroke="#facc15" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 300 270 C 230 320 180 420 155 560" stroke="#facc15" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Golden Silk Bows at Tiers */}
      {/* Top Bow */}
      <g transform="translate(300, 160)">
        <ellipse cx="-16" cy="-8" rx="14" ry="8" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" transform="rotate(-25 -16 -8)" />
        <ellipse cx="16" cy="-8" rx="14" ry="8" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" transform="rotate(25 16 -8)" />
        <circle cx="0" cy="0" r="7" fill="#d97706" />
        <path d="M -4 5 L -10 25 L 0 20 L 10 25 L 4 5 Z" fill="#f59e0b" stroke="#b45309" />
      </g>
      {/* Middle Bow */}
      <g transform="translate(300, 275)">
        <ellipse cx="-20" cy="-10" rx="18" ry="10" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" transform="rotate(-25 -20 -10)" />
        <ellipse cx="20" cy="-10" rx="18" ry="10" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" transform="rotate(25 20 -10)" />
        <circle cx="0" cy="0" r="9" fill="#d97706" />
        <path d="M -6 6 L -14 34 L 0 26 L 14 34 L 6 6 Z" fill="#f59e0b" stroke="#b45309" />
      </g>
      {/* Lower Big Bow */}
      <g transform="translate(300, 415)">
        <ellipse cx="-24" cy="-12" rx="22" ry="12" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" transform="rotate(-25 -24 -12)" />
        <ellipse cx="24" cy="-12" rx="22" ry="12" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" transform="rotate(25 24 -12)" />
        <circle cx="0" cy="0" r="11" fill="#d97706" />
        <path d="M -8 8 L -18 42 L 0 32 L 18 42 L 8 8 Z" fill="#f59e0b" stroke="#b45309" />
      </g>
    </svg>
  );
}

// 3. The Tibow (Tibau) Giant Wooden Swing
export function TibowIllustration({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 700 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of Melanau Tibow giant timber swing on ironwood scaffold with youth swinging"
    >
      <defs>
        <linearGradient id="tibowSky" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="60%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="700" height="440" fill="url(#tibowSky)" />

      {/* Distant Rainforest Greenery */}
      <path d="M 0 350 Q 150 320 300 340 T 600 330 T 700 350 L 700 450 L 0 450 Z" fill="#15803d" opacity="0.45" />
      <path d="M 0 375 Q 180 360 360 370 T 700 365 L 700 460 L 0 460 Z" fill="#166534" opacity="0.65" />

      {/* Festival Ground */}
      <rect y="440" width="700" height="60" fill="#785336" />
      <rect y="440" width="700" height="8" fill="#543822" />

      {/* High Launch Platform on Right */}
      <rect x="530" y="210" width="80" height="14" fill="#3e2716" rx="2" />
      {/* Platform stilts */}
      <line x1="545" y1="224" x2="545" y2="440" stroke="#3e2716" strokeWidth="6" />
      <line x1="595" y1="224" x2="595" y2="440" stroke="#3e2716" strokeWidth="6" />
      <line x1="545" y1="280" x2="595" y2="280" stroke="#5a3d24" strokeWidth="4" />
      <line x1="545" y1="350" x2="595" y2="350" stroke="#5a3d24" strokeWidth="4" />
      {/* Ladder Rungs */}
      {[...Array(6)].map((_, i) => (
        <line key={`ladder-${i}`} x1="570" y1={235 + i * 32} x2="570" y2={245 + i * 32} stroke="#785336" strokeWidth="3" />
      ))}

      {/* Jumper Waiting on High Platform */}
      <g transform="translate(560, 160)">
        <circle cx="10" cy="10" r="7" fill="#fca5a5" />
        <rect x="5" y="5" width="10" height="3" fill="#ca8a04" />
        <path d="M 6 17 L 14 17 L 12 48 L 8 48 Z" fill="#dc2626" />
        {/* Outstretched arms leaning forward */}
        <line x1="7" y1="22" x2="-8" y2="12" stroke="#fca5a5" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="10" y1="48" x2="8" y2="52" stroke="#1c1917" strokeWidth="3" />
        <line x1="12" y1="48" x2="14" y2="52" stroke="#1c1917" strokeWidth="3" />
      </g>

      {/* ================= GIANT PYRAMID TIMBER SCAFFOLD (BELIAN) ================= */}
      {/* Apex point: (330, 45) */}
      {/* Left Base: 110, 440; Right Base: 510, 440 */}
      {/* Main Support Poles */}
      <line x1="110" y1="440" x2="320" y2="45" stroke="#2c1a0e" strokeWidth="12" strokeLinecap="round" />
      <line x1="125" y1="440" x2="325" y2="45" stroke="#4a301a" strokeWidth="8" strokeLinecap="round" />
      <line x1="510" y1="440" x2="340" y2="45" stroke="#2c1a0e" strokeWidth="12" strokeLinecap="round" />
      <line x1="495" y1="440" x2="335" y2="45" stroke="#4a301a" strokeWidth="8" strokeLinecap="round" />

      {/* Cross Bracing Timbers */}
      <line x1="170" y1="330" x2="450" y2="330" stroke="#3e2716" strokeWidth="7" />
      <line x1="220" y1="230" x2="400" y2="230" stroke="#3e2716" strokeWidth="6" />
      <line x1="270" y1="130" x2="360" y2="130" stroke="#3e2716" strokeWidth="5" />

      {/* Diagonal Rattan Strut Lashings */}
      <line x1="170" y1="330" x2="400" y2="230" stroke="#a16207" strokeWidth="2.5" strokeDasharray="6 3" />
      <line x1="450" y1="330" x2="220" y2="230" stroke="#a16207" strokeWidth="2.5" strokeDasharray="6 3" />

      {/* Apex Cross Beam Head */}
      <rect x="305" y="32" width="50" height="20" rx="3" fill="#24140a" stroke="#4a301a" strokeWidth="2" />

      {/* ================= PENDULUM SWING IN MID-AIR ================= */}
      {/* Swung angle: swinging towards the high platform */}
      {/* Swing Pivot at (330, 45) -> Swing Perch at (460, 275) */}
      {/* Rattan Heavy Ropes */}
      <line x1="328" y1="48" x2="458" y2="272" stroke="#a16207" strokeWidth="5" strokeLinecap="round" />
      <line x1="332" y1="48" x2="462" y2="272" stroke="#ca8a04" strokeWidth="4" strokeLinecap="round" />

      {/* Wooden Perch Bar */}
      <rect x="425" y="270" width="70" height="12" rx="3" fill="#2c1a0e" transform="rotate(-15 460 276)" />

      {/* 3 Swinging Youth Riders */}
      {/* Rider 1 */}
      <g transform="translate(440, 215) rotate(-15 20 50)">
        <circle cx="15" cy="8" r="6" fill="#fca5a5" />
        <rect x="10" y="3" width="10" height="3" fill="#ca8a04" />
        <path d="M 10 14 L 20 14 L 18 48 L 12 48 Z" fill="#1c1917" />
        {/* Arm gripping rope */}
        <line x1="15" y1="18" x2="24" y2="5" stroke="#fca5a5" strokeWidth="3" />
        {/* Legs dangling */}
        <line x1="13" y1="48" x2="8" y2="62" stroke="#1c1917" strokeWidth="2.5" />
        <line x1="17" y1="48" x2="12" y2="64" stroke="#1c1917" strokeWidth="2.5" />
      </g>

      {/* Rider 2 (Hanging beneath rider 1) */}
      <g transform="translate(460, 230) rotate(-15 20 50)">
        <circle cx="15" cy="8" r="6" fill="#fca5a5" />
        <rect x="10" y="3" width="10" height="3" fill="#dc2626" />
        <path d="M 10 14 L 20 14 L 18 48 L 12 48 Z" fill="#eab308" />
        <line x1="15" y1="18" x2="22" y2="2" stroke="#fca5a5" strokeWidth="3" />
        <line x1="13" y1="48" x2="6" y2="65" stroke="#eab308" strokeWidth="2.5" />
        <line x1="17" y1="48" x2="10" y2="67" stroke="#eab308" strokeWidth="2.5" />
      </g>

      {/* Spectators on Ground */}
      {[...Array(14)].map((_, i) => (
        <g key={`crowd-${i}`} transform={`translate(${50 + i * 42}, 415)`}>
          <circle cx="8" cy="8" r="4.5" fill="#fca5a5" />
          <path d="M 4 13 L 12 13 L 10 32 L 6 32 Z" fill={['#334155', '#475569', '#64748b', '#1e293b'][i % 4]} />
          <line x1="6" y1="32" x2="6" y2="42" stroke="#0f172a" strokeWidth="2" />
          <line x1="10" y1="32" x2="10" y2="42" stroke="#0f172a" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}

// 4. Traditional Melanau Sago Processing
export function SagoProcessingIllustration({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 760 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of traditional Melanau sago processing extracting starch using river water and wooden troughs"
    >
      <defs>
        <linearGradient id="sagoRiver" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="sagoVat" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="50%" stopColor="#92400e" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>

      {/* Rainforest & Riverbank Background */}
      <rect width="760" height="480" fill="#f1f5f9" />
      {/* Foliage */}
      <path d="M 0 160 Q 180 120 360 145 T 760 130 L 760 260 L 0 260 Z" fill="#15803d" opacity="0.35" />
      <path d="M 0 180 Q 200 150 400 170 T 760 155 L 760 270 L 0 270 Z" fill="#166534" opacity="0.55" />

      {/* Sago Palm Trees (Rumbia) in Background */}
      <g transform="translate(60, 40)">
        <path d="M 40 180 L 45 40 L 55 40 L 60 180 Z" fill="#5c3d2e" />
        {/* Palm fronds */}
        <path d="M 50 40 Q 0 -10 -40 20 Q 10 20 50 40" fill="#4d7c0f" />
        <path d="M 50 40 Q 100 -10 140 20 Q 90 20 50 40" fill="#4d7c0f" />
        <path d="M 50 40 Q 50 -30 50 -60 Q 60 0 50 40" fill="#65a30d" />
      </g>
      <g transform="translate(650, 30)">
        <path d="M 30 190 L 35 50 L 45 50 L 50 190 Z" fill="#5c3d2e" />
        <path d="M 40 50 Q -10 0 -50 30 Q 0 30 40 50" fill="#4d7c0f" />
        <path d="M 40 50 Q 90 0 130 30 Q 80 30 40 50" fill="#4d7c0f" />
      </g>

      {/* Open Thatched Processing Shed Roof */}
      <polygon points="120,90 640,90 680,140 80,140" fill="#854d0e" stroke="#543822" strokeWidth="2" />
      {/* Roof poles */}
      <line x1="140" y1="140" x2="140" y2="400" stroke="#3e2716" strokeWidth="7" />
      <line x1="620" y1="140" x2="620" y2="400" stroke="#3e2716" strokeWidth="7" />

      {/* River Stream on right */}
      <path d="M 640 260 C 600 320 620 400 660 480 L 760 480 L 760 260 Z" fill="url(#sagoRiver)" />

      {/* Riverbank ground */}
      <path d="M 0 250 Q 300 240 600 255 L 660 480 L 0 480 Z" fill="#714e36" />
      <path d="M 0 250 Q 300 240 600 255 L 600 265 Q 300 250 0 260 Z" fill="#503522" />

      {/* Felled Sago Palm Logs on Left */}
      <g transform="translate(40, 330)">
        <ellipse cx="25" cy="40" rx="16" ry="24" fill="#a16207" stroke="#451a03" strokeWidth="2" />
        <path d="M 25 16 L 140 16 L 140 64 L 25 64 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
        <ellipse cx="140" cy="40" rx="16" ry="24" fill="#d97706" stroke="#451a03" strokeWidth="2" />
        {/* Inner white starch pith texture */}
        <ellipse cx="140" cy="40" rx="12" ry="18" fill="#fef3c7" />
      </g>

      {/* ================= TRADITIONAL SAGO PROCESSING TROUGH (JAK) ================= */}
      {/* Elevated Wooden Sluice Trough */}
      <g transform="translate(180, 190)">
        {/* Wooden Trough Legs */}
        <line x1="50" y1="140" x2="50" y2="240" stroke="#2c1a0e" strokeWidth="8" />
        <line x1="320" y1="140" x2="320" y2="240" stroke="#2c1a0e" strokeWidth="8" />

        {/* Slanted Upper Trough where pith is trampled */}
        <polygon points="20,100 360,110 350,150 10,138" fill="url(#sagoVat)" stroke="#2c1a0e" strokeWidth="2" />

        {/* Bamboo Water Conduit bringing water from stream */}
        <path d="M 440 20 L 220 90 L 220 105 L 440 35 Z" fill="#bfa15f" stroke="#785336" strokeWidth="2" />
        {/* Flowing Water stream pouring into trough */}
        <path d="M 220 102 C 215 115 210 130 205 145" stroke="#38bdf8" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Woven Rattan Sieve holding grated pith */}
        <ellipse cx="160" cy="115" rx="55" ry="16" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />

        {/* Worker 1: Trampling the Sago (Mengirik) */}
        <g transform="translate(130, 0)">
          {/* Head & Kerchief */}
          <circle cx="30" cy="30" r="10" fill="#fca5a5" />
          <path d="M 20 25 C 20 15 40 15 40 25 Z" fill="#dc2626" />
          {/* Traditional Sarong Body */}
          <path d="M 20 40 L 40 40 L 37 90 L 23 90 Z" fill="#9333ea" />
          {/* Arms holding stabilizing handrails */}
          <line x1="22" y1="45" x2="5" y2="40" stroke="#fca5a5" strokeWidth="4" />
          <line x1="38" y1="45" x2="55" y2="40" stroke="#fca5a5" strokeWidth="4" />
          {/* Feet trampling down on the wet pith */}
          <line x1="26" y1="90" x2="24" y2="115" stroke="#fca5a5" strokeWidth="4.5" />
          <line x1="34" y1="90" x2="36" y2="112" stroke="#fca5a5" strokeWidth="4.5" />
        </g>

        {/* Filtered Milky Sago Starch Liquid flowing into Lower Trough */}
        <path d="M 120 145 C 120 170 125 185 130 205" stroke="#f8fafc" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />

        {/* Lower Settling Vat (Pure White Lemantak Starch Settling) */}
        <rect x="60" y="200" width="280" height="45" rx="4" fill="#3e2716" stroke="#24140a" strokeWidth="2" />
        {/* White Starch Sediment */}
        <rect x="65" y="220" width="270" height="20" rx="2" fill="#ffffff" />
        {/* Clear water layer above sediment */}
        <rect x="65" y="205" width="270" height="15" rx="2" fill="#38bdf8" opacity="0.45" />

        {/* Worker 2: Scooping Pure Sago Flour into Woven Baskets */}
        <g transform="translate(350, 100)">
          <circle cx="20" cy="40" r="9" fill="#fca5a5" />
          <path d="M 12 49 L 28 49 L 26 95 L 14 95 Z" fill="#eab308" />
          {/* Arm holding wooden scoop */}
          <line x1="16" y1="60" x2="-10" y2="105" stroke="#fca5a5" strokeWidth="4" />
          {/* Wooden scoop */}
          <ellipse cx="-12" cy="110" rx="8" ry="5" fill="#a16207" />
          {/* Finished Sago Basket on ground */}
          <polygon points="30,140 15,110 45,110" fill="#ca8a04" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="30" cy="110" rx="15" ry="6" fill="#ffffff" />
        </g>
      </g>
    </svg>
  );
}

// 5. Rumah Tinggi Melanau (40-Foot Ironwood Tall House)
export function RumahTinggiIllustration({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 760 520"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of traditional Rumah Tinggi Melanau tall house elevated 40 feet on Belian ironwood stilts"
    >
      <defs>
        <linearGradient id="tallHouseSky" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="50%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3d2817" />
          <stop offset="100%" stopColor="#543822" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="760" height="420" fill="url(#tallHouseSky)" />

      {/* Distant Borneo Mountain & Morning Fog */}
      <path d="M 0 200 Q 200 130 400 180 T 760 170 L 760 360 L 0 360 Z" fill="#64748b" opacity="0.3" />
      <path d="M 0 240 Q 240 210 480 230 T 760 220 L 760 380 L 0 380 Z" fill="#059669" opacity="0.4" />

      {/* Lush Rainforest Foliage on Ground */}
      <rect y="400" width="760" height="120" fill="#3f2e1e" />
      <path d="M 0 395 Q 180 380 380 395 T 760 390 L 760 420 L 0 420 Z" fill="#14532d" />

      {/* Coconut and Sago Palms flanking the house */}
      <g transform="translate(60, 160)">
        <path d="M 30 240 L 35 60 L 45 60 L 50 240 Z" fill="#422c1b" />
        <path d="M 40 60 Q -20 10 -60 40 Q 0 40 40 60" fill="#15803d" />
        <path d="M 40 60 Q 100 10 140 40 Q 80 40 40 60" fill="#15803d" />
        <path d="M 40 60 Q 40 -20 40 -60 Q 50 0 40 60" fill="#16a34a" />
      </g>
      <g transform="translate(640, 180)">
        <path d="M 30 220 L 35 60 L 45 60 L 50 220 Z" fill="#422c1b" />
        <path d="M 40 60 Q -20 10 -60 40 Q 0 40 40 60" fill="#15803d" />
        <path d="M 40 60 Q 100 10 140 40 Q 80 40 40 60" fill="#15803d" />
      </g>

      {/* ================= MASSIVE MONOLITHIC BELIAN IRONWOOD STILTS (40 FEET) ================= */}
      {/* Stilts run from y=240 down to y=420 */}
      {[...Array(9)].map((_, i) => {
        const x = 190 + i * 46;
        return (
          <g key={`stilt-${i}`}>
            {/* Ironwood Pole */}
            <rect x={x} y="225" width="12" height="185" fill="#24140a" stroke="#170c06" strokeWidth="1.5" />
            {/* Grain highlights */}
            <line x1={x + 3} y1="225" x2={x + 3} y2="410" stroke="#4a2c16" strokeWidth="1" />
          </g>
        );
      })}

      {/* Heavy Cross Struts & Diagonal Wind Bracing between stilts */}
      <line x1="180" y1="285" x2="570" y2="285" stroke="#361f10" strokeWidth="7" />
      <line x1="180" y1="350" x2="570" y2="350" stroke="#361f10" strokeWidth="7" />
      {/* Diagonal Bracing */}
      <line x1="190" y1="410" x2="370" y2="285" stroke="#4a2c16" strokeWidth="4" />
      <line x1="370" y1="410" x2="190" y2="285" stroke="#4a2c16" strokeWidth="4" />
      <line x1="370" y1="410" x2="560" y2="285" stroke="#4a2c16" strokeWidth="4" />
      <line x1="560" y1="410" x2="370" y2="285" stroke="#4a2c16" strokeWidth="4" />

      {/* Traditional Single-Log Notched Access Ladder (Tangga Takik) */}
      <g transform="translate(490, 230)">
        <line x1="15" y1="0" x2="85" y2="180" stroke="#361f10" strokeWidth="8" strokeLinecap="round" />
        {[...Array(9)].map((_, i) => (
          <line
            key={`rung-${i}`}
            x1={15 + i * 7.5 - 6}
            y1={i * 20}
            x2={15 + i * 7.5 + 6}
            y2={i * 20}
            stroke="#fde047"
            strokeWidth="3"
          />
        ))}
      </g>

      {/* ================= MAIN LIVING FORTRESS STRUCTURE (ELEVATED) ================= */}
      {/* Floor Foundation Beam */}
      <rect x="160" y="215" width="430" height="15" rx="3" fill="#361f10" stroke="#1c0f08" strokeWidth="2" />

      {/* Carved Balcony / Veranda Railing */}
      <rect x="170" y="185" width="410" height="30" fill="#543822" stroke="#2c1a0e" strokeWidth="2" />
      {/* Balustrade Slats */}
      {[...Array(24)].map((_, i) => (
        <line key={`bal-${i}`} x1={180 + i * 17} y1="185" x2={180 + i * 17} y2="215" stroke="#2c1a0e" strokeWidth="2" />
      ))}

      {/* Fortress Wall Body (Carved Ironwood Planks) */}
      <rect x="210" y="115" width="330" height="75" fill="#422c1b" stroke="#2c1a0e" strokeWidth="2" />
      {/* Traditional Wooden Shutter Windows */}
      <rect x="240" y="130" width="28" height="35" fill="#1c0f08" stroke="#785336" strokeWidth="2" />
      <rect x="300" y="130" width="28" height="35" fill="#1c0f08" stroke="#785336" strokeWidth="2" />
      <rect x="360" y="130" width="28" height="35" fill="#1c0f08" stroke="#785336" strokeWidth="2" />
      <rect x="420" y="130" width="28" height="35" fill="#1c0f08" stroke="#785336" strokeWidth="2" />
      <rect x="480" y="130" width="28" height="35" fill="#1c0f08" stroke="#785336" strokeWidth="2" />

      {/* ================= TIERED THATCHED ROOF (ATAP NIPAH / RUMBIA) ================= */}
      {/* Lower Wide Thatched Eaves */}
      <polygon points="150,120 600,120 560,65 190,65" fill="url(#roofGrad)" stroke="#24140a" strokeWidth="3" />
      {/* Upper Steep Pitched Gable Roof */}
      <polygon points="180,70 570,70 375,10" fill="#2c1a0e" stroke="#170c06" strokeWidth="3" />

      {/* Carved Gable Horns / Finials at Apex (Lambang Rumah Adat) */}
      <path d="M 375 10 Q 360 -10 340 -15 Q 360 -5 375 10" fill="#d97706" stroke="#92400e" strokeWidth="2" />
      <path d="M 375 10 Q 390 -10 410 -15 Q 390 -5 375 10" fill="#d97706" stroke="#92400e" strokeWidth="2" />

      {/* Thatched Texture Lines on Roof */}
      {[...Array(8)].map((_, i) => (
        <line
          key={`thatch-${i}`}
          x1={200 + i * 44}
          y1="70"
          x2={170 + i * 50}
          y2="120"
          stroke="#24140a"
          strokeWidth="1.5"
          opacity="0.6"
        />
      ))}

      {/* Community Figures on High Balcony */}
      <g transform="translate(250, 160)">
        <circle cx="8" cy="8" r="4" fill="#fca5a5" />
        <rect x="4" y="12" width="8" height="14" fill="#dc2626" />
      </g>
      <g transform="translate(380, 160)">
        <circle cx="8" cy="8" r="4" fill="#fca5a5" />
        <rect x="4" y="12" width="8" height="14" fill="#eab308" />
      </g>
      <g transform="translate(440, 160)">
        <circle cx="8" cy="8" r="4" fill="#fca5a5" />
        <rect x="4" y="12" width="8" height="14" fill="#2563eb" />
      </g>
    </svg>
  );
}

// 6. Melanau Traditional Cuisine (Umai, Linut, and Tebaloi)
export function MelanauFoodIllustration({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 600 450"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of traditional Melanau dishes: fresh fish Umai, Linut sago starch, and Tebaloi crackers"
    >
      <defs>
        <linearGradient id="bananaLeaf" x1="0" y1="0" x2="600" y2="450" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4d7c0f" />
          <stop offset="50%" stopColor="#65a30d" />
          <stop offset="100%" stopColor="#3f6212" />
        </linearGradient>
      </defs>

      {/* Rustic Wooden Table */}
      <rect width="600" height="450" fill="#784d29" />
      {/* Wood grain lines */}
      <line x1="0" y1="90" x2="600" y2="90" stroke="#543316" strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="210" x2="600" y2="210" stroke="#543316" strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="330" x2="600" y2="330" stroke="#543316" strokeWidth="2" opacity="0.6" />

      {/* Fresh Green Banana Leaf Underlay */}
      <ellipse cx="300" cy="240" rx="270" ry="180" fill="url(#bananaLeaf)" />
      {/* Banana leaf vein lines */}
      <line x1="50" y1="240" x2="550" y2="240" stroke="#365314" strokeWidth="4" />
      {[...Array(12)].map((_, i) => (
        <g key={`vein-${i}`}>
          <line x1={100 + i * 36} y1="240" x2={130 + i * 36} y2="120" stroke="#365314" strokeWidth="1.5" opacity="0.5" />
          <line x1={100 + i * 36} y1="240" x2={130 + i * 36} y2="360" stroke="#365314" strokeWidth="1.5" opacity="0.5" />
        </g>
      ))}

      {/* ================= DISH 1: BOWL OF FRESH FISH UMAI (LEFT) ================= */}
      <g transform="translate(170, 240)">
        {/* Ceramic Bowl */}
        <ellipse cx="0" cy="20" rx="100" ry="40" fill="#44403c" stroke="#292524" strokeWidth="3" />
        <ellipse cx="0" cy="0" rx="95" ry="36" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        {/* Cured White/Pink Fish Slices */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const fx = Math.cos(angle) * 45;
          const fy = Math.sin(angle) * 16;
          return (
            <ellipse
              key={`fish-${i}`}
              cx={fx}
              cy={fy}
              rx="18"
              ry="9"
              fill="#fed7aa"
              stroke="#fb923c"
              strokeWidth="1.5"
              transform={`rotate(${i * 25} ${fx} ${fy})`}
            />
          );
        })}
        {/* Calamansi Lime Slices & Red Chilies */}
        <circle cx="-15" cy="-5" r="12" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
        <circle cx="-15" cy="-5" r="9" fill="#facc15" />
        <circle cx="25" cy="8" r="10" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
        <circle cx="25" cy="8" r="7" fill="#facc15" />
        {/* Sliced Red Bird's Eye Chilies */}
        <ellipse cx="-35" cy="8" rx="7" ry="3.5" fill="#dc2626" transform="rotate(-30 -35 8)" />
        <ellipse cx="10" cy="-14" rx="8" ry="4" fill="#dc2626" transform="rotate(40 10 -14)" />
        <ellipse cx="40" cy="-6" rx="7" ry="3.5" fill="#dc2626" transform="rotate(-20 40 -6)" />
        {/* Shallot rings */}
        <ellipse cx="-10" cy="14" rx="8" ry="4" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        <ellipse cx="15" cy="14" rx="7" ry="3.5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
        {/* Label */}
        <rect x="-35" y="42" width="70" height="16" fill="#1c1917" rx="3" />
        <text x="0" y="53" fill="#fde047" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">UMAI IKAN</text>
      </g>

      {/* ================= DISH 2: BOWL OF LINUT & CANDAS (RIGHT TOP) ================= */}
      <g transform="translate(420, 150)">
        <ellipse cx="0" cy="15" rx="70" ry="28" fill="#523924" stroke="#2c1a0e" strokeWidth="3" />
        <ellipse cx="0" cy="0" rx="66" ry="24" fill="#784d29" />
        {/* Translucent Gooey Linut (Sago Starch) */}
        <ellipse cx="0" cy="0" rx="55" ry="18" fill="#fef9c3" opacity="0.9" stroke="#fde047" strokeWidth="1.5" />
        <ellipse cx="-5" cy="-2" rx="35" ry="10" fill="#ffffff" opacity="0.6" />
        {/* Twin Bamboo Chopsticks (Candas) Twirling Linut */}
        <line x1="-30" y1="-50" x2="5" y2="5" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
        <line x1="-15" y1="-50" x2="15" y2="5" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
        {/* Twisted dollop of linut on chopsticks */}
        <ellipse cx="10" cy="5" rx="14" ry="9" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
        {/* Label */}
        <rect x="-25" y="32" width="50" height="15" fill="#1c1917" rx="3" />
        <text x="0" y="43" fill="#fde047" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">LINUT</text>
      </g>

      {/* ================= DISH 3: CRISPY TEBALOI SAGO BISCUITS (RIGHT BOTTOM) ================= */}
      <g transform="translate(420, 310)">
        {/* Banana leaf small saucer */}
        <ellipse cx="0" cy="15" rx="75" ry="30" fill="#365314" />
        {/* Stack of golden rectangular Tebaloi crackers */}
        <g transform="rotate(-10 0 0)">
          <rect x="-40" y="-15" width="45" height="28" rx="2" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
          {/* Grid indentations */}
          <line x1="-25" y1="-15" x2="-25" y2="13" stroke="#92400e" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="-10" y1="-15" x2="-10" y2="13" stroke="#92400e" strokeWidth="1" strokeDasharray="2 2" />
        </g>
        <g transform="rotate(8 10 0)">
          <rect x="-10" y="-18" width="48" height="30" rx="2" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <line x1="6" y1="-18" x2="6" y2="12" stroke="#b45309" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="22" y1="-18" x2="22" y2="12" stroke="#b45309" strokeWidth="1" strokeDasharray="2 2" />
        </g>
        {/* Label */}
        <rect x="-28" y="28" width="56" height="15" fill="#1c1917" rx="3" />
        <text x="0" y="39" fill="#fde047" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">TEBALOI</text>
      </g>
    </svg>
  );
}
