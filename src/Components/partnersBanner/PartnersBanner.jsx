import React from 'react'
import './partnersbanner.css'
import partnerData from "./partnersData.json"
export default function PartnersBanner() {

  return (
    <div className='partners-banner-full-page'>
      {partnerData.map((data)=>
      {
        return <>
        <img className='partners-logo' src={data} alt="" />
        </>
      })}
    </div>
  )
}