import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./implementation.css"; // Updated CSS file name
import { motion } from "framer-motion";

export function Implementation() {
  return (
    <>
      <ImplementationHeading />
      <OverviewSection />
      <div className="main-content-implementation">
        <Sidebar />
        <CardSection />
      </div>
      <BackToTopButton />
    </>
  );
}

const ImplementationHeading: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "138px" }}>
      <h1
        style={{
          fontSize: "5em",
          color: "#590000",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        IMPLEMENTATION
      </h1>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#FE9BA1",
        color: "white",
        padding: "20px",
        marginTop: "100px",
        width: "100%",
        height: "350px",
        marginBottom: "100px",
        marginRight: 0,
      }}
    >
      <h2>Overview</h2>
      <p>
        The implementation plan for SynAxis is a strategic framework designed to
        guide the development and deployment of our innovative therapeutic
        approach for Parkinson's disease. This plan outlines the critical phases
        of research, development, regulatory compliance, manufacturing, and
        market entry to ensure a systematic and effective rollout of our
        therapeutic intervention.
      </p>
    </section>
  );
};

// FOR WRITE UPS CHANGE TITLES AND SIBTITLES ON SIDEBAR AS NEEDED
const Sidebar: React.FC = () => {
  const sections = [
    {
      name: "Stage 1: Pre-Clinical Development ",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["Pre-Clinical Development", "Pre-clin Development Plan"],
    },
    {
      name: "Stage 2: IP Protection Strategy ",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["IP Protection Strategy", "IP protection strategy Document"],
    },
    {
      name: "Stage 3: Clinical Trials Timeline ",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["Clinical Trials Timeline", "Clinical Trials Plan"],
    },
    {
      name: "Stage 4: Regulatory Roadmap ",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: [
        "Regulatory Roadmap",
        "Regulatory Strategy Roadmap",
      ],
    },
    {
      name: "Stage 5:  Manufacturing Plan",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: [
        "Manufacturing Plan",
        "Manufacturing plan Outline",
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

const StaggeredDropDown = ({
  options,
  image,
  sectionIndex,
}: {
  options: string[];
  image: string;
  sectionIndex: number;
}) => {
  return (
    <motion.ul
      style={{
        padding: "10px",
        backgroundColor: "#fff",
        listStyle: "none",
        marginLeft: "0",
        marginTop: "10px",
        width: "100%",
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

const Option = ({
  text,
  image,
  sectionIndex,
  sectionPartIndex,
}: {
  text: string;
  image: string;
  sectionIndex: number;
  sectionPartIndex: number;
}) => {
  const handleClick = () => {
    const sectionId = `section-${sectionIndex}-part-${sectionPartIndex}`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const topPosition =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <li
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center" }}
    >
      <img
        src={image}
        alt="icon"
        style={{
          marginRight: "8px",
          width: "30px",
          height: "30px",
          objectFit: "cover",
        }}
      />
      <span>{text}</span>
    </li>
  );
};

const CardSection: React.FC = () => {
  const sections = [
    {
      title: "Stage 1: Pre-Clinical Development ",
      subsections: [
        {
          subtitle: "Pre-Clinical Development",
          description: (
            <>
              <p>
                Our pre-clinical development plan outlines the first stage of
                SynAxis implementation. This document delineates the essential
                framework and objectives that will guide the research and
                development process of our biologic drug candidate, aiming to
                not only alleviate symptoms but also address the root causes of
                PD.
              </p>

              <p>
                The primary goal of this Preclinical Development Plan is to
                provide a structured approach to drug development that aligns
                with industry standards while addressing the unique challenges
                associated with biologic therapies. By establishing a clear
                Target Product Profile (TPP), this plan aims to:
              </p>

              <ul>
                <li>
                  <strong>
                    Identify and Characterize the Target Indication:
                  </strong>{" "}
                  Parkinson's disease is characterized by motor control issues
                  due to dopamine deficiency. The plan focuses on both
                  early-onset (EOPD) and late-onset Parkinson’s disease (LOPD),
                  emphasizing the need for targeted interventions across
                  different patient demographics.
                </li>
                <li>
                  <strong>Evaluate Existing Treatments:</strong> Understanding
                  the limitations of current PD treatments, such as Levodopa and
                  dopamine agonists, highlights the need for innovative
                  solutions. This plan articulates how SynAxis aims to move
                  beyond mere symptom management to directly target the
                  underlying pathophysiology of PD.
                </li>
                <li>
                  <strong>Address Drug Development Challenges:</strong> The plan
                  acknowledges the complexities involved in preclinical testing
                  for biologics, including pharmacokinetics, safety, and
                  immunogenicity concerns. It lays out a roadmap for addressing
                  these issues systematically.
                </li>
                <li>
                  <strong>Guide Preclinical Data Generation:</strong> The
                  document outlines methodologies for evaluating SynAxis'
                  therapeutic efficacy using various model organisms, including
                  rodents and non-human primates (NHPs). These studies will
                  inform the safety and effectiveness of the biologic drug
                  before advancing to clinical trials.
                </li>
                <li>
                  <strong>Facilitate Regulatory Compliance:</strong> A detailed
                  framework is crucial for meeting regulatory requirements for
                  biologic drug development. This plan will serve as a guide for
                  generating the necessary data to support regulatory
                  submissions, ensuring that all safety and efficacy standards
                  are met.
                </li>
              </ul>
            </>
          ),
        },

        {
          subtitle: "preclinical development plan",
          description: (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/implementations/preclinical-development-plan-fd.pdf"
                  width="90%"
                  height="600px"
                  style={{ border: "none" }}
                  title="preclinical-development-plan"
                ></iframe>
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Stage 2: IP Protection Strategy",
      image: "",
      subsections: [
        {
          subtitle: "IP Protection Strategy",
          description: (
            <>
              <p>
                Stage 2 involves the identification and assessment of patentable
                traits for the therapeutic being developed further. This stage
                is crucial for several reasons:
              </p>

              <ul>
                <li>
                  <strong>Securing patents:</strong> Securing patents for the
                  innovative aspects of SynAxis ensures legal protection against
                  unauthorized use or reproduction of the therapeutic. By
                  identifying patentable traits, we can safeguard our invention
                  and establish a competitive advantage in the market.
                </li>
                <li>
                  <strong>Enhancing project value:</strong> A strong patent
                  portfolio enhances the project's value, making it more
                  attractive to potential investors and collaborators. It also
                  positions SynAxis favorably in negotiations for partnerships
                  or licensing agreements.
                </li>
                <li>
                  <strong>Critical asset for funding:</strong> Patents can serve
                  as a critical asset when seeking funding. Investors and grant
                  agencies often prefer projects with robust intellectual
                  property protection, as it demonstrates a commitment to
                  safeguarding innovations.
                </li>
                <li>
                  <strong>Preliminary patent search:</strong> Conducting a
                  preliminary patent search helps establish the uniqueness of
                  SynAxis. This not only validates the project within the
                  scientific community but also helps avoid duplication of
                  existing work, reinforcing the project's credibility.
                </li>
                <li>
                  <strong>Understanding legal requirements:</strong>{" "}
                  Understanding the requirements for patent applications,
                  including the necessary forms and fees, ensures that SynAxis
                  complies with legal standards and accelerates the application
                  process.
                </li>
              </ul>
            </>
          ),
        },

        {
          subtitle: "IP protection strategy Document",
          description: (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/implementations/ip-protection-strategy.pdf"
                  width="90%"
                  height="600px"
                  style={{ border: "none" }}
                  title="IP protection strategy"
                ></iframe>
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Stage 3: Clinical Trials Timeline ",
      subsections: [
        {
          subtitle: "Clinical Trials Timeline",
          description: <>With secured IP rights, we can confidently invest resources into designing and executing a thorough clinical trial plan for SynAxis. This confidence enables us to focus on gathering safety and efficacy data, knowing that our invention is protected. Regulatory bodies will also look favorably upon the presence of IP protection when reviewing our clinical trial submissions, facilitating smoother communication and collaboration with agencies like the FDA or Health Canada during the approval process. Furthermore, the results from our clinical trials can be leveraged for further developments in Phase IV monitoring. By securing IP protection early on, we not only protect our innovations but also enhance the overall feasibility and success of our clinical trials, ultimately ensuring the viability of our project in a competitive landscape.  
          </>,
        },
        {
          subtitle: "Clinical Trials Plan",
          description: (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/implementations/clinical-trial-plan-fd.pdf"
                  width="90%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Clinical Trial Plan"
                ></iframe>
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Stage 4: Regulatory Roadmap ",
      subsections: [
        {
          subtitle: "Regulatory Roadmap",
          description: (
            <>
              <p>
                A regulatory strategy roadmap serves as a comprehensive plan that outlines the necessary
                steps, timelines, and compliance requirements for navigating the regulatory landscape. This roadmap
                is essential for several reasons.
              </p>
        
              <p>
                Firstly, it provides a clear framework for meeting the specific regulatory requirements of health
                authorities such as the FDA and Health Canada. Understanding and adhering to these requirements is
                crucial for the approval of our clinical trial protocols and eventual marketing applications. By
                anticipating regulatory hurdles and preparing for them in advance, we can streamline the submission
                process, reducing delays and enhancing the likelihood of timely approvals.
              </p>
        
              <p>
                Secondly, the regulatory strategy roadmap helps ensure that we maintain consistent communication
                with regulatory agencies throughout the clinical development process. Establishing open lines of
                communication allows us to seek guidance on our study designs, address any potential concerns early,
                and demonstrate our commitment to patient safety and ethical standards. This proactive approach can
                lead to valuable feedback, helping us refine our clinical trial methodologies and improve our chances
                of success.
              </p>
        
              <p>
                Additionally, having a well-defined regulatory strategy allows us to allocate resources efficiently,
                including budget and personnel, to manage regulatory submissions, compliance activities, and
                interactions with health authorities. This structured approach minimizes the risk of oversights and
                ensures that we are prepared for audits and inspections at various stages of the project.
              </p>
        
              <p>
                Finally, a regulatory strategy roadmap enables us to incorporate real-world evidence and
                post-marketing surveillance plans from the outset. By considering how we will monitor the long-term
                safety and effectiveness of SynAxis after it reaches the market, we can create a comprehensive plan
                that not only supports regulatory approval but also enhances our therapeutic's credibility and
                acceptance in clinical practice.
              </p>
            </>
          ),
        },
        {
          subtitle: "Regulatory Strategy Roadmap",
          description: (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/regulatory-strategy-roadmap-fd.pdf"
                  width="90%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Regulatory Strategy Roadmap"
                ></iframe>
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Stage 5:  Manufacturing Plan",
      subsections: [
        {
          subtitle: "Manufacturing Plan",
          description: (
            <>
              <p>
                After establishing our regulatory strategy roadmap, the next critical phase for the successful 
                implementation of the SynAxis project is the development of a comprehensive manufacturing plan. 
                This plan outlines the necessary steps and considerations for producing our therapeutic product at 
                scale while ensuring compliance with industry standards and regulations. The importance of a well-structured 
                manufacturing plan cannot be overstated, as it directly impacts the quality, safety, and availability 
                of our therapeutic for patients.
              </p>
        
              <p>
                The manufacturing plan begins with identifying the production process, which includes the selection 
                of appropriate technologies and equipment for synthesizing and purifying our therapeutic. We need to 
                determine whether we will utilize in-house facilities or collaborate with contract manufacturing organizations 
                (CMOs) that specialize in biopharmaceutical production. This decision is essential for balancing costs, 
                production capabilities, and scalability. By choosing a reliable manufacturing partner or investing in our 
                own facilities, we can ensure that the production process aligns with our quality expectations and timelines.
              </p>
        
              <p>
                Next, we will establish quality assurance and quality control (QA/QC) protocols to guarantee that every 
                batch of our therapeutic meets stringent quality standards. This includes defining specifications for raw 
                materials, intermediates, and the final product. Implementing a robust QA/QC system helps minimize 
                variability and defects, ensuring that our therapeutic is safe and effective for patient use. Additionally, 
                we will prepare for compliance with Good Manufacturing Practices (GMP), which are critical for regulatory 
                approval and maintaining the integrity of our product.
              </p>
        
              <p>
                Another vital aspect of our manufacturing plan is the development of a risk management strategy. This 
                involves identifying potential risks associated with the manufacturing process, such as equipment failure, 
                contamination, or supply chain disruptions. By proactively addressing these risks through contingency planning 
                and regular assessments, we can enhance the resilience of our manufacturing operations and ensure a steady 
                supply of our therapeutic.
              </p>
        
              <p>
                Moreover, scaling up production requires careful consideration of logistics, including inventory management, 
                distribution channels, and supply chain coordination. We will establish partnerships with suppliers for raw 
                materials and ensure that our distribution network can efficiently deliver our therapeutic to healthcare 
                providers and patients. This logistical framework is essential for maintaining consistent supply and meeting 
                market demand once our product is approved.
              </p>
            </>
          ),
        },
        {
          subtitle: "Manufacturing plan Outline",
          description: (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/implementations/manufacturing-plan-outline.pdf"
                  width="90%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Manufacturing Plan Outline"
                ></iframe>
              </div>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <Container fluid className="card-container-contribution">
      {sections.map((section, sectionIndex) => (
        <Card
          key={sectionIndex}
          className="custom-card"
          id={`section-${sectionIndex}`}
        >
          <Card.Body>
            <Card.Title className="custom-header">{section.title}</Card.Title>
            <Row>
              <Col xs={8}>
                {section.subsections.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <h3 id={`section-${sectionIndex}-part-${subsectionIndex}`}>
                      {subsection.subtitle}
                    </h3>
                    <Card.Text style={{ marginRight: "-10rem" }}>
                      {subsection.description}
                    </Card.Text>
                  </div>
                ))}
              </Col>
              <Col xs={4}>
                <img
                  src={section.image}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      className={`button ${isVisible ? "visible" : ""}`}
      variant="custom"
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};

export default Implementation;
