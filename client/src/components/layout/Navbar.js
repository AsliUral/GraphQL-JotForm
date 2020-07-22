import React from "react";
import { NavLink } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "../../containers/SignInLinkContainer";
import "./NavbarButton.css";

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link">
                            <NavLink style={{ color: "#fff" }} to="/">
                                Home
                            </NavLink>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                            <NavLink style={{ color: "#fff" }} to="/socialQL">
                                SocialQL
                            </NavLink>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                            <NavLink
                                style={{ color: "#fff" }}
                                to="/collaborate"
                            >
                                Collaborate
                            </NavLink>
                        </a>
                    </li>
                </ul>
                {links}
            </div>
        </nav>
    );
};
export default Navbar;
