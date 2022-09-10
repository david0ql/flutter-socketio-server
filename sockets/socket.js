const {io} = require('../app');

//Mensajes de Sockets

io.on("connection", (client) => {
  console.log("connected");
  client.on("disconnect", () => {
    console.log("disconnected");
  });
  client.on("mensaje", (payload) => {
    console.log(payload);
    io.emit("mensaje", { admin: " nuevo mensaje" });
  });
});
