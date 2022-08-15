import React from "react";
import "./checkBox.css";

export default function Checkbox({record,handleCheckBox,isChecked}){
    return (
        <p ><input className="check" type="checkbox"  value={record.id} checked={isChecked.includes(record.id)}  onChange={(event)=>handleCheckBox(event)}/></p>
    )
}
