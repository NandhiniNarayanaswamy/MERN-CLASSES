import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
function Header() {
    const { countCart } = useCart()
    return (
        <>
            <header className="bg-gray-900 text-white p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-4xl font-bold">Shopify</Link>
                    <nav className="space-x-10">
                        <Link to="/">Home</Link>
                        <Link to="/Cart">Cart {countCart}</Link>
                        <Link to="/CheckOut">CheckOut</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header