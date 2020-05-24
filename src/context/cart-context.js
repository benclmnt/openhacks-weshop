import React, { useState, useEffect } from 'react';

const CartContext = React.createContext();

function CartProvider(props) {
  const [data, setData] = useState([]); //array of items

  useEffect(() => {
    if (window.localStorage.getItem('index') == null) {
      window.localStorage.setItem('index', 1);
    }
  }, []);

  const addItem = (item, amount) => {
    if ([...data].filter(x => item.id === x.id).length > 0) {
      const wantedItem = [...data].find(x => item.id === x.id);
      const newData = [...data].filter(x => item.id !== x.id);
      wantedItem.amount += amount;
      setData([...newData, wantedItem]);
    } else {
      setData([
        ...data,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          amount
        }
      ]);
    }
  };

  const deleteItem = (itemId, amount) => {
    const wantedItem = [...data].find(x => itemId === x.id);
    const newData = [...data].filter(x => itemId !== x.id);
    wantedItem.amount -= amount;
    if (wantedItem.amount > 0) {
      setData([...newData, wantedItem]);
    } else {
      setData(newData);
    }
  };

  const getAmount = itemId => {
    const wantedItem = [...data].find(x => itemId === x.id);
    if (wantedItem) {
      return wantedItem.amount;
    } else return 0;
  };
  return (
    <CartContext.Provider
      value={{ data, addItem, deleteItem, getAmount }}
      {...props}
    />
  );
}

const useCart = () => React.useContext(CartContext);

export { CartProvider, useCart };
