import NoDataFound from '@/app/components/Globals/NoDataFound'
import { getResultAll } from '@/app/constans/constans'
import { getDataHandler } from '@/app/Handler/usersHandler/getHandler'
import React from 'react'
import ResultsTable from './ResultsTable'

export default async function ExamResultAdmin() {
    const { status, result } = await getDataHandler(getResultAll)
  
    if (status !== 200 || !result) {
        return <NoDataFound />
    }
    return (
        <div>
            <ResultsTable data={result} />
        </div>
    )
}
