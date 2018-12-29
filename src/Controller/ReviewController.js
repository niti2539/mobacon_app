import store from '../Store/index'
import ReviewModel from '../Models/ReviewModel'
export const GetLastReview = async () => {
    let state = store.getState();
    let token = state.AuthUserReducer.token;
    let data = await ReviewModel.GetReview(token);
    if(data.status == true){
        return data.data;
    }else{
        return data.status;
    }
}