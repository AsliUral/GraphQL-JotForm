import Prettify from "../components/Prettify";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        prettifycodeGraphql: () => dispatch({ type: "PRETTIFYGRAPHQL" }),
    };
};

//export default AceEditorGraphql;
export default connect(null, mapDispatchToProps)(Prettify);
