import { client, LOCAL_STORAGE_KEY } from './client';
import { API_LOGIN, API_REGISTER } from '../constants/api-url';
import { LOGIN } from '../constants/url';

function handleUserResponse({ token, ...user }) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, token);

  // redirect user to homepage
  window.location.replace('/');
  return user;
}

// return either a user object or null
function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve({
      username: 'Jane Doe',
      initials: 'WA',
      id: '2020'
    });
  }
  return Promise.resolve({
    initials: 'WS',
    id: '1234'
  });
  // return client(API_WHOAMI).then(data => data.user);
}

function login({ email, password }) {
  return client(API_LOGIN, { body: { user: { email, password } } }).then(
    handleUserResponse
  );
}

function register({ name, email, password }) {
  return client(API_REGISTER, {
    body: { user: { name, email, password } },
    redirectTo: LOGIN
  });
}

function logout() {
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);

  // refreshes the page for the user
  window.location.assign(window.location);
}

function getToken() {
  return window.localStorage.getItem(LOCAL_STORAGE_KEY);
}

function isLoggedIn() {
  return Boolean(getToken());
}

export { login, register, logout, getToken, getUser, isLoggedIn };
