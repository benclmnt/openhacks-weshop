import React from 'react';
import M from 'materialize-css';

import { useCart } from '../context/cart-context';

import Jane from '../assets/Jane.jpg';
import Verified from '../assets/verified.jpg';
import { Link } from 'react-router-dom';

function Buyer() {
  const { data: items } = useCart();
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    const n = Number(window.localStorage.getItem('index'));
    const newOrders = [];
    for (let i = 1; i < n; i++) {
      const order = window.localStorage.getItem(`order ${i}`);
      newOrders.push(JSON.parse(order));
    }
    newOrders.reverse();
    setOrders(newOrders);
  }, []);

  React.useEffect(() => {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {
      accordion: false
    });
  }, []);

  React.useEffect(() => {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});
  }, []);

  return (
    <div className="container">
      <div style={{ display: 'flex', padding: 20, margin: 20 }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img src={Jane} style={{ height: 150 }} />
          <h4>Jane Doe</h4>
          <p>
            Member since 2012 <br />
            Based in San Francisco, California{' '}
          </p>
          <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
            Frequented
          </a>
          <a class="dropdown-trigger btn" href="#" data-target="dropdown2">
            Payment
          </a>
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <a href="#">Walmart</a>
            </li>
            <li>
              <a href="#">Target</a>
            </li>
            <li>
              <a href="#">Whole Foods</a>
            </li>
            <li>
              <a href="#">Amazon Delivery</a>
            </li>
            <li>
              <a href="#">Intranet</a>
            </li>
          </ul>
          <ul id="dropdown2" class="dropdown-content">
            <li>
              <a href="#">PayPal</a>
            </li>
            <li>
              <a href="#">Apple Pay </a>
            </li>
            <li>
              <a href="#">Master Card </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: 2 }}>
          <h5>Purchases: </h5>
          <div style={{ height: 20 }} />
          <ul class="collapsible">
            {orders.map((order, index) => (
              <li>
                <div class="collapsible-header">
                  <i class="fas fa-shopping-cart" />
                  {`Order ${orders.length - index}`}
                  {index < 1 ? (
                    <span class="new badge">Arriving</span>
                  ) : (
                    <span class="orange badge white-text">Arrived</span>
                  )}
                </div>
                <div class="collapsible-body">
                  <table className="striped">
                    <thead style={{ borderBottom: '1px solid black' }}>
                      <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>$ {item.price}</td>
                          <td>{item.amount}</td>
                          <td>$ {item.amount * Number(item.price)}</td>
                        </tr>
                      ))}
                      {order.reduce(
                        (x, item) => x + item.amount * Number(item.price),
                        0
                      ) > 0 && (
                        <tr style={{ borderTop: '1px solid black' }}>
                          <td>Total: </td>
                          <td></td>
                          <td></td>
                          <td>
                            ${' '}
                            {order.reduce(
                              (x, item) => x + item.amount * Number(item.price),
                              0
                            )}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <p>
                    Shopped by:{' '}
                    <Link to="/profile/shopper/John-Doe">John Doe </Link>
                    <span>
                      <img src={Verified} style={{ height: 20 }} />
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Buyer;
