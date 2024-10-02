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
      <OverviewSection/>
      <Milestone />
      <div className="main-content">
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
      In this section we will go over our concept and the important milestones we hit along the way.
      </p>
    </section>
  );
};

const Milestone = () => {
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
          <p>Purification of Soluble KLK6</p>
        </div>
        <div className="milestone" onClick={() => scrollToMilestone('section-1')}>
          <h3>MILESTONE 2</h3>
          <RiTestTubeFill className='icon' size={100}/>
          <p>Purification of Molecular Switches</p>
        </div>
        <div className="milestone" onClick={() => scrollToMilestone('section-2')}>
          <h3>MILESTONE 3</h3>
          <CiPill className='icon' size={100}/>
          <p>Enzymatic Test</p>
        </div>
        <div className="milestone" onClick={() => scrollToMilestone('section-3')}>
          <h3>CONCLUSION</h3>
          <HiBeaker className='icon' size={100} />
          <p>Conclusion</p>
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
  // Array of sections with dynamic titles and texts
  const sections = [
    {
      title: 'Milestone 1',
      text: (
        <>
        <p style={{marginRight:'-10rem'}}>
        <p>One of the most significant milestones our team achieved was the successful purification of soluble KLK6 from E. coli cells an accomplishment that has not been documented in the literature to date. After several setbacks; as shown in our engineering page, the purification of the serine protease allowed us to develop a streamlined approach to the future expression and purification of our protein switches.  </p>

<p>Additionally, by demonstrating the potential of E. coli BL21-DE3 cells for this purpose, we have simplified previous workflows and saved time for researchers as well as future IGEM teams working with the protease. Previous methods of KLK6 purification involved yeast or mammalian cell expression systems. Both of these systems, while capable of producing complex proteins with post-translational modifications, are more resource-intensive, expensive, and time-consuming. They require more specialized growth media, prolonged culture times, and complex infrastructure for protein expression and purification.  </p>

<p>In contrast, E. coli is a well-established system in molecular biology due to its simplicity, rapid growth rate, and cost-effectiveness. The use of E. coli cells enables faster cloning, expression, and purification workflows, allowing researchers to obtain soluble KLK6 in a fraction of the time compared to other systems. This significantly accelerates experimentation and can drive rapid iterations in research. Moreover, reducing costs and making the process more accessible to a wider range of labs, including those involved in iGEM.  </p>
        </p>
        </>
      )
    },
    {
      title: 'Milestone 2',
      text: (
        <>
        <p style={{marginRight:'-10rem'}}>
        <p>Milestone 2: Purification of Molecular Switches  </p>

<p>Through our work with KLK6, we designed a streamlined process of cloning and purification that allowed us to go from 12 separate gene fragments to expressed and purified proteins in under a month. These results provided the first indication that our in-silico based design of protein switches may have been successful.  </p>

<p>Solubility during expression and purification can inform us of whether proper protein folding has occurred. Misfolded or aggregated proteins usually crash out in the inclusion body. Therefore, successful purification from the soluble fraction indicates that the domain insertions and circular permutations we designed – did not disrupt the native folding pathways of the separate domains. </p>
        <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture13.png" alt="" style={{borderRadius:'20px'}}/>
        </p>

        </>
      )
    },
    {
      title: 'Milestone 3',
      text: (
        <>
        <p style={{marginRight:'-10rem'}}>
          <p>Though our team initially planned to complete three enzymatic tests that assessed the complete properties of each switch – troubles with purification and in-silico design greatly set back our timeline. However, we were able to perform a simplified version of our first enzymatic test – which evaluated the proteolytic activity of the switches against α-synuclein, by SDS-PAGE.  </p>
          
          <p>Though experimental error greatly limited our results, we were able to conclude that MS 2, MS 9, MS 11, and MS 12 did not generate any pathological C-terminal cleavage products. Whereas all switches with an insertion at the conserved K45 residue – did form fragments by cleavage at D115 or N122. These switches were predicted by us to have such properties due to loss of functionality in the Cyp-D domain.  </p>
          
          <p>Based on the results we observed here, our team is looking forward to completing the remainder of our enzymatic tests before the competition – as well as optimizing gel and imaging conditions for this current enzymatic test.  </p>
          <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture14.png" alt="" style={{borderRadius:'20px'}}/>
        </p>
        </>
      )
    },
    {
      title: 'Conclusion',
      text: (
        <>
        <p style={{marginRight:'-10rem'}}>
        <p>The achievements of our wet lab team represent significant strides toward realizing the full potential of our project. By overcoming technical challenges and developing innovative methods for protein purification and switch design, we have laid the groundwork for future research by us and other IGEM teams in neurodegenerative diseases and protein engineering. The successful in-silico design methods and purification techniques not only validates our approach but also highlights the potential of using simpler, cost-effective systems to streamline complex workflows. </p>

<p>Looking ahead, we are excited to refine our methodologies, complete further testing, and continue pushing the boundaries of what is possible, confident that our approach can contribute meaningfully to the scientific community. This work serves as a stepping stone toward larger goals in improving the understanding of diseases like Parkinson’s and beyond. </p>
        </p>
        </>
      )
    },
  ];

 // Placeholder image for now

  return (
    <Container fluid className="section-container">
      {sections.map((section, index) => (
        <div key={index} id={`section-${index}`} className="section-wrapper">
          <Card className="section-card">
            <Card.Body>
              <Card.Title className="scenter-title">{section.title}</Card.Title>
              <Row>
                <Col xs={8} className="stext-container">
                  <Card.Text>
                    {section.text}
                  </Card.Text>
                </Col>
                <Col xs={4}>
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
      variant="custom"
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};

export default ProofOfConcepts;
