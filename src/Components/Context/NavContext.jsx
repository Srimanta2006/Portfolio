import React, { createContext, useState } from 'react'

export const navBarContext = createContext()
const NavContext = ({ children }) => {
    const [navBarOpen, setNavBarOpen] = useState(false)
    return (
        <div>
            <navBarContext.Provider value={[navBarOpen, setNavBarOpen]}>
                {children}
            </navBarContext.Provider>
        </div>
    )
}

export default NavContext