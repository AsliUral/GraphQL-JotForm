import CopyToClipboard from "../components/CopyToClipboard";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        query: state.project.query,
    };
};

export default connect(mapStateToProps)(CopyToClipboard);
