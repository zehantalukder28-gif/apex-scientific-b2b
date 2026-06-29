import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        <div className="w-full max-w-4xl mx-auto py-12 px-6">
          <div className="border-b border-slate-200 pb-5 mb-8">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Quote List</h1>
            <p className="mt-2 text-sm text-slate-500">Review all your submitted quotation requests.</p>
          </div>
          
          {(!context.orders || context.orders.length === 0) ? (
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-12 text-center">
              <p className="text-slate-500 font-medium text-lg">No quotation requests submitted yet. Your generated RFQs will appear here.</p>
              <Link to="/" className="inline-block mt-6 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors">
                Return to Catalog
              </Link>
            </div>
          ) : (
            <div className="w-full">
              {context.orders?.map((order) => (
                  <div key={order.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                          <div className="flex items-center gap-3 mb-1">
                              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                                  RFQ #{order.id.toString().slice(-6)}
                              </span>
                              <span className="text-slate-400 text-xs font-medium">
                                  {order.date} at {order.time}
                              </span>
                          </div>
                          <h4 className="text-slate-800 font-semibold text-base mb-2">
                              {order.institution || "Independent Researcher"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                              {order.items?.map((item, idx) => (
                                  <span key={idx} className="text-[11px] font-medium text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                                      {item.name || item.title} ({item.spec || "Standard Grade"})
                                  </span>
                              ))}
                          </div>
                      </div>
                      <div className="text-right border-t md:border-t-0 pt-4 md:pt-0 border-slate-100 flex flex-col justify-center">
                          <span className="text-xs text-slate-400 block font-medium">Total Line Items</span>
                          <span className="text-xl font-bold text-slate-900">{order.totalItems} Items</span>
                      </div>
                  </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    )
  }
  
  export default MyOrders