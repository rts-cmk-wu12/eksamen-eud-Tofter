import { cookies } from "next/headers";

export default async function Profile() {

    const cookieStore = await cookies()
    const token = cookieStore.get("userCookie")
    const tokenId = cookieStore.get("userCookieId")

    const response = await fetch(`http://localhost:4000/api/v1/users/${tokenId.value}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token.value}`
        }
    })
    const jsonUser = await response.json()


    return (
        <>
            <h2>Hej {jsonUser.firstname} {jsonUser.lastname}</h2>
        </>
    )
}