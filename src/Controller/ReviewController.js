import { store } from '../Store/index'
import ReviewModel from '../Models/ReviewModel'
export const GetLastReview = async () => {
    let state = store.getState();
    let token = state.AuthUserReducer.token;
    return await ReviewModel.GetReview(token);
}

export const LikeDislikeReview = async (reqId,action) => {
    let state = store.getState();
    let token = state.AuthUserReducer.token;
    action = (action) ? 'like' : 'dislike'
    return await ReviewModel.LikeDislikeReview(token,reqId,action);
}