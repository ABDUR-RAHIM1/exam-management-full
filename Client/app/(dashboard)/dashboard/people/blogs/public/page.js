import { getDataHandler } from '@/app/actions/users/getData'
import NoDataFound from '@/app/components/Globals/NoDataFound'
import React from 'react'
import BlogTable from './BlogTable'

export default async function Blogs() {
    const { status, result } = await getDataHandler("/user/blogs")
    

    if (status !== 200) {
        return <NoDataFound />
    }
    return (
        <div>
            <BlogTable blogs={result} />
        </div>
    )
}
