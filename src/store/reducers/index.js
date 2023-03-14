import {combineReducers} from "redux";
import exampleReducer from "@app/store/reducers/exampleReducer";

export default combineReducers({
    example: exampleReducer
})