import { createStore } from 'redux';
import rootReducer from '../Reducer/rootReducer';
// function todos(state = [], action) {
//     switch (action.type) {
//       case 'ADD_TODO':
//         return state.concat([action.text])
//       default:
//         return state
//     }
// }
// const store = createStore(todos);
const store = createStore(rootReducer);
// store.subscribe(function(){
//     console.log(store.getState());
// });
export default store; 