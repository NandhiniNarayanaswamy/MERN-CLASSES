import { API_URL } from "../utils/api"
export const fetchMealBySearch = async (searchItem) => {
    const response = await fetch(`${API_URL}/search.php?s=${searchItem}`)
    const data = await response.json()
    return data.meals || []
}
export const fetchMealByCategory = async (category) => {
    const response = await fetch(`${API_URL}/filter.php?c=${category}`)
    const data = await response.json()
    return data.meals || []
}
export const fetchMealByRandom = async () => {
    const response = await fetch(`${API_URL}/random.php`)
    const data = await response.json()
    return data.meals || []
}
export const fetchMealById = async (id) => {
    const response = await fetch(`${API_URL}/lookup.php?i=${id}`)
    const data = await response.json()
    return data.meals || []
}

