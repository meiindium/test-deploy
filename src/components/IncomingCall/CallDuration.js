import React, { useState, useEffect } from 'react';

const CallDuration = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isCounting) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isCounting) {
      clearInterval(interval);
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [isCounting]);

  const startCall = () => {
    setIsCounting(true);
  };

  const endCall = () => {
    setIsCounting(false);
  };

  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const hrsDisplay = hrs > 0 ? `${hrs.toString().padStart(2, '0')}:` : '';
    const minsDisplay = mins > 0 ? `${mins.toString().padStart(2, '0')}:` : (hrs > 0 ? '00:' : '');
    const secsDisplay = secs.toString().padStart(2, '0');

    return `${hrsDisplay}${minsDisplay}${secsDisplay}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Call Duration: {formatTime()}</p>
      <button onClick={startCall}>Start Call</button>
      <button onClick={endCall}>End Call</button>
    </div>
  );
};

export default CallDuration;
