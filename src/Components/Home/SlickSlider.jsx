import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from '../../Data.json'
export default function SlickSlider() {
     const dataCategory = data.find(d => d.category === 'Blog');
     const slickData = dataCategory ? dataCategory.blogData : []

     var settings = {
          infinite: true,
          speed: 200,
          slidesToShow: 4,
          slidesToScroll: 1,
     };
     return (
          <div>
               <h2 className='text-center my-4'>Our Blog</h2>
               <div className='bg-light'>
                    <div className='container my-5 '>
                         <Slider {...settings}>
                              {slickData.map((product) => (
                                   <div key={product.id} className='px-3 ms-2 blog'>
                                        <img src={product.image} alt="" className='img-fluid' />
                                        <div className='bg-primary p-3 text-white'>
                                             <a href="#" className='tetx-white text-decoration-none'><h6>{product.title} </h6></a>
                                             <p>{product.description} </p>
                                        </div>


                                   </div>
                              ))}

                         </Slider>
                    </div>
               </div>
          </div>
     )
}
