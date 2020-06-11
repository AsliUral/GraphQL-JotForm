import React from "react";
import { Button, Icon, Popup, Image } from "semantic-ui-react";

function PopupIcon() {
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

export default PopupIcon;
