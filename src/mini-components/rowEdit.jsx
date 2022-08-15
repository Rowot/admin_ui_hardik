
import React from "react";
import {FaEdit} from "react-icons/fa";



export default function RowEdit({record,rowEditClick}){
    
    return(
       <button className="rowEdit" style={{fontSize:"24px",
       backgroundColor:"#FFE4E1",
       border:"none",
       color:"#008080",
       
       }
       
       } onClick={(event)=>rowEditClick(event,record)}><FaEdit/></button>
    )
}