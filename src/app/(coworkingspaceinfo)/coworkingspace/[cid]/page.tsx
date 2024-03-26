import Image from "next/image"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace"
import Link from "next/link"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function CoWorkingSpaceDetailPage({params}: {params:{cid:string}}) {
    const coWorkingSpaceDetail = await getCoWorkingSpace(params.cid)

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    coWorkingSpaceID = params.cid

    return (
        <main className="text-center p-5">
            <div className="flex flex-col my-5 mx-auto">
                <Image src={coWorkingSpaceDetail.data.picture}
                    alt='Co-Working Space Picture'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[40%] bg-black mx-auto"/>
            <div className="text-xl font-bold mx-auto pt-10 pb-5"> {coWorkingSpaceDetail.data.name}</div>
            <table className="text-white text-left table-auto border-separate border-spacing-2 content-center w-1/2 mx-auto">
                <tbody>
                    <tr>
                        <td className="font-semibold">Address :</td>
                        <td>{coWorkingSpaceDetail.data.address}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Tel :</td>
                        <td>{coWorkingSpaceDetail.data.tel}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Open-Close TIme:</td>
                        <td>{coWorkingSpaceDetail.data.open_close_time}</td>
                    </tr>
                </tbody>
            </table>
            <Link href={'/booking'}>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm mx-auto m-3">
                    Reservation
                </button>
            </Link>
            
            </div>
        </main>
    )
}

export var coWorkingSpaceID:string