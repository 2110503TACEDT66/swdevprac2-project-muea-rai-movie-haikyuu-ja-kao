import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import getBookings from "@/libs/getBookings"
import ShowBooking from "@/components/ShowBooking"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace"

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    const booking = await getBookings(session.user.token)
    console.log(booking);

    return (
        <div>
        <div className="bg-slate-100 m-5 p-5 text-black w-[500px] rounded-xl mt-10 mx-auto">
            <div className="text-2xl font-bold">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                <tr>
                    <td className="font-semibold">Email</td>
                    <td>: {profile.data.email}</td>
                </tr>
                <tr>
                    <td className="font-semibold">Tel.</td>
                    <td>: {profile.data.tel}</td>
                </tr>
                <tr>
                    <td className="font-semibold">Member Since</td>
                    <td>: {createdAt.toString()}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="mt-10 text-center font-bold text-2xl text-white">Reservations</div>
        <div className="bg-slate-200 text-black rounded-md">
            {
                <ShowBooking reservationJson={booking}/>
            }
        </div>
        </div>
    )
}