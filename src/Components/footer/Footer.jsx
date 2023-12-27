import React, { useState } from 'react'
import './footer.css';
import { ReactComponent as FacebookLogo } from '../../Svg/FacebookLogo.svg';
import { ReactComponent as TwitterLogo } from '../../Svg/TwitterLogo.svg';
import { ReactComponent as PintrestLogo } from '../../Svg/PinterestLogo.svg';
import { ReactComponent as InstagramLogo } from '../../Svg/InstagramLogo.svg';
import { ReactComponent as VisaLogo } from '../../Svg/visa.svg';
import { ReactComponent as MasterCard } from '../../Svg/masterCard.svg';
import { ReactComponent as PaypalLogo } from '../../Svg/paypal.svg';
import { ReactComponent as AExpress } from '../../Svg/AE.svg';
import { ReactComponent as Img5 } from '../../Svg/Image5.svg';
import { ReactComponent as Img6 } from '../../Svg/Image6.svg';

import ReactFlagsSelect from 'react-flags-select';

export default function Footer() {

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
        <div className='footer-main-page'>
            <div className="footer-black-part">
                <div className="footer-black-part1">
                    <span className='footer-black-part1-heading'>Subscribe to our newsletter</span>
                    <span className='footer-black-part1-text'>Signup for our newsletter to stay up to date on sales and events .</span>
                </div>
                <div className="footer-black-part2">
                    <div className="email-join-part">
                        <input type="text" placeholder='Enter Your Email Address' />
                        <span className='footer-black-part-join'>Join</span>
                    </div>
                    <span className='logo-area'>
                        <FacebookLogo stroke='white' />
                        <TwitterLogo />
                        <PintrestLogo />
                        <InstagramLogo />
                    </span>
                </div>
            </div>
            <br />

            <div className="footer-white-part">
                <div className="footer-white-part1">
                    <span className='footer-heading'>THEME DEMOS</span>
                    <div className="footer-decription-area">
                        <span>Empire</span>
                        <span>Popup Shop</span>
                        <span>Gallaria</span>
                        <span>Theme Features</span>
                    </div>

                </div>
                <div className="footer-white-part2">
                    <span className='footer-heading'>RECENT POSTS</span>
                    <div className="footer-decription-area">
                        <span>3 Day Detox</span>
                        <span>Launch Party</span>
                        <span>Walk your way to healthy</span>
                    </div>
                </div>
                <div className="footer-white-part3">
                    <span className='footer-heading'>ABOUT</span>
                    <div className="footer-decription-area">
                        <span>Since 2007 We are Underground have been building</span>
                        <span>Shopify themes for merchants around the globe.</span>
                        <span style={{paddingTop:'10px'}}>Each theme includes <b>Free</b> support and <b>Free</b> updates.</span>
                    </div>
                </div>
            </div>
            <span style={{ padding: '0px 50px', width: '95%', height: '1px', backgroundColor: "#DDD" }}></span>
            <br />
            <div className="footer-bottom-part">
                <div className="footer-bottom-left">
                    <span className='bottom-logo-area'>
                        <FacebookLogo stroke='black' />
                        <TwitterLogo stroke='black' />
                        <PintrestLogo stroke='black' />
                        <InstagramLogo stroke='black' />
                    </span>
                    <span className='footer-bottom-left-text'>© 2023 Fashionopolism - Haute • Website builder by Shopify</span>
                </div>
                <div className="footer-bottom-right">
                    <ReactFlagsSelect
                            className='footer-my-language-select'
                            selected={selectedLanguage}
                            onSelect={code => setselectedLanguage(code)}
                            showSelectedLabel={showSelectedLabel}
                            showSecondarySelectedLabel={showSecondarySelectedLabel}
                            showOptionLabel={showOptionLabel}
                            showSecondaryOptionLabel={showSecondaryOptionLabel}
                            customLabels={customLabels}
                        />
                        <div className="footer-bottom-right-payment">

                            <VisaLogo className='footer-bottom-payment-logo'/>
                            <MasterCard className='footer-bottom-payment-logo' />
                            <AExpress className='footer-bottom-payment-logo'/>
                            <PaypalLogo className='footer-bottom-payment-logo'/>
                            <Img5 className='footer-bottom-payment-logo'/>
                            <Img6 className='footer-bottom-payment-logo'/>

                        </div>
                </div>
            </div>
        </div>
    )
}
