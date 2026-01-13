import React from 'react'
import img5 from "../assist/img5.png";
import img2 from "../assist/img2.png";
import img3 from "../assist/img3.png";
import './card-section.css';

const Card = () => {
  return (
    <>
      <section>
<div className="card-section">
    <h2 className='secondary-heading'>New Collection</h2>
    <p className='para'>  Explore our latest collection featuring stunning destinations, fresh experiences, 
    and handpicked travel moments. Each place is chosen to inspire your next adventure 
    and help you discover the beauty of the world in a whole new way.</p>
</div>
  <div className="cards-wrapper">
      <div className="card">
  <div className="card-img-wrapper">
    <img src={img2} alt="item3" />
  </div>

  <h3>Casual Day Outfit</h3>
  <p>A chic and comfortable dress crafted for effortless style</p>

  <div className="card-info">
    <span className="stars">★★★★☆</span>
    <span className="price">$149</span>
  </div>
</div>

<div className="card">
  <div className="card-img-wrapper">
    <img src={img3} alt="item3" />
  </div>

  <h3>Classic Office Blazer </h3>
  <p>A chic and comfortable dress crafted for effortless style</p>

  <div className="card-info">
    <span className="stars">★★★★☆</span>
    <span className="price">$149</span>
  </div>
</div>

     <div className="card">
  <div className="card-img-wrapper">
    <img src={img5} alt="item3" />
  </div>

  <h3>Trendy Streetwear Top</h3>
  <p>A chic and comfortable dress crafted for effortless style</p>

  <div className="card-info">
    <span className="stars">★★★★☆</span>
    <span className="price">$149</span>
  </div>
</div>

    </div>
      </section>
    </>
  )
}

export default Card
