import React, { useState, useEffect } from "react";
import userImg from "../../assets/Prompt_Img.jpg";
import "./IncomingCalling.css";

const IncomingCalling = ({ endCall }) => {  // Added endCall prop
  const callerProfileBorder = "black";

  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isCounting) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isCounting && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCounting]);

  const startCall = () => {
    setIsCounting(true);
    setCallAccepted(true);
  };

  const endCallHandler = () => {
    setIsCounting(false);
    setSeconds(0);
    setCallAccepted(false);
    endCall(false);  // Hide the call card when the call ends
  };

  const CallerIcon = (
    <span id="end" className="callerBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-telephone-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
        ></path>
      </svg>
    </span>
  );

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    const minsDisplay = mins.toString().padStart(2, "0");
    const secsDisplay = secs.toString().padStart(2, "0");

    return `${minsDisplay}:${secsDisplay}`;
  };

  return (
    <div>
      {!callAccepted ? (
        <div
          style={{
            height: "30vh",
            width: "15vw",
            backgroundColor: "#80808024",
            border: "black 1px solid",
            borderRadius: 5,
            position: "absolute",
            right: 10,
            bottom: 10,
            boxShadow: "0px 3px 15px #222",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src={userImg}
              alt="User"
              style={{
                height: 125,
                width: 125,
                borderRadius: "50%",
                border: `${callerProfileBorder} 5px solid `,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <h3>Balaji K</h3>
            <p>is calling you</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div className="Reject-Calling-Button" onClick={endCallHandler}>
              {CallerIcon}
            </div>

            <div className="Accept-Calling-Button" onClick={startCall}>
              {CallerIcon}
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "30vh",
            width: "15vw",
            backgroundColor: "#80808024",
            border: "black 1px solid",
            borderRadius: 5,
            position: "absolute",
            right: 10,
            bottom: 10,
            boxShadow: "0px 3px 15px #222",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src={userImg}
              alt="User"
              style={{
                height: 125,
                width: 125,
                borderRadius: "50%",
                border: `${callerProfileBorder} 5px solid `,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <h3>Balaji K</h3>
            {formatTime(seconds)}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <div className="Reject-Calling-Button" onClick={endCallHandler}>
              {CallerIcon}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncomingCalling;
