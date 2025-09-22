import Image from "next/image";
import Link from "next/link";
import './listings-card.scss';


export default function ListingsCard({ listings }) {

    return (
        <Link className="listings" href={`/listing/${listings.id}`}>
            <div>
            <Image src={listings.asset.url} width={200} height={200} alt=""></Image>
            </div>
            <h2>{listings.title}</h2>
        </Link>
    )
}