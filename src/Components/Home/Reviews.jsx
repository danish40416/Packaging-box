import React from 'react'
import Slider from "react-slick";
export default function Reviews() {
     var settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
     };


     return (
          <div className='container my-5 '>
               <div class="row ">
                    <h2 className='text-center py-5'>Packaging Box Google Review</h2>
                    <div className="col-3 px-4 d-flex reviews align-items-center ">
                         <div className="left ">
                              <img src="images/review1.webp" height="50" width="50" alt="" className='rounded-circle' />
                         </div>
                         <div className="reviews-right">
                              <a href="#">Packaging box</a>
                              <div>
                                   <span className='fs-5 fw-bolder text-primary'>4.4 <span>
                                        <img src="images/stars.png" alt="" height="20" /></span>
                                   </span>
                              </div>
                              <div>Based on & Reviews</div>
                              <img src="images/google.png" alt="" height="18" width="144" className='img-fluid' />
                         </div>
                    </div>


                    <div class="col-9 review-slider">
                         <Slider {...settings}>
                              <div className="col-3 px-4 reviews ">
                                   <div className="left d-flex ">
                                        <img src="images/review1.webp" height="50" width="50" alt="" className='rounded-circle' />
                                        <div className='slider-review'>
                                             <span >Danish Mehmood</span>
                                             <div className='review-date '>2 years ago</div>
                                        </div>
                                   </div>
                                   <div className="reviews-right">
                                        <img className='my-3' src="images/stars.png" alt="" height="20" />
                                        <div className='review-date '>I’ve been using Kraft Stand-Up Pouches for over three months now and there is no better way to display any product uniquely and conveniently. The clear window provides you with a peep of what’s inside, while the plastic ensures the contents are safe and sound. I have ordered them time after time, and absolutely love this product!</div>
                                   </div>
                              </div>
                              <div className="col-3 px-4 reviews  " height="100" >
                                   <div className="left d-flex ">
                                        <img src="images/review1.webp" height="50" width="50" alt="" className='rounded-circle' />
                                        <div className='slider-review'>
                                             <span >Danish Mehmood</span>
                                             <div className='review-date '>2 years ago</div>
                                        </div>
                                   </div>
                                   <div className="reviews-right">
                                        <img className='my-3' src="images/stars.png" alt="" height="20" />
                                        <div className='review-date '>I’ve been using Kraft Stand-Up Pouches for over three months now and there is no better way to display any product uniquely and conveniently. The clear window provides you with a peep of what’s inside, while the plastic ensures the contents are safe and sound. I have ordered them time after time, and absolutely love this product!</div>
                                   </div>
                              </div>

                              <div className="col-3 px-4 reviews ">
                                   <div className="left d-flex ">
                                        <img src="images/review1.webp" height="50" width="50" alt="" className='rounded-circle' />
                                        <div className='slider-review'>
                                             <span >Danish Mehmood</span>
                                             <div className='review-date '>2 years ago</div>
                                        </div>
                                   </div>
                                   <div className="reviews-right">
                                        <img className='my-3' src="images/stars.png" alt="" height="20" />
                                        <div className='review-date '>I’ve been using Kraft Stand-Up Pouches for over three months now and there is no better way to display any product uniquely and conveniently. The clear window provides you with a peep of what’s inside, while the plastic ensures the contents are safe and sound. I have ordered them time after time, and absolutely love this product!</div>
                                   </div>
                              </div>
                         </Slider>
                    </div>
               </div>
          </div>
     )
}
