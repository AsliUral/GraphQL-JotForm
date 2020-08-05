import React from "react";
import CopyToClipboard from "../containers/CopyToClipboardContainer";
import QueryMark from "../containers/QueryMarkContainer";
import Prettify from "../containers/PrettifyContainer";
import HistoryModal from "../containers/HistoryModalContainer";
import PopupIcon from "./PopupIcon";
import QueryPlay from "../containers/QueryPlayContainer";
// import QueryShare from "./QueryShare";

function Navbar() {
    return (
        <>
            <Prettify />
            <QueryMark />
            <CopyToClipboard />
            <QueryPlay />
            <HistoryModal />
            <PopupIcon />
            {/* <QueryShare /> */}
        </>
    );
}

export default Navbar;
