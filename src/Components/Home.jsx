import React from 'react'
import Topbar from './Home/Topbar'
import Navbar from './Home/Navbar'
import Slider from './Home/Slider'
import Products from './Home/Products'
import EcoBanner from './Home/EcoBanner'
import EcoProducts from './Home/EcoProducts'
import KraftBanner from './Home/KraftBanner'
import KraftPouches from './Home/KraftPouches'
import OrderProcess from './Home/OrderProcess'
import Masnory from './Home/Masnory'
import SlickSlider from './Home/SlickSlider'
import Instagram from './Home/Instagram'
import Footer from './Home/Footer'
import Reviews from './Home/Reviews'
import MegaMenu from './Home/MegaMenu'

export default function Home() {
     return (
          <div>
               <Topbar />
               <Navbar />
               <MegaMenu />
               <Slider />
               <Products />
               <EcoBanner />
               <EcoProducts />
               <KraftBanner />
               <KraftPouches />
               <OrderProcess />
               <Masnory />
               <SlickSlider />
               <Instagram />
               <Reviews />
               <Footer />

          </div>
     )
}
