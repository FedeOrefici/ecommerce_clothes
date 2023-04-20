//import link
import { Link } from "react-router-dom"
//import components
import CartItem from "./CartItem"
//import sidebar context
import { useContext } from "react"
import { SidebarContext } from "../context/SidebarContext"
//import cart context
import { CartContext } from "../context/CartContext"


const Sidebar = () => {

  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div className="transition-all duration-300">
      {isOpen ? <div className={`w-1/2 bg-white fixed top-0 right-0 h-full overflow-auto
        shadow-2xl p-10 text-black`}>
        <div className="flex items-center justify-between py-6 border-b" >
          <div className="uppercase text-sm font-semibold">Shopping Bag ( {itemAmount} )</div>
            <div className="cursor-pointer w-8 h-8 flex justify-center items-center">
            </div>
              <button onClick={()=> handleClose()}>
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>
        </div>
 
        <div className="mt-4 gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b flex flex-col">
          {cart.map(item => {
            return <CartItem item={item} key={item.id} />
          })}
        </div>

        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            {/* total */}
            <div className="uppercase font-semibold">
              <span>Total:</span>$ {parseFloat(total).toFixed(2)}
            </div>
            <div>
            <span onClick={() => {clearCart()}}
              className="material-symbols-outlined text-white w-12 h-12 flex justify-center items-center bg-red-500 cursor-pointer text-xl">delete</span>
            </div>
          </div>
        </div>
        <Link to={'/'} className='bg-gray-200 flex p-4 justify-center items-center text-gray-800 w-full font-medium' >View cart</Link>
        <Link className='bg-gray-500 flex p-4 justify-center items-center text-white w-full font-medium mt-2' >Checkout</Link>
        </div> : null}
    </div>
  )
}

export default Sidebar




