import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

/* eslint-disable react/prop-types */

export const categories = [
  {
    id: '01',
    key: 'Scientific Instruments',
    label: 'INSTRUMENTATION',
    title: 'Scientific\nInstruments',
    subtitle: 'High-precision analytical devices engineered for demanding research environments and clinical diagnostics.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    accent: '#1d4ed8',
  },
  {
    id: '02',
    key: 'Laboratory Chemicals',
    label: 'REAGENTS',
    title: 'Laboratory\nChemicals',
    subtitle: 'Ultra-pure reagents and certified reference standards for critical analytical applications.',
    image: 'https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&w=800&q=80',
    accent: '#7c3aed',
  },
  {
    id: '03',
    key: 'Glassware',
    label: 'VOLUMETRIC',
    title: 'Precision\nGlassware',
    subtitle: 'Borosilicate vessels and volumetric apparatus designed for extreme thermal shock resistance.',
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80',
    accent: '#0891b2',
  },
  {
    id: '04',
    key: 'Porcelain Ware',
    label: 'CERAMICS',
    title: 'Porcelain\nWare',
    subtitle: 'Durable ceramic crucibles and evaporating dishes for high-temperature ashing and fusion protocols.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    accent: '#dc2626',
  },
  {
    id: '05',
    key: 'Laboratory Accessories',
    label: 'ESSENTIALS',
    title: 'Laboratory\nAccessories',
    subtitle: 'Essential consumables and precision tools that keep daily laboratory operations running flawlessly.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    accent: '#059669',
  },
];

// ═══════════════════════════════════════════════
// HERO COMPONENT
// ═══════════════════════════════════════════════
const Hero = ({ onCategoryChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((p) => (p + 1) % categories.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((p) => (p - 1 + categories.length) % categories.length);
  };

  useEffect(() => {
    onCategoryChange?.(categories[currentIndex].key);
  }, [currentIndex, onCategoryChange]);

  const current = categories[currentIndex];
  const nextCat = categories[(currentIndex + 1) % categories.length];

  const imageVariants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 0.7,
      rotateY: dir > 0 ? -50 : 50,
      x: dir > 0 ? 250 : -250,
    }),
    center: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 0.7,
      rotateY: dir > 0 ? 50 : -50,
      x: dir > 0 ? -250 : 250,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    }),
  };

  const textVariants = {
    enter: (dir) => ({
      opacity: 0,
      y: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir > 0 ? -40 : 40,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="relative w-full h-auto min-h-0 py-4 md:min-h-screen md:h-auto bg-transparent overflow-hidden flex flex-col md:pt-16 mt-6 md:mt-0">
      {/* ═══ Main Content ═══ */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-[1600px] mx-auto w-full px-6 md:px-16 pt-4 md:pt-32 pb-8">
        
        {/* Top: Title + Central 3D Image */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
          
          {/* Left: Typography Placeholder (Docking Station) */}
          <div className="hidden lg:block flex-1 w-full min-h-[400px] max-w-lg lg:max-w-xl text-center lg:text-left relative">
            {/* The animated morphing text from Home/index.jsx will dock here on desktop */}
          </div>

          {/* Right: Central 3D Product Image */}
          <div className="flex-1 flex items-center justify-center relative" style={{ perspective: '1200px' }}>
            {/* Accent glow behind product */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
                 style={{ 
                   background: `radial-gradient(circle, ${current.accent}15 0%, transparent 70%)`,
                   transition: 'background 0.6s ease'
                 }} 
            />
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id + '-img'}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={current.image}
                  alt={current.key}
                  className="w-full h-full object-cover rounded-sm shadow-2xl shadow-slate-900/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent rounded-sm" />
              </motion.div>
            </AnimatePresence>

            {/* Next category peek — 40% opacity, scaled down */}
            <div className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={nextCat.id + '-peek'}
                  initial={{ opacity: 0, x: 40, scale: 0.5 }}
                  animate={{ opacity: 0.4, x: 0, scale: 0.55 }}
                  exit={{ opacity: 0, x: 20, scale: 0.45 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="w-52 h-52 overflow-hidden rounded-sm shadow-lg"
                >
                  <img src={nextCat.image} alt="" className="w-full h-full object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom: Arrows + Category Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-slate-200/60">
          
          <div className="flex items-center gap-3">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.15, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-interact w-14 h-14 flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors rounded-sm shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.15, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-interact w-14 h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white transition-colors rounded-sm shadow-lg shadow-blue-600/25"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            <div className="ml-4 flex items-center gap-3 text-xs font-mono tracking-widest text-slate-400">
              <span className="font-bold text-slate-900">{current.id}</span>
              <div className="w-24 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-600 rounded-full" 
                  animate={{ width: `${((currentIndex + 1) / categories.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
              <span>05</span>
            </div>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => goTo(i)}
                whileHover={{ y: -2 }}
                className={`cursor-interact px-4 py-2.5 text-[10px] font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 rounded-sm border ${
                  i === currentIndex
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800'
                }`}
              >
                {cat.id} {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
