import {combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import {plansReducer} from "./plansReducer";

const rootReducer = combineReducers({
    user: userReducer,
    plans: plansReducer,
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);