import React from 'react'
import './ourstory.css'


export default function OurStory() {

    return (
        <div className='our-story-full-page'>
            <div className="our-story-main-heading-area">
                <span className='our-story-main-heading'>Our story</span>
            </div>
            <div className="our-story-parts-area">
                <div className="our-story-part">
                    <div className="our-story-part1-text-area">
                        <span className='our-story-part-text'>
                            A little info about who we are,
                            what we do, where we came from and our aspirations for the future...
                            <span>
                                We thank you for shopping with us and hope that this is just the beginning.
                            </span>
                        </span>
                    </div>
                    <div className="our-story-part1-image-area">

                        <iframe className='our-story-part1-image' src="https://www.youtube.com/embed/neFK-pv2sKY" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="our-story-part">
                    <div className="our-story-part2-image-area">
                        <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/iwto_large_c9eba9b9-8043-4ef5-9f8c-1cd420c64cbe.jpg?v=1620767661" alt="" />
                    </div>
                    <div className="our-story-part2-text-area">
                        <span className='our-story-part-text'>
                            Our story began in 2001 in a small studio in the middle of nowhere.
                            <span>
                                With only one desk and next to no free time, our brand was born. Our passion
                                for unique design and collaboration brought our vision, and products, to life.
                            </span>
                        </span>
                    </div>
                </div>
                <div className="our-story-part">
                    <div className="our-story-part3-text-area">
                        <span className='our-story-part-text'>
                        Our products bring together the finest materials and stunning design to create something very special.
                         We believe in quality, care, and creating unique products that everyone can enjoy.
                            <span>
                            Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in.
                            </span>
                            <span>We hope they’ll inspire you too.</span>
                        </span>
                    </div>
                    <div className="our-story-part3-image-area">
                        <img src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/gallery_2_58eb596e-9862-4cbc-8abc-ff884666a6e8.jpg?v=1620073782" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
