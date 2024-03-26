'use client'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { useState } from 'react';

export default function HomeCard () {

    return (
        <div className='flex flex-col content-center items-center w-screen h-[100vh]'>
            <div className={'text-4xl font-san font-bold w-fit mt-10'}>Reasons why using a co-working space can be beneficial</div>

            <div className='block flex flex-row justify-evenly content-around items-center text-center flex-wrap'>
                <InteractiveCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Networking opportunities :</div>
                        <div className='font-san'>
                            Co-working spaces bring together professionals from various industries and backgrounds. 
                            This environment fosters networking and collaboration, providing opportunities to connect 
                            with potential clients, partners, or mentors.
                        </div>
                    </div>
                </InteractiveCard>

                <InteractiveCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Work-life balance :</div>
                        <div className='font-san'>
                            For freelancers or remote workers, co-working spaces provide a dedicated workspace outside of 
                            the home. This separation can help improve work-life balance by creating boundaries between work 
                            and personal life.
                        </div>
                    </div>
                </InteractiveCard>
            </div>

            <div className='block flex flex-row justify-evenly content-around items-center text-center flex-wrap'>
                <InteractiveCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Increased productivity :</div>
                        <div className='font-san'>
                            Working in a co-working space can boost productivity due to the structured environment, 
                            lack of household distractions, and the presence of other motivated professionals. The atmosphere 
                            of productivity and focus can help individuals stay on track with their tasks and goals.
                        </div>
                    </div>
                </InteractiveCard>

                <InteractiveCard>
                    <div className={'text-black relative rounded-t-lg' }>
                        <div className='text-xl font-san font-semibold'>Work-life balance :</div>
                        <div className='font-san'>
                            For freelancers or remote workers, co-working spaces provide a dedicated workspace outside of 
                            the home. This separation can help improve work-life balance by creating boundaries between work 
                            and personal life.
                        </div>
                    </div>
                </InteractiveCard>

            </div>
        </div>
    );
}