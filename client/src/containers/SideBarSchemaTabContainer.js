import React from "react";
import { connect } from "react-redux";
import SideBarSchemaTab from "../components/SideBarSchemaTab";
import {
    handlerConditionUpdate,
    handlerReturnCondition,
} from "../store/actions";

const mapStateToProps = (state) => {
    return {
        schemaObject: state.project.schemaObject,
        rootQueryCondition: state.project.rootQueryCondition,
        userQueryCondition: state.project.userQueryCondition,
        userFormQueryCondition: state.project.userFormQueryCondition,
        userUsageQueryCondition: state.project.userUsageQueryCondition,
        userSubusersQueryCondition: state.project.userSubusersQueryCondition,
        userHistoryQueryCondition: state.project.userHistoryQueryCondition,
        userFoldersQueryCondition: state.project.userFoldersQueryCondition,
        userReportsQueryCondition: state.project.userReportsQueryCondition,
        userSettingsQueryCondition: state.project.userSettingsQueryCondition,
        userSubmissionsQueryCondition:
            state.project.userSubmissionsQueryCondition,
        formQueryCondition: state.project.formQueryCondition,
        formQuestionQueryCondition: state.project.formQuestionQueryCondition,
        returnCondition: state.project.returnCondition,
        submissionQueryCondition: state.project.submissionQueryCondition,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handlerConditionUpdate: (condition, value) =>
            dispatch(handlerConditionUpdate(condition, value)),
        handlerReturnCondition: (value) =>
            dispatch(handlerReturnCondition(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarSchemaTab);
