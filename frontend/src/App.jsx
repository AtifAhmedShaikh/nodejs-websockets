import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const connection = new WebSocket("ws://localhost:3000");
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
  };
  return (
    <>
      <button onClick={handleClick}>send Message</button>
    </>
  );
}

export default App;
