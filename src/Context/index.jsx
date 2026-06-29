import { createContext, useState, useEffect, useMemo } from 'react'
import { products as localProducts } from '../data/products.js'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Cart State
    const [count, setCount] = useState(0)
    const [cartProducts, setCartProducts] = useState([])
    const [orders, setOrders] = useState([])

    // UI State
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const [productToShow, setProductToShow] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // Products State
    const [items, setItems] = useState([...localProducts])
    const [filteredItems, setFilteredItems] = useState(null)
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [searchByCategory, setSearchByCategory] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    // User State
    const [account, setAccount] = useState(null)
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

    // UI Actions
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Initialize user session
    useEffect(() => {
        const loadUserSession = () => {
            const savedAccount = localStorage.getItem('account')
            const savedIsAuth = localStorage.getItem('isUserAuthenticated')
            const savedOrders = localStorage.getItem('orders')
            
            if (savedAccount && savedIsAuth === 'true') {
                setAccount(JSON.parse(savedAccount))
                setIsUserAuthenticated(true)
            }
            
            if (savedOrders) {
                setOrders(JSON.parse(savedOrders))
            }

            setIsLoading(false)
        }

        loadUserSession()
    }, [])

    // Save orders to localStorage when it changes
    useEffect(() => {
        if (orders.length > 0) {
            localStorage.setItem('orders', JSON.stringify(orders))
        }
    }, [orders])

    // Authentication methods
    const handleSignIn = (email, password) => {
        const savedAccount = localStorage.getItem('account')
        if (savedAccount) {
            const acc = JSON.parse(savedAccount)
            if (acc.email === email && acc.password === password) {
                setAccount(acc)
                setIsUserAuthenticated(true)
                localStorage.setItem('isUserAuthenticated', 'true')

                // Recover pending cart if exists
                const pendingCart = localStorage.getItem('pendingCart')
                if (pendingCart) {
                    setCartProducts(JSON.parse(pendingCart))
                    localStorage.removeItem('pendingCart')
                }
                
                return true
            }
        }
        return false
    }

    const handleSignUp = (email, password, name) => {
        const newAccount = { email, password, name }
        setAccount(newAccount)
        setIsUserAuthenticated(true)
        localStorage.setItem('account', JSON.stringify(newAccount))
        localStorage.setItem('isUserAuthenticated', 'true')
    }

    const handleSignOut = () => {
        // Clear user session
        setIsUserAuthenticated(false)
        setAccount(null)
        
        // Clear cart and orders
        setCartProducts([])
        setCount(0)
        
        // Clear localStorage
        localStorage.setItem('isUserAuthenticated', 'false')
        localStorage.removeItem('pendingCart')
        
        // Close any open modals
        closeProductDetail()
        closeCheckoutSideMenu()
    }

    // API Fetch logic removed to ensure zero retail products load

    // Memoized filter functions
    const filteredItemsByTitle = useMemo(() => {
        if (!searchByTitle || !items) return items
        const lowerSearch = searchByTitle.toLowerCase()
        return items.filter(item => 
            item?.name?.toLowerCase().includes(lowerSearch) ||
            item?.title?.toLowerCase().includes(lowerSearch) ||
            item?.description?.toLowerCase().includes(lowerSearch)
        )
    }, [items, searchByTitle])

    const filteredItemsByCategory = useMemo(() => {
        if (!searchByCategory || !items) return filteredItemsByTitle
        if (searchByCategory === 'All Products') return filteredItemsByTitle
        return filteredItemsByTitle?.filter(item => 
            item?.category === searchByCategory
        )
    }, [filteredItemsByTitle, searchByCategory])

    const sortedAndFilteredItems = useMemo(() => {
        if (!sortBy || !filteredItemsByCategory) return filteredItemsByCategory
        const sorted = [...filteredItemsByCategory]
        if (sortBy === 'price-asc') {
            sorted.sort((a, b) => (typeof a.price === 'number' ? a.price : 0) - (typeof b.price === 'number' ? b.price : 0))
        } else if (sortBy === 'price-desc') {
            sorted.sort((a, b) => (typeof b.price === 'number' ? b.price : 0) - (typeof a.price === 'number' ? a.price : 0))
        } else if (sortBy === 'name-asc') {
            sorted.sort((a, b) => (a.name || a.title || '').localeCompare(b.name || b.title || ''))
        }
        return sorted
    }, [filteredItemsByCategory, sortBy])

    // Update filtered items when filters change
    useEffect(() => {
        setFilteredItems(sortedAndFilteredItems)
    }, [sortedAndFilteredItems])

    // Cart methods
    const addToCart = (product) => {
        setCartProducts(prev => [...prev, product])
        setCount(prev => prev + 1)
        openCheckoutSideMenu()
    }

    // This function adds the product to the quote list
    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        setCartProducts([...cartProducts, productData]);
        setCount(count + 1);
        openCheckoutSideMenu();
    }

    const removeFromCart = (id) => {
        setCartProducts(prev => prev.filter(product => product.id !== id))
        setCount(prev => prev - 1)
    }

    const contextValue = {
        // Cart
        count,
        setCount,
        cartProducts,
        setCartProducts,
        addToCart,
        addProductsToCart,
        removeFromCart,
        orders,
        setOrders,

        // UI
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        isLoading,

        // Products
        items,
        filteredItems,
        searchByTitle,
        setSearchByTitle,
        searchByCategory,
        setSearchByCategory,
        sortBy,
        setSortBy,

        // User
        account,
        isUserAuthenticated,
        handleSignIn,
        handleSignUp,
        handleSignOut
    }

    return (
        <ShoppingCartContext.Provider value={contextValue}>
            {children}
        </ShoppingCartContext.Provider>
    )
}