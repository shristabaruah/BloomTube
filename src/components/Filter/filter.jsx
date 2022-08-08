import { useState, useEffect } from "react";
import { getCategories } from "../../Services";
import styles from "./filter.module.css";
const Filter = ({ filterCategory, setFilterCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <div className={`${styles.filter_container}`}>
      <button
        className={`btn ${filterCategory === "" ? styles.active : ""}`}
        name="category"
        onClick={(e) => setFilterCategory(e.target.value)}
      >
        ALL
      </button>
      {categories.map((category) => {
        return (
          <button
            className={`btn ${
              category.categoryName === filterCategory ? styles.active : ""
            }`}
            key={category._id}
            name={category.categoryName}
            onClick={(e) => setFilterCategory(e.target.name)}
          >
            {category.categoryName}
          </button>
        );
      })}
    </div>
  );
};
export { Filter };
