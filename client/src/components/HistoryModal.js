import React from "react";

import { Button, Icon, Modal } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

function HistoryModal(props) {
    return (
        <>
            <Modal
                trigger={
                    // <Button animated="vertical">
                    //     <Button.Content hidden>History</Button.Content>
                    //     <Button.Content visible>
                    //         <Icon name="history" />
                    //     </Button.Content>
                    // </Button>
                    <div>
                        <button data-tip className="bar" data-for="historyTip">
                            <Icon name="history" />
                        </button>
                        <ReactTooltip
                            id="historyTip"
                            place="bottom"
                            effect="solid"
                        >
                            Query History
                        </ReactTooltip>
                    </div>
                }
                style={{
                    height: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto",
                }}
            >
                <Modal.Header>History of Query</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        {props.queryHistory.map((history) => (
                            <h2>
                                {" "}
                                {history}
                                <CopyToClipboard text={history}>
                                    <Button animated="vertical">
                                        <Button.Content hidden>
                                            Copy
                                        </Button.Content>
                                        <Button.Content visible>
                                            <Icon name="copy" />
                                        </Button.Content>
                                    </Button>
                                </CopyToClipboard>
                                <br></br>
                            </h2>
                        ))}
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </>
    );
}

export default HistoryModal;
