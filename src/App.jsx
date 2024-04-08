import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

export default function App() {
  const [foodData, setFoodData] = useState([])

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  );
}
