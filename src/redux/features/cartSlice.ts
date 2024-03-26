import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ReservationItem } from "@/interfaces";

type CartState = {
    coworkingItems : ReservationItem[]
}

const initialState:CartState = { coworkingItems: [] }

export const cartSlice = createSlice({
    name: "cart" ,
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>)=>{
            state.coworkingItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>)=>{
            const remainItems = state.coworkingItems.filter(obj => {
                return ((obj.coworkingname !== action.payload.coworkingname) || (obj.intime !== action.payload.intime) || (obj.outtime !== action.payload.outtime) || (obj.reserDate !== action.payload.reserDate))
            })
            state.coworkingItems = remainItems
        }
    }
})
export const { addReservation , removeReservation } = cartSlice.actions
export default cartSlice.reducer