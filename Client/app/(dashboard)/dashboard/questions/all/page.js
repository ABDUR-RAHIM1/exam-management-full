import { getDataHandler } from '@/app/actions/users/getData'
import { questionGetAll } from '@/app/constans/constans'
import React from 'react' 
import NoDataFound from '@/app/components/Globals/NoDataFound';
import QuestionTable from './QuestionTable';

export default async function AllQuestionsPage() {
    const { status, result } = await getDataHandler(questionGetAll);
 

    if (status !== 200 || !result) {
        return <NoDataFound />
    }

    return (
        <div>
            <QuestionTable data={result} />
        </div>
    )
}
