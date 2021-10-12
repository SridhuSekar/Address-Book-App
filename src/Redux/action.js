import { ON_CLICK_ADD_HOME, ON_CLICK_ADD_ADDRESS } from "./actionType";

export const homeData = (inputData) => {
  return {
    type: ON_CLICK_ADD_HOME,
    payload: inputData,
  };
};

export const addressData = (inputObj) => {
  return {
    type: ON_CLICK_ADD_ADDRESS,
    payload: inputObj,
  };
};
