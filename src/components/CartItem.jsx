//import link
import { useContext } from "react";
import { Link } from "react-router-dom";
//import cart context
import { CartContext } from "../context/CartContext";

const CartItem = ( { item } ) => {

  const { id, title, image, price, amount } = item;


  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

  return (
    <>
    <div className="flex flex-col border-b border-gray-300 py-2">
        <div className="w-full flex items-center justify-around my-6 gap-x-4" >
            <Link to={`/product/${id}`}>
              <img className="max-w-[80px]" src={image} alt={title} />
            </Link>
            {/* title and remove icon */}
            <div className="flex justify-between mb-2">
              <Link 
              to={`/product/${id}`} 
              className='text-sm uppercase font-medium max-w-[240px] text-gray-800 hover:underline'>{title}</Link>
            </div>
            <div onClick={() => {removeFromCart(id)} }>
              <span 
              className="material-symbols-outlined text-xl text-gray-600 hover:text-red-500 cursor-pointer transition">delete</span>
            </div>
        </div>

        <div className="flex h-[36px] items-center justify-center gap-x-20">
          

          <div className="flex justify-center items-center content-center gap-4">
              <span 
              onClick={()=> {increaseAmount(id) }}
              className="material-symbols-outlined cursor-pointer">add_circle</span>
                {amount}
              <span 
              onClick={()=> {decreaseAmount(id)}}
              className="material-symbols-outlined cursor-pointer">do_not_disturb_on</span> 
          </div>
  
          <div className="text-gray-600">
            ${price}
          </div>

          <div className="text-gray-900 font-medium">
          {/* to make the price at 2 decimals */}
            {`$ ${parseFloat(price * amount).toFixed(2)}`}
          </div>
        </div>
    </div>
    </>
  )
}

export default CartItem