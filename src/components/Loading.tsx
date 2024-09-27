import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={outerContainerStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://static.igem.wiki/teams/5079/img-0428.png"
          alt="Left Image"
          style={imageStyle}
        />
        <img
          src="https://static.igem.wiki/teams/5079/img-0429.png"
          alt="Right Image"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

// Full-screen container with centered content
const outerContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#ffffff',
  overflow: 'hidden',
  animation: 'rotateScreen 10s linear infinite',
};

const imageContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '300px',
};

const imageStyle: React.CSSProperties = {
  width: '100px',
  height: 'auto', 
};

const styles = `
@keyframes rotateScreen {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

// Inject keyframe animation into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Loading;
