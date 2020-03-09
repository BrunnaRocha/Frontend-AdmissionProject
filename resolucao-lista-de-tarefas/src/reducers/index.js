import { combineReducer } from "redux";
import todos  from "./todos";

const rootReducer = combineReducer({
    todos
});

export default rootReducer;