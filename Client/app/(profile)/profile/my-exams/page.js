import { getDataHandler } from '@/app/actions/users/getData'
import NoDataFound from '@/app/components/Globals/NoDataFound';
import React from 'react'
import ResultTable from './ResultTable';
import { getResultMe } from '@/app/constans/constans';

export default async function MyExamResults() {
    const { status, result } = await getDataHandler(getResultMe);


    if (status !== 200 && !result) {
        return <NoDataFound />
    }

    return (
        <div className='bgGradient'>

            <ResultTable data={result} />

        </div>
    )
}
