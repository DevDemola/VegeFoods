import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    name: "Bell Pepper",
    image: "/product-1.jpg",
    price: 120,
    salePrice: 80,
    discount: "30%",
  },
  {
    id: 2,
    name: "Strawberry",
    image: "/product-2.jpg",
    price: 120,
  },
  {
    id: 3,
    name: "Green Beans",
    image: "/product-3.jpg",
    price: 120,
  },
  {
    id: 4,
    name: "Purple Cabbage",
    image: "/product-4.jpg",
    price: 120,
  },
  {
    id: 4,
    name: "Tomato",
    image: "/product-5.jpg",
    price: 120,
  },
  {
    id: 4,
    name: "Brocolli",
    image: "/product-6.jpg",
    price: 120,
  },
  {
    id: 4,
    name: "Carrot",
    image: "/product-7.jpg",
    price: 120,
  },
  {
    id: 4,
    name: "Fruit Juice",
    image: "/product-8.jpg",
    price: 120,
  },
];

const Products = () => {
  return (
    <section className="products">
      <div className="products-header">
        <span>Featured Products</span>
        <h2>Our Products</h2>
        <p>
          From our farms to your home.
        </p>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            {item.discount && (
              <span className="badge">{item.discount}</span>
            )}

            <img src={item.image} alt={item.name} />

            <h4>{item.name}</h4>

            <div className="price">
              {item.salePrice ? (
                <>
                  <span className="old">${item.price}.00</span>
                  <span className="new">${item.salePrice}.00</span>
                </>
              ) : (
                <span className="new">${item.price}.00</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
