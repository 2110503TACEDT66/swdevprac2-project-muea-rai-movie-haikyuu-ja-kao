export default async function addReservation (uid:string, cid:string, reservDate:Date) {
    const response = await fetch("https://presentation-day-1-muea-rai-movie-haikyuu-ja-kao-zeta.vercel.app/api/v1/api/v1/reservations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            resDate: reservDate,
            user: uid,
            coWorkingSpace: cid
        })
    })

    if (!response.ok) {
        throw new Error("Failed to fetch")
    }
    return await response.json()
}