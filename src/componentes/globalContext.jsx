import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [currentPagina, setCurrentPagina] = React.useState(0)
  return (
    <GlobalContext.Provider
      value={{
        currentPagina, setCurrentPagina
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};