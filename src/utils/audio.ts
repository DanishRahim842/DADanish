// Clean in-browser Web Audio synthesis for authentic festival ambience
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Traditional gong chime sound
export function playGongSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();

  // Resonant deep fundamental frequency
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(146.83, now); // D3
  osc1.frequency.exponentialRampToValueAtTime(144, now + 1.8);

  // Metallic harmonic overtone
  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(440, now); // A4
  osc2.frequency.exponentialRampToValueAtTime(220, now + 1.2);

  gain.gain.setValueAtTime(0.35, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(ctx.destination);

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + 2.3);
  osc2.stop(now + 2.3);
}

// Success chime
export function playSuccessChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const startTime = now + idx * 0.08;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.15, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.65);
  });
}

// Swing whoosh sound
export function playSwingWhoosh() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(110, now);
  osc.frequency.exponentialRampToValueAtTime(280, now + 0.15);
  osc.frequency.exponentialRampToValueAtTime(90, now + 0.4);

  gain.gain.setValueAtTime(0.01, now);
  gain.gain.linearRampToValueAtTime(0.2, now + 0.15);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.5);
}
