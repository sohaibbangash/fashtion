import React from "react";
import "./SubscriptionBar.css";

const SubscriptionBar = () => {
  return (
    <div className="subscription-bar">
      <input
        type="email"
        placeholder="enter email"
        className="email-input"
      />
      <button className="button">Shop Now</button>
      <span className="text">Subscribe to Get 50% Discount</span>
    </div>
  );
};

export default SubscriptionBar;
