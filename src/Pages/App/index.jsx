import { useState, useCallback } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import ProductDetail from '../ProductDetail'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import AboutUs from '../AboutUs'
import Contact from '../Contact'
import BrandsAndClients from '../BrandsAndClients'
import CategoryPage from '../CategoryPage'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import ProtectedRoute from '../../Components/ProtectedRoute'
import Preloader from '../../Components/Preloader'
import CustomCursor from '../../Components/CustomCursor'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:categoryId', element: <CategoryPage /> },
    { 
      path: '/my-account', 
      element: (
        <ProtectedRoute>
          <MyAccount />
        </ProtectedRoute>
      ) 
    },
    { 
      path: '/my-order', 
      element: (
        <ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>
      ) 
    },
    { 
      path: '/my-orders', 
      element: (
        <ProtectedRoute>
          <MyOrders />
        </ProtectedRoute>
      ) 
    },
    { 
      path: '/my-orders/last', 
      element: (
        <ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>
      ) 
    },
    { 
      path: '/my-orders/:id', 
      element: (
        <ProtectedRoute>
          <MyOrder />
        </ProtectedRoute>
      ) 
    },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/contact', element: <Contact /> },
    { path: '/brands', element: <BrandsAndClients /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/product/:id', element: <ProductDetail /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

const App = () => {
  const [preloaderDone, setPreloaderDone] = useState(false)

  const handlePreloaderFinish = useCallback(() => {
    setPreloaderDone(true)
  }, [])

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        {/* Custom Cursor — always mounted */}
        <CustomCursor />

        {/* Preloader — shows on first load */}
        {!preloaderDone && <Preloader onFinish={handlePreloaderFinish} />}

        {/* Main App */}
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App