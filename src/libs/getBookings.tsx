export default async function getBookings(token:string) {
    const response = await fetch("https://presentation-day-1-muea-rai-movie-haikyuu-ja-kao-zeta.vercel.app/api/v1/reservations", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },
    })

    if (!response.ok) {
        throw new Error("Failed to fetch bookings")
    }
    return await response.json()
}