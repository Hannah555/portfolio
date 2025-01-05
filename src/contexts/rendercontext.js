import { createContext, useContext, useState } from "react";

const RenderContext = createContext();

export const RenderProvider = ({children}) => {

    const [activeSection, setActiveSection] = useState('home');

    return (
        <RenderContext.Provider value={{activeSection, setActiveSection}}>
            {children}
        </RenderContext.Provider>
    )
}

export const useRender = () => {
    return useContext(RenderContext);
}
