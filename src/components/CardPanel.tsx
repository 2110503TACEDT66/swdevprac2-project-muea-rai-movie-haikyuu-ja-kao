"use client"
import Card from "@/components/Card"
import { Link } from "@mui/material";
import { useReducer } from "react";

export default function CardPanel() {

    /**
     * Mock Data for Demonstration Only
     */
    const mockHospitalRepo = [{hid:"001", name:'Chulalongkorn Hospital', img:'/img/chula.jpg'},
                              {hid:"002", name:'Rajavithi Hospital', img:'/img/rajavithi.jpg'},
                              {hid:"003", name:'Thammasat University Hospital', img:'/img/thammasat.jpg'}]

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around", padding:"10px"}}>
                {
                    mockHospitalRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.img}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}