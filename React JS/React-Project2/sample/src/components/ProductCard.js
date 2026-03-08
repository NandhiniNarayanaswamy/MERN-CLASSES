import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
function ProductCard({ product }) {
    const { addToCart, isInCart } = useCart()
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate(`/product/${product.id}`)}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-contain"
                />

                <h3 className="text-lg font-bold mt-2">
                    {product.title}
                </h3>


                {/* product price */}
                <p className="text-gray-600 text-xl mt-1">
                    ${product.price}
                </p>

                <button onClick={() => addToCart(product)}
                    disabled={isInCart(product.id)}
                    className={`mt-4 py-2 px-4 rounded ${isInCart(product.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-400'}text-white`}

                >{isInCart(product.id) ? "Added to Cart" : "Add To Cart"}</button>
            </div>
        </>
    )
}
export default ProductCard