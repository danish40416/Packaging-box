import React, { useEffect, useState } from 'react'

export default function MegaMenu({ isHovered, setIsHovered }) {
     const [menuScroll, setMenuScroll] = useState(window.scrollY > 50);
     useEffect(() => {
          const handleScroll = () => {
               setMenuScroll(window.scrollY > 50)
          };
          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)

     })

     return (

          <>

               <div className={`mega-menu ${isHovered ? 'shop-hover' : 'd-none'} ${menuScroll ? "menu-scroll" : ''}`} onMouseLeave={() => setIsHovered(false)} >

                    <div className="row gx-0 mega-menu ">
                         <div className="col-lg-3"></div>
                         <div className="col-lg-9 bg-light p-5 mega-menu-content  ">
                              <div class="row gx-0 ">
                                   <div className="col-lg-3">
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">kraft food boxes</h6>
                                             <li><a href="#" title="kraft-tray" className="text-dark">kraft Tray</a></li>

                                             <li><a href="kraft-bowls/" title="kraft-bowls" className="text-dark">Kraft Bowls</a></li>

                                             <li><a href="cake-boxes/" title="cake-boxes" className="text-dark">Cake Boxes</a></li>

                                             <li><a href="kraft-taco-box/" title="kraft-taco-box" className="text-dark">Kraft Taco Boxes</a></li>

                                             <li><a href="kraft-pizza-box/" title="kraft-pizza-box" className="text-dark">Kraft Pizza Boxes</a></li>

                                             <li><a href="kraft-single-burger-box/" title="kraft-single-burger-box" className="text-dark">Kraft Burger Boxes</a></li>

                                             <li><a href="kraft-salad-box/" title="kraft-salad-box" className="text-dark">Kraft Salad box</a></li>

                                             <li><a href="kraft-food-boxes/" title="kraft-food-boxes" className="text-dark">View More ...</a></li>
                                        </ul>
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">Plastic Products</h6>
                                             <li><a href="disposible-food-paking-buckits/" title="black-food-container" className="text-dark">Disposible Food Paking Buckits/</a></li>

                                             <li><a href="disposable-black-plastic-food-packaging-container" title="black-food-container" className="text-dark">Black Food Container</a></li>

                                             <li><a href="16oz-disposable-glass-cup-with-dome-lid/" title="Disposable Glass With Dome Lid" className="text-dark">Disposable Glass With Dome Lid</a></li>

                                             <li><a href="aluminium-foil-container/" title="aluminium-foil-container" className="text-dark">Aluminium Foil Container</a></li>

                                             <li><a href="plastic-products/" title="" className="text-dark">View More ...</a></li>
                                        </ul>
                                   </div>
                                   <div class="col-lg-3">
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">Kraft Standup Poucheses</h6>
                                             <li><a href="kraft-standup-pouch-5-x-3-5-inch-brown/" title="Kraft Standup Pouches Brown" className="text-dark">Kraft Standup Pouches Brown</a></li>

                                             <li><a href="kraft-standup-pouch-12-x-20-cm-white/" title="Kraft Standup Pouches White" className="text-dark">Kraft Standup Pouches White</a></li>

                                             <li><a href="kraft-standup-pouch-5-x-3-5-inch-black/" title="Kraft Standup Pouches Black" className="text-dark">Kraft Standup Pouches Black</a></li>
                                             <li><a href="kraft-standup-pouches/" title="View More" className="text-dark">View More ...</a></li>
                                        </ul>
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">Color Pouches</h6>
                                             <li><a href="#" title="Red Standup Pouches" className="text-dark">Red Standup Pouches </a></li>

                                             <li><a href="#" title="Gold Standup Pouches" className="text-dark">Gold Standup Pouches </a></li>

                                             <li><a href="aluminium-clear-standup-pouches/" title="Aluminium Standup Pouches" className="text-dark">Aluminium Standup Pouches </a></li>

                                             <li><a href="natural-transparent-pouches/" title="Natural Transparent Standup Pouches" className="text-dark">Natural Transparent Standup Pouches </a></li>
                                        </ul>
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">Kraft Bowls</h6>
                                             <li><a href="250ml-kraft-bowl-with-lid/" title="250ml-kraft-bowl-with-lid" className="text-dark">250ml Kraft bowl with lid</a></li>

                                             <li><a href="350ml-kraft-bowl/" title="350ml-kraft-bowl" className="text-dark">350ml Kraft bowl</a></li>

                                        </ul>
                                   </div>
                                   <div className="col-lg-3">

                                        <ul className="list-unstyled">
                                             <li><a href="480-ml-kraft-bowl-with-lid/" title="480 ml Kraft bowl with lid" className="text-dark">480 ml Kraft bowl with lid <span className="badge badge-dark small">NEW</span></a></li>

                                             <li><a href="#" title="750ml-kraft-bowl-with-lid" className="text-dark">750ml Kraft bowl with lid<span className="badge badge-dark small">NEW</span></a></li>

                                             <li><a href="#" title="1000-ml-kraft-bowl-with-lid" className="text-dark">1000 ml Kraft bowl with lid</a></li>

                                             <li><a href="kraft-bowls/" title="kraft-bowls" className="text-dark">View More...</a></li>
                                             <h6 className="font-weight-bold">Kraft Paper Bags</h6>
                                             <li><a href="#" title="lack-handle-bags" className="text-dark">Black Handle Bags</a></li>

                                             <li><a href="#" title="hite-kraft-paper-bag" className="text-dark">White Kraft Paper Bag</a></li>

                                             <li><a href="#" title="raft-paper-bag-with-twisted" className="text-dark">Brown Kraft paper bags</a></li>

                                             <li><a href="#" title="kraft-paper-bags" className="text-dark">View More...</a></li>

                                        </ul>
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">Boxes</h6>
                                             <li><a href="mug-boxes/" title="" className="text-dark">Mug Boxes</a></li>
                                             <li><a href="1-kg-e-commerce-box/" title="" className="text-dark">E Commerce Boxes</a></li>
                                        </ul>
                                   </div>
                                   <div className="col-lg-3">
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">Pizza Boxes</h6>
                                             <li><a href="pizza-boxes-large-size/" title="" className="text-dark">Large Size Pizza Boxes</a></li>
                                             <li><a href="pizza-boxes-medium-size/" title="" className="text-dark">Medium Size Pizza Boxes</a></li>

                                             <li><a href="pizza-boxes-small-size/" title="" className="text-dark">Small Size Pizza Boxes</a></li>
                                        </ul>
                                        <ul className="list-unstyled">
                                             <h6 className="font-weight-bold">ECO Product</h6>
                                             <li><a href="chopsticks/" title="chopsticks" className="text-dark">Chopsticks</a></li>

                                             <li><a href="eco-" title="kraft-paper-bags" className="text-dark">View More...</a></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div >
          </>

     )
}
