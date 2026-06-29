import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';

/* eslint-disable react/prop-types */

const Sidebar = ({ isOpen, setIsOpen }) => {
  const categories = [
    { name: 'Scientific Instruments', path: '/category/instruments' },
    { name: 'Laboratory Chemicals', path: '/category/chemicals' },
    { name: 'Glassware', path: '/category/glassware' },
    { name: 'Porcelain Ware', path: '/category/porcelain' },
    { name: 'Laboratory Accessories', path: '/category/accessories' },
  ];

  const pages = [
    { name: 'Catalog', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Brands & Projects', path: '/brands' },
    { name: 'Contact', path: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.25 },
    },
    exit: { opacity: 0, transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } },
    exit: { opacity: 0, x: -16 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar Panel — Dark Premium Glass */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.55 }}
            className="fixed top-0 left-0 h-full w-[88%] max-w-[440px] z-[61] flex flex-col overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.99) 100%)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              borderRight: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-7 border-b border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Navigation</span>
              <motion.button 
                onClick={() => setIsOpen(false)} 
                whileHover={{ rotate: 90 }} 
                transition={{ duration: 0.2 }}
                className="cursor-interact w-10 h-10 flex items-center justify-center rounded-sm bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-10 px-8">
              <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="flex flex-col gap-10">
                
                {/* Categories */}
                <div>
                  <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-slate-500 mb-5 block">
                    Categories
                  </span>
                  <div className="flex flex-col gap-1">
                    {categories.map((cat) => (
                      <motion.div key={cat.name} variants={itemVariants}>
                        <NavLink 
                          to={cat.path} 
                          onClick={() => setIsOpen(false)}
                          className="cursor-interact group flex items-center justify-between px-4 py-3 rounded-sm text-[15px] font-medium text-white/70 hover:text-blue-400 hover:bg-white/[0.03] transition-all duration-300"
                          style={{ transition: 'color 0.3s, text-shadow 0.3s, background 0.3s' }}
                          onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 12px rgba(59,130,246,0.6)'}
                          onMouseLeave={(e) => e.currentTarget.style.textShadow = 'none'}
                        >
                          <span className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
                            {cat.name}
                          </span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400" />
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pages */}
                <div>
                  <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-slate-500 mb-5 block">
                    Pages
                  </span>
                  <div className="flex flex-col gap-1">
                    {pages.map((link) => (
                      <motion.div key={link.name} variants={itemVariants}>
                        <NavLink 
                          to={link.path} 
                          onClick={() => setIsOpen(false)}
                          className={({ isActive }) => 
                            `cursor-interact group flex items-center justify-between px-4 py-3 rounded-sm text-[15px] font-medium transition-all duration-300 ${
                              isActive ? 'text-blue-400 bg-blue-400/5' : 'text-white/70 hover:text-blue-400 hover:bg-white/[0.03]'
                            }`
                          }
                          onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 12px rgba(59,130,246,0.6)'}
                          onMouseLeave={(e) => e.currentTarget.style.textShadow = 'none'}
                        >
                          <span className="group-hover:translate-x-2 transition-transform duration-300">
                            {link.name}
                          </span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400" />
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer CTA */}
            <div className="px-8 py-7 border-t border-white/5">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="cursor-interact w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] tracking-widest uppercase py-4 rounded-sm shadow-xl shadow-blue-600/20 transition-colors"
              >
                Client Portal <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-[9px] text-slate-600 text-center mt-4 tracking-wider uppercase">
                © {new Date().getFullYear()} Apex Scientific
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
