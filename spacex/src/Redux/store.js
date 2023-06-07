import { applyMiddleware, legacy_createStore, combineReducers } from "redux";

import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./Reducer";
const rootReducer = combineReducers({
	ProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
