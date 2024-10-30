import React from 'react'
import data from '../../../Data.json'
import Button from 'react-bootstrap/Button';
export default function TinBoxes() {
     const productCategory = data.find(p => p.category === 'Tin-Boxes')
     const tinBoxes = productCategory ? productCategory.products : [];
     return (
          <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 food-products  my-4 py-3">
               {tinBoxes.map((product) => (
                    <div key={product.id} className="col mb-4">
                         <a href={product.link}>
                              <img src={product.image} alt={product.name} className="img-fluid mt-4" />
                              <h6>{product.title}</h6>
                              <p>RS <span>&nbsp;{product.price}</span></p>
                              <Button variant="primary">Select Option</Button>
                         </a>
                    </div>
               ))}

          </div>
     )
}
