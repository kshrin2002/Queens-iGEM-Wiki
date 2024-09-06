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

  const NavBar: React.FC = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
        {/* Logo */}
        <img
          src="https://static.igem.wiki/teams/5079/rose-logo.png"
          alt="Logo"
          style={{ width: '50px', marginRight: '20px' }}
        />

        {/* Navigation Links */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Project', 'Wet Lab', 'Dry Lab', 'Outreach', 'Team'].map((text, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#590000',
                padding: '10px 20px',
                borderRadius: '20px',
                color: 'white',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  };
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
            {/* Row with 3 images and names */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {images.map((image, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
                  />
                  {/* Name and Role under each image */}
                  <p style={{ fontWeight: 'bold', margin: '5px 0' }}>NAME</p>
                  <p style={{ fontSize: '14px', color: '#8B0000' }}>ROLE</p>
                </div>
              ))}
            </div>
  
            {/* Description text centered under images */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.5' }}>
                {description}
              </p>
            </div>
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
        {/* First row with one image centered */}
        {images.length === 1 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <img
                src={images[0]}
                alt="Team Member"
                style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
              />
            </div>
  
            {/* Name and description centered below the image */}
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>NAME</p>
  
            {/* Custom description passed as prop */}
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <p>{description}</p>
            </div>
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


const Card_DryLab: React.FC<CardProps> = ({ description }) => {
  // Separate the team lead and the other members
  const teamLead = "https://static.igem.wiki/teams/5079/headshot-template-picture.png";
  const teamMembers = [
    "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
    "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
    "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
    "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
    "https://static.igem.wiki/teams/5079/headshot-template-picture.png",
    "https://static.igem.wiki/teams/5079/headshot-template-picture.png"
  ];

  return (
    <>
      {/* Team Lead Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <img
          src={teamLead}
          alt="Team Lead"
          style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
        />
        <p style={{ fontWeight: 'bold', margin: '5px 0', textAlign: 'center' }}>NAME</p>
        <p style={{ fontSize: '14px', color: '#8B0000', textAlign: 'center' }}>TEAM LEAD</p>
      </div>

      {/* Team Members Section */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto', gap: '20px' }}>
        {teamMembers.map((member, index) => (
          <div key={index} style={{ textAlign: 'center', width: '150px' }}>
            <img
              src={member}
              alt={`Team Member ${index + 1}`}
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <p style={{ fontWeight: 'bold', margin: '5px 0' }}>NAME</p>
            <p style={{ fontSize: '14px', color: '#8B0000' }}>ROLE</p>
          </div>
        ))}
      </div>

      {/* Dry Lab Description */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.5' }}>
          {description}
        </p>
      </div>
    </>
  );
};

interface SingleImageProps {
  imageSrc: string;
  name: string;
  role: string;
}

const CardHP: React.FC<SingleImageProps> = ({ imageSrc, name, role }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <img
        src={imageSrc}
        alt="Single Image"
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
      <p style={{ margin: '10px 0 0 0', fontWeight: 'bold' }}>{name}</p>
      <p style={{ margin: '5px 0 0 0', color: 'maroon' }}>{role}</p>
    </div>
  );
};




  return (
    <>
      {/* Render the NavBar component */}
      <NavBar />

      {/* Attributions Heading */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h1 style={{ fontSize: '3em', color: '#590000' }}>Attributions</h1>
      </div>

      {/* Render the Card component properly */}
      <Card description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>} />
      <Card_team description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>} />
      <Card_WetLab description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>} />
      <Card_DryLab description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>} />
      <CardHP imageSrc="https://static.igem.wiki/teams/5079/headshot-template-picture.png"
      name="John Doe"
      role="Team Lead" />

    </>
  );
}
