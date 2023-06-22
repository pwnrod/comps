import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // handle updating URL when user clicks the 'Back' or 'Forward' buttons
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []);

    return (
        <NavigationContext.Provider value={{}}>
            {currentPath}
            {children}
        </NavigationContext.Provider>
    );
};

export { NavigationProvider };
export default NavigationContext;
