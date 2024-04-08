import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem food={food}/>
      ))}
    </>
  );
}
