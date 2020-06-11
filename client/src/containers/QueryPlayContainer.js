import QueryPlay from "../components/QueryPlay";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        query: state.query,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resultOfPlay: () => dispatch({ type: "RESULTOFPLAY" }),
    };
};

//export default AceEditorGraphql;
export default connect(mapStateToProps, mapDispatchToProps)(QueryPlay);
