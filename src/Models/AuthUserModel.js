import API_URL from '../ApiProvider'

const SignUp = ( phoneNumber, password ) => {
    return fetch(API_URL.SignUp,{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            phoneNumber : phoneNumber,
            password : password   
        })
    }).then(res => res.json()).then(resJson => {
        // console.log(resJson);
        if(resJson.message == 'created'){
            return {
                status : 'success',
                message : resJson.data
            };
        }
        return {
            status : 'fail',
            message : resJson.message
        }
    }).catch(err => {
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
    }).then(res => {
        if(!res.ok){
            return false
        }
        return res.json();
    }).then(resJson => {
        if(resJson == false){
            return { status:'fail' };
        }
        return {status:'success' , token : resJson.token};
    }).catch(err => {
        console.error(err)
    });
}


export default AuthUserModel = {
    SignUp : SignUp,
    Login : Login
}