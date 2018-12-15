
const init = {
    carrier: ''
  }
  
  export default function Global(state = init, action) {
      switch (action.type) {
        case 'CARRIER': 
          state.carrier = action.payload
          return state;
        
        default:
          return state
      }
    }