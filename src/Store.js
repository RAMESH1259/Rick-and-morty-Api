import { createStore,applyMiddleware} from 'redux';
import ReduxThunk from "redux-thunk";
import rootreducer from './Redux/Reducers/rootreducer'

const store=createStore
(rootreducer,applyMiddleware(ReduxThunk));
export default store;