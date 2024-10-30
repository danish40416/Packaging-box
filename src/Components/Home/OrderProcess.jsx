import React from 'react'

export default function OrderProcess() {

     return (
          <section class="my-5 ">

               <div class="container">
                    <div className="row text-center mb-5">

                         <h2 className='fw-bold fs-1'>Our Customised Order Process
                         </h2>
                    </div>
                    <div class="row row-cols-1 row-cols-lg-5 g-2 g-lg-3 order-content">
                         <div class="col">
                              <div class="p-3 border bg-light position-relative text-center">
                                   <span>01</span>
                                   <img src="images/order/first-order.webp" alt="order" className='img-fluid' />
                                   <h5 className='text-primary my-3' >Order</h5>
                                   <p>Get your order delivered within 15 working days.</p>
                              </div>
                         </div>
                         <div class="col">
                              <div class="p-3 border bg-light position-relative text-center">
                                   <span>02</span>
                                   <img src="images/order/design-choose.webp" alt="design" />
                                   <h5 className='text-primary my-3' >Design</h5>
                                   <p>Get your order delivered within 15 working days.</p>
                              </div>
                         </div>
                         <div class="col">
                              <div class="p-3 border bg-light position-relative text-center">
                                   <span>03</span>
                                   <img src="images/order/approve-deal.webp" alt="" />
                                   <h5 className='text-primary my-3' >Approve</h5>
                                   <p>Get your order delivered within 15 working days.</p>
                              </div>
                         </div>
                         <div class="col">
                              <div class="p-3 border bg-light position-relative text-center">
                                   <span>04</span>
                                   <img src="images/order/production.webp" alt="" />
                                   <h5 className='text-primary my-3' >Production</h5>
                                   <p>Get your order delivered within 15 working days.</p>
                              </div>
                         </div>
                         <div class="col">
                              <div class="p-3 border bg-light position-relative  text-center">
                                   <span>05</span>
                                   <img src="images/order/delivery.webp" alt="" />
                                   <h5 className='text-primary my-3' >Delivery</h5>
                                   <p>Get your order delivered within 15 working days.</p>

                              </div>
                         </div>

                    </div>
               </div>
          </section>
     )
}
