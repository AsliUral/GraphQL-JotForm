import { connect } from "react-redux";
import EditorAceQuery from "../components/EditorAceQuery";
import { onChangeQuery } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        query: state.query,
        error: state.error,
        errorHappen: state.errorHappen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeQuery: (value) => dispatch(onChangeQuery(value)),
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps, mapDispatchToProps)(EditorAceQuery);
