import React from 'react'
import './shop.css'
import ShopBanner from './components/shopMainBanner/ShopBanner'
import ShopCards from './components/shopCards/ShopCards'

export default function Shop() {

  return (
    <div className='collections-main-page'>
      <ShopBanner/>
      <ShopCards/>
      <span className='collections-lower-text'>Showing items 1-8 of 8</span>
    </div>
  )
}
