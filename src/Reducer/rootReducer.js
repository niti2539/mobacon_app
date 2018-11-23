import { combineReducers } from 'redux';
// import ChatAction from '../Actions/ChatAction';

import ChatReducer from './ChatReducer';
import InitialReducer from './InitialReducer';
import AuthUserReducer from './AuthUserReducer';

 const rootReducer = combineReducers({
    ChatReducer,
    InitialReducer,
    AuthUserReducer
 })

 
 export default rootReducer;