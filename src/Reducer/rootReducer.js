import { combineReducers } from 'redux';
// import ChatAction from '../Actions/ChatAction';

import ChatReducer from './ChatReducer';
import InitialReducer from './InitialReducer';
import AuthUserReducer from './AuthUserReducer';
import Global from './Global'

 const rootReducer = combineReducers({
    ChatReducer,
    InitialReducer,
    AuthUserReducer,
    Global
 })

 
 export default rootReducer;