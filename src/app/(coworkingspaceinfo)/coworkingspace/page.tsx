import getCoWorkingSpaces from "@/libs/getCoWorkingSpaces";
import CoWorkingSpaceCatalog from "@/components/CoWorkingSpaceCatalog";
import { Suspense } from "react";
import {LinearProgress} from "@mui/material";

export default function CoWorkingSpace() {
    const coWorkingSpaces = getCoWorkingSpaces()

    return (
        <main className="text-center p-5">
            <div className={'text-4xl font-san font-bold w-fit mt-10 mx-auto'}>Select co-working spaces to book</div>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CoWorkingSpaceCatalog coWorkingSpaceJson={coWorkingSpaces}/>
            </Suspense>
        </main>
    )
}