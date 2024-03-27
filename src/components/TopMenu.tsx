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
            <TopMenuItem title='Co-Working spaces' pageRef='/coworkingspace/'/>   
            <TopMenuItem title='My booking' pageRef='/profile/'/>  
            {
                session ?
                <Link href="/api/auth/signout">
                    <div className='flex items-center justify-end absolute top-0 right-10 h-full text-white hover:text-amber-600'>
                        Sign-Out
                    </div>
                </Link>
                :
                <div className='flex items-center justify-end absolute top-0 right-10 h-full text-white'>
                    <div className='hover:text-amber-600'>
                    <TopMenuItem title='Register' pageRef='/api/auth/register'/> 
                    </div>
                    <div className="mx-3">or</div>
                <Link href="/api/auth/signin">
                    <div className='text-white hover:text-amber-600'>
                        Sign-In
                    </div>
                </Link> 
                </div>
            }     
        </InteractiveTopmenu>
    );
}
