import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import templeReducer from "./reducers/templeReducer";

const store = createStore(templeReducer, applyMiddleware(thunk));

export default store;
