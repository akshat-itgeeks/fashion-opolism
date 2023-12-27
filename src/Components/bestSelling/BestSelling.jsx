import React, { useEffect, useState } from 'react';
import './bestselling.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function BestSelling() {
    const [isHovering, setIsHovering] = useState([]);

    const handleMouseOver = (index) => {
        const hovers = [...isHovering]
        hovers[index] = true;
        setIsHovering(hovers);
    };
  
    const handleMouseOut = (index) => {
        const hovers = [...isHovering]
        hovers[index] = false;
        setIsHovering(hovers);
    };
  
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
          <span className='new-looks-heading'>BEST SELLING</span>
        </div>
        <div className="new-looks-carousel-area">
  
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
  
          >
            {AllProducts.map((data,idx) => {
              
              return <>
              
                <div className='carousel-card'>
                  <span className='carousel-card-new-in-area'>NEW IN</span>
                  <img src={ (isHovering[idx]===true)?data.images[0].src:data.images[1].src} alt="" onMouseOver={() => handleMouseOver(idx)} onMouseOut={() => handleMouseOut(idx)} ></img>  
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
      </div>
    )
  }