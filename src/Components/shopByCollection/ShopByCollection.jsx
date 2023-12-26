import React from 'react'
import './shopbyCollection.css';
import productData from './product-data.json'

export default function ShopByCollection() {

  return (
    <div className='shop-by-collection-full-page'>
        <div className="shop-by-collection-heading-area">
            <span className='shop-by-collection-heading'>
                SHOP BY COLLECTION  
            </span>
        </div>
        <div className="shop-by-collection-cards-area">

            {productData.map((data)=>
            {
                return <>
                    <div className="shop-by-collection-card">
                        <img src={data.img} alt="" />
                        <span className='shop-by-collection-card-title'>{data.title}</span>
                        <span className='shop-by-collection-card-quantity'>{data.quantity}</span>
                    </div>
                </>
            })}
        </div>
    </div>
  )
}
