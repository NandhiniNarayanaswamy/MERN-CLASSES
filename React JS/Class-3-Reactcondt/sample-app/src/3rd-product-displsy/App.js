import ProductCard from "./components/ProductCard"
import products from "./data/Products.json"
function App() {
  // const product = { // creating object
  //   title: "plant",
  //   price: 23000,
  //   image: ""
  // }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <ProductCard
        title={product.title}
        price={product.price}
        image={product.image}
      /> */}
      {
        products.map((product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      }
    </div>
  )
}
export default App