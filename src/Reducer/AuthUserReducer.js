let init = {
    status : false,
    token : ''
}

export default function AuthUserReducer(state = init, action) {
    switch (action.type) {
      case 'SET_AUTH': 
        
        return {...state , ...action.payload};
      
      default:
        return state
    }
  }