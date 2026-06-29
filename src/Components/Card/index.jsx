import { useContext } from 'react'
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
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

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

    // Explicitly align with the working badge data path
    const itemCategory = data.data?.category || data.data?.Category || data.data?.type || "";
    const cleanCategoryUpper = String(itemCategory).toUpperCase().trim();
    
    let imgSrc = "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&auto=format&fit=crop&q=80"; // Brand New Lab Accessories Asset
    if (cleanCategoryUpper.includes("INSTRUMENT")) imgSrc = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80";
    if (cleanCategoryUpper.includes("CHEMICAL")) imgSrc = "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?w=400&q=80";
    if (cleanCategoryUpper.includes("GLASS")) imgSrc = "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&q=80";
    if (cleanCategoryUpper.includes("PORCELAIN")) imgSrc = "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80";

    return(
        <div 
            className="bg-white cursor-pointer w-full max-w-[280px] mx-auto flex flex-col rounded-xl border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            onClick={() => showProduct(data.data)}>
            
            <div className="w-full h-48 overflow-hidden bg-slate-100 relative">
                <span className="absolute top-3 left-3 bg-white/90 border border-slate-200 shadow-sm rounded text-slate-700 text-[10px] uppercase tracking-wider font-bold px-2 py-1 z-10">
                    {itemCategory || "Category"}
                </span>
                <img 
                    src={imgSrc} 
                    alt="Laboratory Asset" 
                    className="w-full h-full object-cover block opacity-100 visible"
                />
            </div>

            <div className="flex flex-col p-5 grow">
                <h3 className="text-slate-900 font-medium text-base leading-tight mb-1 line-clamp-2">{data.data?.title || "Product"}</h3>
                <p className="text-slate-500 text-xs mb-3 flex-grow line-clamp-2">{data.data?.spec || "Standard Spec"}</p>
                <div className="flex flex-col mt-auto">
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 w-fit px-2 py-1 rounded border border-slate-200">{data.data?.price || "Check with Procurement"}</span>
                    {renderButton(data.data.id)}
                </div>
            </div>
        </div>
    )
}

export default Card;
