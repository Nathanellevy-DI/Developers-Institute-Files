import {createContext, useContext, useMemo, useState} from "react";
import type { ReactNode} from "react";

export type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export type ThemeProviderProps = {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within ThemeContext");
    }
    return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState< 'light' | 'dark' >('light');
    const toggleTheme = () =>
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    const value = useMemo(
        () => ({ theme, toggleTheme }),
        [theme]);
    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    );
}