import { useContext, useState } from 'react'
import { useForm } from '@formspree/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
    context.setCount(filteredProducts.length)
  }

  const handleGenerateQuote = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckoutSideMenu()
  }

  return (
    <>
        <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
                context.isCheckoutSideMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => context.closeCheckoutSideMenu()}
        />
        <aside
            className={`flex flex-col fixed right-0 top-[76px] h-[calc(100vh-76px)] w-full sm:w-[360px] bg-white border-l border-slate-200 shadow-2xl z-20 transform transition-transform duration-300 ease-in-out ${context.isCheckoutSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-between items-center p-6 border-b border-slate-100'>
                <h2 className='font-medium text-xl text-slate-900'>My Quote Request</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-slate-500 hover:text-slate-800 cursor-pointer transition-colors'
                        onClick={() => context.closeCheckoutSideMenu()}>
                    </XMarkIcon>
                </div>
            </div>
            {/* Contenedor con scroll para productos */}
            <div className='flex-1 overflow-y-auto p-6 flex flex-col gap-4'>
                {context.cartProducts.map((product, index) => (
                    <OrderCard
                        key={`${product.id}-${index}`}
                        id={product.id}
                        title={product.title || product.name}
                        category={product.category}
                        price={product.price}
                        image={product.image}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
            {/* Footer fijo con total y botón */}
            <div className='p-6 border-t border-slate-100 bg-slate-50 mt-auto'>
                <div className='flex justify-between items-center mb-4 text-slate-900 font-semibold text-base'>
                    <span>Total Products:</span>
                    <span>{context.cartProducts.length}</span>
                </div>
                <button
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors shadow-sm text-center block'
                    onClick={handleGenerateQuote}>
                    Submit Quote Request
                </button>
            </div>
        </aside>
        
        {/* RFQ Success Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                <div className="bg-white rounded-xl border border-slate-200 shadow-2xl p-8 max-w-md w-full flex flex-col">
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-slate-900 font-bold text-xl">Compile Quotation Summary</h3>
                        <p className="text-slate-500 text-xs mt-1">Please provide your institutional credentials to submit this RFQ to our procurement desk.</p>
                    </div>

                    {/* Form Inputs Layout */}
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const newOrderRecord = {
                            id: Date.now(),
                            date: new Date().toLocaleDateString(),
                            time: new Date().toLocaleTimeString(),
                            institution: e.target.elements[1].value, // Grabs the Company input value safely
                            items: context.cartProducts,
                            totalItems: context.cartProducts.length
                        };
                        context.setOrders([...context.orders, newOrderRecord]);

                        // Secure submission simulation
                        setIsModalOpen(false);
                        context.setCartProducts([]); // Completely empty the current quote list state array back to []
                        context.setCount(0); // Reset global count state
                        context.closeCheckoutSideMenu(); // Close the sidebar
                        setShowToast(true);
                        setTimeout(() => setShowToast(false), 4000);
                    }} className="flex flex-col gap-4">
                        
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Full Name</label>
                            <input required type="text" placeholder="e.g., John Doe" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Institution / Company</label>
                            <input required type="text" placeholder="e.g., Global Research Laboratory" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800" />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Institutional Email</label>
                            <input required type="email" placeholder="e.g., procurement@institution.com" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800" />
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-4">
                            <button 
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 rounded-lg transition-colors text-sm border border-slate-200">
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm text-sm">
                                Submit Inquiry
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )}
        
        {/* Toast Notification */}
        {showToast && (
            <div className="fixed bottom-6 left-6 bg-slate-900 border border-slate-800 text-white px-5 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-slide-up max-w-sm">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-bold text-white">Inquiry Received</p>
                    <p className="text-slate-400 text-xs mt-0.5">Our procurement desk will contact your institution shortly.</p>
                </div>
            </div>
        )}
    </>
)
}

export default CheckoutSideMenu