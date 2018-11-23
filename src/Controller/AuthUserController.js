import AuthUserModel from '../Models/AuthUserModel'
import store from '../Store/index'
import { Actions } from 'react-native-router-flux'

export const LoginAction = async (phoneNumber,password) => {
    let data = await AuthUserModel.Login(phoneNumber,password);
    // console.log(data);
    if(data.status == 'success'){
        store.dispatch({type:'SET_AUTH',payload:{
            status:true,
            token: data.token
        }});
        Actions.home();
        return true;
    }
    
    return false;
}

export const SignUpAction = async (phoneNumber,password) => {
    let res = await AuthUserModel.SignUp(phoneNumber,password);
    if(res.status == 'success'){
        Actions.login();
        return true;
    }

    return false;
}