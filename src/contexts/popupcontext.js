import React, { createContext, useState } from 'react'

const PopupContext = createContext();

export const PopupProvider = ({children}) => {

  const [project, setProject] = useState('');

  return (
    <PopupContext.Provider value={{project, setProject}}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => React.useContext(PopupContext);
