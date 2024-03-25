import DateReserve from "@/components/DateReserve";
import { MenuItem, Select, TextField } from "@mui/material";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{profile.data.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{profile.data.email}</td>
                </tr>
                <tr>
                    <td>Tel.</td>
                    <td>{profile.data.tel}</td>
                </tr>
                <tr>
                    <td>Member Since</td>
                    <td>{createdAt.toString()}</td>
                </tr>
                </tbody>
            </table>
            <form className="flex flex-col w-fit space-y-2"> 
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"/>
            <TextField variant="standard" name="Citizen ID" label="Citizen ID"/>
            <Select variant="standard" id="hospital">
                <MenuItem value="Chula"> Chulalongkorn Hospital </MenuItem>
                <MenuItem value="Rajavithi"> Rajavithi Hospital </MenuItem>
                <MenuItem value="Thammasat"> Thammasat University Hospital</MenuItem>
            </Select>
            <DateReserve/>
            <button name="Book Vaccine" className="block rounded-md bg-sky-600 px-3 py-2
             shadow-sm text-white"> Book Vaccine </button>
            </form>
        </main>
    );
}