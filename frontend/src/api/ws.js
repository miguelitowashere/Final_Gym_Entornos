let socket = null;
let callbacks = [];

export function connectWS() {
  socket = new WebSocket("ws://127.0.0.1:8000/ws/reservations/");

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    callbacks.forEach((cb) => cb(data));
  };
}

export function subscribeWS(callback) {
  callbacks.push(callback);
}
