import io from "socket.io-client/dist/socket.io";

class RegisterSocketChat {
  host = "https://mobacon-api.pieros.site/";
  connect(token) {
    console.log("connect to socket.io");
    this.socket = io.connect(this.host, {
      query: {
        token
      }
    });
    return this;
  }

  listen(cb) {
    if (!this.socket) throw new Error("You must connect to socket.io first!!");
    console.log("listen web-chat");
    this.socket.on("web-chat", res => {
      if (res.ok) {
        const {
          data: { _id, message, request }
        } = res;
        let msgObj = {
          _id,
          text: message,
          user: {
            _id: 2,
            name: request.carrier.name
          },
        };
        cb(msgObj);
      }
    });
  }
  clear() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = undefined;
    }
  }
}

export default RegisterSocketChat;
