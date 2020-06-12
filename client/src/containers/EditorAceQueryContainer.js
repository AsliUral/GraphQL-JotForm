import { connect } from "react-redux";
import EditorAceQuery from "../components/EditorAceQuery";
import * as actionTypes from "../store/actions";

const mapStateToProps = (state) => {
    return {
        query: state.query,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeQuery: (value) =>
            dispatch({ type: actionTypes.ONCHANGEQUERY, val: value }),
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps, mapDispatchToProps)(EditorAceQuery);
