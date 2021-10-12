import homeReducer from "./homeReducer";
import addressReducer from "./addressReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  home: homeReducer,
  address: addressReducer,
});
