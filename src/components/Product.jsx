import { useContext } from "react"
//import link
import { Link } from "react-router-dom";
//mport cart Context
import { CartContext } from "../context/CartContext";


const Product = ({ product }) => {
  const { addtoCart } = useContext(CartContext)
  //destructure products
  const {id, image, category, title, price} = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={image} />
            <div className="absolute top-6 right-11 group-hover:right-2 p-2 flex items-center justify-center flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={() => addtoCart(product, id)}>
                  <span className="material-symbols-outlined text-2xl text-white bg-red-500 w-10 shadow-xl">add</span>
                </button>
              <Link 
                className= "w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                to={`/product/${id}`}>
                <button>
                  <span className="material-symbols-outlined bg-white text-black flex items-center justify-center">visibility</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* category title and price */}
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">{price}</div>
      </div>
    </div>
  )
}

export default Product