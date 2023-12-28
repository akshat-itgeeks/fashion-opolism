import React from 'react'
import './about.css';
import AboutMainBanner from './Components/AboutMainBanner/AboutMainBanner';
import OurStory from './Components/ourStory/OurStory';


export default function About() {

  return (
    <div className='about-page-area'>
        <AboutMainBanner/>
        <OurStory/>
    </div>
  )
}
