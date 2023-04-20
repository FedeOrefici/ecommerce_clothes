import { useContext, useEffect, useState } from "react"
//sidebar context
import { SidebarContext } from "../context/SidebarContext"
//cart context
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount, setItemAmount } = useContext(CartContext);

  
  return (
    <header className="w-full shadow">
      <div className="bg-gray-100 flex justify-between items-center p-5 h-[200px]">
        <Link to={'/'} > 
          <div className="flex items-center pl-5 gap-2">
            <span className="material-symbols-outlined text-2xl text-gray-700">checkroom</span>
            <h1 className="text-[18px] font-bold text-gray-700 uppercase">ecommerce</h1>
          </div>
        </Link>
            <div className="flex w-1/6 items-center justify-center gap-3">
              <span onClick={() => setIsOpen(!isOpen)}
              className="material-symbols-outlined flex relative text-2xl cursor-pointer">shopping_bag</span>
              <div className="bg-red-500 flex items-center justify-center text-[12px] h-[25px] w-[25px] text-white rounded-full">
                {itemAmount}
              </div>
            </div>
      </div>
    </header>
  )
}

export default Header