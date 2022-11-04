import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext({});

export default function CountProvider({ children }) {
  const [components, setComponents] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        components,
        setComponents
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function StateGlobal() {
  const context = useContext(GlobalContext);
  const { components, setComponents } = context;

  return {
    components, setComponents 
  };
}
