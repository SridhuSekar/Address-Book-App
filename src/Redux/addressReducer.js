import { ON_CLICK_ADD_ADDRESS } from "../Redux/actionType";

const initialState = {
  addressData: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_CLICK_ADD_ADDRESS:
      return {
        addressData: [...state.addressData, action.payload],
      };
    default:
      return state;
  }
};

export default addressReducer;
