import React from "react";
import './education.css';

export function Education() {
  return (
    <>
      <EducationHeading />

      <OverviewSection />

      <StudentsHeading />

      <WorkshopSection />

      <APSC103Section />

      <CommunityHeading />

      <PSWSection />

      <SocialMediaSection />

      <ResearchersHeading />

      <PodcastSection />
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
    <div style={{ textAlign: 'center', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', right: '0', position: 'absolute' }}>
      <h2 style={{ fontSize: '2.5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px', marginRight: '20px' }}>
        Students
      </h2>
      <div style={{ borderTop: '2px solid #590000', width: '1000px' }}></div>
    </div>
  );
};

const WorkshopSection = () => {
  return (
    <section className="workshop-section">
      <h2>Workshop</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};


const APSC103Section = () => {
  return (
    <section className="apsc103-section">
      <h2>APSC 103</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

const CommunityHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '2.5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px', marginRight: '20px' }}>
        Community
      </h2>
      <div style={{ borderTop: '2px solid #590000', width: '350px' }}></div>
    </div>
  );
};

const PSWSection = () => {
  return (
    <section style={{ backgroundColor: '#FE9BA1', color: 'white', padding: '20px', marginTop: '100px', width: '1140px', height: '250px', marginBottom: '100px' }}>
      <h2>Parkinson Canada Superwalk</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

const SocialMediaSection = () => {
  return (
    <section style={{ backgroundColor: '#FE9BA1', color: 'white', padding: '20px', marginTop: '100px', width: '1140px', height: '250px', marginBottom: '100px' }}>
      <h2>Social Media</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

const ResearchersHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '2.5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px', marginRight: '20px' }}>
        Research
      </h2>
      <div style={{ borderTop: '2px solid #590000', width: '350px' }}></div>
    </div>
  );
};

const PodcastSection = () => {
  return (
    <section style={{ backgroundColor: '#FE9BA1', color: 'white', padding: '20px', marginTop: '100px', width: '1140px', height: '250px', marginBottom: '100px' }}>
      <h2>Podcast</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

export default Education;
