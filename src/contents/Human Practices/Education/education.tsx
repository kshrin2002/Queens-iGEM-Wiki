import React from "react";
import './education.css';

export function Education() {
  return (
    <>
      <EducationHeading />

      <OverviewSection />

      <StudentsHeading />

      <WorkshopSection />

      <NavBar />
  
      <APSC103Section />

    </>
  );
}

const OverviewSection = () => {
  return (
    <section style={{ backgroundColor: '#FE9BA1', color: 'white', padding: '20px', marginTop: '100px', width: '1520px', height: '350px', marginBottom: '100px' }}>
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

const EducationHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        EDUCATION
      </h1>
    </div>
  );
};

const StudentsHeading: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px', // Add space between sections
      }}
    >
      <h2
        style={{
          fontSize: '2.5em',
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px',
          marginRight: '20px',
        }}
      >
        Students
      </h2>
      <div
        style={{
          borderTop: '2px solid #590000',
          width: '1200px',
        }}
      ></div>
    </div>
  );
};


const WorkshopSection = () => {
  return (
    <div className="section-container">
      <section className="workshop-section">
        <h2>Workshop</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

 // New navigation component to replicate the look in the screenshot
 const NavBar: React.FC = () => {
  return (
      <div style={{ display: 'flex', gap: '20px' }}>
        {[' ', ' ', ' ', ' ', ' '].map((text, index) => (
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
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            {text}
          </div>
        ))}
      </div>
  );
};

const APSC103Section = () => {
  return (
    <div className="section-container">
      <section className="apsc103-section">
        <h2>APSC 103</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

export default Education;
