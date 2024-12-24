"use client"
import React from 'react' 
import { PDFViewer } from '@react-pdf/renderer' 
import ResultsPDF from './ResultsPDF '

export default function Results({ result }) {
    return (
        <PDFViewer width="100%" height="1000px">
            <ResultsPDF result={result} />
        </PDFViewer>
    )
}
