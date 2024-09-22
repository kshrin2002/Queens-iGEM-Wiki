import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { FiEdit, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
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

const CardSection: React.FC = () => {
  const sections = [
    {
      title: 'Subtitle 1',
      subtitle1: 'Section 1',
      description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      subtitle2: 'Section 2',
      description2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Subtitle 2',
      subtitle1: 'Section 1',
      description1: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      subtitle2: 'Section 2',
      description2: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Subtitle 3',
      subtitle1: 'Section 1',
      description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      subtitle2: 'Section 2',
      description2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Subtitle 4',
      subtitle1: 'Section 1',
      description1: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      subtitle2: 'Section 2',
      description2: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image for now

  return (
    <Container fluid className="card-container">
      {sections.map((section, index) => (
        <Card key={index} className="custom-card" id={`section-${index}`}>
          <Card.Body>
            <Card.Title>{section.title}</Card.Title>
            <Row>
              <Col xs={8}>
                <h3>{section.subtitle1}</h3>
                <Card.Text>{section.description1}</Card.Text>

                <h3>{section.subtitle2}</h3>
                <Card.Text>{section.description2}</Card.Text>
              </Col>
              <Col xs={4}>
                <img src={placeholderImage} alt={`Image for ${section.title}`} style={{ width: '100%', height: 'auto' }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
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
    { name: 'Subtitle 1', content: ['Section 1', 'Section 2'] },
    { name: 'Subtitle 2', content: ['Section 1', 'Section 2'] },
    { name: 'Subtitle 3', content: ['Section 1', 'Section 2'] },
    { name: 'Subtitle 4', content: ['Section 1', 'Section 2'] },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="sidebar">
      <ul>
        {sections.map((section, index) => (
          <li key={index} className="sidebar-item">
            <div
              onClick={() => setOpenSection(openSection === index ? null : index)}
              className="sidebar-header"
            >
              <span className="sidebar-title">{section.name}</span>
              <FiChevronDown
                className={`chevron-icon ${openSection === index ? "open" : ""}`}
              />
            </div>
            {openSection === index && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="dropdown-content"
              >
                {section.content.map((item, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
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
      className={`button ${isVisible ? 'visible' : ''}`} 
      variant="primary"
      onClick={scrollToTop}
    >
      ↑ Back to Top
    </Button>
  );
};

export default Contribution;
