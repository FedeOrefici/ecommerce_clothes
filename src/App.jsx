import React from "react"
//import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import pages
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
//import components
import Footer from "./components/Footer"
import Header from "./components/Header"

import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="overflow-hidden">
            <BrowserRouter>
               <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
                <Sidebar />
              <Footer />
            </BrowserRouter>
    </div>
  )
}

export default App