import { combineReducers } from "redux";
import amountReducres from "./amountReducres";

const reducers = combineReducers({
    amount: amountReducres
})

export default reducers;