"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function CreateUser(prevState, formData) {

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    

    const schema = z.object({
        firstname: z.string().min(1, { message: "Give firstname" }).max(50, { message: "Too much" }),
        lastname: z.string().min(1, { message: "lastname duh" }),
        email: z.string().min(1, { message: "doh" }),
        password: z.string().min(1, { message: "glazer" })
    })

    const validated = schema.safeParse({
        firstname,
        lastname,
        email,
        password
    })

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const cookieStore = await cookies();
    /* const access_token = cookieStore.get("userCookie"); */

    const response = await fetch("http://localhost:4000/api/v1/users", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify( {
            firstname: validated.data.firstname,
            lastname: validated.data.lastname,
            email: validated.data.email,
            password: validated.data.password,
        })
    });

    if( response.status !== 201) return {
        success: false,
        errors: ["try again heh"]
    }

    return await response.json()
}