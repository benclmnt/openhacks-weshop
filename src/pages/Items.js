import React from 'react'

import '../css/image.css'
import '../css/storeItems.css'

function Item({ item }) {
  return (
    <div className="col s12 m6 l4 card z-depth-0" style={{ height: 350}}>
      <div className="card-image" style={{ borderRadius: 5, boxShadow: '1px 3px 10px #aaa' }}>
        {/* <div className="image-content"> */}
        <img src={item.imageUrl}/>
        {/* </div> */}
        <span className="card-title">{item.name}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="fas fa-plus" /></a>
      </div>
      <div className="card-content">
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default Item
