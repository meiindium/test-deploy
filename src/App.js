import React, { useState } from "react";
import Index from "./components/Index";
import IncomingCalling from "./components/IncomingCall/IncomingCalling";

const App = () => {
  const [showCall, setShowCall] = useState(false);

  // Handle the start and end of the call
  const handleCall = (isCallActive) => {
    setShowCall(isCallActive);  // Toggle call visibility
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Pass handleCall to the MiniBotPrompt component */}
      <Index onCall={handleCall} />
      {/* Display IncomingCalling component only when showCall is true */}
      {showCall && <IncomingCalling endCall={handleCall} />} {/* Pass endCall prop */}
    </div>
  );
};

export default App;
