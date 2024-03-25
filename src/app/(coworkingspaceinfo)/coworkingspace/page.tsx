import getCoWorkingSpaces from "@/libs/getCoWorkingSpaces";
import CoWorkingSpaceCatalog from "@/components/CoWorkingSpaceCatalog";
import { Suspense } from "react";
import {LinearProgress} from "@mui/material";

export default function CoWorkingSpace() {
    const coWorkingSpaces = getCoWorkingSpaces()

    return (
        <main className="text-center p-5">
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CoWorkingSpaceCatalog coWorkingSpaceJson={coWorkingSpaces}/>
            </Suspense>
        </main>
    )
}