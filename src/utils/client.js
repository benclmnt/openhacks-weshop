import M from 'materialize-css';
import { LOGIN } from '../constants/url';
import { logout } from './auth-client';

export const LOCAL_STORAGE_KEY = 'token';

// customConfig params
// - headers
// - method
// - body : will be JSONified.
// - file (There is some unique things about files)!
// - showSuccess : boolean
// - showError : boolean
// - onSuccess : fn
// - redirecTo: string (starting with /)

export async function client(endpoint, { body, file, ...customConfig } = {}) {
  const token = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  const headers = { 'Content-Type': 'application/json' };

  if (token) {
    headers.Authorization = `${token}`;
  }

  const config = {
    method: customConfig.method ?? (body || file ? 'POST' : 'GET'),
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (file) {
    config.body = file;
    delete config.headers['Content-Type'];
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  const newEndpoint =
    process.env.NODE_ENV === 'production' ? `api/${endpoint}` : endpoint;
  console.log('Called a fetch to this ' + newEndpoint);
  return await fetch(`/${newEndpoint}`, config).then(async response => {
    if (response.status === 401) {
      logout();
      // TODO: shoule we refresh the page for them or redirect to login page ???
      // window.location.assign(window.location);
      window.location.assign(LOGIN);
      return Promise.reject({ message: 'Please re-authenticate.' });
    }

    const data = await response.json();

    if (response.ok) {
      if (customConfig.showSuccess) {
        M.toast({
          html: `<div>${data.message}</div>`,
          classes: 'teal rounded center top'
        });
      }

      if (
        customConfig.onSuccess &&
        typeof customConfig.onSuccess === 'function'
      ) {
        customConfig.onSuccess();
      }

      if (customConfig.redirectTo) {
        window.location.assign(customConfig.redirectTo);
        return;
      }

      return data;
    } else {
      if (customConfig.showError) {
        M.toast({
          html: `<div>${data?.error?.message}!</div>`,
          classes: 'red rounded center top'
        });
      }
      return Promise.reject(data);
    }
  });
}
