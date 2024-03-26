import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material'; 
import InteractiveTopmenu from './InteractiveTopmenu';
import InteractiveText from './changecolor';

export default async function FormManage() {

    const session = await getServerSession(authOptions)

    return (
        <div>
        {
            session ?
            <a href="/booking/manage" className='h-20 w-20 fixed bottom-0 right-0 z-30 flex place-items-center duration-300 mx-24 my-8'>
                <button className="bg-inherit hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-7 py-3 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0">
                    manage
                </button>
             </a>
            :
            <div>
             
            </div>
        } 
        </div>
    );
}
