import React from 'react'

export const ThemeContext = React.createContext()

export const ThemeProvider = (props) => {
    const [theme, setTheme] = React.useState('dark')

    let toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
