import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { getDataById } from '@/app/actions/globals/getDataById';
import { getResultById } from '@/app/constans/constans';
import NoDataFound from '@/app/components/Globals/NoDataFound';
import { ResultsPDF } from './ResultsPDF ';
import Results from './Results';


export default async function ResultsDetails({ params }) {
    const { questionId } = params;
    const getDetailsApiEndpoint = `${getResultById + questionId}`;
    const { status, result } = await getDataById(getDetailsApiEndpoint);

    if (status !== 200 || !result) {
        return <NoDataFound />;
    }

    return (
        // <PDFViewer width="100%" height="1000px">
        <Results result={result} />
        // </PDFViewer>
    );
}
