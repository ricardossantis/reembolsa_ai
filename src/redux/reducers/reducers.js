import { combineReducers } from "redux";
import { authentication } from "./auth";
import { list } from "./list";

export default combineReducers({ authentication, list });
