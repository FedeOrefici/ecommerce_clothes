import { useContext } from "react"
//import useParams
import { useParams } from "react-router-dom"
//import cart context
import { CartContext } from "../context/CartContext"
//import product context
import { ProductContext } from "../context/ProductContext"
//import Link
import { Link } from "react-router-dom"

const ProductDetail = () => {
  //get the product id from the url
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  //get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  //destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 h-screen">
      <div className="container mx-auto">
      {/* image & text wrapper */}
      <div className="flex items-center justify-center mx-auto">
        {/* image */}
          <div>
            <img className="max-w-[200px] mb-5 ml-20" src={image} alt='' />
          </div>
          {/* text */}
              <div className="flex-1 text-center justify-center mx-auto">
                <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto" >{title}</h1>
                  <p className="text-red-500">$ {price}</p>
                  <p className="mt-5 w-[700px] mx-auto">{description}</p>
                  <Link to={'/'} >
                  <button className="bg-gray-500 rounded mx-auto flex py-4 px-10 cursor-pointer mt-4 text-white hover:bg-gray-600">
                    Home
                  </button>
                  </Link>
              </div>
      </div>
      </div>
    </section>
  )
}

export default ProductDetail