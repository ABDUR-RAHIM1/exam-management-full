"use client"
import React, { createContext, useState } from 'react'
export const contextApi = createContext()

export default function Context({ children }) {

    const [manageData, setManageData] = useState(null);
    const [cart, setCart] = useState([])

    const value = {
        manageData, setManageData,
        cart ,setCart
    }

    return (
        <contextApi.Provider value={value}>
            {children}
        </contextApi.Provider>
    )
}
