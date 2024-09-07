import React from 'react';
import './contrubutions.css';

export function Contribution() {
  return (
    <>
      <NavBar />

      <ContributionHeading />

      <OverviewSection />

      {/* Title Sections */}
      <TitleSection 
        title={'SUBTITLE 1'} 
        subtitle1={'Section 1'} 
        description1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        subtitle2={'Section 2'} 
        description2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        image={'https://static.igem.wiki/teams/5079/headshot-template-picture.png'} 
        borderColor={'blue'}
      />
      <TitleSection 
        title={'SUBTITLE 2'} 
        subtitle1={'Section 1'} 
        description1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        subtitle2={'Section 2'} 
        description2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        image={'https://static.igem.wiki/teams/5079/headshot-template-picture.png'} 
        borderColor={'blue'}
      />
      <TitleSection 
        title={'SUBTITLE 3'} 
        subtitle1={'Section 1'} 
        description1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        subtitle2={'Section 2'} 
        description2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        image={'https://static.igem.wiki/teams/5079/headshot-template-picture.png'} 
        borderColor={'blue'}
      />
      <TitleSection 
        title={'SUBTITLE 4'} 
        subtitle1={'Section 1'} 
        description1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        subtitle2={'Section 2'} 
        description2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'} 
        image={'https://static.igem.wiki/teams/5079/headshot-template-picture.png'} 
        borderColor={'blue'}
      />
    </>
  );
}

const NavBar: React.FC = () => {
  return (
    <div className="navbar-container">
      <img
        src="https://static.igem.wiki/teams/5079/rose-logo.png"
        alt="Logo"
        className="navbar-logo"
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
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        CONTRIBUTIONS
      </h1>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <h2 className="overview-heading">Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

interface TitleSectionProps {
  title: string;
  subtitle1: string;
  description1: string;
  subtitle2: string;
  description2: string;
  image: string;
  borderColor: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({title, subtitle1, description1, subtitle2, description2, image, borderColor }) => (
  <div className="title-section" style={{ borderColor }}>
    <div className="text-content">
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle1}</h3>
      <p className="subtitle">{description1}</p>
      <h3 className="subtitle">{subtitle2}</h3>
      <p className="subtitle">{description2}</p>
    </div>
    <div className="image-content">
      <img src={image} alt="section visual" className="section-image" />
    </div>
  </div>
);

export default Contribution;
