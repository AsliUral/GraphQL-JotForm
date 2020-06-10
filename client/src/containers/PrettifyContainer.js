import Prettify from "../components/Prettify";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        prettifyQuery: () => dispatch({ type: "PRETTIFYQUERY" }),
    };
};

//export default AceEditorGraphql;
export default connect(null, mapDispatchToProps)(Prettify);
