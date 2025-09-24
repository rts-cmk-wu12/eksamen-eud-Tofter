"use client";

import Link from "next/link";
import "./header.scss";
import Image from "next/image";

export default function Header() {


    return (
        <header className="header">
            <Link href={"/"} className="header__title">
                <Image src="/icon.svg" width={30} height={30} alt=""/>
                <h1>SwapHub</h1>
            </Link>
            <div className="header__links">
                <Link href={"/"}>Listings</Link>
                <Link href={""}>Community</Link>
                <Link href={""}>Contact</Link>
                <div className="header__links-buttons">
                    <Link href={"/login"}>Sign in</Link>
                    <Link href={""}>Register</Link>
                </div>
            </div>
        </header>
    )
}