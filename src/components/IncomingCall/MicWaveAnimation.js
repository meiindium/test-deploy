import React from 'react';

const boxContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '15px',
  width: 'calc((8px + 4px) * 5)',
};

const boxStyle = {
  transform: 'scaleY(0.4)',
  height: '100%',
  width: '5px',
  background: 'lime',
  animationDuration: '1.2s',
  animationTimingFunction: 'ease-in-out',
  animationIterationCount: 'infinite',
  borderRadius: '3px',
};

const keyframes = {
  quiet: `
    @keyframes quiet {
      25% { transform: scaleY(0.6); }
      50% { transform: scaleY(0.4); }
      75% { transform: scaleY(0.8); }
    }
  `,
  normal: `
    @keyframes normal {
      25% { transform: scaleY(1); }
      50% { transform: scaleY(0.4); }
      75% { transform: scaleY(0.6); }
    }
  `,
  loud: `
    @keyframes loud {
      25% { transform: scaleY(1); }
      50% { transform: scaleY(0.4); }
      75% { transform: scaleY(1.2); }
    }
  `,
};

const MicWaveAnimation= () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0, padding: 0 }}>
      <style>
        {keyframes.quiet}
        {keyframes.normal}
        {keyframes.loud}
      </style>
      <div style={boxContainerStyle}>
        <div style={{ ...boxStyle, animationName: 'quiet' }}></div>
        <div style={{ ...boxStyle, animationName: 'normal' }}></div>
        <div style={{ ...boxStyle, animationName: 'quiet' }}></div>
        <div style={{ ...boxStyle, animationName: 'loud' }}></div>
        <div style={{ ...boxStyle, animationName: 'quiet' }}></div>
      </div>
    </div>
  );
}

export default MicWaveAnimation;
