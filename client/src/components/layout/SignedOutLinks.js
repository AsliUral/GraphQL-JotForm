import React from "react";
import { NavLink } from "react-router-dom";
const SignedInLinks = () => {
    return (
        <div
            class="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
        >
            <ul class="nav navbar-nav pull-right  ml-auto">
                <li class="nav-item active">
                    <a class="nav-link">
                        <NavLink style={{ color: "#fff" }} to="/signup">
                            Signup
                        </NavLink>
                    </a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link">
                        <NavLink style={{ color: "#fff" }} to="/signin">
                            Login
                        </NavLink>
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default SignedInLinks;
