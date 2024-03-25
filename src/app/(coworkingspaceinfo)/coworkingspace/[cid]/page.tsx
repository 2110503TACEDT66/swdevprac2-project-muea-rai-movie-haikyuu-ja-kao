import Image from "next/image"
import getCoWorkingSpace from "@/libs/getCoWorkingSpace"

export default async function CoWorkingSpaceDetailPage({params}: {params:{cid:string}}) {
    const coWorkingSpaceDetail = await getCoWorkingSpace(params.cid)

    return (
        <main className="text-center p-5">
            <div className="flex flex-row my-5">
            <Image src={coWorkingSpaceDetail.data.picture}
                alt='Co-Working Space Picture'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"/>
            <div className="text-md mx-5 text-left"> {coWorkingSpaceDetail.data.name}
            <div>Address: {coWorkingSpaceDetail.data.address}</div>
            <div>Tel: {coWorkingSpaceDetail.data.tel}</div>
            <div>Open-Close TIme: {coWorkingSpaceDetail.data.open_close_time}</div>
            </div>
            </div>
        </main>
    )
}