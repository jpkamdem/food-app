import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const apiKey = "2841e956276c4adf8f1aed1b47212b49";
  const apiUrl = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const [food, setFood] = useState({});
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${apiUrl}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    };
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>🕰️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👦‍👦 Serves {food.servings} people</strong>
          </span>
          <span>{food.vegetarian ? "🥕 Vegeratian" : "🥩 Non-vegetarien"}</span>
          {food.vegan ? "🐄 Vegan" : ""}
        </div>
        <div>
          <span>💲 {food.pricePerServing/100} per serving</span>
        </div>
        <div>
          <h2>Instructions</h2>
          {food.analyzedInstructions[0].steps.map(item => {
            <li>
              {item.step}
            </li>
          })}
        </div>
      </div>
    </div>
  );
}
