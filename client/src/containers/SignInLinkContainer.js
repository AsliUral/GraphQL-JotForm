import React from "react";
import { connect } from "react-redux";
import SignedInLinks from "../components/layout/SignedInLinks";
import { signOut, setOpenModalSettings } from "../store/authActions";

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        settingModal: state.auth.settingModal,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
        setOpenModalSettings: (value) => dispatch(setOpenModalSettings(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
