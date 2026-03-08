
function Search({ onSearch, onCategory, onRandom }) {
    const handlesubmmit = (e) => {
        e.preventDefault()
        const searchItem = e.target.elements.search.value
        if (searchItem) {
            onSearch(searchItem)
        }
    }

    return (
        <>
            <form onSubmit={handlesubmmit}>
                <input
                    type="text"
                    name="search"
                    placeholder="Enter your Meal"
                    className="border"
                />
                <button>Submit</button>
            </form>
            <select onClick={(e) => onCategory(e.target.value)}>
                <option>Select Category</option>
                <option value="seafood">seafood</option>
                <option value="pasta">pasta</option>
                <option value="vegeterian">vegeterian</option>
                <option value="pasta">pasta</option>
            </select>
            <button onClick={onRandom}>Random</button>

        </>
    )
}
export default Search