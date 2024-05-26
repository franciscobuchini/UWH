// STORE.JS
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers";

const store = createStore(rootReducer);

export default store;
