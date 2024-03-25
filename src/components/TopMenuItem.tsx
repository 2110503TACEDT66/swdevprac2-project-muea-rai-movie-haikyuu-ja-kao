import Link from 'next/link';

export default function TopMenuItem({title, pageRef}:{title:string, pageRef:string}) {
    return (
        <Link className='w-[120px] text-center my-auto font-sans font-base text-white ml-16 font-medium hover:text-black' href={pageRef}>
            {title}
        </Link>
    );
}