import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import Form from "react-bootstrap/Form";
import ButtonB from "react-bootstrap/Button";
import ReactTooltip from "react-tooltip";

function QueryMark(props) {
    const handleChange = (newTags) => {
        props.setTagQuery(newTags);
    };
    const enterHeader = (event) => {
        if (event.target.id === "header") {
            props.setPostHeader(event.target.value);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMarkQuery(
            props.query,
            props.markedQueryPostHeader,
            props.tags
        );
        props.setOpenModal(false);
        toast(" 🦄 The Query was added in marked query sidebar ");
    };
    return (
        <>
            <Modal
                open={props.modal}
                trigger={
                    <div>
                        <button
                            className="bar"
                            data-tip
                            data-for="queryMarkTip"
                            onClick={() => props.setOpenModal(true)}
                        >
                            <Icon name="bookmark" color="teal" />
                            <ToastContainer autoClose={2000} />
                        </button>
                        <ReactTooltip
                            id="queryMarkTip"
                            place="bottom"
                            effect="solid"
                        >
                            Post Query
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
                <Modal.Header> Post Query 🚀</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Post Header</Form.Label>
                                <Form.Control
                                    id="header"
                                    placeholder="Enter header"
                                    onChange={enterHeader}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Tag</Form.Label>
                                <ReactTagInput
                                    tags={props.tags}
                                    onChange={(newTags) =>
                                        handleChange(newTags)
                                    }
                                    maxTags={3}
                                    placeholder={
                                        "Type your query tag and press enter"
                                    }
                                />
                            </Form.Group>
                            <ButtonB
                                variant="outline-danger"
                                type="submit"
                                style={{
                                    align: "center",
                                }}
                            >
                                Post
                            </ButtonB>
                            <ButtonB
                                variant="outline-success"
                                onClick={() => props.setOpenModal(false)}
                                style={{
                                    position: "absolute",
                                    align: "left",
                                    right: "4",
                                }}
                            >
                                Cancel
                            </ButtonB>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </>
    );
}

export default QueryMark;
