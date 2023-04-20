import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//product provider
import ProductProvider from './context/ProductContext'
//import sidebar provider
import SidebarProvider from './context/SidebarContext'
//import cart provider
import CartProvider from './context/CartContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
        <ProductProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        </ProductProvider>
    </CartProvider>  
  </SidebarProvider>
)
