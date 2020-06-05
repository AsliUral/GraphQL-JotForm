const redux = require("redux");
const createStore = redux.createStore;

//Just JS object
const initialState = {
    counter: 0,
};
//Reducer
//! never mutal
const rootReducer = (state = initialState, action) => {
    if (action.type == "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    if (action.type == "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value,
        };
    }
    return state;
};
//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log("[Subscription]", store.getState());
});

//Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
