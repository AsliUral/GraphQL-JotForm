import Navbar from "../components/layout/Navbar";
import { connect } from "react-redux";
import { runResult } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps)(Navbar);
