import { redirect, useSearchParams } from "next/navigation";
import LocationDateReserve from "@/components/LocationDateReserve";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ReservationItem } from "../../../interface";
import { useState } from "react";
import Link from "next/link";
import Reservation from "@/db/models/Reservation";
import { dbConnect } from "@/db/dbConnect";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { coWorkingSpaceID } from "../(coworkingspaceinfo)/coworkingspace/[cid]/page";
import { revalidateTag } from "next/cache";

export default async function Booking() {
    const addReservation = async (addReservationForm:FormData) => {
        "use server"
        const resDate = addReservationForm.get("resDate")
        const user = addReservationForm.get("user")
        const coWorkingSpace = addReservationForm.get("coWorkingSpace")

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
        revalidateTag("reservations")
    }

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-20 mx-auto">
            <div className="text-xl font-bold text-white">Co-Working space booking</div>
            <form action={addReservation} className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5
            flex flex-col justify-center items-center mx-auto text-black">
                <label htmlFor="user" className="font-bold">User's ID</label>
                <input type="text" id="user" name="user" className="bg-slate-300 px-5 py-2 rounded w-[280px]" value={profile.data._id}/>
                <label htmlFor="coWorkingSpace" className="font-bold">Co-working space's ID</label>
                <input type="text" id="coWorkingSpace" name="coWorkingSpace" className="bg-slate-300 px-5 py-2 rounded w-[280px]" value={coWorkingSpaceID}/>
                <label htmlFor="resDate" className="font-bold">Reservation date</label>
                <input type="date" id="resDate" name="resDate" className="bg-slate-300 px-2 py-2 rounded"/>
                <button type="submit" className="block rounded-md bg-sky-600 px-3 py-2 shadow-sm text-white hover:bg-indigo-600">
                    Book co-working space
                </button>
            </form>
                {/* <button name="Book Vaccine" className="block rounded-md bg-sky-600 px-3 py-2
                shadow-sm text-white hover:bg-indigo-600"> Book Co-working space </button> */}
        </main>
    );
}