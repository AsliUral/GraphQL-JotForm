import { connect } from "react-redux";
import EditorAceQuery from "../components/EditorAceQuery";

const mapStateToProps = (state) => {
    return {
        query: state.query,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeQuery: (value) =>
            dispatch({ type: "ONCHANGEQUERY", val: value }),
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps, mapDispatchToProps)(EditorAceQuery);
