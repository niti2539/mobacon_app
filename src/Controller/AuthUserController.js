import AuthUserModel from '../Models/AuthUserModel'
import { store } from '../Store/index'
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

export const EditProfileAction = async (formData) => {
    let state = store.getState();
    let token = state.AuthUserReducer.token;
    let data = await AuthUserModel.EditProfile(token,formData);
    if(data.status){
        data = data.data;
        store.dispatch({type:'PATCH_INFO',payload:data});
        return true;
    }
    return false;
}

export const ChangePasswordAction = async (oldPassword , newPassword) => {
    let state = store.getState();
    let token = state.AuthUserReducer.token;
    let res = await AuthUserModel.ChangePassword(token,oldPassword,newPassword);
    return res.status
}

export const SignUpAction = async (userName,phoneNumber,password) => {
    let res = await AuthUserModel.SignUp(userName,phoneNumber,password);
    if(res.status){
        if(SendOTP(phoneNumber)){
            store.dispatch({type:'SET_PHONE_NUMBER',payload:phoneNumber});
            return true;
        }
    }

    return false;
}

export const SendOTP = async (phoneNumber) => {
    let res = await AuthUserModel.SendOTP(phoneNumber);
    return res.status
}

export const CheckOTP = async (phoneNumber,otp) => {
    let res = await AuthUserModel.CheckOTP(phoneNumber,otp);
    console.log(res);
    return res.status;
}

export const LogoutAction = async () => {
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
    }else{
        TokenTimeOut();
    }

    return res.status;
}

export const TokenTimeOut = async () => {
    store.dispatch({type:'SET_AUTH',payload:{
        status : false,
        info: {},
        token : '',
        phone : ''
    }});
}

export const ForgetPasswordAction = async (phoneNumber) => {
    let res = await AuthUserModel.ForgetPassword(phoneNumber);
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