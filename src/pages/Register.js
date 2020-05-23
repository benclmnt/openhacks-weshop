import React from 'react';
import { useAuth } from '../context/auth-context';

function Signup(props) {
  const [state, setState] = React.useState({
    username: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    roles:'',
  });

  const authClient = useAuth();

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("try to register with creds: ");
    console.log(state);
    authClient.register(state);
  };

  return (
    <div className="container">
      <form className="lighten-4" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={handleChange} required/>
        </div>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} required/>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} required/>
        </div>

        <div className="input-field">
          <label for="address">Textarea</label>
          <textarea type="textarea" id="address" name="address" onChange={handleChange} class="materialize-textarea" required></textarea>
        </div>

        <div className="input-field">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phoneNumber" id="phone" onChange={handleChange} required/>
        </div>

        <div className="input-field">
          <p>
            <label>
              <input name="roles" class="with-gap" type="radio" checked={state.roles === 'buyer'} value="buyer" onChange={handleChange} required/>
              <span>Buyer</span>
            </label>
          </p>
          <p>
            <label>
              <input name="roles" class="with-gap" type="radio" checked={state.roles === 'shopper'} value="shopper" onChange={handleChange}/>
              <span>Shopper</span>
            </label>
          </p>
        </div>

        <input type="submit" value="Sign Up" className="btn z-depth-0" />
      </form>
    </div>
  );
}

export default Signup;
