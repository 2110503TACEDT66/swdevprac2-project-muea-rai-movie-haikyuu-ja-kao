import Link from "next/link";
import Card from "@/components/Card";

export default async function HospitalCatalog({hospitalsJson}:{hospitalsJson:Promise<HospitalJson>}) {
    const hospitalJsonReady = await hospitalsJson
    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row",
            alignContent:"space-around",justifyContent:"space-around", flexWrap:"wrap", padding:"10px"}}>
                {
                    hospitalJsonReady.data.map((hospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                            <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}