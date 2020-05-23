import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main-container grey lighten-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/navbar" component={Navbar} />
            {/* <Route path={url.CATEGORIES} component={Category} />
            <Route path={url.ITINERARY} component={Itinerary} />
            <Route path={url.CHECKOUT} component={Checkout} />

            <Route path={url.LOGIN} component={Login} />
            <Route path={url.SIGNUP} component={Signup} />
            <Route path={url.VERIFY_ACC} component={Verify} />
            <Route exact path={url.RESET_PASSWORD} component={ResetPassword} />
            <Route path={url.FORGOT_PASSWORD} component={ForgotPassword} />

            <Route path={url.ADMIN} component={Dashboard} />

            <Route component={NotFound} /> */}
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
