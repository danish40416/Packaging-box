import React from 'react'
import Button from 'react-bootstrap/Button';
import data from '../../../Data.json'
export default function FoodPackaging() {
     const FoodCategory = data.find(p => p.category === 'Food-packaging')
     const foodPackaging = FoodCategory ? FoodCategory.products : [];
     return (
          <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 food-products  my-4 py-3">
               {foodPackaging.map((product) => (
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
