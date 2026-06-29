import { useContext, useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { Menu, Search, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from '../Sidebar'

/* Inline SVG Logo — Geometric 'A' with molecular node */
const ApexLogo = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" className="flex-shrink-0">
    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#06b6d4" strokeWidth="8"/>
    <path d="M50 25L25 80h12l5-15h16l5 15h12L50 25zm-6 35l6-18 6 18H44z" fill="#0f172a"/>
  </svg>
);

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  
  const desktopSearchRef = useRef(null)
  const mobileSearchRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([])
      return
    }
    const query = searchQuery.toLowerCase()
    const results = (context.items || []).filter(item => 
      item.title?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query) ||
      String(item.id).includes(query)
    )
    setSearchResults(results)
  }, [searchQuery, context.items])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopSearchRef.current && desktopSearchRef.current.contains(e.target)) return;
      if (mobileSearchRef.current && mobileSearchRef.current.contains(e.target)) return;
      
      setSearchQuery('')
      setIsMobileSearchOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { label: 'Catalog', path: '/' },
    { label: 'Solutions', path: '/brands' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed z-50 top-0 w-full transition-all duration-500 ${
        scrolled || isMobileSearchOpen
          ? 'backdrop-blur-xl bg-white/90 border-b border-slate-200/80 shadow-sm' 
          : 'bg-white/0 border-b border-transparent'
      }`}>
        <div className="flex items-center justify-between py-4 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
          
          {/* Left: Logo + Brand */}
          <NavLink to='/' className='cursor-interact flex items-center gap-3' onClick={() => context.setSearchByCategory('')}>
            <ApexLogo />
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight text-slate-900 leading-none">APEX</span>
              <span className="text-[8px] font-medium tracking-[0.25em] uppercase text-slate-400 leading-none mt-0.5">SCIENTIFIC</span>
            </div>
          </NavLink>

          {/* Center: Nav Links */}
          <ul className='hidden lg:flex items-center justify-center gap-12 text-[11px] font-bold tracking-widest uppercase text-slate-700 list-none m-0 p-0'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `cursor-interact glow-hover py-2 border-b-2 transition-all duration-300 ${
                      isActive ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-blue-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className='flex items-center gap-5'>
            {/* Live Typeahead Search (Desktop) */}
            <div className="relative hidden sm:block" ref={desktopSearchRef}>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3" strokeWidth={2} />
                <input 
                  type="text"
                  placeholder="Search equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 w-64 bg-slate-100/50 hover:bg-slate-100 border border-transparent hover:border-slate-200 focus:border-blue-400 focus:bg-white rounded-sm text-[12px] font-medium text-slate-900 transition-all outline-none shadow-inner"
                />
              </div>
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {searchQuery.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 sm:right-0 sm:left-auto mt-2 w-full sm:w-[320px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-sm border border-slate-200 z-[100] max-h-96 overflow-y-auto"
                  >
                    {searchResults.length > 0 ? (
                      <div className="flex flex-col">
                        {searchResults.map(item => (
                          <div 
                            key={item.id}
                            onClick={() => {
                              setSearchQuery('')
                              context.openProductDetail()
                              context.setProductToShow(item)
                            }}
                            className="flex items-center gap-4 p-3 hover:bg-blue-50 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0 group"
                          >
                            <div className="w-10 h-10 bg-white border border-slate-200 rounded-sm flex-shrink-0 p-1 flex items-center justify-center shadow-sm">
                              <img src={item.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100'} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-slate-900 line-clamp-1">{item.title}</span>
                              <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase mt-0.5">{item.category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center flex flex-col items-center justify-center">
                        <Search className="w-6 h-6 text-slate-300 mb-3" strokeWidth={1.5} />
                        <p className="text-xs text-slate-500">No matching equipment found for <br/><strong className="text-slate-900">&quot;{searchQuery}&quot;</strong></p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Search Toggle */}
            <button 
              className="cursor-interact text-slate-600 hover:text-blue-600 transition-colors sm:hidden block mr-1"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={2} />
            </button>

            {context.isUserAuthenticated && (
              <button 
                className='cursor-interact relative flex items-center p-1 text-slate-600 hover:text-blue-600 transition-colors' 
                onClick={() => context.openCheckoutSideMenu()}
              >
                <ShoppingCart className='w-[18px] h-[18px]' strokeWidth={2} />
                {context.cartProducts.length > 0 && (
                  <span className='absolute -top-1 -right-1 flex justify-center items-center bg-blue-600 text-white rounded-full w-4 h-4 text-[9px] font-bold'>
                    {context.cartProducts.length}
                  </span>
                )}
              </button>
            )}
            
            <div className="hidden sm:block h-5 w-px bg-slate-200" />

            <NavLink 
              to='/sign-in' 
              className='cursor-interact hidden sm:flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-slate-700 glow-hover'
            >
              Client Portal <span className="text-base leading-none">&rarr;</span>
            </NavLink>

            <button 
              className="cursor-interact flex items-center p-1.5 rounded-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all ml-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className='h-6 w-6' strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Mobile Search Input Dropdown */}
        <AnimatePresence>
          {isMobileSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden w-full bg-white border-t border-slate-100 overflow-visible relative"
            >
              <div className="p-4" ref={mobileSearchRef}>
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3" strokeWidth={2} />
                  <input 
                    type="text"
                    placeholder="Search equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 pr-4 py-2.5 w-full bg-slate-100/50 hover:bg-slate-100 border border-slate-200 focus:border-blue-400 focus:bg-white rounded-sm text-[13px] font-medium text-slate-900 transition-all outline-none shadow-inner"
                    autoFocus
                  />
                </div>
                {/* Dropdown Menu Mobile */}
                {searchQuery.length > 0 && (
                  <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-slate-200 z-[100] max-h-80 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="flex flex-col">
                        {searchResults.map(item => (
                          <div 
                            key={item.id}
                            onClick={() => {
                              setSearchQuery('')
                              setIsMobileSearchOpen(false)
                              context.openProductDetail()
                              context.setProductToShow(item)
                            }}
                            className="flex items-center gap-4 p-4 hover:bg-blue-50 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0 group"
                          >
                            <div className="w-12 h-12 bg-white border border-slate-200 rounded-sm flex-shrink-0 p-1 flex items-center justify-center shadow-sm">
                              <img src={item.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100'} alt="" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-slate-900 line-clamp-1">{item.title}</span>
                              <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-0.5">{item.category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center flex flex-col items-center justify-center">
                        <Search className="w-8 h-8 text-slate-300 mb-3" strokeWidth={1.5} />
                        <p className="text-sm text-slate-500">No matching equipment found for <br/><strong className="text-slate-900">&quot;{searchQuery}&quot;</strong></p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Sidebar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  )
}

export default Navbar