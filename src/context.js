import React, { useContext, useState } from "react";
import data from "./data";

const AppContext = React.createContext();

// const initialState = {
//   cart: [],
//   total: 0,
//   amount: 0,
// };

const AppProvider = ({ children }) => {
  const [products] = useState(data);
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // setCart([...cart, ...products.filter((el) => el.id === item)]);
    setCart(new Set([...cart, ...products.filter((el) => el.id === item)]));
  };

  return (
    <AppContext.Provider value={{ products, showMenu, setShowMenu, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
