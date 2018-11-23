import { createStore } from 'redux';
import rootReducer from '../Reducer/rootReducer';
const store = createStore(rootReducer);
store.subscribe(function(){
    console.log(store.getState());
});
export default store; 