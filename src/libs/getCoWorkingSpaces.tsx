export default async function getCoWorkingSpaces() {

    const response = await fetch('http://localhost:5000/api/v1/coworkingspaces')
    if (!response.ok) {
        throw new Error("Failed to fetch co-working spaces")
    }
    return await response.json()
}