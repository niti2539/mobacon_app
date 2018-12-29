import API_URL from '../ApiProvider'

const GetReview = (token) => {
    return fetch(API_URL.GetReview,{
        method: 'GET',
        headers:{
            "authorization": "Bearer " + token,
        }
    }).then(res => (!res.ok) ? {status : false} : {status: true, data: res.json()}).catch(err => console.log(err));
}

export default ReviewModel = {
    GetReview : GetReview,
}