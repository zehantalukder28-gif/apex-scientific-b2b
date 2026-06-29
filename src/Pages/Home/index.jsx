import { useContext, useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Scale, FileText, ShieldCheck, FlaskConical } from 'lucide-react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import Hero, { categories } from '../../Components/Hero'
import MagneticButton from '../../Components/MagneticButton'

/* eslint-disable react/prop-types */

// ═══════════════════════════════════════════════
// Card Skeleton
// ═══════════════════════════════════════════════
const CardSkeleton = () => (
  <div className="bg-white w-full h-80 rounded-sm animate-pulse">
    <div className="w-full h-3/4 bg-slate-100 rounded-sm" />
    <div className="p-4 flex flex-col gap-2">
      <div className="w-2/3 h-3 bg-slate-100 rounded" />
      <div className="w-1/3 h-3 bg-slate-100 rounded" />
    </div>
  </div>
)

// ═══════════════════════════════════════════════
// Product Card with glow hover & float
// ═══════════════════════════════════════════════
const ProductCard = ({ item, context, imgSrc, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
    transition={{
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      delay: index ? index * 0.05 : 0
    }}
    className="cursor-interact group flex flex-col bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-blue-200/50"
    onClick={() => {
      // Using window.location.href as a simple navigation since we are not passing navigate down
      window.location.href = `/product/${item.id}`;
    }}
  >
    {/* Image */}
    <div className="w-full aspect-[4/5] bg-slate-50 overflow-hidden flex items-center justify-center p-6 relative">
      <img
        src={imgSrc}
        alt={item.title}
        className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
      />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* CTA */}
      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
        <button
          onClick={(event) => context.addProductsToCart(event, item)}
          className="cursor-interact w-full bg-slate-900 text-white font-bold text-[10px] tracking-widest uppercase py-3.5 shadow-xl hover:bg-blue-600 transition-colors rounded-sm"
        >
          Add to Quote
        </button>
      </div>
    </div>

    {/* Info */}
    <div className="flex flex-col flex-1 p-5 border-t border-slate-50">
      <span className="text-[9px] font-mono tracking-widest uppercase text-slate-300 mb-2">
        CAT: APX-{String(item.id).replace(/[^0-9]/g, '').padStart(4, '0')}
      </span>
      <h3 className="text-slate-900 font-semibold text-sm leading-snug mb-2 transition-colors group-hover:text-blue-700">
        {item.name || item.title}
      </h3>
      <div className="mt-auto pt-3 flex justify-between items-center">
        <span className="text-[10px] text-slate-400 tracking-wide">
          {item.category || 'Standard Specification'}
        </span>
        <span className="text-xs font-bold text-slate-900">
          {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : (item.price || 'Quote')}
        </span>
      </div>
    </div>
  </motion.div>
)

// ═══════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════
const getCategoryImage = (item) => {
  if (item.image) return item.image;
  const cat = String(item.category || '').toUpperCase();
  if (cat.includes('INSTRUMENT')) return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80';
  if (cat.includes('CHEMICAL')) return 'https://images.unsplash.com/photo-1617155093730-a8bf47be792d?w=800&q=80';
  if (cat.includes('GLASS')) return 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80';
  if (cat.includes('PORCELAIN')) return 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=800&q=80';
  if (cat.includes('ACCESSOR')) return 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80';
  return 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80';
};

const matchCategory = (itemCategory, targetCategory) => {
  if (!itemCategory || !targetCategory) return false;
  return itemCategory.toLowerCase().trim() === targetCategory.toLowerCase().trim();
};

// ═══════════════════════════════════════════════
// Staggered Text Reveal Component
// ═══════════════════════════════════════════════
const StaggeredText = ({ text, className, delay = 0 }) => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: delay }
    }
  };
  const child = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      style={{ filter: 'drop-shadow(0px 0px 20px rgba(255,255,255,0.8))' }}
    >
      {text.split(' ').map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.25em] pb-2 -mb-2 align-bottom">
          <motion.span variants={child} className="inline-block origin-bottom">{word}</motion.span>
        </span>
      ))}
    </motion.div>
  );
};

