import React, { useContext } from 'react';

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext';
import CartContext from '../contexts/CartContext';

const Products = () => {
  const { products } = useContext(ProductContext);
  const { addItem } = useContext(CartContext);

  return (
    <div className="products-container">
      {products.map((product, idx) => (
        <Product
          key={`${product.id} ${idx}`}
          product={product}
          addItem={addItem}
        />
      ))}
    </div>
  );
};

export default Products;
