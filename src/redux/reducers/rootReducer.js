import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  content: contentReducer,
  filter: filterReducer,
});

export default rootReducer;
