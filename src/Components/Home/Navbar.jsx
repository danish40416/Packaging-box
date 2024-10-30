import React, { useState, useEffect } from 'react';

export default function Navbar() {
     const [scrolled, setScrolled] = useState(false);
     const [logo, setLogo] = useState(window.innerWidth < 578);
     const [menuOpen, setMenuOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 50);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     useEffect(() => {
          const handleResize = () => {
               setLogo(window.innerWidth < 578);
          };
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
     }, []);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div>
               <nav className={`navbar navbar-expand-xl bg-light p-3 shadow-lg ${scrolled ? 'scrolled' : ''}`}>
                    <div className="container-fluid">
                         <div className="logo">
                              <a href="/" className="navbar-brand">
                                   {logo ? (
                                        <img src="images/footer-logo.png" className="img-fluid sm-logo" alt="logo" />
                                   ) : (
                                        <img src="images/logo.png" alt="logo" />
                                   )}
                              </a>
                         </div>

                         <button
                              className="navbar-toggler"
                              type="button"
                              onClick={toggleMenu}
                              aria-controls="bootstrap-nav-collapse"
                              aria-expanded={menuOpen}
                              aria-label="Toggle navigation"
                         >
                              <span className={`navbar-toggler-icon ${menuOpen ? '<i class="fa-solid fa-bars"></i>' : <i class="fa-solid fa-xmark"></i>}`}></span>
                         </button>

                         <div className={`navbar-collapse collapse ${menuOpen ? 'show' : ''}`} id="bootstrap-nav-collapse">
                              <ul className="navbar-nav ms-auto">
                                   <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                             role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Shop</a>
                                   </li>
                                   <li ><a href="/zero-waste-kits" className="nav-link">Zero Waste Kits</a></li>
                                   <li><a href="/shop" className="nav-link">Shop</a></li>
                                   <li><a href="/track-order" className="nav-link">Track Order</a></li>
                                   <li><a href="/my-account" className="nav-link">My Account</a></li>
                                   <li><a href="/customize-order" className="nav-link">Customize Order</a></li>
                              </ul>
                              <div>
                                   <a title="search" data-toggle="modal" className="item-detail">
                                        <i className="fa-solid fa-magnifying-glass"></i> Search
                                   </a>
                              </div>
                              <div>
                                   <a className="cart-customlocation mx-1 item-detail" href="/cart" title="View your shopping cart">
                                        <i className="fa fa-shopping-cart me-1"></i>0 items – <span className="amount">
                                             <bdi><span className="currencySymbol">₨</span>&nbsp;0</bdi>
                                        </span>
                                   </a>
                              </div>
                         </div>
                    </div>
               </nav>
          </div>
     );
}
