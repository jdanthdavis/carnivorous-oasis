import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

const GlobalService = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clearAll = () => {
    setIsOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalService;
