import Image from "next/image";
import Link from "next/link";
import './listings-card.scss';


export default function ListingsCard({ listings }) {

    return (
        <Link className="listings" href={`listing-details/${listings.id}`}>
            <div>
            <Image src={listings.asset.url} width={350} height={350} alt=""></Image>
            </div>
            <h2 className="listings__title">{listings.title}</h2>
        </Link>
    )
}