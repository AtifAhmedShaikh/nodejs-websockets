import WebSocket from "ws";

const url = "ws://localhost:3000";
const connection = new WebSocket(url);

connection.onopen = () => {
  console.log("WebSocket Client Connected");
  connection.send("Hello Server!"); // Send a message to the server
};

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
};

connection.onmessage = (message) => {
  console.log(`Received: ${message.data}`);
};
