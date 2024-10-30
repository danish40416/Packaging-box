import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Second from './img/4.webp'
import First from './img/First.webp'
import Third from './img/ExampleCarouselImage.webp'

export default function Slider() {
     return (
          <div>
               <Carousel>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={First}
                              alt="First slide"
                         />

                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={Second}
                              alt="First slide"
                         />

                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={Third}
                              alt="First slide"
                         />

                    </Carousel.Item>
               </Carousel>
          </div>
     )
}
