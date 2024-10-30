import React from 'react'
import Copyright from './Copyright'
import Offers from './Offers'
export default function Footer() {
     return (
          <footer class="footer-section ">
               <Offers />
               <div class="container">
                    <div class="footer-content pt-5 pb-5">
                         <div class="row">
                              <div class="col-xl-4 col-lg-4 mb-50">
                                   <div class="footer-widget"> <div class="footer-logo">
                                        <a href="#">
                                             <img src="images/footer-logo.png" alt="logo" />
                                        </a>
                                   </div>
                                        <div class="footer-text">
                                             <p >In Packaging Box, we've combined the best of
                                                  both worlds: a vibrant startup environment backed by the expertise of one
                                                  of Pakistan's most reputable packaging firms. Packaging Box is the first
                                                  online platform for packaging in Pakistan that offers customers premium and
                                                  reliable packaging on their doorsteps. Packaging Box provides high-quality packaging to
                                                  SMEs and restaurants, startups, retail stores, home businesses, and other retailers across
                                                  Pakistan and around the world.</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                   <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                             <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                             <li><a href="#">About us</a></li>
                                             <li><a href="#">Visit shop</a></li>
                                             <li><a href="#">FAQ's</a></li>
                                             <li> <a href="#">Contact us</a> </li>
                                             <li> <a href="#">Our Blog</a> </li>
                                             <li><a href="#">Log in</a></li>
                                             <li><a href="#">Sitemap</a></li>
                                             <li><a href="#">Sign in</a></li>
                                             <li><a href="#">My Wishlist</a> </li>
                                             <li><a href="#">Track My Order</a></li>
                                             <li><a href="#">Disclaimer</a></li>
                                             <li> <a href="#">Money-back guarantee!</a></li>
                                             <li><a href="#">Returns</a></li>
                                             <li><a href="#">Shipping</a> </li>
                                             <li><a href="#">Terms and conditions</a></li>
                                             <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                   </div>
                              </div>

                              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                   <div class="footer-widget">
                                        <div class="footer-widget-heading mt-3">
                                             <h3>Contact Detail</h3>
                                        </div>
                                        <div>
                                             <div class="footer-text-contact-detail">
                                                  <i class="fa fa-location-arrow me-2">
                                                  </i>375 Ali Town, Raiwind Road, Lahore, 54000, Pakistan, Lahore, Pakistan, 54000</div>
                                             <div>
                                                  <a href="tel:+923274192519" class="footer-text-contact-detail" >
                                                       <i class="fa fa-mobile me-2">
                                                       </i>Phone: +923274192519</a>
                                             </div>
                                             <div>
                                                  <div class="footer-text-contact-detail">
                                                       <i class="fa-regular fa-envelope me-2"></i>Email: info@packagingbox.pk</div>
                                             </div>
                                        </div>
                                        <div class="footer-social-icon">
                                             <span>Follow us</span>
                                             <a href="#"><i class="fa-brands fa-facebook-f mx-3"></i></a>
                                             <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <Copyright />
          </footer>

     )
}
