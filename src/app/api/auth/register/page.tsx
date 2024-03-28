import User from "@/db/models/User"
import { dbConnect } from "@/db/dbConnect"
import { redirect } from "next/navigation"
import bcrypt from 'bcryptjs';

export default async function RegisterPage() {
    const addUser = async (addUserForm:FormData) => {
        "use server"
        const name = addUserForm.get("userName")
        const tel = addUserForm.get("userTel")
        const email = addUserForm.get("userEmail")
        const password = addUserForm.get("userPassword") as string
        const hashedPassword = bcrypt.hashSync(password, 10)

        try {
            await dbConnect()
            const user = await User.create({
                "name": name,
                "tel": tel,
                "email": email,
                "password": hashedPassword
            })
        } catch (error) {
            console.log(error);
        }
        redirect('/api/auth/signin')
    }


    return (
        <main className="m-6 ">
            <form action={addUser} className="flex flex-col items-center">
            <div className="text-xl text-blue-700">Register User</div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-grey-700 pr-4" htmlFor="userName">Name</label>
                <input type="text" required id = "userName" name="userName" placeholder="Name"
                className="bg-white border-2 border-grey-200 rounded w-full p-2
                text-black"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-grey-700 pr-4" htmlFor="userTel">Tel</label>
                <input type="text" required id = "userTel" name="userTel" placeholder="Tel"
                className="bg-white border-2 border-grey-200 rounded w-full p-2
                text-black"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-grey-700 pr-4" htmlFor="userEmail">Email</label>
                <input type="text" required id = "userEmail" name="userEmail" placeholder="Email"
                className="bg-white border-2 border-grey-200 rounded w-full p-2
                text-black"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-grey-700 pr-4" htmlFor="userPassword">Password</label>
                <input type="password" required id = "userPassword" name="userPassword" placeholder="Password"
                className="bg-white border-2 border-grey-200 rounded w-full p-2
                text-black"/>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white p-2 rounded">Register</button>
            </form>
        </main>
    )
}