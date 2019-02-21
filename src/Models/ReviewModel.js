import API_URL from '../ApiProvider'

const GetReview = (token) => {
    return fetch(API_URL.GetReview,{
        method: 'GET',
        headers:{
            "authorization": "Bearer " + token,
        }
    }).then(res => (!res.ok) ? {status : false} : res.json() ).then(data => {
        if(data.status == false) return {status : false};
        return {status : true, data: data.data}
    }).catch(err => console.log(err));
}

const LikeDislikeReview = ( token, requestId, action) => {
    let Url = API_URL.GetReview + requestId + '/' + action;
    return fetch(Url,{
        method: 'PATCH',
        headers:{
            "authorization": "Bearer " + token,
        }
    }).then(res => (!res.ok) ? {status : false} : {status : true} ).catch(err => console.log(err));
}



export default ReviewModel = {
    GetReview : GetReview,
    LikeDislikeReview: LikeDislikeReview
}