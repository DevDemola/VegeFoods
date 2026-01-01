import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    image: "/customers.jpg",
    text:
      "The vegetables always arrive fresh and crisp, just like they were picked the same morning. Shopping here has completely changed how my family eats.",
  },
  {
    id: 2,
    name: "Daniel Okafor",
    image: "/customers.jpg",
    text:
      "I love how easy it is to order fresh produce online. Fast delivery, great packaging, and everything stays fresh until it reaches my kitchen.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    image: "customers.jpg",
    text:
      "Since I started buying my vegetables here, cooking healthy meals has become effortless. The quality is outstanding and the prices are fair.",
  },
];

const Testimonials= () => {
  return (
    <section className="testimony">
      <div className="testimony-header">
        <span>Testimony</span>
        <h2>Our satisfied customer says</h2>
        <p>
          Real feedback from customers who trust us for fresh, healthy,
          farm-quality vegetables delivered straight to their homes.
        </p>
      </div>

      <div className="testimony-grid">
        {testimonials.map((item) => (
          <div className="testimony-card" key={item.id}>
            <div className="avatar">
              <img src={item.image} alt={item.name} />
              <FaQuoteLeft className="quote-icon" />
            </div>

            <p className="message">{item.text}</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
