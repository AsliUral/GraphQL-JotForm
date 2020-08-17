import { connect } from "react-redux";

import Dashboard from "../components/Dashboard";

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

export default connect(mapStateToProps)(Dashboard);
