export const productsInitialState = {};

const Single_card_Reducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case "GET_CHARACTER_DETAILS":
      return {...action.payload};
    default:
      return state;
  }
};
export default Single_card_Reducer;
