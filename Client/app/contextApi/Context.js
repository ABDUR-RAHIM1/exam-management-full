"use client"
import React, { createContext, useState } from 'react'
export const contextApi = createContext()

export default function Context({ children }) {

    const [manageData, setManageData] = useState(null);
    const [cart, setCart] = useState([])


    /// dashboard 
    const [dashArrowClick, setDashArrowClick] = useState(false)
    /// dashboard end

    const value = {
        manageData, setManageData,
        cart, setCart,


        // dashboard start
        dashArrowClick, setDashArrowClick
        // dashboard End
    }

    return (
        <contextApi.Provider value={value}>
            {children}
        </contextApi.Provider>
    )
}
