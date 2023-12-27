import React from 'react';
import './overlayingbanner.css'


export default function OverlayingImgBanner() {

  return (
    <div className='over-laying-full-page'>
        <div className="over-laying-img1">
            <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_15_fb6781a6-4117-4774-bc35-8fd80dfec347.jpg?v=1620058328" alt="" />
        </div>
        <div className="over-laying-img2">
            <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_13a_7dde66a4-0635-4eec-83ff-8bd6b7d63ce4.jpg?v=1620058328" alt="" />
        </div>
        <div className="over-laying-page-text-area">
            <span className="over-laying-page-text-title">SUMMER STATEMENTS</span>   
            <span className='over-laying-page-description'>Take a peek at these sensational look for Summer!
             Get in quick as these hot items are sure to move fast! </span>
             <span className='over-laying-page-button'>Explore</span>
        </div>
    </div>
  )
}