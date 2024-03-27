import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material'; 
import InteractiveTopmenu from './InteractiveTopmenu';
import InteractiveText from './changecolor';
import ButtonComponent from './ButtonComponent';

export default async function FormManage() {

    const session = await getServerSession(authOptions)

    return (
        <div>
        {
            session ?
            <div className='h-20 w-20 fixed bottom-0 right-0 z-30 flex place-items-center duration-300 mx-10 my-3 flex flex-col'>
                <ButtonComponent />
             </div>
            :
            <div>
             
            </div>
        } 
        </div>
    );
}
