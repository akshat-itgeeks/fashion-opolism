import React from 'react'
import MainBanner from '../mainBanner/MainBanner'
import './mainPage.css'
import ExploreCards from '../exploreCards/ExploreCards'
import NewLooks from '../newLooks/NewLooks'
import TwoImgBanner from '../twoImageBanner/TwoImgBanner'
import ShopByCollection from '../shopByCollection/ShopByCollection'
import CenterBanner from '../centerBanner/CenterBanner'
export default function MainPage() {
  return (
    <div className='main-page-area'>
      <MainBanner/>
      <ExploreCards/>
      <NewLooks/>
      <TwoImgBanner/>
      <ShopByCollection/>
      <CenterBanner/>
    </div>
  )
}
