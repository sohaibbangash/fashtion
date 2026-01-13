import React from 'react';
import img8 from '../assist/img8.png';
import img2 from '../assist/img2.png';
import img3 from '../assist/img3.png';
import img4 from '../assist/img4.png';
import img5 from '../assist/img5.png';
import img6 from '../assist/img6.png';

import './Collection.css';

const Collection = () => {
  return (
    <section className="collection-cards-wrapper">
      <div className="collection-card collection-card1">
        <div className="collection-card-img-wrapper">
          <img src={img8} alt="Item 1" />
        </div>
        <h3>Casual Day Outfit</h3>
        <p>Chic and comfortable dress for effortless style</p>
        <div className="collection-card-info">
          <span className="collection-stars">★★★★☆</span>
          <span className="collection-price">$149</span>
        </div>
      </div>

      <div className="collection-card collection-card2">
        <div className="collection-card-img-wrapper">
          <img src={img2} alt="Item 2" />
        </div>
        <h3>Classic Office Blazer</h3>
        <p>Smart blazer for professional looks</p>
        <div className="collection-card-info">
          <span className="collection-stars">★★★★★</span>
          <span className="collection-price">$199</span>
        </div>
      </div>

      <div className="collection-card collection-card3">
        <div className="collection-card-img-wrapper">
          <img src={img3} alt="Item 3" />
        </div>
        <h3>Trendy Streetwear Top</h3>
        <p>Urban street style with a modern twist</p>
        <div className="collection-card-info">
          <span className="collection-stars">★★★☆☆</span>
          <span className="collection-price">$89</span>
        </div>
      </div>

      <div className="collection-card collection-card4">
        <div className="collection-card-img-wrapper">
          <img src={img4} alt="Item 4" />
        </div>
        <h3>Elegant Evening Dress</h3>
        <p>Perfect for parties and special occasions</p>
        <div className="collection-card-info">
          <span className="collection-stars">★★★★★</span>
          <span className="collection-price">$249</span>
        </div>
      </div>

      <div className="collection-card collection-card5">
        <div className="collection-card-img-wrapper">
          <img src={img5} alt="Item 5" />
        </div>
        <h3>Casual Sneakers</h3>
        <p>Comfortable and stylish everyday sneakers</p>
        <div className="collection-card-info">
          <span className="collection-stars">★★★★☆</span>
          <span className="collection-price">$129</span>
        </div>
      </div>

      <div className="collection-card collection-card6">
        <div className="collection-card-img-wrapper">
          <img src={img6} alt="Item 6" />
        </div>
        <h3>Luxury Handbag</h3>
        <p>Designer handbag for a classy look</p>
        <div className="collection-card-info">
          <span className="collection-stars">★★★★★</span>
          <span className="collection-price">$399</span>
        </div>
      </div>
    </section>
  );
};

export default Collection;
