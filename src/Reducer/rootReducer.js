import { combineReducers } from 'redux';
// import ChatAction from '../Actions/ChatAction';
import ChatReducer from './ChatReducer';
import InitialReducer from './InitialReducer';
 const rootReducer = combineReducers({
    ChatReducer,
    InitialReducer
 })

 
 export default rootReducer;