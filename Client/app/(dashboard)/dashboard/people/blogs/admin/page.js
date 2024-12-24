import { getDataHandler } from '@/app/actions/users/getData'
import { getAdminModaretorBlogs } from '@/app/constans/constans'
import React from 'react'
import BlogTable from '../public/BlogTable'
import NoDataFound from '@/app/components/Globals/NoDataFound'

export default async function AdminBlog() {
    const { status, result } = await getDataHandler(getAdminModaretorBlogs)
    console.log(result)

    if (status !== 200) {
        return <NoDataFound />
    }
    return (
        <div>
            <BlogTable blogs={result} />
        </div>
    )
}
