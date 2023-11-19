import { createContext } from "react";

import { theme } from "./theme";


// 1. declare the type 
export type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// 2.create the context context 
export const ThemeContext = createContext(theme);


// 3.create a provider and send the values 
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
