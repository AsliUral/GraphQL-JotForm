import React from "react";
import { Accordion, Message } from "semantic-ui-react";
import graphqlSchema from "../graphqlSchema.json";
import { Icon } from "semantic-ui-react";

function SideBarSchemaTab(props) {
    let RootQuery = props.schemaObject.RootQuery;
    let UserQuery = props.schemaObject.User;
    let UserFormQuery = props.schemaObject.UserForm;
    let UserUsageQuery = props.schemaObject.UserUsage;
    let UserSubmissions = props.schemaObject.UserSubmissions;
    let UserSubusers = props.schemaObject.UserSubusers;
    let UserHistory = props.schemaObject.UserHistory;
    let UserFolders = props.schemaObject.UserFolders;
    let UserReports = props.schemaObject.UserReports;
    let UserSettings = props.schemaObject.UserSettings;
    let form = props.schemaObject.form;
    let formQuestion = props.schemaObject.formQuestion;
    let submission = props.schemaObject.submission;

    const showSchemaDetails = () => {
        if (props.userQueryCondition) {
            return <span>{UserQuery}</span>;
        } else if (props.userFormQueryCondition) {
            return <span>{UserFormQuery}</span>;
        } else if (props.userUsageQueryCondition) {
            return <span>{UserUsageQuery}</span>;
        } else if (props.userSubusersQueryCondition) {
            return <span>{UserSubusers}</span>;
        } else if (props.userSubmissionsQueryCondition) {
            return <span>{UserSubmissions}</span>;
        } else if (props.userHistoryQueryCondition) {
            return <span>{UserHistory}</span>;
        } else if (props.userReportsQueryCondition) {
            return <span>{UserReports}</span>;
        } else if (props.userSettingsQueryCondition) {
            return <span>{UserSettings}</span>;
        } else if (props.formQueryCondition) {
            return <span>{form}</span>;
        } else if (props.submissionQueryCondition) {
            return <span>{submission}</span>;
        } else if (props.formQuestionQueryCondition) {
            return (
                <span>
                    {formQuestion}
                    <br />
                    <span class="keyword">{RootQuery.UserForm}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFormQueryCondition",
                                !props.userFormQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                </span>
            );
        } else if (props.userFoldersQueryCondition) {
            return (
                <span>
                    {UserFolders} <br />
                    <span class="keyword">{RootQuery.UserForm}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFormQueryCondition",
                                !props.userFormQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                </span>
            );
        } else if (props.userSubmissionsQueryCondition) {
            return (
                <span>
                    {UserSubmissions}
                    <br />
                    <span class="keyword">{RootQuery.UserForm}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSubmissionsQueryCondition",
                                !props.userSubmissionsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                </span>
            );
        } else {
            return (
                <div>
                    <span class="keyword">{RootQuery.User}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userQueryCondition",
                                !props.userQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        User
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserForm}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFormQueryCondition",
                                !props.userFormQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserUsage}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userUsageQueryCondition",
                                !props.userUsageQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserUsage
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserSubmissions}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSubmissionsQueryCondition",
                                !props.userSubmissionsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserSubmissions
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserSubusers}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSubusersQueryCondition",
                                !props.userSubusersQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserSubusers
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserHistory}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userHistoryQueryCondition",
                                !props.userHistoryQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserHistory
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserFolders}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFoldersQueryCondition",
                                !props.userFoldersQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserFolders
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserReports}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "UserReportsQueryCondition",
                                !props.UserReportsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserReports
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserSettings}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSettingsQueryCondition",
                                !props.userSettingsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserSettings
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.form}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "formQueryCondition",
                                !props.formQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        Form
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.formQuestion}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "formQuestionQueryCondition",
                                !props.formQuestionQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        FormQuestions
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.submission}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "submissionQueryCondition",
                                !props.submissionQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        Submission
                    </span>
                </div>
            );
        }
    };

    return (
        <>
            <div class="doc-category">
                {props.returnCondition.length <= 0 ? null : (
                    <button
                        className="return-bar"
                        onClick={() =>
                            props.handlerReturnCondition(props.returnCondition)
                        }
                    >
                        <Icon name="angle left" color="blue" />
                    </button>
                )}{" "}
                Root Types
                <div class="doc-category-item">
                    {props.rootQueryCondition ? (
                        <div className="doc-link">{showSchemaDetails()}</div>
                    ) : (
                        <div>
                            <span class="keyword">query: </span>
                            <span
                                onClick={() =>
                                    props.handlerConditionUpdate(
                                        "rootQueryCondition",
                                        !props.rootQueryCondition
                                    )
                                }
                                class="type-name"
                            >
                                RootQueryType
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SideBarSchemaTab;
