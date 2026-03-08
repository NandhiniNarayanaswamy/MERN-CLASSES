
import { fetchMealBySearch, fetchMealByCategory, fetchMealByRandom } from "../services/mealService"
import Search from "../components/SearchBar"
import MealCard from "../components/MealCard"
import { useState } from "react"
function Home() {
    const [meals, setMeals] = useState([])
    const handleSearch = async (searchItem) => {
        const result = await fetchMealBySearch(searchItem)
        setMeals(result)
    }
    const handleCategory = async (category) => {
        const result = await fetchMealByCategory(category)
        setMeals(result)
    }
    const handleRandom = async () => {
        const result = await fetchMealByRandom()
        setMeals(result)
    }
    return (
        <>
            <Search
                onSearch={handleSearch}
                onCategory={handleCategory}
                onRandom={handleRandom}
            />
            {meals.length === 0 ? (<p>NO Meals Found</p>) : (
                meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
            )}
        </>
    )
}
export default Home