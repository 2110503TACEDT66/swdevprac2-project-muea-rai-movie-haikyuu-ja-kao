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


export default async function ShowBooking({reservationJson}:{reservationJson:Promise<ReservationJson>}) {

    const reservationReady = await reservationJson
    async function getcws (cid:string) {
        const coWorkingSpace = await getCoWorkingSpace(cid)
        console.log(coWorkingSpace)
        return coWorkingSpace.data.name
    };

    return (
        <div>
            <div className="my-5 flex flex-col items-center bg-black">
            {
                reservationReady.data.map((reservationItem:ReservationItem)=>(
                    <div className="block m-6 flex flex-col w-[500px] h-fit space-x-2 items-center justify-center bg-neutral-200 rounded-lg py-4 text-center">
                        <div className="text-md font-bold">Booking id : </div>
                        <div className="text-md">{reservationItem._id.toString()}</div>
                        <input type="text" hidden id="bookingID" name="bookingID" value={reservationItem._id.toString()}/>
                        <div className="text-md font-bold">Co-working space : </div>
                        <div className="text-md">{getcws(reservationItem.coWorkingSpace._id.toString())}</div>
                        <div className="text-md font-bold">Reservation date : </div>
                        <div className="text-md">{reservationItem.resDate.toString()}</div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}