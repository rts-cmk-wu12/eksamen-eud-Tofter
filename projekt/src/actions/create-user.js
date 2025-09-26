"use server";

import z from "zod";

export default async function CreateUser(prevState, formData) {

    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    

    const schema = z.object({
        firstname: z.string().min(1, { message: "firstname too short" }).max(50, { message: "Too much" }),
        lastname: z.string().min(1, { message: "lastname too short" }),
        email: z.string().min(1, { message: "email too short" }),
        password: z.string().min(1, { message: "password too short" })
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
    
    console.log("response", response);

    if( response.status !== 201) return {
        success: false,
        errors: ["try again heh"]
    }

    return await response.json()
}