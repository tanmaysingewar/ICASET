import React from 'react'
import Image from "next/image"
import { patrons } from "@/app/data"
import BoardMember from '@/app/components/BoardMember'

function page() {
    return (
        <div className="overflow-x-hidden backdrop-blur-md backdrop-contrast-50 py-10">
            <div className="flex-column mx-auto w-full rounded-lg px-10 py-4 self-center bg-opacity-60">
                <h1 className="text-white text-center text-4xl mb-10 font-extrabold">Patrons</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-5 gap-y-5'>
                    {patrons.map((val, index) => {

                        return (<BoardMember key={index} img={val.image} name={val.name} designation={val.designation} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default page