// ═══════════════════════════════════════════════
// 3D Interactive Scroll-Linked Orb
// ═══════════════════════════════════════════════
const ScrollLinkedOrb = () => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 800], [0, 500]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { damping: 30, stiffness: 80, mass: 1.5 };
  const smoothMouseX = useSpring(mouseX, springCfg);
  const smoothMouseY = useSpring(mouseY, springCfg);

  const rotateY = useTransform(smoothMouseX, [-1, 1], [-15, 15]);
  const rotateX = useTransform(smoothMouseY, [-1, 1], [15, -15]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMobile) return; // Save perf on mobile
      const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouseX.set(Math.max(-1, Math.min(1, nx)));
      mouseY.set(Math.max(-1, Math.min(1, ny)));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  return (
    <motion.div
      style={{ y: translateY }}
      className="absolute top-[35vh] md:top-[25vh] right-1/2 md:right-[15%] translate-x-1/2 md:translate-x-0 -translate-y-1/2 pointer-events-none z-0"
    >
      <div style={{ perspective: '1200px' }}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            scale: isMobile ? 0.5 : 1, // 50% scale on mobile
            transformStyle: 'preserve-3d',
          }}
          className="relative w-[420px] h-[420px] transition-transform duration-500"
        >
          {/* Primary glowing orb */}
          <motion.div
            animate={{ rotateZ: 360, scale: [1, 1.02, 1] }}
            transition={{
              rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute inset-0 rounded-full border-4 border-cyan-400/50"
            style={{
              boxShadow: '0 0 150px rgba(6,182,212,0.4), inset 0 0 80px rgba(59,130,246,0.3)',
              transformStyle: 'preserve-3d',
            }}
          />
          {/* Inner ring */}
          <motion.div
            animate={{ rotateZ: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-12 rounded-full border-2 border-cyan-400/20"
            style={{
              boxShadow: '0 0 40px rgba(6,182,212,0.15)',
              transformStyle: 'preserve-3d',
            }}
          />
          {/* Third ring */}
          <motion.div
            animate={{ rotateZ: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-28 rounded-full border border-blue-400/20"
          />
          {/* Center node */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-cyan-400/30 rounded-full"
              style={{ boxShadow: '0 0 30px rgba(6,182,212,0.4)' }} />
          </div>

          {/* Orbital nodes */}
          <motion.div
            animate={{ rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"
              style={{ boxShadow: '0 0 12px rgba(6,182,212,0.8)' }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full"
              style={{ boxShadow: '0 0 8px rgba(59,130,246,0.6)' }} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════
function Home() {
  const context = useContext(ShoppingCartContext)
  const [heroCategory, setHeroCategory] = useState('Scientific Instruments')

  const activeCategory = heroCategory;
  const activeCategoryObj = categories.find(c => c.key === activeCategory) || categories[0];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ═══ SCROLL PHYSICS ═══
  const { scrollY } = useScroll();

  // Y-axis translation
  const yMorph = useTransform(scrollY, [0, 600], [0, 350], { clamp: true });

  // Scale Morph
  const scaleMorph = useTransform(scrollY, [0, 600], [0.6, 1], { clamp: true });

  // Color Morph
  const colorMorph = useTransform(scrollY, [0, 600], ["#2563eb", "#0f172a"], { clamp: true });

  // Opacity Morph for the initial text
  const opacityStartMorph = useTransform(scrollY, [0, 600], [0.8, 1], { clamp: true });

  // Reveal Morph: Opacity goes 0 -> 1 for sub-text
  const revealOpacity = useTransform(scrollY, [450, 600], [0, 1], { clamp: true });

  // Do NOT use spring here to avoid snapping/rubber-banding. Direct frame-by-frame interpolation is smoother.
  // CRITICAL: Disable scroll-linked translation completely on mobile (< 768px)
  const smoothY = isMobile ? 0 : yMorph;
  const smoothScale = scaleMorph;

  const allItems = context.items || [];

  // Decide which category filter to apply
  const currentCategory = context.searchByCategory || activeCategory;

  let result = allItems;

  // Filter by category
  if (currentCategory !== 'All Products') {
    result = result.filter(item => matchCategory(item.category, currentCategory));
  }

  // Filter by search term
  if (context.searchByTitle) {
    const lowerSearch = context.searchByTitle.toLowerCase();
    result = result.filter(item =>
      item?.name?.toLowerCase().includes(lowerSearch) ||
      item?.title?.toLowerCase().includes(lowerSearch) ||
      item?.description?.toLowerCase().includes(lowerSearch) ||
      item?.spec?.toLowerCase().includes(lowerSearch)
    );
  }

  // Sort results
  if (context.sortBy) {
    result = [...result];
    if (context.sortBy === 'price-asc') {
      result.sort((a, b) => (typeof a.price === 'number' ? a.price : 0) - (typeof b.price === 'number' ? b.price : 0));
    } else if (context.sortBy === 'price-desc') {
      result.sort((a, b) => (typeof b.price === 'number' ? b.price : 0) - (typeof a.price === 'number' ? a.price : 0));
    } else if (context.sortBy === 'name-asc') {
      result.sort((a, b) => (a.name || a.title || '').localeCompare(b.name || b.title || ''));
    }
  }

  const displayProducts = result;

  const handleCategoryChange = useCallback((cat) => {
    setHeroCategory(cat);
    if (context.setSearchByCategory) {
      context.setSearchByCategory(null);
    }
  }, [context]);

  const renderView = () => {
    if (!context.items) {
      return Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />);
    }
    if (displayProducts.length > 0) {
      return displayProducts.map((item, idx) => (
        <ProductCard
          key={item.id}
          item={item}
          context={context}
          imgSrc={getCategoryImage(item)}
          index={idx}
        />
      ));
    }
    return (
      <div className="col-span-full text-center py-16 text-slate-400">
        <p className="text-lg font-medium mb-2">No products found</p>
        <p className="text-sm">Try adjusting your search or explore a different category.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">

      {/* ═══ SCIENTIFIC DOT GRID TEXTURE ═══ */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="hidden lg:block pointer-events-none fixed top-0 bottom-0 right-12 w-[1px] bg-slate-200/50 z-0" />
      <div className="pointer-events-none fixed top-20 left-0 right-0 h-[1px] bg-slate-200/50 z-40" />

      {/* Wrapper for Top Banner & Hero to contain the Orb */}
      <div className="relative w-full overflow-hidden bg-transparent">

        {/* ═══ 3D MOUSE-TRACKING ORBITING RING (Scroll-linked) ═══ */}
        <ScrollLinkedOrb />

        {/* ═══════════════════════════════════════════════
            TOP INTRO BANNER (Editorial)
            ═══════════════════════════════════════════════ */}
        <section className="relative z-20 w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 min-h-[auto] md:min-h-[55vh]">
          <div className="max-w-3xl flex flex-col items-start text-left">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">
              <span className="w-8 h-[1px] bg-blue-500 inline-block" />
              Global Scientific Solutions
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] text-slate-900 mb-6">
              Precision Instrumentation for Laboratory Environments.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed max-w-2xl mb-12">
              Engineered for analytical exactitude. We provide the structural integrity required from requisition to the laboratory bench.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('products-catalog');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-interact border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white text-[11px] font-bold tracking-widest uppercase px-12 py-4 rounded-sm transition-colors duration-300"
              >
                Browse Catalog
              </button>

              <Link
                to="/contact"
                className="cursor-interact border border-slate-300 bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-400 text-[11px] font-bold tracking-widest uppercase px-12 py-4 rounded-sm transition-colors duration-300"
              >
                Submit Custom RFQ
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ SCROLL-LINKED MORPHING CATEGORY HEADER ═══ */}
        <motion.div
          style={{ y: smoothY, zIndex: 10 }}
          className="md:absolute static md:left-12 lg:left-16 xl:left-[calc(50%-750px)] md:top-[60vh] pointer-events-none w-full max-w-lg lg:max-w-xl text-left mt-12 mb-6 md:mt-0 md:mb-0 px-6 md:px-0"
        >
          <motion.div style={{ scale: smoothScale, opacity: opacityStartMorph, transformOrigin: 'top left' }} className="md:min-h-[150px] md:mb-8">
            <motion.span
              style={{ color: colorMorph }}
              className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase mb-4"
            >
              <span className="w-8 h-[1px] bg-blue-600 inline-block" />
              {activeCategoryObj.id} — {activeCategoryObj.label}
            </motion.span>

            <motion.h1
              style={{ color: colorMorph }}
              className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.92] mb-6 whitespace-pre-line"
            >
              {activeCategoryObj.title}
            </motion.h1>

            <motion.div style={{ opacity: revealOpacity }} className="pointer-events-auto mt-4">
              <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed max-w-md mb-8">
                {activeCategoryObj.subtitle}
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('products-catalog');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-interact inline-flex items-center gap-3 bg-slate-900 text-white text-[11px] font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-blue-700 transition-colors duration-300 group"
              >
                View Catalog
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ═══ HERO CAROUSEL ═══ */}
        <Hero onCategoryChange={handleCategoryChange} />

      </div>

      <Layout>
        <div className="w-full">

          {/* ═══════════════════════════════════════════════
              CATEGORY RIBBON
              ═══════════════════════════════════════════════ */}
          <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-12 border-b border-slate-200 relative z-10 bg-white">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {[
                { label: 'Instrumentation', count: '142 Items' },
                { label: 'Reagents', count: '3,000+ Vials' },
                { label: 'Volumetric', count: '850 Pieces' },
                { label: 'Ceramics', count: '120 Styles' },
                { label: 'Essentials', count: '12,000+ SKU' }
              ].map((cat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-5 px-10 border border-slate-200 bg-slate-50/50 rounded-sm hover:border-blue-300 hover:shadow-sm transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('products-catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900 mb-1">{cat.label}</span>
                  <span className="text-xs text-slate-400 font-medium">{cat.count}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              FEATURED INSTRUMENTS — Product Grid
              ═══════════════════════════════════════════════ */}
          <section id="products-catalog" className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 bg-white relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 border-b border-slate-200 pb-6">
              <div>
                <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">
                  <span className="w-6 h-[1px] bg-cyan-500 inline-block" />
                  Featured Selection
                </span>
                <h2 className='font-extrabold text-4xl md:text-5xl tracking-tighter text-slate-900 leading-tight'>
                  {context.searchByCategory || 'All Products'}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <input
                  type="text"
                  placeholder='Search catalog...'
                  className='cursor-interact rounded-sm border border-slate-200 focus:border-cyan-500 bg-white w-full sm:w-64 p-3 text-sm focus:outline-none shadow-sm transition-colors'
                  value={context.searchByTitle || ''}
                  onChange={(e) => context.setSearchByTitle(e.target.value)}
                />
                <select
                  className="cursor-interact rounded-sm border border-slate-200 focus:border-cyan-500 bg-white w-full sm:w-auto p-3 text-sm focus:outline-none shadow-sm transition-colors text-slate-700 font-medium"
                  value={context.sortBy || ''}
                  onChange={(e) => context.setSortBy(e.target.value)}
                >
                  <option value="">Sort By: Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A - Z</option>
                </select>
              </div>
            </div>

            {/* Category Pills Filter */}
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {['All Products', 'Scientific Instruments', 'Laboratory Chemicals', 'Glassware', 'Porcelain Ware', 'Laboratory Accessories'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => context.setSearchByCategory(cat === 'All Products' ? null : cat)}
                  className={`px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm border transition-colors ${(context.searchByCategory === cat) || (!context.searchByCategory && cat === 'All Products')
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-16">
              <MagneticButton>
                <Link
                  to="/"
                  onClick={() => context.setSearchByCategory('')}
                  className="cursor-interact group inline-flex items-center gap-4 border border-slate-200 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-900 font-bold text-[11px] tracking-widest uppercase px-10 py-5 rounded-sm transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  Explore Full Catalog
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              ENTERPRISE EDITORIAL ABOUT SECTION
              ═══════════════════════════════════════════════ */}
          <section className="w-full bg-white relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">

              {/* Left Column: Brand Narrative */}
              <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest text-blue-600 uppercase mb-3">
                  Corporate Profile
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
                  Supply Chain Integrity for Global Laboratories.
                </h2>
                <div className="text-slate-600 space-y-6 text-sm md:text-base leading-relaxed">
                  <p>
                    Apex Scientific operates as a premier distributor of high-purity laboratory chemicals, precision analytical instrumentation, and certified diagnostic glassware. We support critical research and industrial applications by ensuring absolute structural and chemical integrity from requisition to the laboratory bench.
                  </p>
                  <p>
                    Our operational framework is engineered to eliminate supply chain variances. Through stringent quality control protocols and a robust international logistics network, we maintain precise calibration tolerances and uncompromised purity standards for the world's most demanding clinical and manufacturing environments.
                  </p>
                </div>
              </div>

              {/* Right Column: Infrastructure Visual */}
              <div className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80"
                  alt="Precision Distribution Facility"
                  className="w-full h-auto object-cover rounded-none grayscale-[20%] contrast-[105%]"
                />
              </div>

              {/* Data Ribbon (Full Width below columns) */}
              <div className="lg:col-span-2 border-t border-b border-slate-200 py-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-8 last:border-0 last:pr-0 last:pb-0">
                  <span className="text-3xl font-extrabold tracking-tighter text-slate-900">ISO 9001:2015 Certified</span>
                  <span className="text-xs font-mono tracking-wide text-slate-500 uppercase mt-1">Global Quality &amp; Supply Compliance</span>
                </div>

                <div className="flex flex-col border-b md:border-b-0 md:border-r border-slate-200 pb-8 md:pb-0 md:pr-8 last:border-0 last:pr-0 last:pb-0">
                  <span className="text-3xl font-extrabold tracking-tighter text-slate-900">&lt; 0.001% Variance</span>
                  <span className="text-xs font-mono tracking-wide text-slate-500 uppercase mt-1">Precision Calibration Tolerance</span>
                </div>

                <div className="flex flex-col pb-8 md:pb-0 last:pb-0">
                  <span className="text-3xl font-extrabold tracking-tighter text-slate-900">45+ Regions</span>
                  <span className="text-xs font-mono tracking-wide text-slate-500 uppercase mt-1">International Logistics Network</span>
                </div>

              </div>

            </div>
          </section>

          {/* ═══════════════════════════════════════════════
              SERVICE GRID
              ═══════════════════════════════════════════════ */}
          <section className="w-full bg-white border-t border-slate-200 relative z-10 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
              {[
                { icon: Scale, title: 'Precision Calibration', desc: 'NIST-traceable calibration for all weighing and volumetric apparatus.' },
                { icon: FileText, title: 'Safety Documentation', desc: 'Comprehensive SDS and compliance sheets available instantly.' },
                { icon: ShieldCheck, title: 'Extended Warranty', desc: 'Uncompromised coverage on all electrical and mechanical instrumentation.' },
                { icon: FlaskConical, title: 'Custom Synthesis', desc: 'Bespoke reagent formulation for specialized clinical applications.' }
              ].map((svc, i) => (
                <div key={i} className="flex flex-col items-start p-8 bg-slate-50 border border-slate-200 rounded-sm hover:border-blue-300 transition-colors group">
                  <div className="w-12 h-12 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <svc.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3">{svc.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </Layout>
    </div>
  )
}

export default Home