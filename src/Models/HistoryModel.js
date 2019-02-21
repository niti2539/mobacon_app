import API_URL from '../ApiProvider'

const GetHistory = (token) => {
    return fetch(API_URL.GetHistory ,{
        method: 'GET',
        headers:{
            "authorization": "Bearer " + token,
        }
    }).then(res => (!res.ok) ? {status : false} : res.json() ).then(data => {
        if(data.status == false) return {status : false};
        return {status : true, data: data.data}
    }).catch(err => console.log(err));
}

export default HistoryModel = {
    GetHistory : GetHistory,
}