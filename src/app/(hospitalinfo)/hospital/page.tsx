import getHospitals from "@/libs/getHospitals";
import CoWorkingSpaceCatalog from "@/components/CoWorkingSpaceCatalog"
import { Suspense } from "react";
import {LinearProgress} from "@mui/material";

export default function Hospital() {
    const hospitals = getHospitals()

    return (
        <main className="text-center p-5">

        </main>
    )
}