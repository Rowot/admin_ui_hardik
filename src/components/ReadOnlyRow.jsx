import React from "react";
import Checkbox from "../mini-components/CheckBox";
import RowEdit from "../mini-components/rowEdit";
import RowDelete from "../mini-components/rowDelete";
export default function ReadOnlyRow({ record, rowEditClick, rowDelete, handleCheckBox, isChecked }) {


    return (

        <tr key={record.id}  >
            <td key={`Column${1}`}><Checkbox record={record} handleCheckBox={handleCheckBox} isChecked={isChecked} /></td>
            <td key={`Column${2}`} style={isChecked.includes(record.id) ? { backgroundColor: "#D3D3D3" } : null}>{record["name"]}</td>
            <td key={`Column${3}`} style={isChecked.includes(record.id) ? { backgroundColor: "#D3D3D3" } : null}>{record["email"]}</td>
            <td key={`Column${4}`} style={isChecked.includes(record.id) ? { backgroundColor: "#D3D3D3" } : null}>{record["role"]}</td>
            <td key={`Column${5}`} ><RowEdit record={record} rowEditClick={rowEditClick} /><RowDelete record={record} rowDelete={rowDelete} /></td>
        </tr>

    )
}