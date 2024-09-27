import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { BsArrowDownCircle } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { HiBeaker } from "react-icons/hi2";
import { CiPill } from 'react-icons/ci';
import { RiTestTubeFill } from 'react-icons/ri';
import { GiDna2 } from 'react-icons/gi';
import './concepts.css';

export function ProofOfConcepts() {
  return (
    <>
      <DesignHeading />
      <OverviewSection />
      <div className="main-content">
        <CardSection />
      </div>
      <BackToTopButton />
    </>
  );
}

const OverviewSection = () => {
  const scrollToMilestone = (milestone: string) => {
    const element = document.getElementById(milestone);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="overview-section">
      <div className="milestones">
        <div className="milestone" onClick={() => scrollToMilestone('section-0')}>
          <h3 className='milestone-title'>MILESTONE 1</h3>
          <GiDna2 className='icon' size={100}/>
          <p>Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="milestone" onClick={() => scrollToMilestone('section-1')}>
          <h3>MILESTONE 2</h3>
          <RiTestTubeFill className='icon' size={100}/>
          <p>Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="milestone" onClick={() => scrollToMilestone('section-2')}>
          <h3>MILESTONE 3</h3>
          <CiPill className='icon' size={100}/>
          <p>Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="milestone" onClick={() => scrollToMilestone('section-3')}>
          <h3>MILESTONE 4</h3>
          <HiBeaker className='icon' size={100} />
          <p>Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </div>
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
        PROOF OF CONCEPT
      </h1>
    </div>
  );
};

const CardSection: React.FC = () => {
  const sections = ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4', 'Milestone 5'];
  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image for now
  return (
    <Container fluid className="section-container">
      {sections.map((section, index) => (
        <div key={index} id={`section-${index}`} className="section-wrapper">
          <Card className="section-card">
            <Card.Body>
              <Card.Title className="scenter-title">{section}</Card.Title>
              <Row>
                <Col xs={8} className="stext-container">
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
          {/* Add a clickable arrow that scrolls to the next card */}
          {index < sections.length - 1 && (
            <div className="section-arrow" onClick={() => document.getElementById(`section-${index + 1}`)?.scrollIntoView({ behavior: 'smooth' })}>
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
      variant="primary"
      onClick={scrollToTop}
    >
      ↑ Back to Top
    </Button>
  );
};

export default ProofOfConcepts;
