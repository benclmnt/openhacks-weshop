import React from 'react';

import { client } from '../utils/client';
import Items from './Items';
import { API_CATALOGUE } from '../constants/api-url';
import { useCart } from '../context/cart-context';

import data from './storeItems.json';

function Store(props) {
  const [items, setItems] = React.useState(null);
  const storeid = props.match.params.storeid;
  const cartContext = useCart();
  console.log(cartContext);

  React.useEffect(() => {
    client(API_CATALOGUE, {
      body: {
        storeid
      }
    }).then(data => console.log(data));
  }, []);

  const itemsList = data.map((item, index) => (
    <Items item={item} storeid={storeid} key={index}/>
  ));
  return data.length > 0 ? (
    <div className="row container">
      <h3>Walmart</h3>
      {itemsList}
    </div>
  ) : (
    <div className="container">We currently have no data from this store.</div>
  );
}

export default Store;
