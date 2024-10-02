import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
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
      Protein switches are created by fusing protein domains in a way that links their activities. These fusions exhibit switch-like behavior, which is controlled by the presence of a specific ligand (e.g., alpha-synuclein). In this context, the switch comprises an input domain (cyclophilin D) that binds to alpha-synuclein and an output domain (neurosin) whose activity is regulated in response to the binding event in the input domain.  
      In order to deliver our therapeutic, our team has developed a proof of concept for a spore biotic delivery system. This delivery system brings the molecular switch to the target Enteroendocrine Cells (EECs) in the lumen of the duodenum where the spore will lyse, thereby releasing our molecular switch to our target cells. 
      Here we present the registry parts associated with our project, that compose our designed switches as well as our theoretical delivery system, through a spore biotic. For more information on the design and mechanisms of action of these parts, please refer to the Design and Engineering pages. 
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

// FOR WRITE UPS CHANGE TITLES AND SIBTITLES ON SIDEBAR AS NEEDED
const Sidebar: React.FC = () => {
  const sections = [
    { name: 'MOLECULAR SWITCH COMPONENTS', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Basic parts'] },
    { name: 'SPORE BIOTIC COMPONENTS', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Basic parts','Composite parts'] },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="sidebar-contributions">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <div onClick={() => setOpenSection(openSection === index ? null : index)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img src={section.image} alt={section.name} className="section-image" style={{ marginRight: '8px' }} />
              <span>{section.name}</span>
            </div>
            {openSection === index && (
              <StaggeredDropDown options={section.content} sectionIndex={index} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StaggeredDropDown = ({ options, sectionIndex }: { options: string[]; sectionIndex: number }) => {
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
          sectionIndex={sectionIndex}
          sectionPartIndex={index}
        />
      ))}
    </motion.ul>
  );
};

const Option = ({ text, sectionIndex, sectionPartIndex }: { text: string, sectionIndex: number, sectionPartIndex: number }) => {
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
    >
      <FiEdit />
      <span>{text}</span>
    </li>
  );
};

// FOR WRIETUPS CHANGE TITLES AND DESCRIPTIONS AS NEEDED. SEE WETLAB/SAFETY FOR REFERENCE
const CardSection: React.FC = () => {
  const sections = [
    {
      title: 'Molecular Switch Components',
      subsections: [
        {
          subtitle: 'Basic parts',
          description: (
            <>
            Below are our coding sequences including our 12 designed molecular switches, as well as their components - neurosin (KLK6) and cyclophilin D – and the input signal a-synculein. 
            
            <img
                src="https://static.igem.wiki/teams/5079/wet-lab/table_1.png"
                alt="Molecular Switch Components"
                className="molecular-switch-image"
                style={{ width: '100%', height: 'auto', marginTop: '20px' }}
              />
            </>
          ),
        },
      ],
    },
    {
      title: 'TITLE 2',
      image: '',
      subsections: [
        {
          subtitle: '',
          description: (
            <>

            </>
          )
        },
      ],
    },
    {
      title: 'TITLE 3',
      subsections: [
        {
          subtitle: '',
          description: (
            <>

            </>
          )
        },
      ],
    },
    {
      title: 'TITLE 4',
      subsections: [
        {
          subtitle: 'SUBTITLE 1',
          description: (
            <>

            </>
          )
        },
        {
          subtitle: 'SUBTITLE 2',
          description: (
            <>

            </>
          )
        },
        {
          subtitle: 'SUBTITLE 3',
          description:(
            <>

            </>
          )
        },
      ],
    },
  ];


  return (
    <Container fluid className="card-container-contribution">
      {sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="custom-card" id={`section-${sectionIndex}`}>
          <Card.Body>
            <Card.Title>{section.title}</Card.Title>
            <Row>
              <Col xs={8}>
                {section.subsections.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <h3 id={`section-${sectionIndex}-part-${subsectionIndex}`}>{subsection.subtitle}</h3>
                    <Card.Text>{subsection.description}</Card.Text>
                  </div>
                ))}
              </Col>
              <Col xs={4}>
                <img src={section.image} alt='' style={{ width: '100%', height: 'auto' }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
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
      variant="custom"
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};
export default Parts;
