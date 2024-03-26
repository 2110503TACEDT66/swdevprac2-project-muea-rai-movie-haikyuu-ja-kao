import Link from "next/link";
import Card from "@/components/Card";
import { CoWorkingSpaceJson, CoWorkingSpaceItem } from "../../interface";

export default async function CoWorkingSpaceCatalog({coWorkingSpaceJson}:{coWorkingSpaceJson:Promise<CoWorkingSpaceJson>}) {
    const coWorkingSpaceJsonReady = await coWorkingSpaceJson
    return (
        <div>
            <div className="my-5 flex flex-col items-center">
                {
                    coWorkingSpaceJsonReady.data.map((coWorkingSpaceItem:CoWorkingSpaceItem)=>(
                        <Link href={`/coworkingspace/${coWorkingSpaceItem._id}`} className="w-1/2">
                            <div className="flex flex-row">
                                <Card coWorkingSpaceName={coWorkingSpaceItem.name} imgSrc={coWorkingSpaceItem.picture}/>
                                <div className={'text-xl font-san font-bold w-fit mt-10 mx-auto w-1/4 item'}>{ coWorkingSpaceItem.name }</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}