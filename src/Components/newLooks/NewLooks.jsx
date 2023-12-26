import React, { useEffect, useState } from 'react';
import './newlooks.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function NewLooks() {

  const [AllProducts, setallProducts] = useState([])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  useEffect(() => {
    fetch("https://fashionopolism-secret-sale.myshopify.com/products.json")
      .then((data) => data.json())
      .then((res) => { setallProducts(res.products) })
  }, [])



  return (
    <div className='new-looks-area'>
      <div className="new-looks-heading-area">
        <span className='new-looks-heading'>NEW LOOKS</span>
      </div>
      <div className="new-looks-carousel-area">

        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}

        >
          {AllProducts.map((data) => {
            
            return <>
            
              <div className='carousel-card'>
                <span className='carousel-card-new-in-area'>NEW IN</span>
                <img src={data.images[0].src} alt="" />
                <div className="carousel-card-text-area">
                  <span>{data.title}</span>
                  <span>{data.variants[0].price} $</span>
                  <span className='carousel-card-types-circles'>
                    <img src={data.images[1].src} alt="" />
                    <img src={data.images[2].src} alt="" />
                  </span>
                  <div className="carousel-card-size-area">
                    {data.options[0].values.map((sizes)=>
                    {
                      return <span>{sizes}</span>
                    })}
                  </div>
                </div>
              </div>

            </>
          })}

        </Carousel>

      </div>
      <div className="carousel-card-view-all-area">
        <span className='carousel-card-view-all'>View all</span>
      </div>
    </div>
  )
}