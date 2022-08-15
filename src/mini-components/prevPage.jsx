//FaCaretLeft

import React from "react";
import { FaCaretLeft } from "react-icons/fa";

export default function PrevPage({ updatefilterCount, currentpage, Num_of_pages }) {
    return (
        <button style={(Num_of_pages === 0) || (currentpage === 1) ? { display: "none" } : {
            fontSize: "34px", color: "#4682B4",
            backgroundColor: "#dcd0d9",
            border: "none"
        }} onClick={(event) => updatefilterCount(--currentpage)}><FaCaretLeft /></button>
    )

}
