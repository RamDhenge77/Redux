import changeNumber from "./IncDec";
import { combineReducers } from "redux";

const RootReducers = combineReducers({
    changeNumber
    // here can send other reducer too
})

export default RootReducers