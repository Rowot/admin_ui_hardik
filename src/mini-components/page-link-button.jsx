import React from "react";
import "./page-link-button.css"

export default function PageButton({ pageNum, updatefilterCount }) {

    return (
        <button className="pageButton" onClick={(event) => updatefilterCount(pageNum)}>{pageNum}</button>
    )
}