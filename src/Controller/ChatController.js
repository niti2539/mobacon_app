import firebase from '../firebase';
import store from '../Store/index';


export const FetchMessage = () => {
    let state = store.getState();
    firebase.database().ref('message/'+ state.InitialReducer.UserToken).on('value', (snapshot) => {
        let data = snapshot.val();
        if(data != null){
          let msg = [];
          for(i in data){
            msg.push(data[i]);
          }
          msg = msg.reverse();
          store.dispatch({type:"FETCH_MESSAGE",payload:msg});
          
        }

        
      });
}


export const SendMessage = (payload) => {
    let state = store.getState();
    firebase.database().ref('message/'+ state.InitialReducer.UserToken ).push(payload.messages[0]);
    if(state.ChatReducer.messages == []){        
      FetchMessage();
    }
}





















const ChatAction = (state = init, action) => {
    // switch(action.type){
    //     // case "FETCH_MESSAGE" : FetchMessage(state, action.payload);
    //     case "FETCH_MESSAGE" : return "Hi";
    //         break;
    //     // case "SEND_MESSAGE" : SendMessage(state, action.payload);
    //     case "SEND_MESSAGE" : return "Hello";
    //         break;
    // }
    return state;
}





export default ChatAction;