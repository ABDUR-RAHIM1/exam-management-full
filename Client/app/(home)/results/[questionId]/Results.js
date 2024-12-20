"use client"
import React from 'react'
import { ResultsPDF } from './ResultsPDF '
import { PDFViewer } from '@react-pdf/renderer'

export default function Results({ result }) {
    return (
        <PDFViewer width="100%" height="1000px">
            <ResultsPDF result={result} />
        </PDFViewer>
    )
}
