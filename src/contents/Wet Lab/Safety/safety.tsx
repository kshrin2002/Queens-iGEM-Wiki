import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export function Safety() {
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
        height: 'auto',
        marginBottom: '100px',
        marginRight: 0
      }}
    >
      <h2>Overview</h2>
      <p>
        This page outlines the legal and policy framework that guided our research, focusing on the iGEM competition, 
        institutional guidelines, and national regulations. By adhering to these rules, we ensured that our project was conducted safely, 
        ethically, and in full compliance with all relevant standards. We meticulously followed iGEM's rules, from experimental protocols to patient 
        data collection, and upheld Queen's University's biosafety protocols in the lab. Additionally, our research aligns with Canada's biosafety standards, 
        ensuring responsible handling of organisms, hazardous materials, and human data throughout our work. 
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
        SAFETY
      </h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const sections = [
    { name: 'LAWS AND POLICIES', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['iGEM Rules and Policies', 'Institutional Rules and Policies', 'National Rules and Policies'] },
    { name: 'OUR LAB', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Our Lab'] },
    { name: 'OUR PROJECT', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Our Project'] },
    { name: 'RISK MANAGEMENT', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Identifying Project Risks', 'Anticipating Future Risks', 'Managing Risks'] },
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


const CardSection: React.FC = () => {
  const sections = [
    {
      title: 'Laws and Policies',
      subsections: [
        {
          subtitle: 'iGEM Rules and Policies',
          description: (
            <>
              <p>
                The iGEM Rules of Conduct establish clear expectations for all participants in the iGEM community, including team members, judges, and staff. Central to these rules is the commitment to uphold iGEM's values—integrity, respect, honesty, and excellence. We recognize that we serve as ambassadors for the global synthetic biology community at Queen's University and in Canada. Before designing our experimental protocols or starting any lab work, we held a full team meeting to review iGEM's rules and policies. This equipped our team, especially members who were less experienced in the lab, with essential knowledge to minimize risks associated with our protocols.
              </p>
              <p>
                We did not plan to engage in any prohibited activities, including using Risk Group 3-4 organisms. Furthermore, all our work was conducted using organisms and parts included in the iGEM White List. We were aware that if time permitted, we hoped to conduct cell viability assays to test the cellular uptake of our protein switch. Although we aimed to work with enteroendocrine mice cell lines, we also considered yeast cells due to their accessibility and affordability. A member of the safety and security committee advised us to submit a check-in form regardless. This form was approved. Although we did not conduct cell viability assays, we plan to do so after the Jamboree.
              </p>
              <p>
                In terms of activities requiring advance permission from iGEM, we did not engage in any work that necessitated such approvals. We refrained from conducting research involving animals, bringing genetically modified organisms outside the lab, or performing laboratory experiments using human samples.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Institutional Rules and Policies',
          description: (
            <>
              <h1>In the Lab</h1>
              <p>
                At Queen's University, we follow institutional guidelines and policies to ensure the safe handling of biological materials. Our lab operates under a biohazard permit and adheres to both Containment Level 1 (CL1) and Containment Level 2 (CL2) standards.  Comprehensive training is provided to all personnel to ensure they are fully prepared to follow safety protocols. 
              </p>
              <p>
                Our team also utilizes resources from the <a href="https://www.queensu.ca/risk/safety">Environmental Health and Safety (EHS) Office</a>, which provides guidance, training, and resources to help us maintain compliance with safety standards. The <a href="https://www.queensu.ca/risk/sites/rsswww/files/uploaded_files/EHS/Biolog">Queen's University Biosafety Manual</a> is another key resource that outlines detailed protocols for biosafety, including risk assessments, containment strategies, and emergency response procedures. These resources ensure that we operate safely and responsibly, reducing any risks associated with our wet lab work. 
              </p>
              To meet our university's required safety standards, our team has completed a variety of required trainings, including WHMIS Training, Level 1 and 2 Biosafety Trainings, and Health and Safety Awareness Training. These trainings cover the following : 
              <ul>
                <li>PPE Donning and Doffing: Ensuring proper usage of personal protective equipment (PPE). </li>
                <li>Lab Entry and Exit Procedures </li>
                <li>Use of Personal Devices: Policies governing the use of laptops and personal devices within lab spaces. </li>
                <li>Handling Liquids: Safe pipetting and disposal procedures for handling liquids</li>
                <li>Sample and Reagent Storage: Proper protocols for storing and inventorying biological samples and reagents at different temperatures (-80°C, -20°C, 4°C, and ambient). </li>
              </ul>
              <br />
              <h1>Human Subject's Research</h1>
              <p>We sought to speak with PD patients to ensure that SynAxis' design is not only scientifically sound but also aligned with the lived experiences of those it aims to help. While lab-based research provides insights into disease mechanisms and potential treatments, it is the patients who offer the most personal and practical perspective on how a treatment could impact their daily lives. For example, we wanted to learn directly from patients how they feel about current treatments, what gaps exist in their care, and how they perceive new, experimental solutions like SynAxis. These conversations are documented in our <a href="https://2024.igem.wiki/queens-canada/patient-stories"> Patient Stories page.</a> </p>
              <p>
                Before we initiated these conversations, we spoke to representatives at the HSERB. The Health Sciences and Affiliated Teaching Hospitals Research Ethics Board (HSREB) is the authority to review proposed research involving human participants that are being conducted under the auspices of Queen's University. After the meeting, it was determined that our patient interviews were best qualified for the 'Teaching Case Report Study' category. A teaching case report must satisfy the following: 
              </p>
              <ul>
                <li>It would be written as a "story"</li>
                <li>It would be written to support problem based learning</li>
                <li>It would require teaching notes.</li>
                <li>It could have theoretical propositions</li>
                <li>It would value practical implications more than theoretical knowledge. </li>
              </ul>
              <br />
              <p>
                Teaching cases are exempt from ethics review based on TCPS2, Article 2.5. The 'intent or purpose' of a teaching case report study is for educational or learning purposes rather than research and, therefore, does not fall under the scope of the TCPS 2. After submitting all required documents, including a patient consent form (see below), we were able to receive a letter of exemption for ethics review by the HSERB
              </p>
              <iframe src="https://static.igem.wiki/teams/5079/writeups/safety/patient-consent-form.pdf" style={{ width: '100%', height: '800px',  border: '3px solid var(--mexired)' }}/>
            </>
          ),
        },
        {
          subtitle: 'National Rules and Policies',
          description: (
            <>
            <p>
            At the national level, we adhere to the Canadian Biosafety Standards and Guidelines (CBSG). Additionally, the Public Health Agency of Canada (PHAC) is concerned with establishing biosafety and biosecurity guidelines for research laboratories. The PHAC’s standards ensure that safe practices are followed when working with infectious agents and toxins, safeguarding both researchers and the broader public. 
            </p>
            <p>
            Another essential framework is the Workplace Hazardous Materials Information System (WHMIS), Canada's national hazard communication standard. WHMIS ensures that hazardous materials are used safely by providing information through clear labeling, Safety Data Sheets (SDS), and  worker education programs.  
            </p>
            </>
          )
        },
      ],
    },
    {
      title: 'Our Lab',
      image: '',
      subsections: [
        {
          subtitle: '',
          description: (
            <>
            <p>
              We work in the Discovery Lab, located on the 5th floor of Botterell Hall at Queen’s University. Our primary supports are the lab technical support staff:  
            </p>
            <ul>
              <li>Dr. Yat Tse : Biosafety Officer </li>
              <img src="https://static.igem.wiki/teams/5079/writeups/safety/yat-tse.jpg" alt="" style={{height:'200px', borderRadius:'20px'}} />
              <li>Christie Gilmour: Technical Support Assistant</li>
              <img src="https://static.igem.wiki/teams/5079/writeups/safety/christie-gilmour.jpg" alt="" style={{height:'200px', borderRadius:'20px'}} />
            </ul>
            <p>
            Our lab is equipped with a range of essential safety features to ensure a secure working environment. Biological safety cabinets are in place to provide a sterile, enclosed space for handling biological samples,. For immediate response to accidents, the lab is outfitted with eyewash stations and emergency showers, allowing for quick decontamination in case of exposure to hazardous substances 
            </p>
            <div className='desc-img-container'>
            <img src="https://static.igem.wiki/teams/5079/writeups/safety/img-7502.jpeg" alt="" style={{height:'200px', borderRadius:'20px', marginRight:'2rem'}}/>
            <img src="https://static.igem.wiki/teams/5079/writeups/safety/img-7503.jpeg" alt="" style={{height:'200px', borderRadius:'20px', marginRight:'2rem'}}/>
            <img src="https://static.igem.wiki/teams/5079/writeups/safety/img-7506.jpeg" alt="" style={{height:'200px', borderRadius:'20px', marginRight:'2rem'}}/>
            <img src="https://static.igem.wiki/teams/5079/writeups/safety/img-7510.jpeg" alt="" style={{height:'200px', borderRadius:'20px', marginRight:'2rem'}}/>
            </div>
            <p>
            To handle fire risks and equipment malfunctions, fire extinguishers and emergency shut-off systems are installed throughout the lab, ensuring swift action can be taken to mitigate hazards. Additionally, the lab’s ventilation system maintains proper airflow to safely remove harmful vapors and gases. 
            </p>
            <div className='desc-img-container'>
            <img src="https://static.igem.wiki/teams/5079/writeups/safety/img-7490.jpeg" alt="" style={{height:'200px', borderRadius:'20px', marginRight:'2rem'}}/>
            <img src="https://static.igem.wiki/teams/5079/writeups/safety/img-7493.jpeg" alt="" style={{height:'200px', borderRadius:'20px', marginRight:'2rem'}}/>
            </div>
            <p>
            Chemicals are stored in ventilated chemical storage cabinets, designed specifically for flammable, corrosive, and toxic substances, reducing the risk of accidents and ensuring safe, organized storage. These features collectively maintain a high level of safety, allowing for secure and efficient research activities. 
            </p>
            </>
          )
        },
      ],
    },
    {
      title: 'Our Project',
      subsections: [
        {
          subtitle: '',
          description: (
            <>
            <p>
            Our project aimed to develop a therapeutic for Parkinson's disease (PD) by engineering a modular protein switch to target α-synuclein pathology in the enteric nervous system, based on the gut-origin hypothesis. The protein switch, which combines cyclophilin D (CypD) and KLK6, is designed to activate KLK6 only in the presence of α-synuclein seeds.  To deliver this therapeutic, we designed a spore-based probiotic system targeting enteroendocrine cells in the intestines, aiming for a minimally invasive and accessible solution for PD patients. 

            Our work involved the use of Escherichia coli strains (NEB® 5-alpha and BL21(DE3)) for cloning and expressing genes like KLK6 and α-synuclein. We strictly adhered to safety protocols when handling these organisms, ensuring that none of the parts posed any hazardous risks. 

            We conducted various experiments, including gene cloning, protein expression, and purification, followed by an enzymatic assay to test the activity of the protein switch candidates. All work was performed under rigorous biosafety conditions, with careful handling of chemicals such as acetonitrile, acrylamide, and DTT, which were used in controlled amounts. Safety measures, including proper disposal protocols and personal protective equipment, were in place at every stage of the project to ensure compliance with biosafety and chemical safety standards.
            </p>
            </>
          )
        },
      ],
    },
    {
      title: 'Risk Management and Framework',
      subsections: [
        {
          subtitle: 'Identifying Project Risks',
          description: (
            <>
            <p>
            Throughout our project, we identified several potential hazards associated with organisms, chemicals, and experimental procedures, implementing safety measures to mitigate risks to our team, colleagues, and the environment. 
            </p>
            <p>
            The chemicals used in our experiments presented some hazards. Acetonitrile is flammable and irritating to the skin and respiratory tract, while acrylamide, a neurotoxin, posed cancer risks through inhalation or skin contact. Ammonium persulfate could react violently with other substances, heightening fire and explosion risks. Corrosive agents like sodium hydroxide and hydrochloric acid presented severe risks of chemical burns and respiratory irritation, and the use of Ni-NTA agarose carried the potential for heavy metal poisoning through accidental exposure. 
            </p>
            To transition our project to real-world applications, we recognized the need for comprehensive clinical trials, requiring approval from Research Ethics Boards (REBs) and compliance with Health Canada regulations, particularly the Food and Drugs Act.  
            <p>
            Through thorough hazard identification and management, we aimed to protect our team and the broader community throughout our project. 
            </p>
            </>
          )
        },
        {
          subtitle: 'Anticipating Future Risks',
          description: (
            <>
            <p>
            Our project's advancement will require clinical trials with human participants to evaluate the therapeutic safety and efficacy. In Canada, these trials must gain approval from Research Ethics Boards (REBs) and adhere to regulations from Health Canada, including the Food and Drugs Act and Clinical Trials Regulations, following guidelines from the International Council for Harmonisation (ICH). 
            </p>
            </>
          )
        },
        {
          subtitle: 'Managing Risks',
          description:(
            <>
            <p>
            To mitigate risks in our project, we have implemented several safety measures. Accident reporting procedures are in place to ensure prompt action is taken in response to spills or injuries. Personal Protective Equipment (PPE), including lab coats, gloves, and eye protection, is mandatory during all laboratory activities.  
            </p>
            <p>
            Inventory controls are utilized to track reagents and materials, ensuring their availability and preventing shortages that could disrupt experiments. Physical access controls limit laboratory access to authorized personnel, safeguarding against unauthorized entry. 
            </p>
            Our waste management system categorizes waste into solid, liquid, biological, and chemical, each requiring specific handling protocols to ensure environmental safety and compliance with regulations. 
            <p>
            Consultation with stakeholders and experts, including our PI and technical support staff, enhanced our understanding of risk management strategies. Regular communication about biosafety measures and potential risks ensured that all team members were informed and prepared.  
            </p>
            <p>
            By implementing these risk management actions and leveraging expert support, we maintained a safe and responsible research environment while advancing our wet lab work. 
            </p>
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

export default Safety;
