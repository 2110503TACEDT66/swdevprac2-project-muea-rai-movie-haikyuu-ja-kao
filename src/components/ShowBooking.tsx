import { ReservationItem, ReservationJson } from "../../interface"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace"
import { CoWorkingSpaceJson, CoWorkingSpaceItem } from "../../interface"

export default async function ShowBooking({reservationJson}:{reservationJson:Promise<ReservationJson>}) {
    const reservationReady = await reservationJson
    //const coWorkingSpaceJsonReady = await coWorkingJSon

    return (
        <div>
            <div className="my-5 flex flex-row items-center">
            {
                reservationReady.data.map((reservationItem:ReservationItem)=>(
                    <div className="m-6 flex flex-col">
                        <div className="text-md ">{reservationItem._id}</div>
                        <div className="text-md ">{reservationItem.resDate}</div>
                        {

                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
}