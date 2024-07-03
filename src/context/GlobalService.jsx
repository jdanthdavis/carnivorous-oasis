import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

const GlobalService = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  // const clearAll = () => {
  //   setIsOpen(false);
  // };

  return (
    <GlobalContext.Provider
      value={{
        showLoginModal,
        setShowLoginModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalService;
