import React from 'react';
import { AuthProvider } from './auth-context';
import { UserProvider } from './user-context';
import { CartProvider } from './cart-context';

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </UserProvider>
    </AuthProvider>
  );
}
export default AppProviders;
