import React from "react";
import { Accordion, Message } from "semantic-ui-react";
import graphqlSchema from "../graphqlSchema.json";
function SideBarSchemaTab(props) {
    let userSchema = null;
    let userFormSchema = null;

    graphqlSchema.map((data) => {
        userSchema = data.User;
        userFormSchema = data.UserForm;
    });

    console.log(userSchema);

    const userQueryContentQl = (
        <Message>
            <span className="variable">username:</span>
            <span className="type">String</span> <br />
            <span className="variable">name:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">email:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">time_zone:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">account_type:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">status:</span>
            <span className="type">String</span>
            <br />
        </Message>
    );

    const userFormContentQL = (
        <Message>
            <span className="variable">username:</span>
            <span className="type">String</span> <br />
            <span className="variable">id:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">type:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">last_submission:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">status:</span>
            <span className="type">String</span>
            <br />
            <span className="variable">height:</span>
            <span className="type">String</span>
            <br />
        </Message>
    );

    const user = [
        {
            key: "panel-1a",
            title: "userForm",
            content: userFormContentQL,
        },
    ];

    const userContent = (
        <div>
            Schema Details
            <Message>
                {userQueryContentQl}
                <Accordion.Accordion panels={user} />
            </Message>
        </div>
    );

    const userFormContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const userUsageContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const userSubmissionsContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const userSubusersContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const userHistoryContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const userFoldersContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const userReportsContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const userSettingsContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const formContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const formQuestionsContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const submissionContent = (
        <div>
            Schema Details
            <div>
                <Message>{userFormContentQL}</Message>
            </div>
        </div>
    );

    const rootPanels = [
        {
            key: "panel-1",
            title: "user(apiKey: String)",
            content: { content: userContent },
        },
        {
            key: "panel-2",
            title: "userForm(apiKey: String)",
            content: { content: userFormContent },
        },
        {
            key: "panel-2",
            title: "userUsage(apiKey: String)",
            content: { content: userUsageContent },
        },
        {
            key: "panel-2",
            title: "userSubmissions(apiKey: String)",
            content: { content: userSubmissionsContent },
        },
        {
            key: "panel-2",
            title: "userSubusers(apiKey: String)",
            content: { content: userSubusersContent },
        },
        {
            key: "panel-2",
            title: "userHistory(apiKey: String)",
            content: { content: userHistoryContent },
        },
        {
            key: "panel-2",
            title: "userFolders(apiKey: String)",
            content: { content: userFoldersContent },
        },
        {
            key: "panel-2",
            title: "userReports(apiKey: String)",
            content: { content: userReportsContent },
        },
        {
            key: "panel-2",
            title: "userSettings(apiKey: String)",
            content: { content: userSettingsContent },
        },
        {
            key: "panel-2",
            title: "form(apiKey: StringformID: String)",
            content: { content: formContent },
        },
        {
            key: "panel-2",
            title: "formQuestions(apiKey: StringformID: String)",
            content: { content: formQuestionsContent },
        },
        {
            key: "panel-2",
            title: "submission(apiKey: StringsubmissionID: String)",
            content: { content: submissionContent },
        },
    ];

    function fetcher(query) {
        return fetch(window.location.origin + "/graphql", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: query,
            }),
        }).then(function (r) {
            return r.json();
        });
    }

    return <Accordion panels={rootPanels} styled />;
}

export default SideBarSchemaTab;
