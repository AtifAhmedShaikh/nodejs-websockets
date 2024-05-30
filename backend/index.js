import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Welocome to simple web sockets Implementation!" });
});

const server = app.listen(port, () => {
  console.log("Server running on port", port);  
});

const websocket = new WebSocketServer({ server });
const usersList = [];
websocket.on("connection", (socket) => {
  usersList.push({ id: usersList.length + 1 });
  console.log(`connections is active ${usersList.length}`);
  socket.on("message", (message) => {
    console.log("user sended message :", message.toString());
    socket.send("Reply is here");
  });
});
