import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './judging.css'; // Updated CSS file name
import { motion } from "framer-motion";

export function Judging() {
  // State to manage the visibility of the text box when clicking the medal
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  // Function to toggle the box visibility when medal is clicked
  const handleMedalClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <>
      <JudgingHeading />
      <OverviewSection />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px', marginBottom: '25px' }}>
        {/* Medal Image */}
        <img 
          src="https://static.igem.wiki/teams/5079/medal-picture.jpg" 
          alt="Medals"
          style={{ width: '600px', height: 'auto', cursor: 'pointer' }} 
          onClick={handleMedalClick} // Handle the click event to show/hide the box
        />
      </div>

      {/* Text Box that appears when the medal is clicked */}
      {isBoxVisible && (
        <div style={{
          border: '1px solid black',
          padding: '20px',
          marginTop: '10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          width: '300px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p>This is the text inside the box that appears when you click the medal.</p>
        </div>
      )}

      <div className="main-content-judging">
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

  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <Container fluid className="card-container-judging">
      {sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="custom-card-judging" id={`section-${sectionIndex}`}>
          <Card.Body>
            <Card.Title>{section.title}</Card.Title>
            <Row>
              <Col xs={8}>
                <h3 id={`section-${sectionIndex}-part-0`}>{section.subtitle1}</h3>
                <Card.Text>{section.description1}</Card.Text>

                <h3 id={`section-${sectionIndex}-part-1`}>{section.subtitle2}</h3>
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

const JudgingHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        JUDGING
      </h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const sections = [
    {
      name: "Students",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["Summer Workshops", "ASPC 103"],
    },
    {
      name: "Community",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["PD Canada Superwalk", "Social Media"],
    },
    {
      name: "Researchers",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["Ethics Handbook"],
    },
    {
      name: "RISK MANAGEMENT",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: [
        "Identifying Project Risks",
        "Anticipating Future Risks",
        "Managing Risks",
      ],
    },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div
      className="sidebar-contributions"
      style={{
        position: "sticky",
        top: "150px",
        alignSelf: "flex-start",
      }}
    >
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <div
              onClick={() =>
                setOpenSection(openSection === index ? null : index)
              }
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={section.image}
                alt={section.name}
                className="section-image"
                style={{
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
              <span>{section.name}</span>
            </div>
            {openSection === index && (
              <StaggeredDropDown
                options={section.content}
                image={section.image}
                sectionIndex={index}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


const StaggeredDropDown = ({ options, image, sectionIndex }: { options: string[]; image: string; sectionIndex: number }) => {
  return (
    <motion.ul
      style={{
        padding: '10px',
        backgroundColor: '#fff',
        listStyle: 'none',
        marginLeft: '0',
        marginTop: '10px',
        width: '100%',
      }}
    >
      {options.map((option: string, index: number) => (
        <Option
          key={index}
          text={option}
          image={image}
          sectionIndex={sectionIndex}
          sectionPartIndex={index}
        />
      ))}
    </motion.ul>
  );
};


const Option = ({ text, image, sectionIndex, sectionPartIndex }: { text: string, image: string, sectionIndex: number, sectionPartIndex: number }) => {
  const handleClick = () => {
    const sectionId = `section-${sectionIndex}-part-${sectionPartIndex}`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const topPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <li
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      onClick={handleClick}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <img src={image} alt="icon" style={{ marginRight: '8px', width: '30px', height: '30px', objectFit: 'cover' }} />
      <span>{text}</span>
    </li>
  );
};


const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Button onClick={scrollToTop} className="back-to-top-button-judging">
          Back to Top
        </Button>
      )}
    </div>
  );
};
