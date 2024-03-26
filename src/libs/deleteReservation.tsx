export default async function deleteReservation(token:string, rid:string) {
    const response = await fetch(`https://presentation-day-1-muea-rai-movie-haikyuu-ja-kao-zeta.vercel.app/api/v1/reservations/${rid}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
    if (!response.ok) {
        throw new Error("Failed to fetch user profile")
    }
    return await response.json()
}