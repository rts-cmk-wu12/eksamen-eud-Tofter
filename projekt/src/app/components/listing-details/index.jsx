import ListingsCard from "../listings-card";
import "./other-swap.scss";

export default async function OtherSwap({json}) {

    const response = await fetch("http://localhost:4000/api/v1/listings/")
    const listings = await response.json()

    const id = json.userId

    const match = listings.filter(user => user.userId === id)

    console.log("hej",match);
    

    return (
        <div className="swap">
            <h3>Other items from this swapper</h3>
            <ul className="swap__list">
                {match.map( listings => (
                    <li className="swap__list__items" key={listings.id}>
                       <ListingsCard listings={listings}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}