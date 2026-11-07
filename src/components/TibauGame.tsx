import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Award, Info, Users, Shield } from 'lucide-react';
import { playGongSound, playSuccessChime, playSwingWhoosh } from '../utils/audio';
import { TibowIllustration } from './HeritageIllustrations';

interface TibauGameProps {
  onUnlockBadge: (badgeId: string) => void;
  unlockedBadges: string[];
}

export function TibauGame({ onUnlockBadge, unlockedBadges }: TibauGameProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [jumperCount, setJumperCount] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>('Press Start to swing the Tibau, then time your leap at the apex!');
  const [messageType, setMessageType] = useState<'info' | 'success' | 'miss'>('info');

  const animationFrameId = useRef<number | null>(null);
  const angleRef = useRef<number>(0);
  const angleVelocityRef = useRef<number>(0.035);
  const maxAngleRef = useRef<number>(0.65); // Radians (~37 degrees)
  const isGreenZoneRef = useRef<boolean>(false);
  const [isGreenZone, setIsGreenZone] = useState<boolean>(false);

  // Start game / swing
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setJumperCount(1);
    setMessage('Watch the swing rhythm! Leap when the swing enters the GREEN APEX ZONE!');
    setMessageType('info');
    playSwingWhoosh();
  };

  const resetGame = () => {
    setIsPlaying(false);
    setJumperCount(1);
    setScore(0);
    angleRef.current = 0;
    setMessage('Tibau reset. Press Start to try the courage challenge!');
    setMessageType('info');
  };

  // Attempt leap
  const handleLeap = () => {
    if (!isPlaying) {
      startGame();
      return;
    }

    if (isGreenZoneRef.current) {
      // Perfect leap!
      playSwingWhoosh();
      playGongSound();
      const newCount = Math.min(jumperCount + 1, 5);
      setJumperCount(newCount);
      const points = 100 * newCount;
      setScore((prev) => prev + points);
      setMessage(`Bravo! Youth #${newCount} successfully caught the Tibau in mid-air! (+${points} pts)`);
      setMessageType('success');

      // Increase swing amplitude slightly with extra weight & momentum
      maxAngleRef.current = Math.min(0.85, maxAngleRef.current + 0.04);

      if (newCount >= 4 && !unlockedBadges.includes('tibau-skyrider')) {
        playSuccessChime();
        onUnlockBadge('tibau-skyrider');
      }
    } else {
      // Missed timing
      setMessage('Missed the apex window! Wait until the swing reaches the peak of its arc.');
      setMessageType('miss');
    }
  };

  // Canvas render loop for realistic pendulum motion
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.03;
      // Pendulum harmonic motion
      const currentAngle = maxAngleRef.current * Math.sin(time * 1.8);
      angleRef.current = currentAngle;

      // Green zone is when angle is near positive peak (closest to the right platform: angle > 0.45)
      const inZone = currentAngle > 0.48;
      isGreenZoneRef.current = inZone;
      setIsGreenZone(inZone);

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;

      // Background sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      skyGrad.addColorStop(0, '#f8fafc');
      skyGrad.addColorStop(1, '#e2e8f0');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Ground
      ctx.fillStyle = '#856447';
      ctx.fillRect(0, height - 35, width, 35);
      ctx.fillStyle = '#5c432d';
      ctx.fillRect(0, height - 35, width, 4);

      // Timber Pyramid Scaffold (Tibau structure)
      const apexX = width * 0.48;
      const apexY = 40;
      const baseLeft = width * 0.15;
      const baseRight = width * 0.82;
      const groundY = height - 35;

      // Draw Main Timber Posts (Kayu Belian)
      ctx.strokeStyle = '#3e2716';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';

      // Left support pole
      ctx.beginPath();
      ctx.moveTo(baseLeft, groundY);
      ctx.lineTo(apexX - 10, apexY);
      ctx.stroke();

      // Right support pole
      ctx.beginPath();
      ctx.moveTo(baseRight, groundY);
      ctx.lineTo(apexX + 10, apexY);
      ctx.stroke();

      // Center cross struts
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#5a3d24';
      for (let i = 1; i <= 3; i++) {
        const t = i / 4;
        const ly = groundY - (groundY - apexY) * t;
        const lx = baseLeft + (apexX - 10 - baseLeft) * t;
        const rx = baseRight - (baseRight - (apexX + 10)) * t;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(rx, ly);
        ctx.stroke();
      }

      // High Launch Platform on Right (where jumpers stand)
      const platX = width * 0.76;
      const platY = height * 0.46;
      ctx.fillStyle = '#4a331c';
      ctx.fillRect(platX - 25, platY, 50, 10);
      // Platform ladder stilts
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#3e2716';
      ctx.beginPath();
      ctx.moveTo(platX - 20, platY + 10);
      ctx.lineTo(platX - 20, groundY);
      ctx.moveTo(platX + 20, platY + 10);
      ctx.lineTo(platX + 20, groundY);
      ctx.stroke();

      // Jumper waiting on the platform
      ctx.fillStyle = '#9a3412';
      ctx.beginPath();
      ctx.arc(platX, platY - 24, 7, 0, Math.PI * 2); // head
      ctx.fill();
      ctx.strokeStyle = '#9a3412';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(platX, platY - 17);
      ctx.lineTo(platX, platY); // body
      ctx.moveTo(platX, platY - 12);
      ctx.lineTo(platX - 8, platY - 20); // eager outstretched arm towards swing
      ctx.stroke();

      // "LEAP ZONE" visual indicator above the platform
      if (inZone) {
        ctx.fillStyle = 'rgba(34, 197, 94, 0.25)';
        ctx.beginPath();
        ctx.arc(platX - 20, platY - 20, 36, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#16a34a';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#15803d';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText('LEAP NOW!', platX - 52, platY - 60);
      }

      // Pendulum Rope & Wooden Swing Perch
      const ropeLength = height * 0.62;
      const swingX = apexX + ropeLength * Math.sin(currentAngle);
      const swingY = apexY + ropeLength * Math.cos(currentAngle);

      // Heavy Rattan Rope
      ctx.strokeStyle = '#a16207';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(apexX, apexY);
      ctx.lineTo(swingX, swingY);
      ctx.stroke();

      // Swing Perch Bar
      ctx.fillStyle = '#29180c';
      ctx.fillRect(swingX - 20, swingY, 40, 7);

      // Draw the Swinging Youth Crew
      for (let j = 0; j < jumperCount; j++) {
        const offset = (j - (jumperCount - 1) / 2) * 9;
        const riderX = swingX + offset;
        const riderY = swingY - 14;

        // Colors of traditional Melanau cloth (black, red, yellow)
        const clothColors = ['#1c1917', '#dc2626', '#eab308', '#ea580c', '#15803d'];
        const riderColor = clothColors[j % clothColors.length];

        // Head
        ctx.fillStyle = '#f87171';
        ctx.beginPath();
        ctx.arc(riderX, riderY - 10, 5, 0, Math.PI * 2);
        ctx.fill();

        // Traditional woven headgear (serukup)
        ctx.fillStyle = '#ca8a04';
        ctx.fillRect(riderX - 5, riderY - 16, 10, 3);

        // Body
        ctx.strokeStyle = riderColor;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(riderX, riderY - 5);
        ctx.lineTo(riderX, riderY + 12);
        ctx.stroke();

        // Hands gripping the rope
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(riderX, riderY - 2);
        ctx.lineTo(swingX, swingY - 15 - j * 4);
        ctx.stroke();
      }

      // Crowd spectators on ground
      for (let c = 0; c < 12; c++) {
        const cx = 30 + c * 42;
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.arc(cx, groundY - 16, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx, groundY - 12);
        ctx.lineTo(cx, groundY);
        ctx.stroke();
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [jumperCount]);

  return (
    <section id="tibau" className="py-16 border-b border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono mb-2">
            <span>3. Tibow (Tibau) Heritage</span>
            <span aria-hidden="true">·</span>
            <span>The Melanau Giant Swing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            3. The Tibow: Giant Wooden Swing & Youth Courage
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Erected on massive Borneo Ironwood trunks, the 12-meter Tibow (Tibau) is the ultimate test of timing and trust. Young people jump mid-flight to grab the swinging perch. Practice the rhythm below!
          </p>
        </div>

        {/* 2-Column Grid: Interactive Canvas Game & Documentary Context */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: The Interactive Mini-Game Canvas */}
          <div className="lg:col-span-7 bg-stone-50 p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col">
            
            {/* Top Scoreboard Strip */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs text-stone-600">
              <div className="flex items-center gap-4">
                <span>
                  Youth On Swing:{' '}
                  <strong className="text-stone-900 font-mono text-sm">{jumperCount}/5</strong>
                </span>
                <span>
                  Score:{' '}
                  <strong className="text-amber-900 font-mono text-sm">{score}</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className={`w-2 h-2 rounded-full ${isGreenZone ? 'bg-emerald-600' : 'bg-stone-300'}`} />
                <span>{isGreenZone ? 'APEX WINDOW OPEN' : 'PENDULUM SWINGING'}</span>
              </div>
            </div>

            {/* Canvas Viewport */}
            <div className="relative w-full aspect-[16/10] my-3 rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
              <canvas
                ref={canvasRef}
                width={640}
                height={400}
                className="w-full h-full object-cover select-none"
              />

              {/* Apex Timing Indicator Strip */}
              <div className="absolute bottom-2 inset-x-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-stone-200 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-mono text-[11px]">TIMING GAUGE:</span>
                <div className="flex-1 mx-3 h-2 bg-stone-200 rounded-full overflow-hidden flex">
                  <div className="w-2/3 bg-stone-300" />
                  <div
                    className={`w-1/3 transition-colors ${
                      isGreenZone ? 'bg-emerald-500 shadow-sm' : 'bg-stone-400'
                    }`}
                  />
                </div>
                <span className={`font-mono font-medium ${isGreenZone ? 'text-emerald-700' : 'text-stone-500'}`}>
                  {isGreenZone ? 'HIT NOW!' : 'WAIT FOR APEX'}
                </span>
              </div>
            </div>

            {/* Interactive Feedback Message Banner */}
            <div
              className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-colors ${
                messageType === 'success'
                  ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                  : messageType === 'miss'
                  ? 'bg-amber-50 text-amber-950 border-amber-200'
                  : 'bg-white text-stone-700 border-stone-200'
              }`}
            >
              {message}
            </div>

            {/* Controls Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-3 justify-between">
              <div className="flex items-center gap-2">
                {!isPlaying ? (
                  <button
                    onClick={startGame}
                    className="px-5 py-2.5 bg-amber-900 hover:bg-amber-800 text-white font-medium text-sm rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Play className="w-4 h-4" />
                    <span>Start Tibau Swing</span>
                  </button>
                ) : (
                  <button
                    onClick={handleLeap}
                    className={`px-6 py-2.5 text-white font-semibold text-sm rounded-lg transition-all cursor-pointer shadow-sm ${
                      isGreenZone
                        ? 'bg-emerald-700 hover:bg-emerald-600 scale-102 ring-2 ring-emerald-400'
                        : 'bg-stone-800 hover:bg-stone-700'
                    }`}
                  >
                    Leap onto Tibau!
                  </button>
                )}

                <button
                  onClick={resetGame}
                  className="p-2.5 bg-stone-200 hover:bg-stone-300 text-stone-700 rounded-lg transition-colors cursor-pointer"
                  title="Reset Game"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-stone-500">
                Tip: Leap when the gauge flashes green!
              </div>
            </div>

            {/* Badge Unlock Notification */}
            {unlockedBadges.includes('tibau-skyrider') && (
              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-800 shrink-0" />
                <div className="text-xs text-amber-950">
                  <strong className="font-semibold">Badge Earned: Tibau Skyrider!</strong> You synchronized 4 jumpers on the swing. Traditional leaders praised this unity as the mark of a protector.
                </div>
              </div>
            )}
          </div>

          {/* Right: Cultural & Engineering Insights with Authentic Photo */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Authentic SVG Illustration Card */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 group shadow-sm">
              <div className="relative aspect-[4/3] flex items-center justify-center">
                <TibowIllustration className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-amber-300">
                    3. Tibow (Tibau) · Mukah Festival Grounds
                  </div>
                  <div className="text-sm font-serif font-semibold">
                    The Living Tibow Swing in Real Life
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-xs text-stone-600 leading-relaxed">
                  Authentic Sarawak illustration: Dozens of community members gather beneath the towering structure to sing traditional refrains and catch riders as they dismount.
                </p>
              </div>
            </div>

            {/* Indigenous Engineering Breakdown */}
            <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold">
                <Shield className="w-4 h-4" />
                <span>Indigenous Structural Engineering</span>
              </div>
              
              <ul className="text-xs sm:text-sm text-stone-700 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-950 font-serif">1.</span>
                  <span><strong>Kayu Belian (Ironwood):</strong> Selected from dense Sarawak riverbanks; naturally immune to moisture, insect attack, and shock breakage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-950 font-serif">2.</span>
                  <span><strong>Rattan Bindings:</strong> Instead of rigid iron nails that snap under vibration, joints are lashed with braided jungle rattan that absorbs torsional stress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-950 font-serif">3.</span>
                  <span><strong>Pendulum Damping:</strong> The weight of multiple riders creates harmonic dampening, allowing safe descent as the energy transfers smoothly.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
