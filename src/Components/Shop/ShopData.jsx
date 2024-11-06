import React from 'react'
import Button from 'react-bootstrap/Button';
import Data from '../../Data.json'
export default function ShopData({ selectedCategory }) {
     const dataType = Data.map(type => type.type === 'products')
     const allProducts = dataType ? dataType.products : []
     console.log(dataType)
     return (
          <div>
               <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                         <li class="breadcrumb-item"><a href="#">Home</a></li>
                         <li class="breadcrumb-item active" aria-current="page">{selectedCategory}</li>

                    </ol>
               </nav>
               <h2>{selectedCategory}</h2>

               {Data.filter(product => product.category === selectedCategory).map((product) => (
                    <p>{product.description}</p>
               ))}
               <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 food-products  my-4 py-3">
                    {Data.filter(product => product.category === selectedCategory).map((product) => (
                         product.products.map((p) => (
                              <div key={p.id}>
                                   <img src={p.image} alt={p.name} className="img-fluid mt-4" />
                                   <h6>{p.title}</h6>
                                   <p>RS <span>&nbsp;{product.price}</span></p>
                                   <Button variant="primary">Select Option</Button>
                              </div>
                         ))
                    ))}
               </div>
          </div>
     )
}
