let init = {
    status : false,
    info: {},
    token : '',
    phone : ''
}

export default function AuthUserReducer(state = init, action) {
    switch (action.type) {
      case 'SET_AUTH': 
        return {...state , ...action.payload};
      case 'SET_PHONE_NUMBER' :
        state.phone =  action.payload;
        return state;
      default:
        return state
    }
  }