'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import VideoPlayer from './VideoPlayer';

export default function Banner () {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession()
    const [playing, setPlaying] = useState(true)

    return (
        <>
        <div className='block p-5 m-0 w-screen h-[100vh] relative flex-end'
        onClick={() => setIndex(index+1)}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            className='object-contain'
            />
        </div>
        </>
    );
}