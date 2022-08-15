import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";


export default function FirstPage({ updatefilterCount, currentpage, Num_of_pages }) {

    return (
        <button style={(Num_of_pages === 0) || (currentpage === 1) ? { display: "none" } : {
            fontSize: "34px", color: "#4682B4",
            backgroundColor: "#dcd0d9",
            border: "none"
        }} onClick={(event) => updatefilterCount(1)} ><FaAngleDoubleLeft /></button>
    )

}
