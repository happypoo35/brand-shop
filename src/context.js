import React, { useContext, useState } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products] = useState(data);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider value={{ products, showMenu, setShowMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
