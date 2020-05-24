import React from 'react'
import { useCart } from '../context/cart-context';
import { Link } from 'react-router-dom';
import { STORE_SEARCH } from '../constants/url';

function Checkout(props) {
  const {data: items, addItem, deleteItem, getAmount } = useCart();

  const totalPrice = items.reduce(
    (x, item) => x + item.amount * Number(item.price), 0
  )

  const handleSubmit = e => {
    e.preventDefault();
    console.log("ordered: ");
    console.log(items);
    setTimeout(() => window.location.assign('/checkout?redirect=success'), 2000);
  }

  console.log(props);

  return (
    <div className="container">
      <div className="container">
        <h5>Here are your items:</h5>
        {items.length > 0 ? (
          <>
        <table class="striped">
          <thead style={{borderBottom: "1px solid black"}}>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Quantity</th>
              <th>Total Price</th> 
            </tr>
          </thead>
          <tbody>
            {
              items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    {item.amount}
                    <span style={{width : 10}}>&nbsp;&nbsp;</span>
                    <button onClick={() => addItem(item, 1)} className="btn-floating  waves-effect waves-light teal">
                      <i className="fas fa-plus" />
                    </button>
                    <span style={{width : 10}}>&nbsp;&nbsp;</span>
                    {
                      getAmount(item.id) > 0 &&
                      <button onClick={() => deleteItem(item.id, 1)} className="btn-floating  waves-effect waves-light red" >
                        <i className="fas fa-minus" />
                      </button>
                    }
                  </td>
                  <td>$ {item.amount * Number(item.price)}</td>
                </tr>
              ))
            }
            { totalPrice > 0 &&
              <tr style={{borderTop: "1px solid black"}}>
                <td></td>
                <td></td>
                <td></td>
                <td>$ {totalPrice}</td>
              </tr>
            }
          </tbody>
        </table>
        <div style={{height: 50}}></div>
        <button className="btn right" onClick={handleSubmit}>Order now!</button>
        </>
        ) : (
          <>
            <div>You have nothing in your cart yet</div>
            <div style={{ minHeight: 30 }}></div>
            <Link to={STORE_SEARCH} className="btn">
              Search some store
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Checkout
