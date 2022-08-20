import React from "react";
import "./page-link-button.css"

export default function PageButton({ pageNum, updatefilterCount,currentpage,userCount}) {

   
    return (
        <button className="pageButton" disabled={currentpage==pageNum?true:false} style={currentpage==pageNum?{color: "black",
            backgroundColor:"white",
            borderColor:"goldenrod"}:null}  onClick={(event) => updatefilterCount(pageNum)}>{pageNum}</button>
    )
}