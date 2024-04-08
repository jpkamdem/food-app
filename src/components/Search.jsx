import { useEffect } from "react";
import { useState } from "react";

const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "2841e956276c4adf8f1aed1b47212b49";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${apiUrl}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);

  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
