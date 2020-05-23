import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              WeShop
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>

            <li>
              <a href="login.html">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
