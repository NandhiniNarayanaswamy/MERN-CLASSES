import { useNavigate } from "react-router-dom";

function MealCard({ meal }) {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center gap-20 my-4">
            <div
                className="border rouned-md shadow-md p-4 cursor-pointer hover:bg-gray-100 flex-row"
                onClick={() => navigate(`/meal/${meal.idMeal}`)}>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-64 rounded-md" />
                <h2 className="mt-2 text-lg font-bold">{meal.strMeal}</h2>

            </div>
        </div>

    )
}

export default MealCard