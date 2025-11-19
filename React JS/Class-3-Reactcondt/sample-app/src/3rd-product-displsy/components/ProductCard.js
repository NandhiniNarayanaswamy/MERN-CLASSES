import "./ProductCard.css"
function ProductCard({ title, price, image }) {
    return (

        <div className="product-card">
            <img src={image} alt="plant" className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-price">{price}</p>
            <button>Add to cart</button>
        </div>
    )
}
export default ProductCard