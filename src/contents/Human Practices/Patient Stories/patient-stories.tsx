//import React from 'react';

export function PatientStories() {
  return (
    <>
      <PatientStoriesHeading />

      <OverviewSection />

      <InfoBox />
    </>
  );
}

const OverviewSection = () => {
  return (
    <section style={{ backgroundColor: 'maroon', color: 'white', padding: '20px' }}>
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

const PatientStoriesHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        PATIENT STORIES
      </h1>
    </div>
  );
};

// InfoBox Component
const InfoBox: React.FC<{ patientName: string; details: string }> = ({
  patientName,
  details,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem', // Shorter padding for a more compact box
        backgroundColor: '#f7f7f7',
        borderRadius: '0.5rem',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Left Box */}
      <div
        style={{
          backgroundColor: '#B22222', // Red background
          color: 'white',
          borderRadius: '0.5rem',
          padding: '1rem', // Adjusted padding for a more compact box
          width: '70%', // Wider to match the box's proportions from the image
          lineHeight: '1.5',
        }}
      >
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{patientName}</h3>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>

      {/* Right Text */}
      <div
        style={{
          marginLeft: '1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'right',
          width: '20%',
        }}
      >
        <p>BARBARA</p>
        <p>ART</p>
      </div>
    </div>
  );
};


export default PatientStories;
