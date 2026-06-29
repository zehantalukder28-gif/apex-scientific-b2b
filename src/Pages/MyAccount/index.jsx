import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'

function MyAccount() {
    const context = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const handleSignOut = () => {
        context.handleSignOut()
        navigate('/sign-in')
    }

    if (!context.isUserAuthenticated) {
        navigate('/sign-in')
        return null
    }

    if (context.isLoading) {
        return (
            <Layout>
                <div className="animate-pulse p-8">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <div className="w-full max-w-4xl mx-auto py-12 px-6">
                <div className="border-b border-slate-200 pb-5 mb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Account Dashboard</h1>
                        <p className="mt-2 text-sm text-slate-500">Manage your profile and review corporate order history.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column: Profile */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50">
                                <h2 className="text-lg font-semibold text-slate-800">Profile Details</h2>
                            </div>
                            <div className="p-6 space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                                    <p className="text-slate-900 font-medium">{context.account?.name || 'Pending Entry'}</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                                    <p className="text-slate-900 font-medium">{context.account?.email || 'Not provided'}</p>
                                </div>
                                <div className="pt-4 mt-4 border-t border-slate-100">
                                    <button
                                        onClick={handleSignOut}
                                        className="w-full bg-slate-900 text-white rounded-lg py-2.5 px-4 font-medium hover:bg-slate-800 transition-colors shadow-sm"
                                    >
                                        Sign Out Session
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Orders Summary */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full">
                            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-slate-800">Recent Quotations</h2>
                                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">{context.order.length} Orders</span>
                            </div>
                            <div className="p-6">
                                {context.order.length > 0 ? (
                                    <div className="space-y-4">
                                        {context.order.map((order, index) => (
                                            <div key={index} className="flex justify-between items-center p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                                                <div>
                                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Order Date: {order.date}</p>
                                                    <p className="text-sm font-medium text-slate-800">{order.totalProducts} items requested</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="inline-flex items-center text-sm font-semibold text-slate-900 bg-white border border-slate-200 px-3 py-1 rounded shadow-sm">
                                                        Quote Total: ${order.totalPrice}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-slate-500 font-medium">No quotation requests found.</p>
                                        <p className="text-slate-400 text-sm mt-1">Your order history will appear here.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MyAccount