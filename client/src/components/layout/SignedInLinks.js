import React from "react";
import { NavLink } from "react-router-dom";
const SignedInLinks = (props) => {
    const { profile } = props;

    return (
        <div
            class="collapse navbar-collapse flex-grow-0 ml-auto"
            id="navbarSupportedContent"
        >
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item active">
                    <a class="nav-link">
                        <div onClick={props.signOut} style={{ color: "#fff" }}>
                            Log Out
                        </div>
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link">
                        <div class="btn-nav">
                            <button class="btn btn-danger  btn-circle  ml-auto ">
                                {profile.initials}
                            </button>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default SignedInLinks;
