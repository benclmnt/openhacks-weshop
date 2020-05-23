import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import M from 'materialize-css';
import Logo from '../assets/WeShop.png';

import { isLoggedIn } from '../utils/auth-client';
import { useUser } from '../context/user-context.js';
import { useAuth } from '../context/auth-context.js';

const Navbar = props => {
  const user = useUser();
  const authClient = useAuth();

  console.log(authClient);

  // materialize dropdown effect
  useEffect(() => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  }, []);

  const handleLogout = e => {
    authClient.logout();
  };

  // Sidenav
  function SideNav({ user }) {
    // materialize sidenav effect
    useEffect(() => {
      let elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    }, []);

    return (
      <ul id="nav-mobile" className="sidenav">
        <li style={{ height: 20 }}></li>
        <li>
          <Link to="/" id="logo-container">
            <img
              src={Logo}
              alt="Weshop Logo"
              style={{ height: 50, marginTop: 5 }}
            />
          </Link>
        </li>
        <li style={{ height: 20 }}></li>
        {isLoggedIn() ? (
          <>
            <li>
              <NavLink to="/">Account</NavLink>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            {' '}
            <NavLink to="/login"> Login </NavLink>{' '}
          </li>
        )}
      </ul>
    );
  }

  return (
    <>
      <SideNav user={user} />

      <nav className="nav-wrapper ">
        <a href="#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="fas fa-bars"></i>
        </a>
        <Link to="/" className="brand-logo hide-on-large-only">
          <span style={{ textTransform: 'uppercase' }}>
            <img
              src={Logo}
              alt="Weshop Logo"
              style={{
                height: 60,
                verticalAlign: 'middle',
                paddingRight: 10,
              }}
            />
            WeShop
          </span>
        </Link>

        <ul id="dropdownLogout" className="dropdown-content">
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>

        <div className="container hide-on-med-and-down">
          <Link to="/" className="brand-logo left">
            <span style={{ textTransform: 'uppercase' }}>
              <img
                src={Logo}
                alt="Weshop Logo"
                style={{
                  height: 60,
                  verticalAlign: 'middle',
                  paddingRight: 10,

                }}
              />
              WeShop
            </span>
          </Link>
          <ul className="right">
            <li>Test</li>
            {isLoggedIn() ? (
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdownLogout"
                >
                  {user?.initials}{' '}
                  <i
                    className="fas fa-chevron-down"
                    style={{ fontSize: '1rem' }}
                  ></i>
                </a>
              </li>
            ) : (
              <li>
                {' '}
                <NavLink to="/login">Login</NavLink>{' '}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
