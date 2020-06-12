import Prettify from "../components/Prettify";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        prettifyQuery: () => dispatch({ type: actionTypes.PRETTIFYQUERY }),
    };
};

//export default AceEditorGraphql;
export default connect(null, mapDispatchToProps)(Prettify);
