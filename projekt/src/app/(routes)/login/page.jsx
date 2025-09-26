import LoginForm from "@/app/components/ui/login";
import Link from "next/link";

export default async function Login() {

    return (
        <>
            <LoginForm />
            <Link href={"/profile"}>Profile</Link>
            
        </>
    )
}