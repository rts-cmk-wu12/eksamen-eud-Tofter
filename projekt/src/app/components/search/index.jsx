import "./search.scss";
import { CiSearch } from "react-icons/ci";

export default function Search() {


    return (
        <>
            <div className="search">
                <input type="search" name="search" placeholder="Search" />
                <CiSearch size={30} />
            </div>
        </>
    )
}