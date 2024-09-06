import React, { useEffect } from "react";

// Define the props for Card with TypeScript types
interface CardProps {
  description: React.ReactNode;
}

export function Attributions() {
  // const teamID = import.meta.env.VITE_TEAM_ID;

  useEffect(() => {
    function listenToIframeHeight(e: MessageEvent) {
      if (e.origin === "https://teams.igem.org") {
        const { type, data } = JSON.parse(e.data);
        if (type === "igem-attribution-form") {
          const element = document.getElementById("igem-attribution-form");
          if (element) {
            element.style.height = `${data + 100}px`;
          }
        }
      }
    }
    window.addEventListener("message", listenToIframeHeight);
    return () => {
      window.removeEventListener("message", listenToIframeHeight);
    };
  }, []);

  // Card component now typed correctly
  const Card: React.FC<CardProps> = ({ description }) => {
    const images = [
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png"
    ];

    return (
      <>
        {images.length === 3 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ width: '150px', height: '150px', marginBottom: '10px' }}
                />
              ))}
            </div>
            <p>{description}</p>
          </>
        )}
      </>
    );
  };

  const Card_team: React.FC<CardProps> = ({ description }) => {
    const images = [
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png"
    ];

    return (
      <>
        {images.length === 1 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ width: '150px', height: '150px', marginBottom: '10px' }}
                />
              ))}
            </div>
            <p>{description}</p>
          </>
        )}
      </>
    );
  };

  const Card_WetLab: React.FC<CardProps> = ({ description }) => {
    const images = [
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
      "https://static.igem.wiki/teams/5079/headshot-template-picture.png"
    ];

    return (
      <>
        {/* First row with one image centered */}
        {images.length >= 1 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <img
                src={images[0]}
                alt="Team Lead"
                style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
              />
            </div>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>NAME</p>
            <p style={{ textAlign: 'center', color: '#8b0000' }}>TEAM LEAD</p>
  
            {/* Second row with three images */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              {images.slice(1).map((image, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <img
                    src={image}
                    alt={`Image ${index + 2}`}
                    style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
                  />
                  <p>NAME</p>
                </div>
              ))}
            </div>
  
            {/* Description text */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p>{description}</p>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <>
      {/* Render the Card component properly */}
      <Card description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>} />
      <Card_team description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>} />
      <Card_WetLab description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>} />
    </>
  );
}
