import React, { useState } from "react";
import Index from "./components/Index";
import IncomingCalling from "./components/IncomingCall/IncomingCalling";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Index />
      <IncomingCalling />
    </div>
  );
};

export default App;

// Define static responses based on user input
// switch (message.toLowerCase()) {  //   babaji chat
//   case 'hello':
//   case 'hi':
//     return 'yup';
//     case 'ena bro':
//     return 'ethana type pannu bro';
//   case 'how are you?':
//     return 'Ena bro Soldra ne';
//   case 'what is your name':
//     return 'ni-hey sollu bro';
//   default:
//     return 'Bro na onnu solla va bro';
// }
