import API_URL from '../ApiProvider'
import { Alert } from 'react-native'

const SignUp = ( userName, phoneNumber, password ) => {
    return fetch(API_URL.SignUp,{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            fullName : userName,
            phoneNumber : phoneNumber,
            password : password   
        })
    }).then(resJson => {
        if (!resJson.ok) {
            if(resJson.status === 401) {
                Alert.alert('Information', 'Phone number is already taken');
            } else {
                Alert.alert('Information', 'Information is missing');
            }
            return {
                status: false
            };

        }
        return {
            status : true,
            message : resJson.data
        };
    }).catch(err => {
        console.error(err)
    });
}

const SendOTP = ( phoneNumber ) => {
    return fetch(API_URL.Verification,{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            phoneNumber : phoneNumber,
        })
    }).then(res => { return (!res.ok) ? { status : false } : {status: true } }).catch(err => {
        console.error(err)
    });
}

const CheckOTP = ( phoneNumber , OTP ) => {
    return fetch(API_URL.Verification,{
        method:'PATCH',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            phoneNumber : phoneNumber,
            otp : OTP
        })
    }).then(res => { return (!res.ok) ? { status : false } : {status: true } }).catch(err => {
        console.error(err)
    });
}

const Login = ( phoneNumber , password  ) => {
    return fetch(API_URL.Login, {
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body:JSON.stringify({
            phoneNumber : phoneNumber,
            password : password
        })
    }).then(res => { return (!res.ok) ? { status : false } : res.json() }).then(resJson => {
        if(resJson.status == false) {
            Alert.alert('Incorrect', 'Username or Password is incorrect!');
            return { status : false };
        } 
        return {status: true , data : resJson};
    }).catch(err => {
        console.error(err)
    });
}

const Logout = (token) => {
    let options = {
        "method": "POST",
        "headers": {
            "authorization": "Bearer " + token,
        }
    };
    return fetch(API_URL.Logout,options).then(res => { return (!res.ok) ? { status : false } : {status: true } }).catch(err => {
        console.error(err)
    });
}

const EditProfile = ( token , formData ) => {
    return fetch(API_URL.EditProfile,{
        method:'PATCH',
        headers:{
            "authorization": "Bearer " + token,
        },
        body: formData
    }).then(res => { return (!res.ok) ? { status : false } : res.json() }).then(resJson => {
        if(resJson.status == false) return { status : false };
        return {status: true , data : resJson};
    }).catch(err => {
        console.error(err)
    });
}

const ChangePassword = ( token , oldPassword , newPassword ) => {
    return fetch(API_URL.ChangePassword,{
        method:'PATCH',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "authorization": "Bearer " + token,
        },
        body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword            
        })
    }).then(res => { return (!res.ok) ? { status : false } : { status : true } }).catch(err => {
        console.error(err)
    });
}

const ForgetPassword = (phoneNumber) => {
    let options = {
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            phoneNumber : phoneNumber,
        })
    };
    return fetch(API_URL.ForgetPassword,options).then(res => { return (!res.ok) ? { status : false } : {status: true } }).catch(err => {
        console.error(err)
    });
}

export default AuthUserModel = {
    Login : Login,
    Logout : Logout,
    SignUp : SignUp,
    CheckOTP : CheckOTP,
    SendOTP : SendOTP,
    ForgetPassword : ForgetPassword,
    EditProfile : EditProfile,
    ChangePassword: ChangePassword,
}