import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material'; 
import InteractiveTopmenu from './InteractiveTopmenu';
import InteractiveText from './changecolor';

export default async function TopMenu() {
    const session = await getServerSession(authOptions)

    return (
        <InteractiveTopmenu>
            <a href="/">
                <div className='font-mono text-3xl font-bold ml-20 text-white'>
                    <span>SYNERGY</span>  
                    <InteractiveText>SPOT.</InteractiveText>   
                </div>
            </a>
            <TopMenuItem title='Booking' pageRef='/booking/'/>   
            {
                session ?
                <Link href="/api/auth/signout">
                    <div className='flex items-center justify-end absolute top-0 right-10 h-full text-zinc-500'>
                        Sign-Out of {session.user?.name}
                    </div>
                </Link>
                :
                <Link href="/api/auth/signin">
                    <div className='flex items-center justify-end absolute top-0 right-10 h-full text-zinc-500'>
                        Sign-In
                    </div>
                </Link>
            }        
        </InteractiveTopmenu>
    );
}
