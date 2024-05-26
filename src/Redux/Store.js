// STORE.JS
import { createStore } from "redux";
import conditionsReducer from "./Reducers";

const store = createStore(conditionsReducer);

export default store;
