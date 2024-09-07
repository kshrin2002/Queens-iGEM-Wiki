import React from 'react';
import './Contribution.css'; // Import your CSS file here

export function Contribution() {
  return (
    <>
      {/* Render the NavBar component at the top */}
      <NavBar />

      {/* Attributions Heading at the top */}
      <ContributionHeading />

      {/* Overview Section */}
      <OverviewSection />

      {/* Title Sections */}
      <TitleSection 
        title={'SUBTITLE 1'} 
        subtitle1={'Section 1'} 
        description1={'Lorem ipsum...'}
        subtitle2={'Section 2'}
        description2={'Lorem ipsum...'}
        image={'https://static.igem.wiki/teams/5079/headshot-template-picture.png'} 
        borderColor={'blue'}
      />
      {/* Add more TitleSection components as needed */}
    </>
  );
}

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
};

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle1, description1, subtitle2, description2, image, borderColor }) => (
  <div className="card" style={{ borderColor }}>
    <div className="text-content">
      <h1 className="title">{title}</h1>
      <h3>{subtitle1}</h3>
      <p>{description1}</p>
      <h3>{subtitle2}</h3>
      <p>{description2}</p>
    </div>
    <div className="image-content">
      <img src={image} alt="section visual" />
    </div>
  </div>
);

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <img
        src="https://static.igem.wiki/teams/5079/rose-logo.png"
        alt="Logo"
      />
      <div className="navbar-links">
        {['Project', 'Wet Lab', 'Dry Lab', 'Outreach', 'Team'].map((text, index) => (
          <div key={index} className="navbar-link">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

const ContributionHeading: React.FC = () => {
  return (
    <div className="contribution-heading">
      <h1>CONTRIBUTIONS</h1>
    </div>
  );
};

export default Contribution;
