import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { dbConnect } from "@/db/dbConnect";
import CoWorkingSpace from "@/app/(coworkingspaceinfo)/coworkingspace/page";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import coworkingspace from "@/db/models/coworking";

export default async function DashboardPage() {

    const addcoworking = async (addcoworkingform:FormData) => {
        "use server"
        const name = addcoworkingform.get("name")
        const address = addcoworkingform.get("address")
        const tel = addcoworkingform.get("tel")
        const open_close_time = addcoworkingform.get("open_close_time")
        const picture = addcoworkingform.get("picture")

        try {
            await dbConnect()
            const coworking = await coworkingspace.create({
                "name" : name,
                "address" : address,
                "tel" : tel,
                "open_close_time" : open_close_time,
                "picture" : picture
            })
        }
        catch(error) {
            console.log(error)
        }
        revalidateTag("coworkingspaces")
        redirect("/coworkingspace")
    }

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="bg-slate-100 m-5 p-5 text-black">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
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
            {
                (profile.data.role == "admin")?
                <form action={addcoworking}>
                    <div className="text-xl text-blue-700">
                         Create Coworkingspace
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
                        <input type="text" required id="name" name="name" placeholder="Coworking Name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
                            Address
                        </label>
                        <input type="text" required id="address" name="address" placeholder="Coworkingspace Address"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
                            Tel
                        </label>
                        <input type="text" required id="tel" name="tel" placeholder="Coworkingspace Tel"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="open_close_time">
                            open_close_time
                        </label>
                        <input type="text" required id="open_close_time" name="open_close_time" placeholder="open_close_time"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
                            Picture
                        </label>
                        <input type="text" required id="picture" name="picture" placeholder="URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rouned">
                        Add New Coworking
                    </button>
                </form>
                :null
            }
        </main>
    );
}