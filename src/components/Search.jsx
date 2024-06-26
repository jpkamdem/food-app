import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "2841e956276c4adf8f1aed1b47212b49";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    setTimeout(() => {
      const fetchFood = async () => {
        const res = await fetch(`${apiUrl}?query=${query}&apiKey=${apiKey}`);
        const data = await res.json();
        setFoodData(data.results);
      };
      fetchFood();
    }, 5000);
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputField}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
