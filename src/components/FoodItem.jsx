import styles from "./fooditem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImg} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.itemBtn}>View recipe</button>
      </div>
    </div>
  );
}
