import { AsyncStorage } from 'react-native';
import firebase from '../firebase';
import store from '../Store/index';

export default class InitialApp {
    constructor(){
        AsyncStorage.getItem("UserToken").then((value)=>{
            if(value == undefined){
                let key = firebase.database().ref().child('message').push().key;
                AsyncStorage.setItem("UserToken",key);
                AsyncStorage.getItem("UserToken").then((value)=>{
                    store.dispatch({type:"INITIAL_USER_TOKEN",payload:value});
                });
            }else{
                store.dispatch({type:"INITIAL_USER_TOKEN",payload:value});
            }
        });
    }
    

}