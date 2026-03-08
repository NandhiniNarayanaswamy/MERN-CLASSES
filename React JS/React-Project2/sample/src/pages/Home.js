import { useState, useEffect } from "react"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
function Home() {
    const [products, setProducts] = useState([])
    const [filterProduct, setFilterProduct] = useState([])
    const [searchItem, setSearchItem] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                setProducts(data)
                setFilterProduct(data)
            } catch (error) {
                console.log("error", error);

            }
        }
        fetchItems()
    }, [])

    useEffect(() => {
        let updateProduct = products
        if (category) {
            updateProduct = updateProduct.filter((product) => product.category === category)
        }

        if (searchItem) {
            updateProduct = updateProduct.filter((product) => product.title.toLowerCase().includes(searchItem.toLowerCase()))
        }

        setFilterProduct(updateProduct)
    }, [category, searchItem, products])
    return (
        <>
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold mb-4">PRODUCTS</h2>
                <div className="flex gap-4 mb-6">
                    <SearchBar onSearch={setSearchItem} />
                    <Filter onFilter={setCategory} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filterProduct.map((product) =>
                        (<ProductCard key={product.id} product={product} />))}
                </div>
            </div>
        </>
    )
}
export default Home