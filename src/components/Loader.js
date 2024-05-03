


import React from 'react';

const Loader = () => {
  const codeLoaderStyle = {
    color: 'lime',
    fontFamily: 'Consolas, Menlo, Monaco, monospace',
    fontWeight: 'bold',
    fontSize: '14px',
    opacity: '0.8',
  };

  const codeLoaderSpanStyle = {
    display: 'inline-block',
    animation: 'pulse_414 0.4s alternate infinite ease-in-out',
  };

  const codeLoaderSpanOddStyle = {
    ...codeLoaderSpanStyle,
    animationDelay: '0.4s',
  };

  const keyframesRule = `
    @keyframes pulse_414 {
      to {
        transform: scale(0.8);
        opacity: 0.5;
      }
    }
  `;

  return (
    <div style={codeLoaderStyle}>
      <span style={codeLoaderSpanOddStyle}>&#123;</span>
      <span style={codeLoaderSpanStyle}>&#125;</span>
      <style>{keyframesRule}</style>
    </div>
  );
};

export default Loader;
