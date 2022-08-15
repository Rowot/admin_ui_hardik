import React from "react";
import { FaTrash } from "react-icons/fa";


export default function RowDelete({ record, rowDelete }) {
    return (
        <button style={{
            fontSize: "24px",
            backgroundColor: "#FFE4E1",
            border: "none",
            color: "#8B0000"
        }} onClick={(event) => rowDelete(event, record.id)}><FaTrash /></button>
    )
}