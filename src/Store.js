import { createStore } from "redux";
import RootReducers from "./reducers/RootReducer";

const Store = createStore(RootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store