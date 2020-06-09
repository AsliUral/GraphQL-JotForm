import React from "react";
import { Button, Icon, Popup, Image } from "semantic-ui-react";

class PopupIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                {
                    <Popup
                        header="If you help , you can check https://graphql.org/"
                        position="bottom"
                        trigger={
                            <Image
                                src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
                                avatar
                            />
                        }
                    />
                }
            </React.Fragment>
        );
    }
}

export default PopupIcon;
