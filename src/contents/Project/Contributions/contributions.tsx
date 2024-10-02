import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import './contributions.css';
import { motion } from "framer-motion";

export function Contributions() {
  return (
    <>
      <ContributionHeading />
      <OverviewSection />
      <div className="main-content-contribution">
        <Sidebar />
        <CardSection />
      </div>
      <BackToTopButton />
    </>
  );
}

const ContributionHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        CONTRIBUTIONS
      </h1>
    </div>
  );
};

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
      QGEM 2024 has made significant contributions to the iGEM community through protocol development, public outreach, and collaborative efforts. We created and shared key protocols, including those for GROMACS molecular dynamics simulations, HiFi DNA assembly, protein purification, and enzymatic assays, all accessible on our team wiki to support future teams. We also organized the BiomImpact Challenge pitch competition, raised over $2000 for Parkinson Canada, and co-developed an ethics and regulatory handbooks in collaboration with other iGEM teams, addressing key challenges in synthetic biology. Beyond the lab, our community engagement included hosting the Parkinson’s Unscripted podcast, creating Gaelia's Big Project storybook, and hostsing educational workshops for elementary school kids. Through these efforts, we aim to contribute both scientifically and socially to the responsible advancement of synthetic biology. 
      </p>

    </section>
  );
};

// FOR WRITE UPS CHANGE TITLES AND SIBTITLES ON SIDEBAR AS NEEDED
const Sidebar: React.FC = () => {
  const sections = [
    { name: 'Molecular Protocol Development', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Development'] },
    { name: 'Experimental Protocols', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['HI-FI DNA Assembly', 'Protein Expression and Purification', 'Enzymatic Assay'] },
    { name: 'Ethics Handbook', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Ethics Handbook'] },
    { name: 'Parkinsons Unscripted Podcast', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Podcast'] },
    { name: `Gaelia's Big Project!`, image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Storybook'] },
    { name: `Parkinson SuperWalk`, image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Parkinson SuperWalk'] },
    { name: `The BioImpact Challenge`, image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['The BioImpact Challenge'] },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="sidebar-contributions">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <div onClick={() => setOpenSection(openSection === index ? null : index)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img src={section.image} alt={section.name} className="section-image" style={{ marginRight: '8px', width: '40px', height: '40px', objectFit: 'cover' }} />
              <span>{section.name}</span>
            </div>
            {openSection === index && (
              <StaggeredDropDown options={section.content} image={section.image} sectionIndex={index} />
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


// FOR WRIETUPS CHANGE TITLES AND DESCRIPTIONS AS NEEDED. SEE WETLAB/SAFETY FOR REFERENCE
const CardSection: React.FC = () => {
  const sections = [
    {
      title: 'Molecular Dynamics Protocol Development',
      subsections: [
        {
          subtitle: '',
          description: (
            <>
            <p>
            We developed a GROMACS protocol that allows teams to perform advanced molecular dynamics simulations. This tool enables researchers to study biomolecular interactions, specifically protein-protein complexes and protein-ligand complexes,  at the atomic level. By sharing this protocol, we aimed to support future iGEM teams in incorporating computational methods into their wet lab experiments, thereby streamlining their workflow and improving the efficiency of biomolecular research. 

            </p>
            </>
          ),
        }
      ],
    },
    {
      title: 'Experimental Protocols',
      image: '',
      subsections: [
        {
          subtitle: 'HI-FI DNA Assembly',
          description: (
            <>
            <p>
            Our HiFi DNA assembly protocol streamlines the process of constructing large, multi-part genetic sequences with high accuracy. Traditional methods of DNA assembly, such as Gibson assembly, can introduce errors or inefficiencies when combining multiple DNA fragments. The HiFi method offers increased fidelity by reducing errors in fragment joining and ensuring that complex genetic constructs can be assembled more reliably. This is critical for synthetic biology projects that rely on the precise engineering of gene circuits or metabolic pathways. By optimizing this protocol and making it publicly available, we contributed to improved efficiency and reliability in genetic engineering, enabling future iGEM teams to quickly iterate on their designs with confidence in the assembly process. 
            </p>
            <iframe src="https://static.igem.wiki/teams/5079/writeups/contributions/hifi-dna-assembly-protocol.pdf" style={{height:'700px',width:'500px',marginLeft:'5rem',}}></iframe>
            </>
          )
        },
        {
          subtitle: 'Protein Expression and Purification',
          description: (
            <>
            <p>
            Our team developed a versatile and efficient protein purification protocol that enhances the yield and purity of recombinant proteins. This protocol is essential for downstream applications such as enzymatic assays, structural studies, or therapeutic development. We optimized this process for scalability, ensuring that it could be adapted for both small lab-scale purifications and larger-scale production. The protocol includes detailed instructions on affinity chromatography using tags like His-tag or GST, and outlines methods to minimize contamination and degradation, which are common issues in protein purification. Sharing this protocol empowers future teams to obtain high-quality protein samples, which is often a bottleneck in synthetic biology workflows, thus enabling better experimental outcomes and reproducibility.             </p>
            <iframe src="https://static.igem.wiki/teams/5079/writeups/contributions/protein-purification-protocol-za-edited-final.pdf" style={{height:'700px',width:'500px',marginLeft:'5rem',}}></iframe>

            </>
            
          )
        },
        {
          subtitle: 'Enzymatic Assay',
          description: (
            <>
            <p>
            Our enzymatic assay protocol allows for the precise measurement of enzymatic activity, a critical step in evaluating the functionality of engineered proteins. This protocol was designed to be adaptable for different enzymes, ensuring that teams can measure key parameters such as reaction rate, substrate affinity, and inhibition under various conditions. We focused on creating a standardized method that includes tips for troubleshooting, as well as guidance on interpreting results, such as calculating kinetic parameters like Km and Vmax. The protocol was partially successfully used to evaluate our own engineered enzymes, and by sharing it with the iGEM community, we provided a tool that allows teams to better understand their protein designs and their potential real-world applications.              </p>
            <iframe src="https://static.igem.wiki/teams/5079/writeups/contributions/enzymatic-assay-protocol1.pdf" style={{height:'700px',width:'500px',marginLeft:'5rem',}}></iframe>

            </>
            
          )
        },

      ],
    },
    {
      title: 'Ethics Handbook',
      subsections: [
        {
          subtitle: 'Ethics Handbook',
          description: (
            <>
            <p>
            Our team collaborated with multiple iGEM teams to develop a comprehensive Ethics and Regulatory Handbook that addresses the ethical and legal considerations of synthetic biology research. This resource covers vital topics, including ethical challenges related to genetic data privacy, informed consent for human subjects research, and the impact of synthetic biology innovations on society. Additionally, we outlined strategies for navigating regulatory landscapes, providing clear guidance on compliance with regional and international laws governing gene editing, synthetic organisms, and biopharmaceutical development. By addressing these critical issues, the handbook serves as a foundational resource for future teams to ensure that their research adheres to ethical standards and legal requirements, promoting responsible innovation.             
            </p>
            <iframe src="https://static.igem.wiki/teams/5079/writeups/contributions/ethics-handbook.pdf" style={{height:'700px',width:'500px',marginLeft:'5rem',}}></iframe>
            </>
          )
        },
      ],
    },
    {
      title: 'Parkinsons Unscripted Podcast: Rasing Awareness Through Storytelling',
      subsections: [
        {
          subtitle: '',
          description: (
            <>
            <p>
            As part of our public engagement efforts, we launched the Parkinson’s Unscripted Podcast, where we interviewed patients, researchers, and healthcare professionals to discuss their experiences with Parkinson’s disease. This podcast series served a dual purpose: raising awareness about the disease while also providing a platform to explain the role of synthetic biology in developing novel therapeutics. We emphasized patient-centric research, sharing our progress in developing a Parkinson’s therapeutic, and discussing how scientific innovation can be informed by patient advocacy. The podcast episodes reached a broad audience, including both scientific and non-scientific listeners, making complex research accessible to the general public and highlighting the importance of patient involvement in the therapeutic development process. Listen to our podcast <a href="https://www.youtube.com/@QueensiGEM2024/videos">here</a>.  
            </p>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            <img src="https://static.igem.wiki/teams/5079/writeups/contributions/podcast.png" alt="" style={{height:'400px', borderRadius:'20px', margin:'3rem'}}/>
            <img src="https://static.igem.wiki/teams/5079/writeups/contributions/podcast1.png" alt="" style={{height:'600px', borderRadius:'20px', margin:'3rem'}} />
            </div>
            </>
          )
        },
      ],
    },
    {
      title: `Gaelia's Big Project! Storybook: Inspiring Young Scientists`,
      subsections: [
        {
          subtitle: '',
          description: (
            <>
            <p>
            To inspire the next generation of scientists, we created Gaelia's Big Project Storybook, a children’s book that introduces synthetic biology concepts through an engaging narrative. This storybook follows a young scientist named Gaelia from Planet iGEM as they embark on a journey to enrich their knowledge of synthetic biology by exploring iGEM teams’ project from around the world. By simplifying complex ideas such as gene editing and molecular design, the storybook aims to make synthetic biology accessible and exciting for young readers.  This initiative contributes to science literacy and encourages curiosity in a fun, approachable way. 
            </p>
            <iframe src="https://static.igem.wiki/teams/5079/writeups/contributions/gaelia-s-big-project-3.pdf" style={{height:'700px',width:'500px',marginLeft:'5rem',}}></iframe>
            </>
          )
        },
      ],
    },
    {
      title: `Parkinson SuperWalk `,
      subsections: [
        {
          subtitle: '',
          description: (
            <>
            <p>
            Our team took a leadership role in organizing the Kingston Chapter Parkinson SuperWalk, a major fundraising and awareness event. This event not only raised funds for Parkinson’s disease research but also provided a platform for community engagement. We used this opportunity to share our project with the public and connect directly with Parkinson’s patients and their families, gaining valuable insights into the daily challenges faced by those living with the disease. Organizing the SuperWalk strengthened our commitment to advocacy and demonstrated the importance of community involvement in scientific research. We are incredibly proud to announce that the QGEM team raised over $2000 Parkinson Canada!             
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/contributions/superwalk-donation-announcement.png" alt="" style={{height:'600px', borderRadius:'20px', margin:'3rem'}} />
            </>
          )
        },
      ],
    },
    {
      title: `The BioImpact Challenge `,
      subsections: [
        {
          subtitle: '',
          description: (
            <>
            <p>
            Our team took the initiative to organize the Biomimpact Challenge, a pitch competition designed to help undergraduate students explore the entrepreneurial potential of their synthetic biology projects. We facilitated this competition to provide teams with a platform to present their ideas to industry professionals and academics, refine their business strategies, and receive valuable feedback on commercialization. Through organizing this event, we contributed to building a bridge between synthetic biology research and real-world applications, empowering teams to think beyond the lab and consider how their work can create tangible, marketable solutions in biotechnology. Our judges’ feedback from this event offers insights and strategies that can guide paticipating teams in commercializing their projects            
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/contributions/img-7615.png" alt="" style={{height:'600px', borderRadius:'20px', margin:'3rem'}} />
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
                    <Card.Text style={{marginRight:'-10rem'}}>{subsection.description}</Card.Text>
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

export default Contributions;
