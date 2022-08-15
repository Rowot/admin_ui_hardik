import React from "react";
import DeleteSelected from "../mini-components/DeleteSelected";
import "./Footer.css";
import TogglePages from "./pageNavigationpanel";

/* this footer component will contain button components , first page link , last page link 

It will also contain logic to show the right number of page links as the constraint is to show 10 row per page, so it will show correct number of page links

*/

function Footer({ currentpage, updatefilterCount, userCount, deleteSelectedRecords }) {

    return (
        <div className="Footer">
            <DeleteSelected deleteSelectedRecords={deleteSelectedRecords} />
            <TogglePages currentpage={currentpage} updatefilterCount={updatefilterCount} userCount={userCount} />
        </div>
    )
}

export default Footer;
