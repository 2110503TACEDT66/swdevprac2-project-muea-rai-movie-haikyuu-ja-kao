"use client"
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material'
import { useState } from 'react'

export default function Card({coWorkingSpaceName, imgSrc}:{coWorkingSpaceName:string, imgSrc:string}) {

    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg ">
                <Image src={imgSrc}
                 alt='Co-working Space'
                 fill={true}
                 className='object-cover rounded-t-lg'/>
            </div>
            <div className="w-full h-[15%] p-[10px] font-mono"> {coWorkingSpaceName} </div>
        </InteractiveCard>
    )
}