import React from 'react';

export function Contribution() {
  return (
    <>

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

interface TitleSectionProps {
  title: string;
  subtitle1: string;
  description1: string;
  subtitle2: string;
  description2: string;
  image: string;
  borderColor: string;
}

const OverviewSection = () => {
  return (
    <section style={{ backgroundColor: '#FE9BA1', color: 'white', padding: '20px', marginTop: '50px', width: '1444px', height: '454px', marginTop: '430px' }}>
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

const TitleSection: React.FC<TitleSectionProps> = ({title, subtitle1, description1, subtitle2, description2, image, borderColor }) => (
  <div className="card" style={{ borderColor: borderColor, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: '20px', justifyContent: 'space-between' }}>
    <div className="text-content" style={{ textAlign: 'left', maxWidth: '600px' }}>
      <h1 className="title" style={{ textAlign: 'center' }}>{title}</h1>
      <h3 style={{ fontFamily: "'Open Sans Hebrew', sans-serif" }}>{subtitle1}</h3>
      <p style={{ fontFamily: "'Open Sans Hebrew', sans-serif" }}>{description1}</p>
      <h3 style={{ fontFamily: "'Open Sans Hebrew', sans-serif" }}>{subtitle2}</h3>
      <p style={{ fontFamily: "'Open Sans Hebrew', sans-serif" }}>{description2}</p>
    </div>
    <div className="image-content" style={{ marginTop: '20px' }}>
      <img src={image} alt="section visual" style={{ width: '250px', height: '150px' }} />
    </div>
  </div>
);

const ContributionHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        CONTRIBUTIONS
      </h1>
    </div>
  );
};

export default Contribution;