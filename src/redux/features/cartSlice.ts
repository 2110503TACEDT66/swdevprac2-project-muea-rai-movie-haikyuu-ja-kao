import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";

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
                return ((obj._id !== action.payload._id) || (obj.coWorkingSpace !== action.payload.coWorkingSpace) || 
                (obj.resDate !== action.payload.resDate) || (obj.user !== action.payload.user))
            })
            state.coworkingItems = remainItems
        }
    }
})
export const { addReservation , removeReservation } = cartSlice.actions
export default cartSlice.reducer