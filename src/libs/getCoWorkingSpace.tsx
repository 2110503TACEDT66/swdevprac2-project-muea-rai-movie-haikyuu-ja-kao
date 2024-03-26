export default async function getCoWorkingSpace(cid:string) {
    const reponse = await fetch(`https://presentation-day-1-muea-rai-movie-haikyuu-ja-kao-zeta.vercel.app/${cid}`)

    if (!reponse.ok) {
        throw new Error("Failed to fetch co-workind spaces")
    }
    return await reponse.json()
}