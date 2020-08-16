import { connect } from "react-redux";
import EditorAceQuery from "../components/EditorAceQuery";
import { onChangeQuery } from "../store/actions";

const mapStateToProps = (state) => {
    return {
        query: state.project.query,
        error: state.project.error,
        errorHappen: state.project.errorHappen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeQuery: (value) => dispatch(onChangeQuery(value)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorAceQuery);
