// "use client"
// import { useSearchParams } from "next/navigation";
// import LocationDateReserve from "@/components/LocationDateReserve";
// import dayjs, { Dayjs } from "dayjs";
// import { AppDispatch } from "@/redux/store";
// import { useDispatch } from "react-redux";
// import { ReservationItem } from "../../../interface";
// import { useState } from "react";
// import { addReservation } from "@/redux/features/cartSlice";

// export default function Booking() {
//     const urlParams = useSearchParams()
//     const cid = urlParams.get('id')
//     const name = urlParams.get('name')

//     const dispatch = useDispatch<AppDispatch>()
//     const makeReservation = () => {
//         if (cid && name && reserDate && inTime && outTime) {
//             const item:ReservationItem = {
//                 coworkingId : cid,
//                 coworkingname : name,
//                 numOfhours : parseInt(outTime)-parseInt(inTime),
//                 reserDate : dayjs(reserDate).format("YYYY/MM/DD"),
//                 intime :  parseInt(inTime),
//                 outtime : parseInt(outTime)
//             }
//             dispatch(addReservation(item))
//         }
//     }

//     const [reserDate, setreserDate] = useState<Dayjs|null>(null)
//     const [inTime, setTimeIn] = useState<string>('10')
//     const [outTime, setTimeOut] = useState<string>('10')

//     return (
//         <main className="w-[100%] flex flex-col items-center space-y-4 m-20">
//             <div className="text-xl font-medium text-white">coworkingspace {name}</div>
//             <LocationDateReserve onDateChange={(value:Dayjs)=>setreserDate(value)}
//                 onTimeInChange={(value:string)=>setTimeIn(value)} onTimeOutChange={(v:string)=>setTimeOut(v)}/>
//             <button name="Book Vaccine" className="block rounded-md bg-sky-600 px-3 py-2
//              shadow-sm text-white" onClick={makeReservation}> Book Vaccine </button>
//         </main>
//     );
// }



import { redirect, useSearchParams } from "next/navigation";
import LocationDateReserve from "@/components/LocationDateReserve";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ReservationItem } from "../../../interface";
import { useState } from "react";
// import { addReservation } from "@/redux/features/cartSlice";
import Link from "next/link";
import Reservation from "@/db/models/Reservation";
import { dbConnect } from "@/db/dbConnect";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { coWorkingSpaceID } from "../(coworkingspaceinfo)/coworkingspace/[cid]/page";


export default async function Booking() {
    // const urlParams = useSearchParams()
    // const cid = urlParams.get('id')
    // const name = urlParams.get('name')
    // const user = urlParams.get('user')

    // const dispatch = useDispatch<AppDispatch>()
    // const makeReservation = () => {
    //     if (cid && user && name && reserDate && inTime && outTime) {
    //         const item:ReservationItem = {
    //             user: user,
    //             coworkingId : cid,
    //             coworkingname : name,
    //             numOfhours : parseInt(outTime)-parseInt(inTime),
    //             reserDate : dayjs(reserDate).format("YYYY/MM/DD"),
    //             intime :  parseInt(inTime),
    //             outtime : parseInt(outTime)
    //         }
    //         dispatch(addReservation(item))
    //     }
    // }

    // const [reserDate, setreserDate] = useState<Dayjs|null>(null)
    // const [inTime, setTimeIn] = useState<string>("10.00")
    // const [outTime, setTimeOut] = useState<string>("10.00")

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    const addReservation = async (addReservationForm:FormData) => {
        "use server"
        const resDate = addReservationForm.get("reservDate")
        const user = addReservationForm.get("userID")
        const coWorkingSpace = addReservationForm.get("cwsID")

        try {
            await dbConnect()
            const reservation = await Reservation.create({
                "resDate": resDate,
                "user": user,
                "coWorkingSpace": coWorkingSpace,
                "createdAt": Date.now()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-20 mx-auto">
            <div className="text-xl font-bold text-white">Co-Working space booking</div>
            <form action={addReservation} className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5
            flex flex-col justify-center items-center mx-auto text-black">
                <label htmlFor="userID" className="font-bold">User's ID</label>
                <input type="text" id="userID" className="bg-slate-300 px-5 py-2 rounded w-[280px]" value={profile.data._id}/>
                <label htmlFor="cwsID" className="font-bold">Co-working space's ID</label>
                <input type="text" id="cwsID" className="bg-slate-300 px-5 py-2 rounded w-[280px]" value={coWorkingSpaceID}/>
                <label htmlFor="reservDate" className="font-bold">Reservation date</label>
                <input type="date" id="resDate" className="bg-slate-300 px-2 py-2 rounded"/>
                <button type="submit" className="block rounded-md bg-sky-600 px-3 py-2 shadow-sm text-white hover:bg-indigo-600">
                    Book co-working space
                </button>
            </form>
                {/* <button name="Book Vaccine" className="block rounded-md bg-sky-600 px-3 py-2
                shadow-sm text-white hover:bg-indigo-600"> Book Co-working space </button> */}
        </main>
    );
}