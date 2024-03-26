"use client"
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function Card({coWorkingSpaceName, imgSrc}:{coWorkingSpaceName:string, imgSrc:string}) {
    return (
        <InteractiveCard>
                <div className="w-auto h-[100%] relative rounded-lg bg-cover">
                <div className="w-full h-[30%] p-[10%] text-slate-500 text-sm"> {coWorkingSpaceName} </div>
                <Image src={imgSrc}
                 alt='Co Working Space'
                 fill={true}
                 objectFit='cover'
                 className='object-cover rounded-lg'/>
                </div>
        </InteractiveCard>
    )
}

//<div className='text-md font-mono my-5'>testtt</div>