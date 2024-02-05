import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();
export const useMyGlobalContext = () => useContext(GlobalContext);


export const GlobalProvider = ({ children }) => {
  const [spanish, setSpanish] = useState(navigator.language.split('-')[0] === 'es' ? true : false);

  return (
    <GlobalContext.Provider value={[spanish, setSpanish]}>
      {children}
    </GlobalContext.Provider>
  );
};