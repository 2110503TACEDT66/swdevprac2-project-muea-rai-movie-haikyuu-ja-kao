"use client"
import Image from 'next/image'

export default function Card({coWorkingSpaceName, imgSrc}:{coWorkingSpaceName:string, imgSrc:string}) {
    return (
        <div className="w-full h-[100%] relative rounded-lg">
                <div>
                <Image src={imgSrc}
                 alt='Co Working Space'
                 fill={true}
                 className='object-cover rounded-lg'/>
                </div>
                 <div className="w-auto font-mono z-30 absolute left-5 top-5 text-black"> {coWorkingSpaceName} </div>
            <div className='text-md font-mono my-5'>testtt</div>
        </div>
    )
}