import React from 'react';
import M from 'materialize-css';

import { useCart } from '../context/cart-context';

import John from '../assets/John.jpg';
import Verified from '../assets/verified.jpg';
import { Link } from 'react-router-dom';

import '../css/storesearch.css';

function Shopper() {
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
      <div className="ss-container-normal" style={{ padding: 20, margin: 20 }}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img class="circle" src={John} style={{ height: 150 }} />
          <h4>John Doe</h4>
          <img src={Verified} style={{ height: 20 }} /> Certified by WeShop
          <p>
            4.5/5.0 Rating <br />
            Based in San Francisco, California{' '}
          </p>
          <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
            Stores
          </a>
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <a href="#">Sleek</a>
            </li>
            <li>
              <a href="#">Ohio</a>
            </li>
            <li>
              <a href="#">Dynamic</a>
            </li>
            <li>
              <a href="#">Monitored</a>
            </li>
            <li>
              <a href="#">Intranet</a>
            </li>
          </ul>
        </div>
        <div style={{ flex: 2 }}>
          <h5>New orders!</h5>
          <ul class="collapsible">
            {orders.length > 0 &&
              [orders[0]].map((order, index) => (
                <li>
                  <div class="collapsible-header">
                    <i class="fas fa-shopping-cart" />
                    {`Order ${123 + orders.length - index}`}
                    <span class="teal new badge white-text"></span>
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
                                (x, item) =>
                                  x + item.amount * Number(item.price),
                                0
                              )}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <p>
                      <button className="btn">Grab the order!</button>
                    </p>
                  </div>
                </li>
              ))}
          </ul>
          <h5>Shopped by John: </h5>
          <div style={{ height: 20 }} />
          <ul class="collapsible">
            {orders.map((order, index) => (
              <li>
                <div class="collapsible-header">
                  <i class="fas fa-shopping-cart" />
                  {`Order ${orders.length - index}`}
                  {index < 1 ? (
                    <span class="orange badge white-text">On the way</span>
                  ) : (
                    <span class="teal badge white-text">Completed</span>
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
                    Ordered by:{' '}
                    <Link to="/profile/buyer/Jane-Doe">Jane Doe </Link>,{' '}
                    <Link to="/profile/buyer/James-Doe">James Doe </Link>,{' '}
                    <Link to="/profile/buyer/Joe Rogan">Joe Rogan </Link>
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

export default Shopper;
