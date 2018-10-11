
const init = {
    messages: []
}

export default function ChatReducer(state = init, action) {
    switch (action.type) {
      case 'FETCH_MESSAGE': 
        return {...state , messages: action.payload};
      
      default:
        return state
    }
  }