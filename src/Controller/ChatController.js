// import firebase from '../firebase';
// import { store } from '../Store/index';
// import io from 'socket.io-client/dist/socket.io'



// const host = 'http://mobacon-api.pieros.site/'
// let socket;
  
// SocketAuth = () => {
//   let state = store.getState();
//   let token = state.AuthUserReducer.token;

//   socket = io.connect(host,{
//     query: {
//         token, // use token from storage (JWT)
//     },
//   });
// }


// export const FetchMessage = () => {
//     let state = store.getState();
//     firebase.database().ref('message/'+ state.InitialReducer.UserToken).on('value', (snapshot) => {
//         let data = snapshot.val();
//         if(data != null){
//           let msg = [];
//           for(i in data){
//             msg.push(data[i]);
//           }
//           msg = msg.reverse();
//           store.dispatch({type:"FETCH_MESSAGE",payload:msg});
          
//         }

        
//       });
// }

// export const SendMessage = (payload) => {
//     let state = store.getState();
//     firebase.database().ref('message/'+ state.InitialReducer.UserToken ).push(payload.messages[0]);
//     if(state.ChatReducer.messages == []){        
//       FetchMessage();
//     }
// }






// // For mobile

// // mobile-self-chat
// // on
// // รับ chat ของ user ตัวเอง ที่พิมพ์จากมือถือเครื่องอื่น
// {
//   ok: BOOLEAN,
//   data: {
//       _id: ObjectId,
//       message: STRING,
//       request: {
//           id: NUMBER,
//           carrier: {
//               id: NUMBER,
//               name: STRING,
//           }
//       }
//       createdAt: DATE,
//   },
// }

// // mobile-old-chat
// // emit
// // chat เก่า ๆ ที่เคยพิมพ์ไว้
// {
//   ok: BOOLEAN,
//   data: [{
//       _id: ObjectId,
//       message: STRING,
//       sender: {
//           role: {
//               id: NUMBER,
//           },
//       },
//       request: {
//           id: NUMBER,
//           carrier: {
//               id: NUMBER,
//               name: STRING,
//           }
//       }
//       createdAt: DATE,
//   }],
// }

// // mobile-chat
// // emit
// // ใช้ส่ง text
// {
//   text: STRING,
// }

// // web-chat
// // on
// // รับ chat ที่มาจากฝั่ง Operators (web)
// {
//   ok: BOOLEAN,
//   data: {
//       _id: ObjectId,
//       message: STRING,
//       request: {
//           id: NUMBER,
//           carrier: {
//               id: NUMBER,
//               name: STRING,
//           }
//       },
//       createdAt: DATE,
//   },
// }















// // export const FetchMessage = () => {
// //     let state = store.getState();
// //     firebase.database().ref('message/'+ state.InitialReducer.UserToken).on('value', (snapshot) => {
// //         let data = snapshot.val();
// //         if(data != null){
// //           let msg = [];
// //           for(i in data){
// //             msg.push(data[i]);
// //           }
// //           msg = msg.reverse();
// //           store.dispatch({type:"FETCH_MESSAGE",payload:msg});
          
// //         }

        
// //       });
// // }

// // export const SendMessage = (payload) => {
// //     let state = store.getState();
// //     firebase.database().ref('message/'+ state.InitialReducer.UserToken ).push(payload.messages[0]);
// //     if(state.ChatReducer.messages == []){        
// //       FetchMessage();
// //     }
// // }