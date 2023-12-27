import React from 'react'
import MainBanner from '../mainBanner/MainBanner'
import './mainPage.css'
import ExploreCards from '../exploreCards/ExploreCards'
import NewLooks from '../newLooks/NewLooks'
import TwoImgBanner from '../twoImageBanner/TwoImgBanner'
import ShopByCollection from '../shopByCollection/ShopByCollection'
import CenterBanner from '../centerBanner/CenterBanner'
import InspiredLooks from '../inspiredLooks/InspiredLooks'
import BestSelling from '../bestSelling/BestSelling'
import AdvertizePart from '../advertizePart/AdvertizePart'
import OverlayingImgBanner from '../overlayingImgBanner/OverlayingImgBanner'
import PartnersBanner from '../partnersBanner/PartnersBanner'
import Footer from '../footer/Footer'
export default function MainPage() {
  return (
    <div className='main-page-area'>
      <MainBanner/>
      <ExploreCards/>
      <NewLooks/>
      <TwoImgBanner/>
      <ShopByCollection/>
      <CenterBanner/>
      <InspiredLooks/>
      <BestSelling/>
      <AdvertizePart/>
      <OverlayingImgBanner/>
      <PartnersBanner/>
      <Footer/>
    </div>
  )
}