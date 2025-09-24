import Search from "../components/search";
import "../components/scss/homepage.scss";
import ListingsCard from "../components/listings-card";
import SearchProvider from "../components/providers/search-providers";

export default async function HomePage() {

    const response = await fetch("http://localhost:4000/api/v1/listings")
    const json = await response.json()

    return (
        <>
        <div className="wrapper">
            <SearchProvider>
            <Search json={json} />
            </SearchProvider>
            <div className="pricing">
                <button>New</button>
                <button>Price ascending</button>
                <button>Price descending</button>
            </div>
        </div>
        <div className="content">
            <ul className="content__list">
                {json.map(listings => (
                    <li className="content__item" key={listings.id}>
                        <ListingsCard listings={listings} />
                    </li>
                ))}
            </ul>
        </div>
            
        </>
    )
}