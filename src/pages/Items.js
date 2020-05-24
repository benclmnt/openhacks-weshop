import React from 'react';

import '../css/image.css';
import '../css/storeItems.css';
import { useCart } from '../context/cart-context';

function Item({ item, storeid }) {
  const {addItem, deleteItem, getAmount} = useCart();
  const handleAdd = e => {
    addItem(item, 1);
  }

  const handleRemove = e => {
    deleteItem(item.id, 1)
  }

  return (
    <div className="col s12 m6 l4 card z-depth-0" style={{ height: 400 }}>
      <div
        className="card-image"
        style={{ borderRadius: 5, boxShadow: '1px 3px 10px #aaa' }}
      >
        {/* <div className="image-content"> */}
        <img src={item.imageUrl} />
        {/* </div> */}
        <span className="card-title">{item.name}</span>
        <button onClick={handleAdd} className="btn-floating halfway-fab waves-effect waves-light red">
          <i className="fas fa-plus" />
        </button>
        {
          getAmount(item.id) > 0 &&
          <button onClick={handleRemove} className="btn-floating halfway-fab waves-effect waves-light red" style={{transform: "translateY(50px)"}}>
            <i className="fas fa-minus" />
          </button>
        }
      </div>
      <div className="card-content">
        <p>{item.description}</p>
        <p>Dimension: {item.dimensions.height} x {item.dimensions.width} x {item.dimensions.depth}</p>
        <p>Weight: {item.dimensions.weight} kg</p>
        <p><b>{getAmount(item.id)}</b> in cart</p>
      </div>
    </div>
  );
}

export default Item;
