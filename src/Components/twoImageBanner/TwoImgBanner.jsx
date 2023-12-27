import React from 'react';
import './twoimgBanner.css';


export default function TwoImgBanner() {


  return (
    <div className='two-img-banner-full-page'>
      <div className="two-img-banner-img-area">
        <div className="two-img-banner-img1">
          <div className="two-img-banner-text-area">
            <span className='two-img-banner-main-text'>
                JUST IN
            </span>
            <span className='two-img-banner-text-button-area'>
              <span className='two-img-banner-text'>A collection of our latest arrivals</span>
              <span className='two-img-banner-button'>SHOP NEW</span>
            </span>
          </div>
        </div>
      </div>
      <div className="two-img-banner-img-area">
        <div className="two-img-banner-img2">
          <div className="two-img-banner-text-area">
            <span className='two-img-banner-main-text'>
                 DRESSES  
            </span>
            <span className='two-img-banner-text-button-area'>
              <span className='two-img-banner-text'>Find the Perfect Dress</span>
              <span className='two-img-banner-button'>SHOP DRESSES</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
