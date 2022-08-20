import React from "react";
import { FaTrash } from "react-icons/fa";
import "./navigational.css"


export default function RowDelete({ record, rowDelete }) {
    return (
        <button className="navigation" style={{
            fontSize: "24px",
            backgroundColor: "#FFE4E1",
            border: "none",
            color: "#8B0000"
        }} onClick={(event) => rowDelete(event, record.id)}><FaTrash /></button>
    )
}