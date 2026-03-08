import { useEffect, useState } from "react";
import { fetchMealById } from "../services/mealService";
import { useParams } from "react-router-dom";

function MealDetail() {
    // extract the id from the URL
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const loadMeal = async () => {
            const data = await fetchMealById(id);
            setMeal(data)
        };
        loadMeal();
    }, [id]);

    if (!meal) return <div>Loading....</div>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold"> {meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-64 rounded-md my-4" />
            <p>{meal.strInstructions}</p>
            <mark>{meal.strArea}</mark>
            <p>{meal.strYoutube}</p>

            <video width="320" height="240" controls>
                <source src={meal.strYoutube} type="video/mp4" />
            </video>
            <p> {meal.strTags}</p>

        </div>
    )

}

export default MealDetail