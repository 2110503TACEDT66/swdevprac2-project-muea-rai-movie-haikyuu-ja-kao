export default async function getCoWorkingSpaces() {

    const response = await fetch('https://presentation-day-1-muea-rai-movie-haikyuu-ja-kao-zeta.vercel.app/api/v1/coworkingspaces',{next: {tags:['coworkingspaces']}})
    if (!response.ok) {
        throw new Error("Failed to fetch co-working spaces")
    }
    return await response.json()
}