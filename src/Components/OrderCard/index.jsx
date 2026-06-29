import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = props => {
    const { id, title, category, price, image, imageUrl, handleDelete } = props
    const finalImage = image || imageUrl || props.imageUrl;
    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon  onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
    }

    const imageMap = {
      "SCIENTIFIC INSTRUMENTS": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "LABORATORY CHEMICALS": "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?w=800&q=80",
      "GLASSWARE": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      "PORCELAIN WARE": "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=800&q=80",
      "LABORATORY ACCESSORIES": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "LABROTORY ACCESSORIES": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
    };

    const activeCategory = props?.category;

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover"
                    src={finalImage || imageMap[String(activeCategory).toUpperCase().trim()] || "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?w=400&q=80"}
                    alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className=" flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export default OrderCard