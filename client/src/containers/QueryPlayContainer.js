import QueryPlay from "../components/QueryPlay";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const mapStateToProps = (state) => {
    return {
        query: state.query,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        runResult: () => dispatch({ type: actionTypes.RUNRESULT }),
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps, mapDispatchToProps)(QueryPlay);
