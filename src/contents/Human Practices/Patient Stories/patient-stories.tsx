//import React from 'react';

export function PatientStories() {
  return (
    <>
      <PatientStoriesHeading />

      <OverviewSection />

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
        padding: '1rem',
        backgroundColor: '#f7f7f7', // Slight grey background for the container
        borderRadius: '0.5rem',
      }}
    >
      {/* Left Box */}
      <div
        style={{
          backgroundColor: '#B22222', // Red background
          color: 'white',
          borderRadius: '0.5rem',
          padding: '1.5rem',
          width: '60%',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{patientName}</h2>
        {details && (
          <p style={{ marginTop: '1rem' }}>
            {details}
          </p>
        )}
      </div>

      {/* Right Text */}
      <div
        style={{
          marginLeft: '1.5rem',
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
