import Link from "next/link";
import Card from "@/components/Card";

export default async function CoWorkingSpaceCatalog({coWorkingSpaceJson}:{coWorkingSpaceJson:Promise<CoWorkingSpaceJson>}) {
    const coWorkingSpaceJsonReady = await coWorkingSpaceJson
    return (
        <div>
            <div className="m-5 flex flex-row content-around justify-around flex-wrap p-2.5">
                {
                    coWorkingSpaceJsonReady.data.map((coWorkingSpaceItem:CoWorkingSpaceItem)=>(
                        <Link href={`/coworkingspace/${coWorkingSpaceItem._id}`} className="w-1/5">
                            <Card coWorkingSpaceName={coWorkingSpaceItem.name} imgSrc={coWorkingSpaceItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}