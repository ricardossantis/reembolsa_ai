import { combineReducers } from "redux";
import { authentication } from "./auth";
import session from "./session.js";
export default combineReducers({authentication});
