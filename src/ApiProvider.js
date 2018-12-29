const Host = 'http://mobacon-api.pieros.site';

export default API_URL = {
    SignUp : Host + '/mobacon/api/mobile/signup',
    Verification : Host + '/mobacon/api/mobile/user/verification', //Sent otp to mobile
    Login : Host + '/mobacon/api/mobile/login',
    Logout : Host + '/mobacon/api/mobile/logout',
    ForgetPassword : Host + '/mobacon/api/mobile/changePassword',
    EditProfile : Host + '/mobacon/api/mobile/user',
    ChangePassword : Host + '/mobacon/api/mobile/user/password',
    GetReview : Host + '/mobacon/api/mobile/request/review',
    GetHistory : Host + '/mobacon/api/mobile/report/history',
}