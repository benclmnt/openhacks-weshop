import React from 'react'

import { client } from '../utils/client';

const target =  "https://us-central1-aiot-fit-xlab.cloudfunctions.net/weshopgetcataloguebystoreid";

function Store() {
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    client(target, {
      body: {
        storeid: "ad73c946-7ffb-4fea-9ede-721ed152d275"
      }, 
      headers: {
        "Postman-Token": "fff88a62-18ec-42df-ac15-2204c32d3e63"
      }
    }).then(data => console.log(data))
  }, [])
  
  return (
    <div>
      Hello from store.
    </div>
  )
}

export default Store
