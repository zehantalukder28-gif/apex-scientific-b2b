import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
    }

    const renderButton = (id) => {
        const isInCart = context.cartProducts.some(product => product.id === id)

        if (isInCart) {
            return (
                <button 
                    className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-1 cursor-default shadow-sm"
                    onClick={(e) => e.stopPropagation()}>
                    <CheckIcon className='h-4 w-4'></CheckIcon> Added to Quote
                </button>
            )
        } else {
            return (
                <button 
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-colors shadow-sm"
                    onClick={(event) => addProductsToCart(event, data.data)}>
                    + Add to Quote
                </button>
            )
        }
    }

    const itemCategory = data.data?.category || "";
    let imgSrc = data.data?.image || "https://loremflickr.com/800/800/laboratory,equipment?lock=44";
    
    return(
        <div 
            className="bg-white cursor-pointer w-full max-w-[280px] mx-auto flex flex-col rounded-xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            onClick={() => showProduct(data.data)}>
            
            <Link to={`/product/${data.data.id}`} onClick={(e) => e.stopPropagation()} className="w-full h-48 overflow-hidden bg-slate-100 relative block">
                <span className="absolute top-3 left-3 bg-white/90 border border-slate-200 shadow-sm rounded text-slate-700 text-[10px] uppercase tracking-wider font-bold px-2 py-1 z-10">
                    {itemCategory || "Category"}
                </span>
                <img 
                    src={imgSrc} 
                    alt={data.data?.title || data.data?.name || "Product"} 
                    className="w-full h-full object-cover block opacity-100 visible hover:scale-105 transition-transform duration-500"
                />
            </Link>

            <div className="flex flex-col p-5 grow">
                <Link to={`/product/${data.data.id}`} onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-slate-900 font-medium text-base leading-tight mb-1 line-clamp-2 hover:text-blue-600 transition-colors">{data.data?.title || data.data?.name || "Product"}</h3>
                </Link>
                <p className="text-slate-500 text-xs mb-3 flex-grow font-mono">{data.data?.id || "ID"}</p>
                <div className="flex flex-col mt-auto">
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 w-fit px-2 py-1 rounded border border-slate-200">{data.data?.price || "Check with Procurement"}</span>
                    {renderButton(data.data.id)}
                </div>
            </div>
        </div>
    )
}

export default Card;
