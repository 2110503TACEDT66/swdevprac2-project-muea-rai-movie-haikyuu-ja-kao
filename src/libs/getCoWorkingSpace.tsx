export default async function getCoWorkingSpace(cid:string) {
    const reponse = await fetch(`http://localhost:5000/api/v1/coworkingspaces/${cid}`)

    if (!reponse.ok) {
        throw new Error("Failed to fetch co-workind spaces")
    }
    return await reponse.json()
}