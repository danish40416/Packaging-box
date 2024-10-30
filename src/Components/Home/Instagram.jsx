import React from 'react'
import Button from 'react-bootstrap/Button';
import data from '../../Data.json'
export default function Instagram() {
     const dataCategory = data.find(p => p.category === 'instagram');
     const instaData = dataCategory ? dataCategory.images : []

     return (
          <section className='container my-5'>
               <div className="row g-5">
                    <h2 className='text-center mb-3'>Follow Us @packagingbox.pk on Instagram</h2>

                    {instaData.map((product) => (
                         <div key={product.id} className=" col-6 col-lg-3 ">
                              <img src={product.image} alt='instagram' className='img-fluid' />

                         </div>
                    ))}

                    <div className='d-flex justify-content-center'>
                         <Button variant="primary" className='px-4'>
                              <i class="fa-brands fa-instagram me-3"></i>
                              View On Instagram</Button>

                    </div>
               </div>
          </section>
     )
}
