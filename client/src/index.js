import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reactReduxFirebase(fbConfig, {
            useFirestoreForProfile: true,
            userProfile: "users",
            attachAuthIsReady: true,
        }),
        reduxFirestore(fbConfig)
    )
);
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
    serviceWorker.unregister();
});
