import React, { createContext, useContext, useRef } from 'react'

const ScrollContext = createContext();

export const ScrollProvider = ({children}) => {
  const targetRefs = {
    contact: useRef(null),
    about: useRef(null),
    project: useRef(null),
    blog: useRef(null),
    top: useRef(null),
  }

  const scrollToDiv = (target) => {
    if(targetRefs[target] && targetRefs[target].current){
        targetRefs[target].current.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <ScrollContext.Provider value={{targetRefs, scrollToDiv}}>
        {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
    return useContext(ScrollContext);
}


