import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { BsArrowDownCircle } from "react-icons/bs";
import './parts.css'; // Import the CSS file
import { useEffect, useState } from 'react';
export function Parts() {
  return (
    <>
      <DesignHeading />
      <OverviewSection />
      <div className="main-content">
        <Sidebar />
        <CardSection />
      </div>
      <BackToTopButton />
    </>
  );
}
const OverviewSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#FE9BA1',
        color: 'white',
        padding: '20px',
        marginTop: '100px',
        width: '100%',
        height: '350px',
        marginBottom: '100px',
        marginRight: 0
      }}
      >
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};
const DesignHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1
        style={{
          fontSize: '5em',
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}
      >
        PARTS
      </h1>
    </div>
  );
};
const Sidebar: React.FC = () => {
  const sections = [
    { name: 'Section 1', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Section 2', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Section 3', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Section 4', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Section 5', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
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

const CardSection: React.FC = () => {
  const sections = [
    { title: 'Section 1', text: 'This is the content for Section 1. It provides an overview of the initial concepts.' },
    { title: 'Section 2', text: 'Section 2 dives deeper into the core principles behind the project.' },
    { title: 'Section 3', text: 'In Section 3, we explore the technical implementations and methodologies.' },
    { title: 'Section 4', text: 'This section presents the challenges faced and how they were overcome.' },
    { title: 'Section 5', text: 'Finally, Section 5 offers a conclusion and the future outlook for the project.' }
  ];
  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image for now

  return (
    <Container fluid className="card-container">
      {sections.map((section, index) => (
        <div key={index} id={`section-${index}`} className="card-wrapper">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title className="center-title" style={{ color: 'black' }}>{section.title}</Card.Title>
              <Row>
                <Col xs={8} className="text-container">
                  <Card.Text style={{ color: 'black' }}>
                    {section.text}
                  </Card.Text>
                </Col>
                <Col xs={4}>
                  <img src={placeholderImage} alt={`Image for ${section.title}`} style={{ width: '100%', height: 'auto' }} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Add a clickable arrow that scrolls to the next card */}
          {index < sections.length - 1 && (
            <div className="scroll-arrow" onClick={() => document.getElementById(`section-${index + 1}`)?.scrollIntoView({ behavior: 'smooth' })}>
              <BsArrowDownCircle style={{ marginBottom: '20px' }} />
            </div>
          )}
        </div>
      ))}
    </Container>
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
      variant="custom"
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};
export default Parts;
