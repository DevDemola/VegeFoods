import React, { useState } from "react";
import "./Products.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Bell Pepper",
    image: "/product-1.jpg",
    price: 120,
    salePrice: 80,
    discount: "30%",
    stock: 5,
  },
  {
    id: 2,
    name: "Strawberry",
    image: "/product-2.jpg",
    price: 120,
    stock: 5,
    bestSeller: true,
  },
  {
    id: 3,
    name: "Green Beans",
    image: "/product-3.jpg",
    price: 120,
    stock: 5,
  },
  {
    id: 4,
    name: "Purple Cabbage",
    image: "/product-4.jpg",
    price: 120,
    stock: 5,
    bestSeller: true,
  },
  {
    id: 5,
    name: "Tomato",
    image: "/product-5.jpg",
    price: 120,
    stock: 5,
  },
  {
    id: 6,
    name: "Broccoli",
    image: "/product-6.jpg",
    price: 120,
    stock: 5,
  },
  {
    id: 7,
    name: "Carrot",
    image: "/product-7.jpg",
    price: 120,
    stock: 5,
  },
  {
    id: 8,
    name: "Fruit Juice",
    image: "/product-8.jpg",
    price: 120,
    stock: 5,
    bestSeller: true,
  },
];

const Products = () => {
  const [qty, setQty] = useState({});

  const increase = (id, stock) =>
    setQty({
      ...qty,
      [id]: Math.min((qty[id] || 1) + 1, stock),
    });

  const decrease = (id) =>
    setQty({
      ...qty,
      [id]: Math.max(1, (qty[id] || 1) - 1),
    });

  return (
    <section className="products">
      <div className="products-header">
        <span>Featured Products</span>
        <h2>Our Products</h2>
        <p>From our farms to your home.</p>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            {item.discount && <span className="badge">{item.discount}</span>}

            {/* Wishlist */}
            <div className="wishlist">
              <FaHeart />
            </div>
            {item.bestSeller && (
              <span className="best-seller">BEST SELLER</span>
            )}

            {/* Stock */}
            <span className="stock">Only {item.stock} left</span>

            <img src={item.image} alt={item.name} />

            <h4>{item.name}</h4>

            {/* Price */}
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

            {/* Quantity selector */}
            <div className="qty">
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{qty[item.id] || 1}</span>
              <button onClick={() => increase(item.id, item.stock)}>+</button>
            </div>

            {/* Add to cart */}
            <button className="add-cart">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
