"user server";

import { cookies } from "next/headers";
import z from "zod";


export default async function UpdateUser(prevState, formData) {

    const {firstname, lastname, email, password} = Object.fromEntries(formData)

    const schema = z.object({
        firstname: z.string().min(1, {message: "Error"}),
        lastname: z.string().min(1, {message: "Error"}),
        email: z.string().min(1, {message: "Error"}),
        password: z.string().min(1, {message: "Error"})
    })

    const validated = schema.safeParse({
        firstname, lastname, email, password
    });
    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("userCookie")
    const userId = cookieStore.get("userCookieId")

    const response = await fetch(`http://localhost:4000/api/v1/${userId}`, {
        headers: {
            Authorization: `Bearer ${token.value}`
        },
        method: "PUT",
        body: {
            firstname: validated.data.firstname,
            lastname: validated.data.lastname,
            email: validated.data.email,
            password: validated.data.password
        }
    })
    console.log("hej",response);
    
}