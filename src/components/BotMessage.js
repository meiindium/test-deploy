import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import BabajiIcon from "../assets/Prompt_Img.jpg";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginLeft: "10px",

          alignItems: "center",
        }}
      >
        <img
          alt="Babaji Icon Missing"
          style={{ borderRadius: 50 }}
          src={BabajiIcon}
          width={25}
          height={25}
        />

        <div className="bot-message">{isLoading ? <Loader /> : message}</div>
      </div>
    </div>
  );
}
