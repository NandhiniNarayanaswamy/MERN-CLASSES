
import { useCart } from "../context/CartContext"
function CartItem({ item }) {
    const { removeFromCart } = useCart()
    return (
        <>
            <div className="border-b flex p-4 flex justify-between items-center">
                <div>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-contain"
                    />

                    <h3 className="text-lg font-bold mt-2">
                        {item.title}
                    </h3>


                    {/* product price */}
                    <p className="text-gray-600 text-xl mt-1">
                        ${item.price} x {item.quantity}
                    </p>

                    <button onClick={() => removeFromCart(item.id)} className="bg-red-400 py-2 px-4  text-white rounded">Remove</button>
                </div>

            </div >
        </>
    )
}
export default CartItem