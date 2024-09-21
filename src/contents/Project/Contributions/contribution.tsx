import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './contributions.css';

export function Contribution() {
  return (
    <>
      <ContributionHeading />

      <OverviewSection />

      <div className="main-content">
        <Sidebar />
        <CardSection />
      </div>
    
      <BackToTopButton />
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

const CardSection: React.FC = () => {
  const sections = ['Subtitle 1', 'Subtitle 2', 'Subtitle 3', 'Subtitle 4'];
  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image for now

  return (
    <Container fluid className="card-container">
      {sections.map((section, index) => (
        <div key={index} id={`section-${index}`} className="card-wrapper">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="center-title">{section}</Card.Title>
              <Row>
                <Col xs={8} className="text-container">
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mauris eros.
                  </Card.Text>
                </Col>
                <Col xs={4}>
                  <img src={placeholderImage} alt={`Image for ${section}`} style={{ width: '100%', height: 'auto' }} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
};

const ContributionHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        CONTRIBUTIONS
      </h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const sections = [
    { name: 'Subtitle 1', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Subtitle 2', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Subtitle 3', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Subtitle 4', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
  ];

  return (
    <div className="sidebar">
      <ul>
        {sections.map((section, index) => (
          <li key={index} onClick={() => document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' })}>
            <img src={section.image} alt={section.name} className="section-image" />
            <span>{section.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Change this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      className={`button ${isVisible ? 'visible' : ''}`} // Add the visible class
      variant="primary"
      onClick={scrollToTop}
    >
      ↑ Back to Top
    </Button>
  );
};

export default Contribution;
