import React, { useState } from 'react';
import './header.css';
import { ReactComponent as FacebookLogo } from '../../Svg/FacebookLogo.svg';
import { ReactComponent as TwitterLogo } from '../../Svg/TwitterLogo.svg';
import { ReactComponent as PintrestLogo } from '../../Svg/PinterestLogo.svg';
import { ReactComponent as InstagramLogo } from '../../Svg/InstagramLogo.svg';
import { ReactComponent as SearchLogo } from '../../Svg/SearchLogo.svg';
import { ReactComponent as UserLogo } from '../../Svg/UserLogo.svg';
import { ReactComponent as CartLogo } from '../../Svg/CartLogo.svg';
import { ReactComponent as DownArrowLogo } from '../../Svg/DownArrow.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { InputLabel, MenuItem, Select } from '@mui/material';
import ReactFlagsSelect from 'react-flags-select';

export default function Header() {

    const [selectedLanguage, setselectedLanguage] = useState("US")



    const showSelectedLabel = ("Show Selected Label", true);
    const showSecondarySelectedLabel = (
        "Show Secondary Selected Label",
        true
    );
    const showOptionLabel = ("Show Option Label", true);
    const showSecondaryOptionLabel = ("Show Secondary Option Label", true);

    const customLabels = ("Custom Labels", {
        GB: { primary: "GB", secondary: "(€)" },
        US: { primary: "US", secondary: "$" },
        IN: { primary: "IND", secondary: "(₹)" }
    });



    return (
        <>
            <div className='most-top-header-area'>
                <div className="top-header-logo-area">
                    <FacebookLogo />
                    <TwitterLogo />
                    <PintrestLogo />
                    <InstagramLogo />
                </div>
                <div className="top-header-slider-area">
                    <Swiper navigation={true} modules={[Navigation]} loop={true} className='swiper'>
                        <SwiperSlide className='topBarSlider'><strong className='strong'> <b>FREE SHIPPING ON ORDERS OVER $100</b></strong></SwiperSlide>
                        <SwiperSlide className='topBarSlider'><strong className='strong'> <b>FREE 90 DAY RETURNS </b></strong></SwiperSlide>
                    </Swiper>
                </div>
                <div className="top-header-language-area">
                    {/* <ReactFlagsSelect

                        className='my-language-select'
                        onSelect={(data) => { setselectedLanguage(data) }}
                        placeholder={selectedLanguage}
                    >

                    </ReactFlagsSelect> */}
                    <ReactFlagsSelect
                        className='my-language-select'
                        selected={selectedLanguage}
                        onSelect={code => setselectedLanguage(code)}
                        showSelectedLabel={showSelectedLabel}
                        showSecondarySelectedLabel={showSecondarySelectedLabel}
                        showOptionLabel={showOptionLabel}
                        showSecondaryOptionLabel={showSecondaryOptionLabel}
                        customLabels={customLabels}
                    />

                </div>
            </div>
            <div className="navbar-area">
                <div className="nav-links-area ">
                    <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }} className='nav-shop-btn'>SHOP <DownArrowLogo /></span>
                    <span>BLOG</span>
                    <span>CONTACT</span>
                    <span>ABOUT</span>
                </div>
                <div className="dropdown-content-area">
                    hi
                </div>
                <div className="nav-logo-area">
                    <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&width=1200" alt="" />
                </div>
                <div className="nav-account-cart-area">
                    <SearchLogo />
                    <span>Account</span>
                    <UserLogo />
                    <span>Cart</span>
                    <CartLogo />
                    0
                </div>
            </div>
        </>
    )
}
