import { store } from '../Store/index'
import HistoryModel from '../Models/HistoryModel'

export const GetHistory = async () => {
    let state = store.getState();
    let token = state.AuthUserReducer.token;
    return await HistoryModel.GetHistory(token);
}
