import { getDataHandler } from '@/app/actions/users/getData'
import { purchaseCourseAll } from '@/app/constans/constans'
import React from 'react'
import PurchaseTable from './PurchaseTable'

///  for admin 
export default async function ManagePurchaseCourse() {
    const { status, result } = await getDataHandler(purchaseCourseAll);

    if (!status || !result) {
        return <p className="text-center text-gray-500 mt-10">No purchase data available.</p>;
    }

    return (
        <div className="container  bg-gray-100 rounded-md mx-auto px-4 py-10">
            <PurchaseTable data={result} />
        </div>
    );
}