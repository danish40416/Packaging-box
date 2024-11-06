import React, { useState } from 'react'
import Topbar from '../Components/Home/Topbar'
import Navbar from '../Components/Home/Navbar'
import Form from 'react-bootstrap/Form';
import Data from '../Data.json'
import ShopData from './Shop/ShopData';


export default function Shop() {
     const productCategory = Data.map(product => product.category).filter(category => category && category.trim() !== '')

     const [updatedCategory, setUpdatdCategory] = useState(false);
     const handleChange = (e) => {
          setUpdatdCategory(e.target.value);
     }
     const selectedCategory = updatedCategory ? updatedCategory : 'Shop';
     const shopType = Data.find(type => type.type === 'top-rated');
     const typeProducts = shopType ? shopType.products : [];


     return (
          <div>
               <Topbar />
               <Navbar />
               <div className="w-100 page-title bg-light d-flex justify-content-center align-items-center">
                    <h1 className='display-4 fw-bold'>Shop</h1>
               </div>
               <div className="row gx-0  py-5">
                    <div className="col-3 px-3">
                         <input type="text" placeholder='Search' className='w-100 p-2 form-control mb-4' />

                         <Form.Select onChange={handleChange}>
                              <option disabled selected>Select Category</option>

                              {productCategory.map((category, index) =>
                                   <option key={index} >{category}</option>
                              )}

                         </Form.Select>
                         <div className='my-4'>
                              <h3>Products</h3>
                              {typeProducts.map((item, index) =>
                                   <div key={index} >
                                        <div className='d-flex align-items-center justify-content-between'>
                                             <a className='fw-bold' href="">{item.title}</a>
                                             <img src={item.image} alt="" className='img-fluid shop-image' />
                                        </div>
                                        <p className='m-0'>RS <span>&nbsp;{item.price}</span></p>

                                   </div>

                              )}

                         </div>
                    </div>
                    <div className="col-9 px-3">
                         <ShopData selectedCategory={selectedCategory} />
                    </div>
               </div>
          </div >
     )
}
