import React from "react";
import "./Categories.css";
import Button from "./Button";

const Categories = () => {
  return (
    <section className="categories">
      {/* Left column */}
      <div className="col">
        <div className="card">
          <img src="/category-2.jpg" alt="Fruits" />
          <span className="tag">Fruits</span>
        </div>

        <div className="card">
          <img src="/category.jpg" alt="Vegetables" />
          <span className="tag">Vegetables</span>
        </div>
      </div>

      {/* Center column */}
      <div className="col center">
        <h2>Vegetables</h2>
        <p>Protect the health of every home</p>
        <Button
          label="Shop Now"
          style={{
            width: "30%",
            margin: "0 auto",
            display: "block",
          }}
        />

        <img src="/category-1.jpg" alt="Basket" />
      </div>

      {/* Right column */}
      <div className="col">
        <div className="card">
          <img src="/category-3.jpg" alt="Juices" />
          <span className="tag">Juices</span>
        </div>

        <div className="card">
          <img src="/category-4.jpg" alt="Dried" />
          <span className="tag">Dried</span>
        </div>
      </div>
    </section>
  );
};

export default Categories;
