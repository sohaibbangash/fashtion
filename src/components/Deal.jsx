import React from 'react'
import './Deal.css';
import ponit from "../assist/ponit.png";

const Deal = () => {
  return (
    <>
      <section className="deal-section">
  <div className="deal-content">
    <div className="deal-image">
      <img src={ponit} alt="deal" />
    </div>

    <div className="deal-text">
      <h1>EXCLUSIVE DEAL OF THE DAY</h1>
      <p>Today’s special offer brings you top destinations at a limited-time discount. Don’t miss it!</p>
      <button>Explore Now</button>
    </div>
  </div>
</section>
    </>
  )
}

export default Deal
