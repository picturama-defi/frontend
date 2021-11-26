import React, { createContext, useContext, useState } from "react";

const contextData = {};
const AppContext = createContext(contextData);

const AppWrapper = ({ children }: any) => {
  const [selectedAddress, setSelectedAddress] = useState<any>("");

  return (
    <AppContext.Provider value={[selectedAddress, setSelectedAddress]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppWrapper;

export function useAppContext() {
  return useContext(AppContext);
}
