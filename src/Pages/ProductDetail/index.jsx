import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react'
import MagneticButton from '../../Components/MagneticButton'

const ProductDetail = () => {
  const { id } = useParams()
  const context = useContext(ShoppingCartContext)
  const [product, setProduct] = useState(() => {
    return context.items ? context.items.find(item => item.id === id) : null;
  });

  useEffect(() => {
    window.scrollTo(0, 0)
    if (context.items) {
      const found = context.items.find(item => item.id === id)
      if (found) setProduct(found)
    }
  }, [id, context.items])

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-20">
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Loading Specification...</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="w-full bg-white min-h-screen pt-24 pb-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          {/* Back Navigation */}
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Return to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Massive Image */}
            <div className="w-full bg-slate-50 border border-slate-200 rounded-none p-12 aspect-square flex items-center justify-center relative overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-bold tracking-widest text-slate-900 uppercase">In Stock</span>
              </div>
            </div>

            {/* Right: Technical Specifications */}
            <div className="flex flex-col pt-4">
              <span className="text-xs font-mono tracking-widest text-blue-600 uppercase mb-4">
                {product.category} / {product.id}
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
                {product.name}
              </h1>

              <div className="text-3xl font-extrabold text-slate-900 mb-10">
                {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : (product.price || 'Quote')}
              </div>

              <div className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line mb-12 max-w-2xl">
                {product.description}
              </div>

              {/* Specifications Table */}
              <div className="mb-12 border-t border-slate-200">
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-900 my-6 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Technical Specifications
                </h3>
                <div className="flex flex-col">
                  {product.specifications?.map((spec, idx) => (
                    <div key={idx} className="grid grid-cols-2 py-4 border-b border-slate-100 last:border-0 text-sm">
                      <span className="font-mono text-slate-500">{spec.key}</span>
                      <span className="font-medium text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <MagneticButton>
                  <button 
                    onClick={(e) => context.addProductsToCart(e, product)}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-3"
                  >
                    Request Quote
                  </button>
                </MagneticButton>
                
                <button className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-3">
                  <CheckCircle2 className="w-4 h-4" />
                  Download Data Sheet
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
