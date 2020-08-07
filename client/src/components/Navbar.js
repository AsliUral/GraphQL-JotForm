import React from "react";
import CopyToClipboard from "../containers/CopyToClipboardContainer";
import QueryMark from "../containers/QueryMarkContainer";
import Prettify from "../containers/PrettifyContainer";
import HistoryModal from "../containers/HistoryModalContainer";
import PopupIcon from "./PopupIcon";
import QueryPlay from "../containers/QueryPlayContainer";

function Navbar() {
    return (
        <div>
            <Prettify />
            <div style={{ margin: "5px" }}></div>
            <QueryMark />
            <div style={{ margin: "5px" }}></div>
            <CopyToClipboard />
            <div style={{ margin: "5px" }}></div>
            <QueryPlay />
            <div style={{ margin: "5px" }}></div>
            <HistoryModal />
            <div style={{ margin: "5px" }}></div>
            <PopupIcon />
        </div>
    );
}

export default Navbar;
