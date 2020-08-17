import QueryPlay from "../components/QueryPlay";
import { connect } from "react-redux";
import { runResult } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        query: state.project.query,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runResult: () => dispatch(runResult()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryPlay);
