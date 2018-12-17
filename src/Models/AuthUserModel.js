import API_URL from '../ApiProvider'

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
    }).then(res => { return (!res.ok) ? { status : false } : res.json() }).then(resJson => {
        if(resJson.status == false) return { status : false };
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
    return fetch(API_URL.Login,{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            phoneNumber : phoneNumber,
            password : password
        })
    }).then(res => { return (!res.ok) ? { status : false } : res.json() }).then(resJson => {
        if(resJson.status == false) return { status : false };
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
}