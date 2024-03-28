'use client'
import BenefitCard from './BenefitCard';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomeCard () {
    const SlideShow = () => {
        const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
        const slides = [
            <div key={1} onClick={() => {
                setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);}}>
                <BenefitCard>
                    <div className={'text-black relative rounded-t-lg pt-3 flex flex-row' }>
                        <div className='w-1/2 ml-10 mt-3'>
                            <Image src='/img/CWS/CWS1.png'
                            alt="cover"
                            width={200} height={200}
                            className='object-contain'
                            />
                        </div>
                        <div className='w-1/2'>
                            <div className={'text-black relative rounded-t-lg pt-3' }>
                                <div className='text-xl font-san font-semibold'>Networking opportunities :</div>
                                <div className='font-san'>
                                        Co-working spaces bring together professionals from various industries and backgrounds. 
                                    This environment fosters networking and collaboration, providing opportunities to connect 
                                    with potential clients, partners, or mentors.
                                </div>
                            </div>
                        </div>
                    </div>
                </BenefitCard>
            </div>,

            <div key={2} onClick={() => {
                setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);}}>
                <BenefitCard>
                <div className={'text-black relative rounded-t-lg pt-3 flex flex-row' }>
                        <div className='w-1/2 ml-10 mt-12'>
                            <Image src='/img/CWS/CWS2.png'
                            alt="cover"
                            width={200} height={200}
                            className='object-contain'
                            />
                        </div>
                        <div className='w-1/2'>
                            <div className={'text-black relative rounded-t-lg pt-3' }>
                                <div className='text-xl font-san font-semibold'>Work-life balance :</div>
                                <div className='font-san'>
                                    For freelancers or remote workers, co-working spaces provide a dedicated workspace outside of 
                                    the home. This separation can help improve work-life balance by creating boundaries between work 
                                    and personal life.
                                </div>
                            </div>
                        </div>
                    </div>
                </BenefitCard>
            </div>,

            <div key={3} onClick={() => {
                setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);}}>
                <BenefitCard>
                    <div className={'text-black relative rounded-t-lg pt-3 flex flex-row' }>
                        <div className='w-1/2 ml-10 mt-5'>
                            <Image src='/img/CWS/CWS3.png'
                            alt="cover"
                            width={200} height={200}
                            className='object-contain'
                            />
                        </div>
                        <div className='w-1/2'>
                            <div className={'text-black relative rounded-t-lg' }>
                                <div className='text-xl font-san font-semibold'>Increased productivity :</div>
                                <div className='font-san'>
                                    Working in a co-working space can boost productivity due to the structured environment, 
                                    lack of household distractions, and the presence of other motivated professionals. The atmosphere 
                                    of productivity and focus can help individuals stay on track with their tasks and goals.
                                </div>
                            </div>
                        </div>
                    </div>
                </BenefitCard>
            </div>,
                
            <div key={4} onClick={() => {
                setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);}}>
                <BenefitCard>
                    <div className={'text-black relative rounded-t-lg pt-3 flex flex-row' }>
                        <div className='w-1/2 ml-10 mt-10'>
                            <Image src='/img/CWS/CWS4.png'
                            alt="cover"
                            width={200} height={200}
                            className='object-contain'
                            />
                        </div>
                        <div className='w-1/2'>
                            <div className={'text-black relative rounded-t-lg pt-3' }>
                                <div className='text-xl font-san font-semibold'>Work-life balance :</div>
                                <div className='font-san'>
                                    For freelancers or remote workers, co-working spaces provide a dedicated workspace outside of 
                                    the home. This separation can help improve work-life balance by creating boundaries between work 
                                    and personal life.
                                </div>
                            </div>
                        </div>
                    </div>
                </BenefitCard>
            </div>
        ];
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }, 5000);
      
          return () => clearInterval(interval);
        }, [slides.length]);

        const handleClick = () => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
          };

        return (
          <div>
            {slides[currentSlideIndex]}
          </div>
        );
    }; 

    const ClickChangeDiv: React.FC = () => {
        const [content, setContent] = useState<string>('Initial Content');
      
        const handleClick = () => {
          setContent('New Content');
        };
      
        return (
          <div onClick={handleClick}>
            {content}
          </div>
        );
      };

    return (
        <div className='flex flex-col content-center items-center w-screen h-[100vh] justify-center'>
            <div className={'text-4xl font-san font-bold w-fit mt-10'}>Reasons why using a co-working space can be beneficial</div>

            {/* <div className='block flex flex-row justify-evenly content-around items-center text-center flex-wrap'>
                <BenefitCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Networking opportunities :</div>
                        <div className='font-san'>
                            Co-working spaces bring together professionals from various industries and backgrounds. 
                            This environment fosters networking and collaboration, providing opportunities to connect 
                            with potential clients, partners, or mentors.
                        </div>
                    </div>
                </BenefitCard>

                <BenefitCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Work-life balance :</div>
                        <div className='font-san'>
                            For freelancers or remote workers, co-working spaces provide a dedicated workspace outside of 
                            the home. This separation can help improve work-life balance by creating boundaries between work 
                            and personal life.
                        </div>
                    </div>
                </BenefitCard>
            </div>

            <div className='block flex flex-row justify-evenly content-around items-center text-center flex-wrap'>
                <BenefitCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Increased productivity :</div>
                        <div className='font-san'>
                            Working in a co-working space can boost productivity due to the structured environment, 
                            lack of household distractions, and the presence of other motivated professionals. The atmosphere 
                            of productivity and focus can help individuals stay on track with their tasks and goals.
                        </div>
                    </div>
                </BenefitCard>

                <BenefitCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Work-life balance :</div>
                        <div className='font-san'>
                            For freelancers or remote workers, co-working spaces provide a dedicated workspace outside of 
                            the home. This separation can help improve work-life balance by creating boundaries between work 
                            and personal life.
                        </div>
                    </div>
                </BenefitCard>

            </div> */}
                <SlideShow/>
        </div>
    );
}