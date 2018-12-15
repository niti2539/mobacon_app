import AuthUserModel from '../Models/AuthUserModel'
import store from '../Store/index'
import { AsyncStorage } from "react-native"

export const LoginAction = async (phoneNumber,password) => {
    let data = await AuthUserModel.Login(phoneNumber,password);
    if(data.status){
        data = data.data;
        // AsyncStorage.setItem('token',data.token);
        store.dispatch({type:'SET_AUTH',payload:{
            status:true,
            token: data.token,
            info : data.info,
            phone : data.info.phoneNumber
        }});
        return true;
    }
    
    return false;
}

export const SignUpAction = async (phoneNumber,password) => {
    let res = await AuthUserModel.SignUp(phoneNumber,password);
    if(res.status){
        if(SendOTP(phoneNumber)){
            store.dispatch({type:'SET_PHONE_NUMBER',payload:phoneNumber});
            return true;
        }
    }

    return false;
}

const SendOTP = async (phoneNumber) => {
    let res = await AuthUserModel.SendOTP(phoneNumber);
    if(res.status) return true;
    return false
}

export const CheckOTP = async (phoneNumber,otp) => {
    let res = await AuthUserModel.CheckOTP(phoneNumber,otp);
    console.log(res);
    return res.status;
}

export const Logout = async () => {
    let state = store.getState();
    let res = await AuthUserModel.Logout(state.AuthUserReducer.token);
    // console.log(res.status);
    if(res.status){
        
        // await AsyncStorage.removeItem('token');
        store.dispatch({type:'SET_AUTH',payload:{
            status : false,
            info: {},
            token : '',
            phone : ''
        }});
    }

    return res.status;
}

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        let state = store.getState();
        if(state.AuthUserReducer.status){
            resolve(true);
        }else{
            resolve(false);
        }
        
      /*AsyncStorage.getItem('token')
        .then(res => {
          if (res !== null) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(err => reject(err));*/
    });
  };