import { ReservationItem, ReservationJson } from "../../interface"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace"
import { CoWorkingSpaceJson, CoWorkingSpaceItem } from "../../interface"
import deleteReservation from "@/libs/deleteReservation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import Button from "./Button"
import { dbConnect } from "@/db/dbConnect";
import Reservation from "@/db/models/Reservation";
import { coWorkingSpaceID } from "@/app/(coworkingspaceinfo)/coworkingspace/[cid]/page"
import { redirect, useSearchParams } from "next/navigation";
import Link from "next/link"
import { revalidateTag } from "next/cache"

export default async function EditBooking({reservationJson}:{reservationJson:Promise<ReservationJson>}) {
    const reservationReady = await reservationJson
    async function getcws (cid:string) {
        const coWorkingSpace = await getCoWorkingSpace(cid)
        console.log(coWorkingSpace)
        return coWorkingSpace.data.name
    }

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    const editReservation = async (editReservationForm:FormData) => {
        "use server"
        const bid = editReservationForm.get("bookingID")
        const resDate = editReservationForm.get("resDate")
        const user = editReservationForm.get("user")
        const coWorkingSpace = editReservationForm.get("coWorkingSpace") 

        try {
            await dbConnect()
            console.log(bid)
            const reservation = await Reservation.updateOne(
                { "_id": bid },
                {
                    $set: {
                        "resDate": resDate,
                        "user": user,
                        "coWorkingSpace": coWorkingSpace,
                        "createdAt": Date.now()
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
        revalidateTag("reservations")
        redirect("/profile")
    }

    return (
        <div className="bg-black">
            <div className="text-xl mx-auto font-bold text-white text-center">Edit your co-Working space</div>

            <div className="my-5 flex flex-col items-center">
                {
                    reservationReady.data.map((reservationItem:ReservationItem)=>(
                        <div className="flex flex-row block m-6 w-[800px] h-fit space-x-2 items-center justify-center bg-slate-100 rounded-lg py-4 text-center ">
                            <div className="block flex flex-col w-1/2 h-fit items-center justify-center bg-slate-100 text-center">
                                <div className="text-md py-1 font-bold">Booking id</div>
                                <div className="text-md py-1">{reservationItem._id.toString()}</div>
                                <div className="text-md py-1 font-bold">Co-working space</div>
                                <div className="text-md py-1" id="cws">{getcws(reservationItem.coWorkingSpace._id?.toString())}</div>
                                <div className="text-md py-1 font-bold">Reservation date</div>
                                <div className="text-md py-1">{reservationItem.resDate.toString()}</div>
                            </div>
                        
                            <form action={editReservation} className="w-1/2 h-fit flex flex-col items-center justify-center">
                                    <label htmlFor="bookingID" className="font-bold">Booking ID</label>
                                    <input type="text" id="bookingID" name="bookingID" className="bg-slate-300 px-5 py-2 rounded w-[280px] my-2" value={reservationItem._id.toString()} readOnly/>
                                    <label htmlFor="user" className="font-bold">User's ID</label>
                                    <input type="text" id="user" name="user" className="bg-slate-300 px-5 py-2 rounded w-[280px] my-2" value={reservationItem.user.toString()} readOnly/>
                                    <label htmlFor="coWorkingSpace" className="font-bold">Co-working space's ID</label>
                                    <input type="text" id="coWorkingSpace" name="coWorkingSpace" className="bg-slate-300 px-5 py-2 rounded w-[280px] my-2" value={reservationItem.coWorkingSpace._id.toString()}/>
                                    <label htmlFor="resDate" className="font-bold">Edit reservation date</label>
                                    <input type="date" id="resDate" name="resDate" className="bg-slate-300 px-2 py-2 rounded my-2"/>
                                    <button type="submit" className="block rounded-md bg-sky-600 px-3 py-2 shadow-sm text-white hover:bg-indigo-600 my-2">
                                        Edit booking
                                    </button>
                            </form>
                        </div>
                    ))
                }
            </div>
        {/* </form> */}
        </div>
    )
}