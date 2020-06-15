import Prettify from "../components/Prettify";
import { connect } from "react-redux";
import { prettifyQuery } from "../store/actions";
const mapDispatchToProps = (dispatch) => {
    return {
        prettifyQuery: () => dispatch(prettifyQuery()),
    };
};

//export default AceEditorGraphql;
export default connect(null, mapDispatchToProps)(Prettify);
