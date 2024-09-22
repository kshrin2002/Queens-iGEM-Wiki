import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './contributions.css';
import {
  FiEdit,
  FiChevronDown,
} from "react-icons/fi";
import { motion } from "framer-motion";

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
    { name: 'Subtitle 1', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Section 1', 'Section 2'] },
    { name: 'Subtitle 2', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Section 1', 'Section 2'] },
    { name: 'Subtitle 3', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Section 1', 'Section 2'] },
    { name: 'Subtitle 4', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Section 1', 'Section 2'] },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="sidebar">
      <ul>
        {sections.map((section, index) => (
          <li key={index} onClick={() => setOpenSection(openSection === index ? null : index)}>
            <img src={section.image} alt={section.name} className="section-image" />
            <span>{section.name}</span>
            {openSection === index && (
              <StaggeredDropDown options={section.content} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StaggeredDropDown = ({ options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
      >
        <span className="font-medium text-sm">Toggle Sections</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        className={`flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-full left-0 w-48 overflow-hidden ${!open && 'hidden'}`}
      >
        {options.map((option, index) => (
          <Option key={index} setOpen={setOpen} Icon={FiEdit} text={option} />
        ))}
      </motion.ul>
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

// Back to Top Button Component
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

// Animation variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export default Contribution;