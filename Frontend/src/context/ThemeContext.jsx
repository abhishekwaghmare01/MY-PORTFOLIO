// global state ko manage krte hai---->creatre state --> koi bhi component ko directly access kr sakte haii nahi to hame as a prop hame pass krana padta haii isko avoid krne ke liye hum global state banate hai.

//coustom hook => we create a coustom hook for the use of functionality with the help of context api.

import { useState, createContext, useContext } from "react";
//to create context
const ThemeContext = createContext();
//if wo want to use context so we have to create a provider
// to create provider

const ThemeProvider = ({ children }) => {
  const [theme, useTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={[theme, useTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

//CUSTOM HOOK
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
