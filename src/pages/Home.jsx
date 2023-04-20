import { useContext } from "react"
import { ProductContext } from '../context/ProductContext'
//import components
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext);
  
  //get only men women category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  

  return (
    <div>
      <Hero />
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid xl:grid-cols-5 gap-[30px]">
              {filteredProducts.map(product => {
                return (
                <Product  
                key={product.id}
                product={product}
                /> 
                )
              })}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home