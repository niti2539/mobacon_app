import { GiftedChat } from 'react-native-gifted-chat'

const init = {
    messages: []
}

export default function ChatReducer(state = init, action) {
    switch (action.type) {
      case 'CLEAR':
        return {...state, messages: []}
      case 'FETCH_MESSAGE': 
        return {...state , messages: action.payload};
      case 'PUSH_MESSAGE': 
          let messages = []
          messages = GiftedChat.append(state.messages,action.payload);
        return {
          ...state,
          messages
        };
      default:
        return state
    }
  }