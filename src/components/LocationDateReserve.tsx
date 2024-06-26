"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem} from '@mui/material'
import { useReducer, useState } from "react"
import { Dayjs } from "dayjs"

export default function LocationDateReserve({onDateChange, onTimeInChange, onTimeOutChange}
    :{onDateChange:Function, onTimeInChange:Function, onTimeOutChange:Function}) {
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const [inTime, setTimeIn] = useState('10')
    const [outTime, setTimeOut] = useState('10')

    // const addReservation = async (addReservation:any) => {
    //     "use server"
    // }

    return (
            <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5
            flex flex-col justify-center items-center mx-auto">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white m-4 w-[300px]" 
                    value={reserveDate}
                    onChange={(value)=>{setReserveDate(value); onDateChange(value); console.log(reserveDate + " " + inTime + " " + outTime);}}/>
                </LocalizationProvider>
                <div className="m-5 pt-3">
                    <Select variant="standard" name="location" id="location1" fullWidth
                    value={inTime} onChange={(e)=>{setTimeIn(e.target.value); onTimeInChange(e.target.value)}} className="h-[2em] w-[200px]">
                        <MenuItem value="10"> 10:00 </MenuItem>
                        <MenuItem value="11"> 11:00 </MenuItem>
                        <MenuItem value="12"> 12:00 </MenuItem>
                        <MenuItem value="13"> 13:00 </MenuItem>
                        <MenuItem value="14"> 14:00 </MenuItem>
                        <MenuItem value="15"> 15:00 </MenuItem>
                        <MenuItem value="16"> 16:00 </MenuItem>
                        <MenuItem value="17"> 17:00 </MenuItem>
                        <MenuItem value="18"> 18:00 </MenuItem>
                    </Select>
                </div>
                <div className="m-5 pt-3 pb-3">
                    <Select variant="standard" name="location" id="location2" 
                    value={outTime} onChange={(e)=>{setTimeOut(e.target.value); onTimeOutChange(e.target.value)}} className="h-[2em] w-[200px]">
                        <MenuItem value="10"> 10:00 </MenuItem>
                        <MenuItem value="11"> 11:00 </MenuItem>
                        <MenuItem value="12"> 12:00 </MenuItem>
                        <MenuItem value="13"> 13:00 </MenuItem>
                        <MenuItem value="14"> 14:00 </MenuItem>
                        <MenuItem value="15"> 15:00 </MenuItem>
                        <MenuItem value="16"> 16:00 </MenuItem>
                        <MenuItem value="17"> 17:00 </MenuItem>
                        <MenuItem value="18"> 18:00 </MenuItem>
                    </Select>
                </div>
            </div>
    )
}