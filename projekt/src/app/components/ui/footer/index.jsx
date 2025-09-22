import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import "./footer.scss";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__links">
                <div className="footer__links__title">
                    <Image src="/Icon.svg" width={40} height={40} alt="" />
                    <h2>SwapHub</h2>
                </div>
                <div className="footer__links__title">
                    <Link href={""}><BsTwitterX size={24} /></Link>
                    <Link href={""}><FaInstagram size={24} /></Link>
                    <Link href={""}><FaYoutube size={24} /></Link>
                    <Link href={""}><FaLinkedin size={24} /></Link>
                </div>
            </ul>
            <ul className="footer__links">
                <h3>About SwapHub</h3>
                <li><Link href={""}>How it works</Link></li>
                <li><Link href={""}>Community guidelines</Link></li>
                <li><Link href={""}>Our mission</Link></li>
                <li><Link href={""}>Contact us</Link></li>
            </ul>
            <ul className="footer__links">
                <h3>Discover</h3>
                <li><Link href={""}>Browse categories</Link></li>
                <li><Link className="footer__links-capitalize" href={""}>popular swaps</Link></li>
                <li><Link href={""}>Successful stories</Link></li>
                <li><Link href={""}>Upcoming events</Link></li>
            </ul>
            <ul className="footer__links">
                <h3>Support</h3>
                <li><Link className="footer__links-capitalize" href={""}>help center</Link></li>
                <li><Link href={""}>FAQs</Link></li>
                <li><Link href={""}>Safety tips</Link></li>
                <li><Link href={""}>Report an issue</Link></li>
            </ul>
        </footer>
    )
}