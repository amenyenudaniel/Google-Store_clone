import React from "react";
import "./Category.css";
import category2 from "../../assets/category2.webp";
import category3 from "../../assets/category3.webp";
import category4 from "../../assets/category4.webp";
const Category = () => {
  return (
    <div className="app__category">
      <h1>Shop by category.</h1>

      <div className="category__grid">
        <div className="category__container">
          <img src={category3} alt="category" />
          <p>Camera</p>
        </div>

        <div className="category__container">
          <img src={category2} alt="category" />
          <p>Doorbells</p>
        </div>

        <div className="category__container">
          <img src={category3} alt="category" />
          <p>Streaming</p>
        </div>

        <div className="category__container">
          <img src={category4} alt="category" />
          <p>Packages</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
