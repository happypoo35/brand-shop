import React, { useContext, useState } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products] = useState(data);
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const check = cart.every((el) => {
      return el.id !== id;
    });
    if (check) {
      setCart([...cart, ...products.filter((el) => el.id === id)]);
    } else {
      const existingItem = cart.find((item) => item.id === id);
      existingItem.amount += 1;
      setCart([...cart.filter((el) => el.id !== id), existingItem]);
      console.log("item already added");
    }
  };

  return (
    <AppContext.Provider
      value={{ products, showMenu, setShowMenu, cart, setCart, addToCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
