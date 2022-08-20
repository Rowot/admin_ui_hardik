import React from "react";
import Checkbox from "../mini-components/CheckBox";
import RowEdit from "../mini-components/rowEdit";
import RowDelete from "../mini-components/rowDelete";
export default function ReadOnlyRow({ record, rowEditClick, rowDelete, handleCheckBox, isChecked,index }) {


    return (

        <tr ><td ><Checkbox record={record} handleCheckBox={handleCheckBox} isChecked={isChecked} /></td>
            <td  style={isChecked.includes(record.id) ? { backgroundColor: "#D3D3D3" } : null}>{record["name"]}</td>
            <td  style={isChecked.includes(record.id) ? { backgroundColor: "#D3D3D3" } : null}>{record["email"]}</td>
            <td  style={isChecked.includes(record.id) ? { backgroundColor: "#D3D3D3" } : null}>{record["role"]}</td>
            <td  ><RowEdit record={record} rowEditClick={rowEditClick} /><RowDelete record={record} rowDelete={rowDelete} /></td>
        </tr>

    )
}