import { Card_details } from "../Action/types";

export const productsInitialState = [];

const Get_char_Reducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case Card_details:
      return [...action.payload];
    default:
      return state;
  }
};
export default Get_char_Reducer;
