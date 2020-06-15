export const ONCHANGEQUERY = "ONCHANGEQUERY";
export const PRETTIFYQUERY = "PRETTIFYQUERY";
export const RUNRESULT = "RUNRESULT";
export const SETQUERYRESULT = "SETQUERYRESULT";
export const SETQUERYERROR = "SETQUERYERROR";
export const ADDMARKQUERY = "ADDMARKQUERY";
export const ONSETSIDEBAROPEN = "ONSETSIDEBAROPEN";
export const PINSIDEBAR = "PINSIDEBAR";

export const prettifyQuery = () => {
    return {
        type: PRETTIFYQUERY,
    };
};

export const onChangeQuery = (value) => {
    return {
        type: ONCHANGEQUERY,
        val: value,
    };
};

export const runResult = () => {
    return {
        type: RUNRESULT,
    };
};

export const setQueryResult = (value) => {
    return {
        type: SETQUERYRESULT,
        val: value,
    };
};

export const setQueryError = (value) => {
    return {
        type: SETQUERYERROR,
        val: value,
    };
};

export const addMarkQuery = () => {
    return {
        type: ADDMARKQUERY,
    };
};

export const onSetSideBarOpen = (value) => {
    return {
        type: ONSETSIDEBAROPEN,
        val: value,
    };
};

export const pinSideBar = (value) => {
    return {
        type: PINSIDEBAR,
        val: value,
    };
};
