import './education.css';
import { Card, Col, Container, Row} from 'react-bootstrap';
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; 

export function Education() {
  return (
    <>
      <EducationHeading />
      <OverviewSection />
      <StudentsHeading />
      <WorkshopSection />
      <NavBar1 />
      <NavbarSection1 />
      <APSC103Section />
      <CardSection />
      <CommunityHeading />
      <PSWSection />
      <CommunityCarousel1 />
      <SocialMediaSection />
      <CommunityCarousel2 />
      <ResearchersHeading />
      <PodcastSection />
      <NavBar2 />
      <NavbarSection2 />
    </>
  );
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
const EducationHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        EDUCATION
      </h1>
    </div>
  );
};
const StudentsHeading: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px', // Add space between sections
      }}
    >
      <h2
        style={{
          fontSize: '2.5em',
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px',
          marginRight: '20px',
        }}
      >
        Students
      </h2>
      <div
        style={{
          borderTop: '2px solid #590000',
          width: '1200px',
        }}
      ></div>
    </div>
  );
};

const WorkshopSection = () => {
  return (
    <div className="section-container">
      <section className="workshop-section">
        <h2>Workshop</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

const NavBar1: React.FC = () => {
  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Center the navbar
          gap: '20px',
          marginTop: '40px', // Adjust this value for the desired spacing
          marginBottom: '40px', // Adjust this value for spacing below
          paddingLeft: '300px'
        }}
      >
        {[' ', ' ', ' ', ' ', ' '].map((text, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#980021',
              padding: '10px 20px',
              borderRadius: '50px',
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '148px',
              height: '35px'
            }}
          >
            {text}
          </div>
        ))}
      </div>
  );
};
const NavbarSection1 = () => {
  return (
    <div className="section-navbar">
      <section className="navbar-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

const APSC103Section = () => {
  return (
    <div className="section-container">
      <section className="apsc103-section">
        <h2>APSC 103</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

const CardSection: React.FC = () => {
  const section = {
    title: 'Experiential Learning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };

  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image for now

  return (
    <Container fluid className="card-container">
      <Card className="custom-card" style={{ backgroundColor: '#FE9BA1' }}>
        <Card.Body>
          <Card.Title>{section.title}</Card.Title>
          <Row>
            <Col xs={8}>
              <Card.Text>{section.description}</Card.Text>
            </Col>
            <Col xs={4}>
              <img src={placeholderImage} alt={`Image for ${section.title}`} style={{ width: '200px', height: '200px', borderRadius: '100px' }} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

const CommunityHeading: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px', // Add space between sections
      }}
    >
      <h2
        style={{
          fontSize: '2.5em',
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px',
          marginRight: '20px',
        }}
      >
        Community
      </h2>
      <div
        style={{
          borderTop: '2px solid #590000',
          width: '1200px',
        }}
      ></div>
    </div>
  );
};

const PSWSection = () => {
  return (
    <div className="section-container">
      <section className="PSW-section">
        <h2>Parkinson Canada Superwalk</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};


const CommunityCarousel1 = () => {
  const images = [
    "https://via.placeholder.com/150", // Replace with the actual paths to your images
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const Carousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);

    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };

    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };

    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "spring", stiffness: 1000, damping: 10 },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };

    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };

    const handlePrevious = () => {
      setDirection("left");
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleDotClick = (index: number) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    };

    return (
      <div className="carousel">
        <div className="carousel-images">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
            />
          </AnimatePresence>
          <div className="slide_direction">
            <motion.div
              variants={slidersVariants}
              whileHover="hover"
              className="left"
              onClick={handlePrevious}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </motion.div>
            <motion.div
              variants={slidersVariants}
              whileHover="hover"
              className="right"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="carousel-indicator">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

const SocialMediaSection = () => {
  return (
    <div className="section-container">
      <section className="social-media-section">
        <h2>Social Media</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};


const CommunityCarousel2 = () => {
  const images = [
    "https://via.placeholder.com/150", // Replace with the actual paths to your images
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  const Carousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);

    const slideVariants = {
      hiddenRight: {
        x: "100%",
        opacity: 0,
      },
      hiddenLeft: {
        x: "-100%",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    };

    const slidersVariants = {
      hover: {
        scale: 1.2,
        backgroundColor: "#ff00008e",
      },
    };

    const dotsVariants = {
      initial: {
        y: 0,
      },
      animate: {
        y: -10,
        scale: 1.2,
        transition: { type: "spring", stiffness: 1000, damping: 10 },
      },
      hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
    };

    const handleNext = () => {
      setDirection("right");
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };

    const handlePrevious = () => {
      setDirection("left");
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleDotClick = (index: number) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    };

    return (
      <div className="carousel">
        <div className="carousel-images">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
            />
          </AnimatePresence>
          <div className="slide_direction">
            <motion.div
              variants={slidersVariants}
              whileHover="hover"
              className="left"
              onClick={handlePrevious}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </motion.div>
            <motion.div
              variants={slidersVariants}
              whileHover="hover"
              className="right"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="carousel-indicator">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
};

const ResearchersHeading: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px', // Add space between sections
      }}
    >
      <h2
        style={{
          fontSize: '2.5em',
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px',
          marginRight: '20px',
        }}
      >
        Researchers
      </h2>
      <div
        style={{
          borderTop: '2px solid #590000',
          width: '1200px',
        }}
      ></div>
    </div>
  );
};

const PodcastSection = () => {
  return (
    <div className="section-container">
      <section className="podcast-section">
        <h2>Podcast</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

const NavBar2: React.FC = () => {
  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Center the navbar
          gap: '20px',
          marginTop: '40px', // Adjust this value for the desired spacing
          marginBottom: '40px', // Adjust this value for spacing below
          paddingLeft: '300px'
        }}
      >
        {[' ', ' ', ' ', ' ', ' '].map((text, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#980021',
              padding: '10px 20px',
              borderRadius: '50px',
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '148px',
              height: '35px'
            }}
          >
            {text}
          </div>
        ))}
      </div>
  );
};
const NavbarSection2 = () => {
  return (
    <div className="section-navbar">
      <section className="navbar2-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};

export default Education;