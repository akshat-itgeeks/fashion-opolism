import React from 'react';
import './explorecards.css'

export default function ExploreCards() {
  return (
    <div className='explore-cards-main-area'>
      <div className="explore-cards-1-area">
        <div className="explore-cards-1 explore-cards-hover">
          <div className="explore-cards-text-area">
              <span className='explore-cards-heading'>NEW ARRIWALS</span>
              <span className='explore-cards-btn'>EXPLORE</span>
          </div>
        </div>
      </div>
      <div className="explore-cards-2-area">
        <div className="explore-cards-2 explore-cards-hover">
          <div className="explore-cards-text-area">
              <span className='explore-cards-heading'>SOIREE DAYS</span>
              <span className='explore-cards-btn'>EXPLORE</span>
          </div>
        </div>
      </div>
      <div className="explore-cards-3-area">
        <div className="explore-cards-3 explore-cards-hover">
          <div className="explore-cards-text-area">
              <span className='explore-cards-heading'>ACCESSORIES</span>
              <span className='explore-cards-btn'>EXPLORE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
