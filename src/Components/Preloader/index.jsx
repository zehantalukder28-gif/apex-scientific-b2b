import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* eslint-disable react/prop-types */
const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('filling');

  useEffect(() => {
    // Smoothly increment progress from 0 to 100 over ~2.5s
    const startTime = Date.now();
    const duration = 2500;
    let raf;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Ease-in-out cubic
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    const doneTimer = setTimeout(() => setPhase('done'), 2600);
    const exitTimer = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => onFinish?.(), 700);
    }, 3300);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(doneTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(90deg, #0f172a 1px, transparent 1px), linear-gradient(#0f172a 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Top progress bar */}
          <div className="absolute top-0 left-0 h-[2px] bg-slate-100 w-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* ═══ TRUE FILL TEXT EFFECT ═══ */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            
            {/* Text container with clip fill */}
            <div className="relative select-none">
              {/* Background layer: outlined text (always visible) */}
              <h1 
                className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none"
                style={{ 
                  fontFamily: "'Inter', sans-serif",
                  color: 'transparent',
                  WebkitTextStroke: '1.5px #e2e8f0',
                }}
              >
                APEX
              </h1>

              {/* Foreground layer: solid blue text, clipped by expanding div */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
              >
                <h1 
                  className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none whitespace-nowrap"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  APEX
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <motion.span 
              className="text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase text-slate-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Scientific Equipment
            </motion.span>
          </div>

          {/* Bottom info row */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-slate-300 uppercase">
              Initializing...
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
