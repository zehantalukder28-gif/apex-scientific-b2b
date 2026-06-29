import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center">
        {children}
      </main>

      {/* ═══════════════════════════════════════════════
          Enterprise 4-Column Footer
          ═══════════════════════════════════════════════ */}
      <footer className="w-full bg-slate-950 text-slate-300 pt-20 pb-8 px-6 md:px-12 mt-0">
        <div className="max-w-[1600px] mx-auto">

          {/* Top section: Brand + Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/5">
            
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <svg width="32" height="32" viewBox="0 0 100 100" className="flex-shrink-0">
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#06b6d4" strokeWidth="8"/>
                  <path d="M50 25L25 80h12l5-15h16l5 15h12L50 25zm-6 35l6-18 6 18H44z" fill="#e2e8f0"/>
                </svg>
                <div>
                  <span className="text-sm font-extrabold tracking-tight text-white leading-none block">APEX SCIENTIFIC</span>
                  <span className="text-[8px] font-medium tracking-[0.2em] uppercase text-slate-500 leading-none mt-0.5 block">Global Laboratory Solutions</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
                Premier international distributor of precision instrumentation, high-purity chemicals, and certified laboratory supplies for B2B research environments.
              </p>
              <div className="flex items-center gap-3 text-[10px] font-mono tracking-widest uppercase text-slate-500">
                <span className="text-blue-400 font-bold">ISO 9001:2015</span>
                <span className="w-1 h-1 bg-slate-600 rounded-full" />
                <span>GLP Compliant</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/contact" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Calibration & Maintenance</Link></li>
                <li><Link to="/contact" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Facility Planning</Link></li>
                <li><Link to="/contact" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Custom Synthesis</Link></li>
                <li><Link to="/contact" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Bulk Procurement</Link></li>
              </ul>
            </div>

            {/* Technical Support */}
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">Technical Support</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link to="/about" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Safety Data Sheets (SDS)</Link></li>
                <li><Link to="/contact" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Warranty Claims</Link></li>
                <li><Link to="/about" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Training Programs</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><span className="text-slate-400">Global Headquarters</span></li>
                <li><Link to="/contact" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Sales Inquiry</Link></li>
                <li><Link to="/contact" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">Request a Quote</Link></li>
                <li>
                  <a href="mailto:info@apexscientific.com" className="cursor-interact glow-hover text-slate-400 hover:text-blue-400 transition-colors">
                    info@apexscientific.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-[11px] text-slate-600 tracking-wider">
              © {new Date().getFullYear()} Apex Scientific. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-[11px] text-slate-600 tracking-wider">
              <span className="hover:text-slate-400 transition-colors cursor-interact">Privacy Policy</span>
              <span className="hover:text-slate-400 transition-colors cursor-interact">Terms of Service</span>
              <span className="hover:text-slate-400 transition-colors cursor-interact">Cookie Settings</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-interact fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl z-40 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.447 4.805 1.448 5.416 0 9.825-4.381 9.829-9.761.002-2.605-1.012-5.054-2.86-6.903C16.518 2.089 14.07 1.071 11.5 1.071c-5.415 0-9.825 4.379-9.829 9.761-.001 1.77.499 3.498 1.445 5.038L2.11 21.53l5.87-1.532zM17.43 14.39c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.51-.16-.723.16-.214.32-.83 1.04-1.016 1.25-.187.21-.374.24-.694.08-.32-.16-1.353-.5-2.578-1.593-.952-.85-1.594-1.9-1.782-2.22-.187-.32-.02-.493.14-.653.143-.144.32-.373.48-.56.16-.188.213-.32.32-.533.107-.213.054-.4-.027-.56-.08-.16-.723-1.74-.99-2.388-.262-.63-.53-.545-.723-.555-.187-.01-.4-.01-.614-.01-.213 0-.56.08-.853.4-.294.32-1.12 1.1-1.12 2.678 0 1.578 1.147 3.1 1.307 3.32.16.213 2.258 3.448 5.47 4.837.763.33 1.36.527 1.824.674.767.244 1.467.21 2.02.127.618-.093 1.89-.773 2.157-1.48.267-.707.267-1.313.187-1.438-.08-.125-.294-.205-.614-.365z"/>
        </svg>
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-800">
          Chat with Procurement
        </span>
      </a>
    </div>
  )
}

export default Layout