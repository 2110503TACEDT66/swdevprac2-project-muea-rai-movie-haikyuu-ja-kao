import { ReservationItem, ReservationJson } from "../../interface"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace"
import { CoWorkingSpaceJson, CoWorkingSpaceItem } from "../../interface"
import deleteReservation from "@/libs/deleteReservation"

export default async function ShowBooking({reservationJson}:{reservationJson:Promise<ReservationJson>}) {
    const reservationReady = await reservationJson
    async function cws (cid:string) {
        const coWorkingSpace = await getCoWorkingSpace(cid)
        console.log(coWorkingSpace)
        return coWorkingSpace.data.name
    }

    return (
        <div>
            <div className="my-5 flex flex-col items-center bg-black">
            {
                reservationReady.data.map((reservationItem:ReservationItem)=>(
                    <div className="block m-6 flex flex-col w-[500px] h-fit items-center justify-center bg-neutral-200 rounded-lg text-center py-4">
                        <div className="text-md ">{reservationItem._id.toString()}</div>
                        <div className="text-md ">{cws(reservationItem.coWorkingSpace._id.toString())}</div>
                        <div className="text-md ">{reservationItem.resDate.toString()}</div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}