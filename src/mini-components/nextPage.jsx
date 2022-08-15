import React from "react";
import { FaCaretRight } from "react-icons/fa";

export default function NextPage({ updatefilterCount, currentpage, Num_of_pages }) {
    return (
        <button style={(Num_of_pages === 0) || (currentpage === Num_of_pages) ? { display: "none" } : {
            fontSize: "34px", color: "#4682B4",
            backgroundColor: "#dcd0d9",
            border: "none"
        }} onClick={(event) => updatefilterCount(++currentpage)}><FaCaretRight /></button>
    )

}
