import React, { useState } from "react";

export default function Input({ onSend }) {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  const inputContainerStyle = {
    position: "relative",
    background: "rgba(255, 255, 255, 0.664)",
    padding: "10px 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    borderRadius: "22px",
    maxWidth: "300px",
    transition: "transform 400ms",
    transformStyle: "preserve-3d",
    transform: "rotateX(15deg) rotateY(-20deg)",
  };

  const shadowInputStyle = {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    bottom: "0",
    zIndex: "-1",
    filter: "blur(30px)",
    borderRadius: "20px",
    backgroundColor: "#999cff",
    backgroundImage:
      "radial-gradient(at 85% 51%, hsla(60,60%,61%,1) 0px, transparent 50%), radial-gradient(at 74% 68%, hsla(235,69%,77%,1) 0px, transparent 50%), radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%), radial-gradient(at 75% 16%, hsla(283,60%,72%,1) 0px, transparent 50%), radial-gradient(at 90% 65%, hsla(153,70%,64%,1) 0px, transparent 50%), radial-gradient(at 91% 83%, hsla(283,74%,69%,1) 0px, transparent 50%), radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%)",
  };

  const inputButtonShadowStyle = {
    cursor: "pointer",
    border: "none",
    background: "none",
    transition: "transform 400ms, background 400ms",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    padding: "5px",
  };

  const inputSearchStyle = {
    width: "100%",
    borderRadius: "20px",
    outline: "none",
    border: "none",
    padding: "8px",
    position: "relative",
  };

  return (
    <div className="input">
      <form
        onSubmit={handleSend}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:30
        }}
      >
        <div style={inputContainerStyle}>
          <div style={shadowInputStyle}></div>
          <button style={inputButtonShadowStyle} onClick={handleSend}>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              height="20px"
              width="20px"
            >
              <path
                d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                fillRule="evenodd"
                fill="#17202A"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            name="userInput"
            value={text}
            onChange={handleInputChange}
            style={inputSearchStyle}
            placeholder="What do you want to search?"
          />
        </div>
      </form>
    </div>
  );
}
