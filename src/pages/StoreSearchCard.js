import React from 'react';
import { Link } from 'react-router-dom';

function StoreSearchCard({ store }) {
  return (
    <Link to={`/store/${store.storeId}`}>
      <div className="col s12 m6 l4 card z-depth-0" style={{ height: 350 }}>
        <div
          className="card-image"
          style={{ borderRadius: 5, boxShadow: '1px 3px 10px #aaa' }}
        >
          {/* <div className="image-content"> */}
          <img src={store.imageUrl} />
          {/* </div> */}
          <span className="card-title"><b>{store.name} Store</b></span>
        </div>
        <div className="card-content">
          <p>{store.location}</p>
          <p>{store.phone}</p>
          <a href={store.website}>Website</a>
        </div>
      </div>
    </Link>
  )
}

export default StoreSearchCard
