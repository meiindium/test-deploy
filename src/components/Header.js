import React from "react";

const Header = () => {
  const dotStyles = [
    { backgroundColor: "#ff605c", borderRadius: 50, width: 15, height: 15 },
    { backgroundColor: "#ffbd44", borderRadius: 50, width: 15, height: 15 },
    { backgroundColor: "#00ca4e", borderRadius: 50, width: 15, height: 15 },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: 10,
        backgroundColor: "#011522",
      }}
    >
      <div style={dotStyles[0]}></div>
      <div style={dotStyles[1]}></div>
      <div style={dotStyles[2]}></div>
    </div>
  );
};

export default Header;
