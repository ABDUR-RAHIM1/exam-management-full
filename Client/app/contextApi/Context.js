"use client"
import React, { createContext, useState } from 'react'
export const contextApi = createContext()

export default function Context({ children }) {

    const [manageData, setManageData] = useState(null);

    const value = {
        manageData, setManageData
    }

    return (
        <contextApi.Provider value={value}>
            {children}
        </contextApi.Provider>
    )
}
