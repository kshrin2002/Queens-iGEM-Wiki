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
      <div className="row mt-4">
        <div className="col">
          <div>
            <p>Teams must use the standard Attributions form. To meet the attributions requirement, you must display the standard form on your Wiki by following the instructions <a href="https://competition.igem.org/deliverables/project-attribution" target="_blank">here</a></p>
          </div>
          <div className="bd-callout bd-callout-info">
            <p>
              In the iGEM Competition, we celebrate student effort and achievement. The Attributions form helps the judges differentiate between what students accomplished from how their external collaborators supported them. Therefore, teams must clearly explain on the standard Project Attributions form what work they have conducted by themselves and what has been done by others.
            </p>
            <p>
              Teams must use the standard Attributions form. To meet the attributions requirement, you must display the standard form on your Wiki by following the instructions here:
              <a href="https://competition.igem.org/deliverables/project-attribution">
                Project Attribution page
              </a>
              .
            </p>
          </div>
          <div className="bd-callout bd-callout-info">
            <h4>Bronze Medal Criterion #2</h4>
            <p>Describe what work your team members did and what other people did for your project.</p>
            <p>The form that has been embedded in an iframe in this page shows your team's Project Attribution form. This page must keep the form as it is.</p>
            <p>If you use a different website framework, make sure to embed the right URL for your team's form.</p>
          </div>
        </div>
      </div>

      <iframe
        style={{ width: "100%" }}
        id="igem-attribution-form"
        src={`https://teams.igem.org/wiki/${teamID}/attributions`}
        frameBorder="0"
      />

      {/* Render the Card component properly */}
      <Card description={<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</span>} />
    </>
  );
}
