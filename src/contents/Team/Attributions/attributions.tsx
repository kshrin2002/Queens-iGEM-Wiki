import React, { useEffect } from "react";

// Define the props for Card with TypeScript types
interface CardProps {
  description: React.ReactNode;
}

export function Attributions() {
  const teamID = import.meta.env.VITE_TEAM_ID;

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

  return (
    <>
      {/* Render the Card component properly */}
      <Card description={<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>} />
    </>
  );
}
