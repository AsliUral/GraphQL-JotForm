import { connect } from "react-redux";
import EditorAceQuery from "../components/EditorAceQuery";

const mapStateToProps = (state) => {
    return {
        codeGraphql: state.codeGraphql,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangecodeGraphql: (value) =>
            dispatch({ type: "ONCHANGEGRAPHQL", val: value }),
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps, mapDispatchToProps)(EditorAceQuery);
