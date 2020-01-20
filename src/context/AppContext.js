import React, { createContext, useState } from 'react';

const AppContext = createContext({amount: 12});

function AppContextProvider({ children }) {
  const [amount, setAmount] = useState(0)

  function deposit(value) {
    setAmount(amount + value)
  }

  function withdraw(value) {
    const newAmount = amount - value
    setAmount(newAmount < 0 ? 0 : newAmount)
  }

  const defaultContext = {
    amount, deposit, withdraw
  };

  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
