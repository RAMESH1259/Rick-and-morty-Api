import { combineReducers } from "redux";
import GetLocationReducer from './LocationReducer';
// import GetCharacterReducer from './Characterreducers';
import Get_char_Reducer from './Get_Char_reducer';
import single_Card from './singlecardreducer'


const rootReducer = combineReducers({
  LocationData: GetLocationReducer,
  // CharacterData: GetCharacterReducer,
  Whole_character:Get_char_Reducer,
  Sigle_card:single_Card
});

export default rootReducer;