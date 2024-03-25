'use client'
import React from "react"

export default function InteractiveTopmenu({ children }: { children: React.ReactNode }) {

    function onScrollAction() {
        const scrollPosition = window.scrollY;
        const topmenu = document.getElementById('topmenu');

        if (scrollPosition > 5) {
            topmenu?.classList.remove('bg-inherit');
            topmenu?.classList.add('bg-black');
        } else {
            topmenu?.classList.remove('bg-black');
            topmenu?.classList.add('bg-inherit');
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', onScrollAction);
        return () => {
            window.removeEventListener('scroll', onScrollAction);
        };
    }, []);

    return (
        <div id='topmenu' className='h-20 w-full bg-inherit fixed top-0 left-0 right-0 z-30 flex place-items-center duration-300'>
            {children}
        </div>
    );
}