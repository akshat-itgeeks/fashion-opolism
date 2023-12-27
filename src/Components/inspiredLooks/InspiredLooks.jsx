import React from 'react';
import './inspiredlooks.css'


export default function InspiredLooks() {

  return (
    <div className='inspired-looks-full-page'>
        <div className="inspired-looks-heading-area">
            <span>INSPIRED LOOKS</span>
        </div>
        <div className="inspired-looks-main-area">
            <div className="inspired-looks-main-image-area">
                <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1605.jpg?v=1620058321" alt="" />
            </div>
            <div className="inspired-looks-multiple-image-area">
                <div className="inspired-looks-multiple-card-area">
                    <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1605.jpg?v=1620058321" alt="" />
                    <div className="inspired-looks-multiple-card-description">
                        <span className='inspired-looks-card-title'>Stella Top</span>
                        <span className='inspired-looks-card-price'>$59.95</span>
                        <span className='inspired-looks-card-select-btn'>Select Options</span>
                        <span className='inspired-looks-card-details-btn'>Details</span>
                    </div>
                </div>
                <span className='gray-line'></span>
                <div className="inspired-looks-multiple-card-area">
                    <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1636.jpg?v=1693425244" alt="" />
                    <div className="inspired-looks-multiple-card-description">
                        <span className='inspired-looks-card-title'>Lucia Jeans</span>
                        <span className='inspired-looks-card-price'> $45 <strike>$79.80</strike></span>
                        <span className='inspired-looks-card-select-btn'>Select Options</span>
                        <span className='inspired-looks-card-details-btn'>Details</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}