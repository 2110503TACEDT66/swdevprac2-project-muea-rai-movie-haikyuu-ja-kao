'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import VideoPlayer from './VideoPlayer';

export default function Banner () {
    let theme = "black"
    let color = "white"
    const covers = [`/img/${theme}/cover.png`, `/img/${theme}/cover2.png`, `/img/${theme}/cover3.png`, `/img/${theme}/cover4.png`]
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession()
    const [playing, setPlaying] = useState(true)

    return (
        <>
        <div className='block m-0 w-auto h-[100vh] flex-end'
        onClick={() => setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            className='object-contain'
            />
            <div className={`relative top-[250px] text-center block text-${color}`}>
                 <div className={'text-6xl font-san font-bold w-fit ml-20'}>SYNERGY SPOT</div>
                 <div className={'text-xl font-san font-semibold w-fit ml-40'}>Collaborate, Create, Co-Work.</div>
            </div>
        </div>
        </>
    );
}