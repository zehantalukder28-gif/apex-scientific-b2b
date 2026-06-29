import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.orders?.length - 1

  const currentOrder = context.orders?.[index]
  const totalItems = currentOrder?.items?.length || 0

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {currentOrder?.items?.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
        <div className="border-t border-black mt-4 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Total Items:</span>
            <span>{totalItems}</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyOrder