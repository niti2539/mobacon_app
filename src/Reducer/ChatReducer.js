import { GiftedChat } from 'react-native-gifted-chat'

const init = {
    messages: []
}

export default function ChatReducer(state = init, action) {
    switch (action.type) {
      case 'FETCH_MESSAGE': 
        return {...state , messages: action.payload};
      case 'PUSH_MESSAGE': 
          state.messages= GiftedChat.append(state.messages,action.payload);
        return state;
      default:
        return state
    }
  }