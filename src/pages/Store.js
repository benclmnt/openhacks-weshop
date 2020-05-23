import React from 'react'

import { client } from '../utils/client';
import data from './storeItems.json';
import Items from './Items';

const target =  "https://us-central1-aiot-fit-xlab.cloudfunctions.net/weshopgetcataloguebystoreid";

function Store() {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    client(target, {
      body: {
        storeid: "ad73c946-7ffb-4fea-9ede-721ed152d275"
      }
    }).then(data => console.log(data))
  }, [])

  console.log(data);

  const itemsList = data.map((item) => <Items item={item}/>);
  return data.length > 0 ? (
    <div className="row container">
      <h3>Walmart</h3>
      { itemsList }
    </div>
  ) : (
    <div className="container">
      We currently have no data from this store.
    </div>
  )
}

export default Store;

