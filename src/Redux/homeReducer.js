import { ON_CLICK_ADD_HOME } from "./actionType";

const initialState = {
  homeData: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CLICK_ADD_HOME:
      return {
        homeData: [...state.homeData, { text: action.payload }],
      };

    default:
      return state;
  }
};

export default homeReducer;
