import React from "react";

import FirstPage from "../mini-components/firstpage";
import LastPage from "../mini-components/lastpage";
import PrevPage from "../mini-components/prevPage";
import NextPage from "../mini-components/nextPage";
import PageButton from "../mini-components/page-link-button";

/* this footer component will contain button components , first page link , last page link 

It will also contain logic to show the right number of page links as the constraint is to show 10 row per page, so it will show correct number of page links

*/
const users_per_page = 10;



export default function TogglePages({ updatefilterCount, userCount, currentpage }) {

    let page_count = Math.ceil(userCount / users_per_page);

    let arr_page_count = [];

    for (let i = 1; i <= page_count; i++) {
        arr_page_count.push(i);
    }


    return (
        <div style={{ position: "relative" }}>
            <FirstPage updatefilterCount={updatefilterCount} currentpage={currentpage} Num_of_pages={arr_page_count.length} />
            <PrevPage updatefilterCount={updatefilterCount} currentpage={currentpage} Num_of_pages={arr_page_count.length} />
            {arr_page_count.map((entry) => <PageButton updatefilterCount={updatefilterCount} key={entry} pageNum={entry} />)}
            <NextPage updatefilterCount={updatefilterCount} currentpage={currentpage} Num_of_pages={arr_page_count.length} />
            <LastPage updatefilterCount={updatefilterCount} currentpage={currentpage} Num_of_pages={arr_page_count.length} />
        </div>
    )

}