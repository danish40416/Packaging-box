import React from 'react'

export default function Offers() {
     return (
          <section className='bg-light '>
               <div className="container offer py-5">
                    <div className="row">
                         <div className="col-12 col-md-3">
                              <div className="offer-text">
                                   <img src="images/offer/rocket.png" alt="" className='img-fluid' />
                                   <div >
                                        <h4>Free Shipping</h4>
                                        <span>orders 150,000 or more</span>
                                   </div>
                              </div>
                         </div>
                         <div className="col-12 col-md-3">
                              <div className="offer-text">
                                   <img src="images/offer/refresh.png" alt="" className='img-fluid' />
                                   <div >
                                        <h4>Returns</h4>
                                        <span>within 5 days</span>
                                   </div>
                              </div>
                         </div>
                         <div className="col-12 col-md-3">
                              <div className="offer-text">
                                   <img src="images/offer/half.png" alt="" className='img-fluid' />
                                   <div >
                                        <h4>Get 5% Off 1 Item</h4>
                                        <span>When you sign up</span>
                                   </div>
                              </div>
                         </div>
                         <div className="col-12 col-md-3">
                              <div className="offer-text">
                                   <img src="images/offer/user.png" alt="" className='img-fluid' />
                                   <div >
                                        <h4>We Support</h4>
                                        <span>24/7 amazing services</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </section>
     )
}
