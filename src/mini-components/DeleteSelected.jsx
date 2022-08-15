import React from "react";
import "./DeleteSelected.css";

export default function DeleteSelected({deleteSelectedRecords}){
    return(
        
            <button className="deleteMultiple" onClick={(event)=>deleteSelectedRecords(event)}>Delete Selected</button>
        
    )

}