import { Show_Locations } from "../Action/types";

export const productsInitialState = [];

const GetLocationReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case Show_Locations:
      return [...action.payload];
    default:
      return state;
  }
};
export default GetLocationReducer;
