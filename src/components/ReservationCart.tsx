"use client"
import { removeReservation } from "@/redux/features/cartSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart() {
    const coworkingItems = useAppSelector((state)=> state.cartSlice.coworkingItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
             coworkingItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.coworkingId}>
                    <div className="text-xl">{reservationItem.coworkingname}</div>
                    <div className="text-sm">Reserve Date{reservationItem.reserDate}</div>
                    <div className="text-sm">Time In {reservationItem.intime}</div>
                    <div className="text-md">Duration: {reservationItem.numOfhours} days</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 
                    text-white shadow-sm" onClick={()=>dispatch(removeReservation(reservationItem))}>
                        Remove from Cart
                    </button>
                </div>
            ))
        }
        </>
    )
}