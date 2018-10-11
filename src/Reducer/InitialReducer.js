
export default function InitialReducer(state = {},action){
    switch (action.type) {
        case "INITIAL_USER_TOKEN":
            return {...state,UserToken:action.payload};
        default:
            return state;
    }
}