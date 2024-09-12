import React from 'react';

export function Contribution() {
    return (
      null
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

const NavBar: React.FC = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
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

  
const PCHeading: React.FC = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
          Patient Consulting
        </h1>
      </div>
    );
  };

  export default <patientconsultations className="tsx"></patientconsultations>