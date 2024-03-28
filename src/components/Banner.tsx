'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

let theme = "black"
let color = "white"

const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const covers = [`/img/${theme}/cover.png`, `/img/${theme}/cover2.png`, `/img/${theme}/cover3.png`, `/img/${theme}/cover4.png`]
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % covers.length);
      }, 2000);
        return () => clearInterval(interval);
    }, [covers.length]);
  
    return (
      <div>
        <Image src={covers[currentImageIndex]} 
            alt="cover"
            fill={true}
            priority
            className='object-contain'
            />
      </div>
    );
  };

export default function Banner () {
    let theme = "black"
    let color = "white"
    const covers = [`/img/${theme}/cover.png`, `/img/${theme}/cover2.png`, `/img/${theme}/cover3.png`, `/img/${theme}/cover4.png`]
    const router = useRouter()
    const { data:session } = useSession()

    return (
        <>
        <div className='block m-0 w-auto h-[100vh] flex-end'>
            <ImageSlider/>
            <div className={`relative top-[250px] text-center block text-${color}`}>
                 <div className={'text-6xl font-san font-bold w-fit ml-20'}>SYNERGY SPOT</div>
                 <div className={'text-xl font-san font-semibold w-fit ml-40'}>Collaborate, Create, Co-Work.</div>
            </div>
        </div>
        </>
    );
}