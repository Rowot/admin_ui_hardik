import React, { useState } from "react";
import './searchBar.css'

function SearchBar({ updatequery }) {

    function searchHandler(value) {

        updatequery(value);
    }



    return (
        <div className="search">
            {
            }
            <input id="search-bar" type="text" onChange={(evt) => searchHandler(evt.target.value)} placeholder="👀 Lookup by name, email or role 👀" />
        </div>
    )
}

export default SearchBar;