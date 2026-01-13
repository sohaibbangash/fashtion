import React from 'react'
import brand1 from "../assist/brand1.png";
import brand2 from "../assist/brand2.png";
import brand3 from "../assist/brand3.png";
import brand4 from "../assist/brand4.png";
import brand5 from "../assist/brand5.png";
import brand6 from "../assist/brand6.png";
import brand7 from "../assist/brand7.png";
import brand8 from "../assist/brand8.png";
import './brand.css';

const Brand = () => {
  return (
    <>
    <section>
 <h1 className="top-heading">Top Brand</h1> 
 <div className="brand">
 <div><img src={brand1} alt="" srcset="" /></div>
 <div><img src={brand2} alt="" srcset="" /></div>
 <div><img src={brand3} alt="" srcset="" /></div>
 <div><img src={brand4} alt="" srcset="" /></div>
 <div><img src={brand5} alt="" srcset="" /></div>
 <div><img src={brand6} alt="" srcset="" /></div>
 <div><img src={brand7} alt="" srcset="" /></div>
 <div><img src={brand8} alt="" srcset="" /></div>
</div>
    </section>
    </>
  )
}

export default Brand
