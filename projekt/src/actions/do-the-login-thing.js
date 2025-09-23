"use server";
//Taget fra terminsprøve
import { cookies } from "next/headers";
import z from "zod";

export default async function DoTheLoginThing(prevState, formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    const cookieStore = await cookies()

    const schema = z.object({
        email: z.string().min(1, { message: 'Please enter a valid Email' }),
        password: z.string().min(1, { message: 'Please enter a valid Password' }),
    })

    const validated = schema.safeParse({
        email, password
    })

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    }

    const response = await fetch(`http://localhost:4000/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
  },
        body: JSON.stringify( {
        email: validated.data.email,
        password: validated.data.password
    })
})
const json = await response.json()
console.log('login', json);



if (!json) return {
    success: false,
    errors: ["Somethings not quite right"]
}

if (json.password === validated.data.password) {
    
    cookieStore.set('userCookie', 'Login successfull', {
        validUntil: 60 * 500 
    })
}

cookieStore.set({
    name: 'userCookie',
    value: json.token,
    validUntil: 60 * 500 
})

cookieStore.set({
    name: 'userCookieId',
    value: json.userId,
    validUntil: 60 * 500 
})


return validated
    
}
