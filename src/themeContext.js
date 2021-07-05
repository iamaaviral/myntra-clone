import React from 'react'

//whenever we want to use the information in provider
export const ThemeContext = React.createContext()


//This component provides me the state
export const ThemeProvider = (props) => {

    return (
        <ThemeContext.Provider value={ }>
            {props.children}
        </ThemeContext.Provider>
    )
}
