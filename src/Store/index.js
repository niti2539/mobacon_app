import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import rootReducer from '../Reducer/rootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
store.subscribe(function(){
    console.log(store.getState());
});
//  default store; 

export const persistor = persistStore(store)