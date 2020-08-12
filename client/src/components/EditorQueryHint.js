function EditorQueryHint(query) {
    if (query.includes("userForm")) {
        if (query.includes("userForm(apiKey")) {
            return {
                list: [
                    "id: String",
                    "username: String",
                    "type: String",
                    "last_submission: String",
                    "status: String",
                    "height: Int",
                    "count: Int",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("userUsage")) {
        if (query.includes("userUsage(apiKey")) {
            return {
                list: [
                    "submissions: Int",
                    "ssl_submissions: Int",
                    "payments: Int",
                    " uploads: Int",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("userSubmissions")) {
        if (query.includes("userSubmissions(apiKey")) {
            return {
                list: [
                    "id: String",
                    "form_id: String",
                    "ip: String",
                    "created_at: String",
                    "updated_at: String",
                    "status: String",
                    "new: String",
                    "flag: String",
                    "userForm(apiKey: String):",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("userSubusers")) {
        if (query.includes("userSubusers(apiKey")) {
            return {
                list: [
                    "owner: String",
                    "status: String",
                    "email: String",
                    "username: String",
                    "created_at: String",
                    "permissions: Permissions",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("userHistory")) {
        if (query.includes("userHistory(apiKey")) {
            return {
                list: [
                    "type: String",
                    "formID: String",
                    "username: String",
                    "formTitle: String",
                    "formStatus: String",
                    "ip: String",
                    "timestamp: Int",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("userFolders")) {
        if (query.includes("userFolders(apiKey")) {
            return {
                list: [
                    "id: String",
                    "path: String",
                    "owner: String",
                    "name: String",
                    "parent: String",
                    "color: String",
                    "subfolders: Subfolders",
                    "userForm(apiKey: String):",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("userReport")) {
        if (query.includes("userReport(apiKey")) {
            return {
                list: [
                    "id: String",
                    "form_id: String",
                    "title: String",
                    "created_at: String",
                    "updated_at: String",
                    "fields: String",
                    "list_type: String",
                    "status: String",
                    "url: String",
                    "isProtected: Boolean",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("userSettings")) {
        if (query.includes("userSettings(apiKey")) {
            return {
                list: [
                    "username: String",
                    "name: String",
                    "email: String",
                    "website: String",
                    "time_zone: String",
                    "account_type: String",
                    "status: String",
                    "created_at: String",
                    "updated_at: String",
                    "usage: String",
                    "industry: String",
                    "securityAnswer: String",
                    "company: String",
                    "doNotClone: String",
                    "webhooks: String",
                    "avatarUrl: String",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("user")) {
        if (query.includes("user(apiKey")) {
            return {
                list: [
                    "username: String",
                    "name: String",
                    "email: String",
                    "time_zone: String",
                    "account_type: String",
                    "status: String",
                    "created_at: String",
                    "updated_at: String",
                    "website: String",
                    "company: String",
                    "folderLayout: String",
                    "language: String",
                    "avatarUrl: String",
                    "userForm(apiKey: String):",
                    "userSubmissions(apiKey: String):",
                ],
            };
        } else {
            return {
                list: ["apiKey", "String"],
            };
        }
    } else if (query.includes("formQuestions")) {
        if (query.includes("formQuestions(")) {
            return {
                list: [
                    "hint: String",
                    "labelAlign: String",
                    "name: String",
                    "order: String",
                    "qid: String",
                    "readonly: String",
                    "required: String",
                    "shrink: String",
                    "size: String",
                    "text: String",
                    "type: String",
                    "validationtype: String",
                    "userForm(apiKey: String):",
                ],
            };
        } else {
            return {
                list: ["apiKey", "formID", "String"],
            };
        }
    } else if (query.includes("form")) {
        if (query.includes("form(")) {
            return {
                list: [
                    "id: String",
                    "username: String",
                    "title: String",
                    "height: String",
                    "url: String",
                    "status: String",
                    "created_at: String",
                    "updated_at: String",
                    "new: String",
                    "count: String",
                ],
            };
        } else {
            return {
                list: ["apiKey", "formID", "String"],
            };
        }
    } else if (query.includes("submission")) {
        if (query.includes("submission(apiKey")) {
            return {
                list: [
                    " id: String",
                    "form_id: String",
                    "ip: String",
                    "created_at: String",
                    "updated_at: String",
                    "status: String",
                    "new: String",
                    "answers: Answer",
                ],
            };
        } else {
            return {
                list: ["apiKey", "submissionID", "String"],
            };
        }
    } else {
        return {
            list: [
                "user(apiKey: String):User",
                "userForm(apiKey: String): [UserFormType]",
                "userUsage(apiKey: String): UserUsage",
                "userSubmissions(apiKey: String): [UserSubmissions]",
                "userSubusers(apiKey: String): UserSubusers",
                "userHistory(apiKey: String): [UserHistory]",
                "userFolders(apiKey: String): UserFolders",
                "userReports(apiKey: String): UserReport",
                "userSettings(apiKey: String): UserSetting",
                "form(apiKey: String, formID: String): form",
                "formQuestions(apiKey: String, formID: String): formQuestions",
                "submission(apiKey: String, submissionID: String): submissions",
            ],
        };
    }
}
module.exports = EditorQueryHint;
