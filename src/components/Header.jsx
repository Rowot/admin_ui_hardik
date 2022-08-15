import React from "react";
import "./header.css";
import Checkbox from "../mini-components/CheckBox";

// this component will contain---- A Select All CheckBox-----> Name-->email-->Role--->Action headings

function Header(){

    return(
        <div className="header">
            <p id="header-row"><Checkbox/> <em>Name</em><em>Email</em> <em>Role</em><em>Action</em></p>
        </div>
    )
}

export default Header;