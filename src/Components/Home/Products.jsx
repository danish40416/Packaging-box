import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FoodPackaging from './Products List/FoodPackaging';
import KraftPouches from './Products List/KraftPouches';
import BakeryPackaging from './Products List/BakeryPackaging';
import PlasticProducts from './Products List/PlasticProducts'
import KraftPaperBags from './Products List/KraftPaperBags';
import TinBoxes from './Products List/TinBoxes';
import Button from 'react-bootstrap/Button';

export default function Products() {
     return (
          <div>
               <section className=' container my-5 py-4 tabs'>
                    <div className=" text-center ">
                         <h1>An Initiative of Packaging Box Limited</h1>
                         <p>Packaging Box provides you with the knowledge and the technology of the top packaging  firm in Pakistan.<br />
                              Corrugated boxes are available for pickup and developed by our experts to meet everyday use with no minimum order quantities. <br />
                              We also provide customization services for orders of more than 2000 pieces!</p>
                    </div>

                    <Tabs
                         defaultActiveKey="food-packaging"
                         className="mb-3 tabs"
                         justify
                    >
                         <Tab eventKey="food-packaging" title=" Food Packaging">
                              <FoodPackaging />
                              <div className='d-flex justify-content-center'>
                                   <Button variant="outline-dark">View More</Button>
                              </div>
                         </Tab>
                         <Tab eventKey="kraft-standup-pouches" title="Kraft Standup Pouches">
                              <KraftPouches />
                              <div className='d-flex justify-content-center'>
                                   <Button variant="outline-dark">View More</Button>
                              </div>
                         </Tab>
                         <Tab eventKey="bakery-packaging" title="Bakery Packaging">
                              <BakeryPackaging />
                              <div className='d-flex justify-content-center'>
                                   <Button variant="outline-dark">View More</Button>
                              </div>
                         </Tab>
                         <Tab eventKey="plastic-products" title="Plastic Products" >
                              <PlasticProducts />
                              <div className='d-flex justify-content-center'>
                                   <Button variant="outline-dark">View More</Button>
                              </div>
                         </Tab>
                         <Tab eventKey="kraft-paper-bag" title=" Kraft Paper Bags" >
                              <KraftPaperBags />
                              <div className='d-flex justify-content-center'>
                                   <Button variant="outline-dark">View More</Button>
                              </div>
                         </Tab>
                         <Tab eventKey="tin-boxes" title=" Tin Boxes" >
                              <TinBoxes />
                              <div className='d-flex justify-content-center'>
                                   <Button variant="outline-dark">View More</Button>
                              </div>

                         </Tab>
                    </Tabs>

               </section>
          </div >
     )
}
