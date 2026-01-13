import React, { useEffect, useState } from "react";
import "./Hero.css";
import img12 from "../assist/img12.png";
import img3 from "../assist/img3.png";
import img4 from "../assist/img4.png";
import img5 from "../assist/img5.png";
import img6 from "../assist/img6.png";


export default function Hero() {
  const images = [img12, img4, img3, img5, img6,];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
    
      <div className="hero-text">
        <h1>End-of-Season Sale: Up to 70% off</h1>
        <p>
          Step into styles made for every moment. Our women’s collection blends
          comfort, trend-driven design, and flattering fits. Whether you're
          dressing up for a special occasion or keeping it casual, you’ll find
          pieces that make you feel confident and effortless.
        </p>
        <button>Explore Now</button>
      </div>

   
      <div className="hero-image">
        <img src={images[index]} alt="Slider" />
      </div>
    </section>
  );
}
