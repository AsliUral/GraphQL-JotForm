import React from "react";
import CopyToClipboard from "./CopyToClipboard";
import QueryMark from "../containers/QueryMarkContainer";
import Prettify from "../containers/PrettifyContainer";
import HistoryModal from "../containers/HistoryModalContainer";
import PopupIcon from "./PopupIcon";
import QueryPlay from "../containers/QueryPlayContainer";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Prettify />
                <QueryMark />
                <CopyToClipboard />
                <QueryPlay />
                <HistoryModal />
                <PopupIcon />
            </>
        );
    }
}

export default Navbar;
