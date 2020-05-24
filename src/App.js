import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Store from './pages/Store.js';
import StoreSearch from './pages/StoreSearch.js';
import Checkout from './pages/Checkout.js';
import NotFound from './pages/404.js';
import * as url from './constants/url';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={url.LOGIN} component={Login} />
            <Route path={url.REGISTER} component={Register} />
            <Route path={url.STORE} component={Store} />
            <Route path={url.STORE_SEARCH} component={StoreSearch} />
            <Route path={url.CHECKOUT} component={Checkout} />
            {/* <Route path={url.CATEGORIES} component={Category} />
            <Route path={url.CHECKOUT} component={Checkout} />

            <Route path={url.VERIFY_ACC} component={Verify} />
            <Route exact path={url.RESET_PASSWORD} component={ResetPassword} />
            <Route path={url.FORGOT_PASSWORD} component={ForgotPassword} />

            <Route path={url.ADMIN} component={Dashboard} />*/}

            <Route component={NotFound} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
