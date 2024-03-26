'use client';
import deleteReservation from "@/libs/deleteReservation";
 
export default function Button({id, token}:{id:string, token:string}) {
  return (
    <div>
    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm mx-auto m-3" 
    onClick={() => deleteReservation(token, id)}> 
      Delete
    </button>
    </div>
  );
}