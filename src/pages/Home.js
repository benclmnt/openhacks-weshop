import React from 'react';

import Iphone from '../assets/iphone.png';
import { Link } from 'react-router-dom';
import { REGISTER } from '../constants/url';

function Home() {
  return (
    <>
    <div style={{backgroundColor: "rgba(238, 110, 115, 0.5)"}}>
        <div className="container" style={{display: "flex", padding: "20px 0"}}>
          <div style={{flex: 2}}>
            <h1>Help elderly shop groceries during this pandemic</h1>
            <h5 className = "word">and get bonuses!</h5>
            <div style={{height: 20}} />
            <Link to={REGISTER} className="btn btn-large white z-depth-2 black-text" style={{fontWeight: 700, fontSize: "1.25rem"}}>Sign up now!</Link>
          </div>
          <div style={{flex: 1, textAlign: "right",}}><img src={Iphone} style={{height: 400}}/></div>
        </div>
        
    </div>
    <div className="container" style={{ padding: "20px 0"}}>
      <h4 className="center">How does WeShop helps you?</h4>
      <div style={{display: "flex", paddingTop: 40}}>
        <div style={{flex: 1, textAlign: "center"}}>
          <img src={Iphone} style={{height: 200}}/>
          <div>Test 1</div>
        </div>
        <div style={{flex: 1, textAlign: "center"}}>
          <img src={Iphone} style={{height: 200}}/>
          <div>Test 1</div>
        </div>
        <div style={{flex: 1, textAlign: "center"}}>
          <img src={Iphone} style={{height: 200}}/>
          <div>Test 1</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
