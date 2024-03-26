"use client"
import { useSearchParams } from "next/navigation";
import LocationDateReserve from "@/components/LocationDateReserve";
import dayjs, { Dayjs } from "dayjs";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ReservationItem } from "../../../interface";
import { useState } from "react";
import { addReservation } from "@/redux/features/cartSlice";

export default function Booking() {
    const urlParams = useSearchParams()
    const cid = urlParams.get('id')
    const name = urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()
    const makeReservation = () => {
        if (cid && name && reserDate && inTime && outTime) {
            const item:ReservationItem = {
                coworkingId : cid,
                coworkingname : name,
                numOfhours : parseInt(outTime)-parseInt(inTime),
                reserDate : dayjs(reserDate).format("YYYY/MM/DD"),
                intime :  parseInt(inTime),
                outtime : parseInt(outTime)
            }
            dispatch(addReservation(item))
        }
    }

    const [reserDate, setreserDate] = useState<Dayjs|null>(null)
    const [inTime, setTimeIn] = useState<string>('10')
    const [outTime, setTimeOut] = useState<string>('10')

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 m-20">
            <div className="text-xl font-medium text-white">coworkingspace {name}</div>
            <LocationDateReserve onDateChange={(value:Dayjs)=>setreserDate(value)}
                onTimeInChange={(value:string)=>setTimeIn(value)} onTimeOutChange={(v:string)=>setTimeOut(v)}/>
            <button name="Book Vaccine" className="block rounded-md bg-sky-600 px-3 py-2
             shadow-sm text-white" onClick={makeReservation}> Book Vaccine </button>
        </main>
    );
}