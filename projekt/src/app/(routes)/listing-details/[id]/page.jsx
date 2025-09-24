import Image from "next/image";
import "./listing-details.scss";
import OtherSwap from "@/app/components/listing-details";

export default async function ListingsDetails({ params }) {

    const { id } = await params;

    const response = await fetch(`http://localhost:4000/api/v1/listings/${id}`)
    const json = await response.json()


    return (
        <>
        <div className="wrapper">
            <div className="details">
                <div className="details__image">
                    <Image src={json.asset.url} width={400} height={400} alt="" />
                </div>
                <div className="details__description">
                    <h2>{json.title}</h2>
                    <p>{json.description}</p>
                    <p>{json.updatedAt.slice(0,10)}</p>
                    <button className="details__description-button">Propose a swap</button>
                </div>
            </div>
            <OtherSwap/>
        </div>
            
        </>
    )
}