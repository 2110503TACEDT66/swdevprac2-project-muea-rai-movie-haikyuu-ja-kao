'use client'
import React from "react"

export default function InteractiveText({ children }: { children: React.ReactNode }) {

    function onScrollAction() {
        const scrollPosition = window.scrollY;
        const text = document.getElementById('text');

        if (scrollPosition > 5) {
            text?.classList.remove('text-white');
            text?.classList.add('text-red-800');
        } else {
            text?.classList.remove('text-red-800');
            text?.classList.add('text-white');
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', onScrollAction);
        return () => {
            window.removeEventListener('scroll', onScrollAction);
        };
    }, []);

    return (
        <span id='text' className='text-white duration-300'>
            {children}
        </span>
    );
}