import React from 'react';

export default function Product(props) {
  const { product, onAdd, onRemove } = props;
  return (
    <div>
     
      <h3>{product.name}</h3>
      <div>R{product.price}</div>
      <div><button onClick={() => onAdd(product)}>Add Stock</button></div>
        <div><button onClick={() => onRemove(product)}>Remove Stock</button>
      </div>
    </div>
  );
}
