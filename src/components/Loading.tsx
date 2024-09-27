import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={outerContainerStyle}>
      <img
        src="https://static.igem.wiki/teams/5079/img-0430.png"
        alt="Loading"
        style={imageStyle}
      />
    </div>
  );
};

// Full-screen container with centered content
const outerContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#ffffff', // Set the background color of the whole screen (white)
};

// Image with rotation animation
const imageStyle: React.CSSProperties = {
  width: '200px',   // Adjust size as needed
  height: '200px',  // Keep square proportions
  animation: 'rotate 2s linear infinite',  // Rotation animation
};

// Keyframe animation for rotating the image
const styles = `
@keyframes rotate {
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
