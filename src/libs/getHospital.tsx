export default async function getHospital(hid:string) {
    const reponse = await fetch(`https://vaccine-app-backend-2.vercel.app/api/v1/hospitals/${hid}`)

    if (!reponse.ok) {
        throw new Error("Failed to fetch cars")
    }
    return await reponse.json()
}