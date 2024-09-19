//import React from 'react';

export function PatientStories() {
  return (
    <>
      <PatientStoriesHeading />
      <OverviewSection />
      <PatientInfoSection />
      <PatientInfoSectionFirst />
    </>
  );
}

const OverviewSection = () => {
  return (
    <section style={{ backgroundColor: '#FE9BA1', color: 'white', padding: '20px' }}>
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

const PatientInfoSection: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0' }}>
      <div style={{ backgroundColor: '#800000', borderRadius: '15px', padding: '20px', width: '40%' }}>
        <h2 style={{ color: 'white', marginBottom: '10px' }}>PATIENT NAME</h2>
        <p style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em', marginLeft: '30px', paddingRight: '30px' }}>
        <p style={{ margin: 0 }}>BARBARA</p>
        <p style={{ margin: 0 }}>ART</p>
      </div>
    </div>
  );
};

const PatientInfoSectionFirst: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0' }}>
      <div style={{ backgroundColor: '#800000', borderRadius: '15px', padding: '20px', width: '40%' }}>
        <h2 style={{ color: 'white', marginBottom: '10px' }}>PATIENT NAME</h2>
        <p style={{ color: 'white' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2em', marginLeft: '30px', paddingRight: '30px' }}>
        <p style={{ margin: 0 }}>JOHN</p>
        <p style={{ margin: 0 }}>DOE</p>
      </div>
    </div>
  );
};

export default PatientStories;