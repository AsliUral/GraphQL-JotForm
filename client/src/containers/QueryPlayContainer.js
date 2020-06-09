import QueryPlay from "../components/QueryPlay";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        resultOfPlay: () => dispatch({ type: "RESULTOFPLAY" }),
    };
};

//export default AceEditorGraphql;
export default connect(null, mapDispatchToProps)(QueryPlay);
