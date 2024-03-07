import React from 'react';
import './shopcards.css';
import cardData from './cardData.json'

export default function ShopCards() {
  return (
    <div className='shop-cards-main-area'>
      {
          cardData.map((data)=>
          {
            return <>
              <div className="shop-by-collection-card">
                        <img src={data.src} alt="" />
                        <span className='shop-by-collection-card-title'>{data.title}</span>
                        <span className='shop-by-collection-card-quantity'>{data.quantity}</span>
              </div>
            </>
          })
      }
    </div>
  )
}
