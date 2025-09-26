"use client"

import "./search.scss";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { searchContext } from "../providers/search-providers";

export default function Search({ json }) {

    const { setResults, setErrorMsg } = useContext(searchContext);

    function searchHandler(event) {
        setErrorMsg("");
        const { value } = event.target;

        if (value !== "") {
            var filteredData = json.filter(
                listing => (listing.title.toLowerCase().includes(value.toLowerCase())
                    || listing.description.toLowerCase().includes(value.toLowerCase())))
        }

        if (!filteredData?.length) {
            setErrorMsg("Der er igen resultater");
        }
        setResults(filteredData);
    }

    return (

        <>
            <div className="search">
                <input type="search" onChange={searchHandler} />
                <CiSearch size={30} />
            </div>
        </>
    )
}