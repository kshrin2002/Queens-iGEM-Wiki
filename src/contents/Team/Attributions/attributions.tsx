import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './attributions.css'; // Import the CSS file

export function Attributions() {
  return (
    <>
      <div className='main'>
        <DesignHeading />
        <div className="main-content">
          <Sidebar />
          <CardSection />
        </div>
      </div>
    </>
  );
}

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
        ATTRIBUTIONS
      </h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const sections = [
    { name: 'External Contributors', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Team Lead', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
    { name: 'Wet Lab', image: 'https://static.igem.wiki/teams/5079/rose-logo.png' },
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
  const sections = ['External Contributors', 'Team Lead', 'Wet Lab', 'Section 4', 'Section 5'];
  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <Container fluid className="card-container">
      {sections.map((section, index) => (
        <div key={index} id={`section-${index}`} className="card-wrapper">
          <Card 
            className="custom-card" 
            style={{ 
              border: 'none', 
              ...(index === 0 ? { minHeight: '700px' } : {}),
              ...(index === 2 ? { minHeight: '1000px' } : {})
            }}
          >
            <Card.Header style={{ 
              fontSize: '3.5em', 
              fontWeight: 'bold', 
              color: '#590000', 
              textAlign: 'left',
              backgroundColor: 'transparent',
              borderBottom: 'none',
              paddingBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>{section}</span>
              <div style={{ 
                flexGrow: 1, 
                height: '0.1em', 
                backgroundColor: '#590000',
                marginLeft: '10px' 
              }}></div>
            </Card.Header>

            <Card.Body style={index === 0 ? { padding: '30px', minHeight: '600px' } : index === 2 ? { padding: '30px' } : {}}>
              <Row>
                {(index === 0 || index === 2) && (
                  <>
                    {index === 2 && (
                      <Row className="mt-4" style={{ justifyContent: 'center' }}>
                        <Col xs={12} md={3} lg={2} style={{ textAlign: 'center' }}>
                          <img
                            src={placeholderImage}
                            alt="Centered Headshot"
                            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                          />
                          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>NAME</p>
                          <p style={{ color: '#8B0000' }}>Team Lead</p>
                        </Col>
                      </Row>
                    )}

                    <Row className="mt-4" style={{ justifyContent: 'space-around', marginTop: index === 2 ? '50px' : '0px' }}>
                      {[1, 2, 3].map((headshot, idx) => (
                        <Col key={idx} xs={4} md={3} lg={2} style={{ textAlign: 'center' }}>
                          <img
                            src={placeholderImage}
                            alt={`Headshot ${headshot}`}
                            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                          />
                          <p style={{ fontWeight: 'bold', marginTop: '10px' }}>NAME</p>
                          {index === 0 && <p style={{ color: '#8B0000' }}>ROLE</p>}
                        </Col>
                      ))}
                    </Row>

                    <div className="mt-4" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </div>
                  </>
                )}

                {index === 1 && (
                  <>
                    <Col xs={12} md={3} style={{ textAlign: 'center' }}>
                      <div style={{ marginTop: '20px' }}>
                        <img
                          src={placeholderImage}
                          alt={`Headshot`}
                          style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                        />
                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>NAME</p>
                      </div>
                    </Col>

                    <Col xs={12} md={9}>
                      <div style={{ textAlign: 'left', marginTop: '20px' }}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default Attributions;
