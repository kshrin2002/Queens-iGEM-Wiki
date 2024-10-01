import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./attributions.css"; // Import the CSS file

export function Attributions() {
  useEffect(() => {
    // JavaScript to handle iframe height dynamically
    const iframe = document.getElementById("igem-attribution-form");
    window.addEventListener("message", function (event) {
      if (event.origin === "https://teams.igem.org") {
        if (iframe && event.data && !isNaN(event.data.height)) {
          iframe.style.height = `${event.data.height}px`;
        }
      }
    });
  }, []);

  return (
    <>
      <div className="main" style={{ paddingBottom: "0", marginBottom: "0" }}>
        <DesignHeading />
        <div className="main-content">
          <Sidebar />
          <CardSection />

          {/* Insert the iframe below */}
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <iframe
              id="igem-attribution-form"
              style={{ width: "100%", height: "500px", border: "none" }}
              src="https://teams.igem.org/wiki/{teamID}/attributions"
              title="iGEM Attributions"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

const DesignHeading: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "138px" }}>
      <h1
        style={{
          fontSize: "7em",
          color: "#590000",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        ATTRIBUTIONS
      </h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const sections = [
    {
      name: "Principal Investigator",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Advisor",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "External Contributors",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Team Lead",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Wet Lab Leads",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Wet Lab",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Dry Lab Lead",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Dry Lab",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Human Practices Leads",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Human Practices",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
  ];

  const sidebarStyle: React.CSSProperties = {
    position: "sticky",
    top: "50px",
    left: "0px",
    width: "25%",
    padding: "20px",
    maxHeight: "200vh",
    overflowY: "auto",
  };

  const listItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    transition: "background-color 0.3s ease",
  };

  const imageStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
    borderRadius: "50%",
  };

  const handleItemHover = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    hover: boolean
  ) => {
    if (hover) {
      event.currentTarget.style.backgroundColor = "#e0e0e0";
    } else {
      event.currentTarget.style.backgroundColor = "#fff";
    }
  };

  return (
    <div style={sidebarStyle}>
      <ul style={{ padding: 0, listStyleType: "none" }}>
        {sections.map((section, index) => (
          <li
            key={index}
            onClick={() =>
              document
                .getElementById(`section-${index}`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={listItemStyle}
            onMouseEnter={(e) => handleItemHover(e, true)}
            onMouseLeave={(e) => handleItemHover(e, false)}
          >
            <img src={section.image} alt={section.name} style={imageStyle} />
            <span>{section.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardSection: React.FC = () => {
  const sections = [
    "Principle Investigator",
    "Advisor",
    "External Contributors",
    "Team Lead",
    "Wet Lab Leads",
    "Wet Lab",
    "Dry Lab Lead",
    "Dry Lab",
    "Human Practices Leads",
    "Human Practices",
  ];

  const placeholderImage = "https://via.placeholder.com/150";

  const [selectedHeadshot1, setSelectedHeadshot1] = useState<number | null>(
    null
  );
  const [selectedHeadshotWetLabLeads, setSelectedHeadshotWetLabLeads] =
    useState<number | null>(null);
  const [selectedHeadshot3, setSelectedHeadshot3] = useState<number | null>(
    null
  );
  const [selectedHeadshot4, setSelectedHeadshot4] = useState<number | null>(
    null
  );
  const [selectedHeadshot5, setSelectedHeadshot5] = useState<number | null>(
    null
  );

  const paragraphs = {
    1: [
      "Christie, our lab technician, ensured the smooth execution of wet lab experiments and maintained lab safety. Working closely with the wet lab leads, she oversaw daily operations, making sure protocols were followed and team members had the necessary resources and guidance. She monitored reagent usage, maintained equipment, and enforced safety compliance. Christie also provided crucial feedback during troubleshooting and data analysis, helping wet lab refine methods and improve accuracy. As both a mentor and technical expert, she kept us on track with experimental timelines while fostering a supportive learning environment. ",
      "As the Canada Research Chair in Structural Biology, Dr. Allingham played a pivotal role in helping us refine our protocol for the computational modeling of our protein switch candidates, offering insights on factors such as linker selection and circular permutations, which significantly improved the design of our parts. Additionally, as a former QGEM PI, Dr. Allingham provided guidance on how to stand out as an iGEM team. He advocated for departmental donations on our behalf and shared key lessons learned from previous teams. ",
      "Dane, CEO of NBot Inc., a global commercialization advisory group specializing in biopharmaceuticals and medical devices, brought invaluable expertise to our entrepreneurial efforts. We connected with him through Launch Lab, a Regional Innovation Centre, which provides provincially funded resources for entrepreneurs. Dane's guidance was instrumental in helping us craft and refine our market analysis, business plan, pitch deck, and risk assessment matrix, significantly enhancing the professionalism and depth of our work as a start-up. ",
      "Diagnosed with Parkinson's in 2020, Barbara shares her inspiring journey of using creative expression to navigate life with Parkinson's. We are deeply grateful to her for contributing three beautiful and meaningful paintings to our wiki’s patient stories page, which capture the Parkinson's experience with remarkable depth. ",
      "As Chair of the Queen’s University Health Sciences and Affiliated Teaching Hospitals Research Ethics Board (HSREB), Dean provided invaluable feedback and guidance during the development of our ethics handbook, ensuring the accuracy and integrity of our research. Additionally, the HSREB granted us an Exemption Letter, classifying our patient interviews as teaching case report studies, which facilitated our integrated human practices work. ",
      "Stephen Scribner is the Director, Intellectual Property at Queen’s Partnerships and Innovation (QPI). He provided us with guidance on how to protect our intellectual property at the Grand Jamboree and was pivotal in the creation and refinement of our IP protection strategy. ",
      "Plasmidsaurus is a whole plasmid sequencing company we solicited for whole plasmid sequencing. Through sequencing, we were able to confirm the identity and integrity of our plasmids after cloning. ",
      "Mitchell is a PhD candidate in the Lohans Lab. He advised us on experimental design and in troubleshooting issues during experiments. He also supervised our team during lab after hours and weekends. ",
      "Montse is a PhD candidate in the Lohans Lab. She advised us on experimental design and in troubleshooting issues during experiments. She also supervised our team during lab after hours and weekends. ",
      "Laila is a master’s student in the Lohans Lab. She advised us on experimental design and in troubleshooting issues during experiments. She also supervised our team during lab after hours and weekends. ",
      "Dylan is a master’s student in the Lohans Lab. He advised us on experimental design and in troubleshooting issues during experiments. He also supervised our team during lab after hours and weekends. ",
    ],
    2: [
      "Alongside his co-lead, Zain spearheaded all research efforts and lab operations. He originally conceptualized the use of a protein switch and aided in finalizing the switch candidates by analyzing optimal insertion residues using AlloSigma and conducting an in-depth literature review to identify the most suitable linkers. Beyond this, he led the research team in designing the spore-biotic delivery mechanism while also taking on various general member responsibilities. He led the creation of a comprehensive pre-clinical development plan and conducted multiple Integrated Human Practices (IHP) interviews to guide the wet lab sub-team's work. Additionally, he designed all experimental protocols and trained wet lab members in proper techniques and workflows, ensuring smooth lab operations throughout the project. ",
      "Marianna was involved throughout the conceptualization of the project, driven through literature reviews and background research. She was actively involved in the wet lab, performing a variety of experimental procedures to ensure high-quality data and precision. Additionally, Marianna contributed to lab notebook management. She was also involved in the initial stages of research for the spore-biotic delivery system. Marianna led the execution of the clinical trials plan and timeline with the help of members of the wet lab. She was also involved in Integrated Human Practices (IHP) interviews with researchers, neurologists, and movement disorder specialists, among others, to help collect feedback and expert insights to drive the project to completion and incorporate valuable feedback. She co-led the wet lab sub-team, allocating tasks adequately for the team and monitoring progress. ",
    ],
    3: [
      "Cole contributed to conceptualization, background research, analysis, investigation, lab notebook management, fundraising, visualization, and writing efforts. Specifically, he was responsible for identifying KLK6 as the molecular switch's first component, which was pivotal in shaping the project's direction. Additionally, he led a sub-team focused on designing a spore-biotic delivery system, developing a safe and effective method for delivering our therapeutic spores into the body. Cole also participated in wet lab work, with a focus on protein purification techniques to generate critical experimental data. Lastly, he successfully fundraised over $1,000 for Parkinson Canada as part of the QGEM Parkinson SuperWalk team in Kingston! ",
      "Emmaley contributed to conceptualization, background research, analysis, and writing for the project. Specifically, she helped develop preliminary proof-of-concept of a pro-biotic system that detects and treats biomarkers of synucleinopathy in the gut. In doing so, she consulted peer-reviewed scientific literature that helped guide the direction of the project and the methodology used to accomplish it. Additionally, Emmaley led a sub-team that analyzed literature to elucidate a cell-specific delivery system and its required bacterial modifications. She wrote a detailed explanation of the mechanisms by which SynAxis localizes to its site of therapeutic action. ",
      "Claire Tan contributed to conceptualization, background research, investigation, notebook/record keeping, fundraising, public engagement, entrepreneurship, visualization, and writing. Specifically, she was responsible for researching the spore-biotic delivery system, performing experiments in the wet lab to test the activity of the molecular switches, reaching out to potential sponsors and stakeholders, conducting interviews and workshops, volunteering for public events, designing the wiki, and writing various documents. For example, she authored sections of the wiki, ethics handbook, entrepreneurship deliverables, and clinical trial timeline, which involved reviewing scientific literature and government regulations. Additionally, she illustrated the collaborative storybook and graphics for the wiki. ",
      "Isabella contributed to the conceptualizatio  of using spores as a delivery mechanism, guided by a thorough review of scientific literature. She was actively involved in conducting several biochemical experiments in the wet lab, ensuring that the investigations were performed with precision and that the resulting data were accurately analyzed. Additionally, Isabella wrote several research write-ups, particularly focusing on the transport of spores through the digestive system, providing detailed and scientifically grounded insights into the mechanism’s potential efficacy. ",
      "Jason contributed to analysis, background research, conceptualization, investigation, record keeping, and writing. Specifically, he was responsible for doing some background research regarding the preclinical trials for the development of the drug and helped to write the target product profile and pre-clinical data sections of the pre-clinical developmental plan. Additionally, he assisted with wet lab investigation through record keeping and running experiments with the protein switches. ",
      "Cole contributed to analysis, conceptualization, background research, visualization, investigation, record keeping and writing of the project. Specifically, he was responsible for conceptualization of the theoretical λpL/pR-cI and PBSX-Prophage derived holin-endolysin systems essential to activity of the spore biotic. Additionally, he worked in the wet lab which involved preparing, analysing and purifying DNA and protein, ensuring that each step along the process of producing successful protein switches was handled with care and expertise. ",
      "Christopher contributed to the analysis of research data, conceptualization of the spore-biotic system, background research such as literature review, investigation of our research, and maintaining a notebook of lab work. Specifically, he was responsible for research into the modifications of the bacteria's endospore, working in the wet lab to develop and purify the DNA, proteins, and molecular switches used in our project, and writing about future clinical work required for our proposed therapeutic.  For example, he worked on the assembly, cloning, and transformation of a-Synuclein and KLK6 gene assemblies and their translated proteins, which involved using molecular biology techniques such as PCR, HiFi molecular cloning, gel electrophoresis, various bacterial protocols, IPTG induction, and SDS-PAGE. Additionally, he assisted with the production of our finalized molecular switches, ensuring that final enzymatic testing could proceed so our project could conclude. ",
      "Yasmine contributed to wet lab research. Specifically, she was responsible for performing research involving the therapeutic delivery system, clinical plan, and spore-biotic. For example, she worked on the development of feasible bacterial modifications which may be performed to target protein switch-containing bacterial spores to enteroendocrine cells in the gut mucosa, which involved reviewing relevant peer reviewed scientific literature to develop a practical approach with credibly demonstrated evidence of success and feasibility. Additionally, she assisted with troubleshooting research-related problems during the ideation of numerous aspects of therapeutic development, providing additional ideas during the development phase, and ensuring that wet-lab research was conducted thoroughly and efficiently. ",
      "Katherine contributed to background research, conceptualization, investigation, writing and analysis. Specifically, she was responsible for performing research involving the therapeutic delivery system, the spore biotic. For example, she investigated receptors for entry of the protein-containing bacterial spore to enteroendocrine cells in the gut mucosa, which involved reviewing relevant peer reviewed scientific literature to develop a practical approach with credibly demonstrated evidence of success and feasibility. Additionally, she assisted with troubleshooting research-related problems during the ideation of numerous aspects of therapeutic development, providing additional ideas during the development phase, and ensuring that wet-lab research was conducted thoroughly and efficiently. ",
      "Taylor contributed to conceptualization, background research, analysis and writing. Specifically, she contributed to discussions involving conceptualization of the spore-biotic delivery mechanism and then took on background research tasks regarding the novel delivery system. She performed background research, analyzing peer reviewed literature, allowing selection of appropriate coat proteins to attach our protein switch to enable delivery. She also analyzed peer reviewed literature in order to contribute to the pre-clinical design plan. She compiled information regarding appropriate dosages and in vitro and in vivo studies done with similar drugs, supporting the feasibility of our drug in real applications. Finally, she assisted with wet lab work, performing various biochemistry lab techniques in order to engineer and test our protein switch. ",
    ],
    5: [
      "Ali contributed to developing the team's wiki, focusing on both coding and web design. She was responsible for creating the layout and structure of key pages, including attributions, implementation, contributions, judging, education, and entrepreneurship. For example, she designed and implemented the contributions and education pages, ensuring that the layout was intuitive and visually appealing. Additionally, she worked closely with team members to refine the entrepreneurship and judging pages, making sure the content was well-organized and the overall site was user-friendly. ",
      "Victor contributed to the team’s wiki via web design and development and was involved in writing and entrepreneurship for the human practices team. He researched the competitive landscape of current Parkinson’s Disease treatments, synthesizing relevant insights into Market Analysis and Risk Analysis reports. Additionally, he contributed to the integrated human practices page of the wiki, collaborating with team members to ensure an informative and accessible site. ",
      "Dylan contributed to the analysis, background research, investigation, software and wiki coding. Specifically, he was responsible for literature reviews in the wet and dry lab domain, collecting data from protein databanks and testing protein modelling. For example, he worked on developing the molecular switch for SynAxis and the website development, which involved leveraging various software programs and resources to create a functional molecular model. Additionally, he assisted with explaining wet lab concepts using his academic background, ensuring that the dry lab team understood the protein interactions from a molecular point of view. ",
      "Shrinidhi contributed to analysis, background research, conceptualization, investigation, data curation and wiki coding. Initially in the modelling sub-team, she reviewed literature to understand the mechanism of protein switches and implement it for the project. She worked on modeling the first group of protein switches and testing it in an in-vitro environment through simulations by using computational biology tools. This included modeling the proteins utilizing AlphaFold, ChimeraX and constructing the switches aided by PyMol. She also contributed to the development of the wiki, focusing on coding and page design. She was responsible for creating layouts and structure for key pages, such as attributions, collaborations and entrepreneurship, ensuring that the overall website was user-friendly.",
      "Tigh contributed to the development of our wiki, taking charge of coding all the wet lab pages, the interactive Integrated Human Practices page, and the navigation bar, as well as the engineering cycle page. He also provided valuable guidance to fellow team members, assisting them in coding and troubleshooting various pages, including Entrepreneurship, Education, and all Project pages. ",
    ],
    6: [
      "Claire Bunker contributed to the QGEM team as a student leader for the Human Practices Subteam. She helped with analysis, conceptualization, background research, fundraising, project administration, public engagement, entrepreneurship, visualization, writing and safety. She assisted in initial project research, by reviewing iGEM rules and regulations, as well as reading and gathering content from peer reviewed journals. Claire assisted in securing monetary and in-kind sponsorships as well as grants. Claire conducted many IHP interviews that helped give direction to various components of the project. She co-organized the first-ever 2024 QGEM pitch competition, hosted the event, and helped plan the Kingston chapter of the Parkinson Canada SuperWalk. At the walk the QGEM team raised over $2000 for Parkinson Canada. She conducted patient interviews and wrote their stories that are featured in the patient story section. Claire contributed to the team's entrepreneurship deliverables, and authored key reports such as the PESTEL analysis, IP protection strategy, and pitch deck. She helped to edit all other entrepreneurship deliverables. Claire met with various Queen’s experts in ethics to ensure that the QGEM team followed all necessary guidelines for the safe conductance of research. Claire planned and executed various science experiments with local Kingston students over the summer to teach them about synthetic biology. Claire coordinated a collaboration with Cornell iGEM to create a survey that analyses the gap in knowledge within the iGEM community regarding regulatory policies. Claire reached out to teams for the international story book collaboration and helped to write content for it. Claire helped to design diagrams that would detail the molecular switch mechanism. She assisted in setting up a collaboration with the Queen's University Tea Room to continue fundraising for Parkinson Canada. Claire assisted with designing the first iterations of the QGEM wiki using Figma. She created visual content for the various sections of the website. She wrote and edited wiki write up content for human practices sections. She assisted with designs for the QGEM social media. Claire assisted with the development of the QGEM podcast, including organizing and recording episodes with guests. ",
      "Stephanie Tong contributed to the QGEM team as a student leader for the Human Practices Subteam. She assisted in initial project development research, including reviewing iGEM rules and regulations, and analyzing peer reviewed journals. Stephanie assisted in securing sponsorships and grants. She co-organized the first-ever 2024 QGEM pitch competition, hosted the event, and helped plan Queen's University’s chapter of the Parkinson's Canada Super Walk. She assisted in facilitating patient interviews, contributed to the team’s entrepreneurship deliverables, and authored key reports such as the skills gap analysis, IP protection strategy, and regulatory roadmap. She helped to edit and compile all other entrepreneurship deliverables. Stephanie coordinated the international Ethics Handbook collaboration and edited it according to Queen’s University Research Ethics Board specifications and wrote all content for the international storybook collaboration. She assisted in setting up a collaboration with the Queen’s University Tea Room to continue fundraising for Parkinson’s Canada. Stephanie assisted with designing the first iterations of the QGEM wiki using Figma. She wrote and edited wiki write up content for all human practices sections. She designed the 2024 SynAxis logo and brand colour palette, and assisted with designs for the QGEM social media. Stephanie assisted with the development of the QGEM podcast, including organizing episodes, editing, and uploading. ",
    ],
    7: [
      "Sophie contributed to  research, entrepreneurship, fundraising, and marketing. Specifically, she was part of the conceptualization of the project by conducting background research. Later, she was part of writing entrepreneurship materials , contacting potential sponsors for fundraising, and designing social media graphics to increase public engagement. For example, she worked on the the pre-seed and seed entrepreneurship report, which involved extensive research on existing therapeutics for neurodegenerative disorders, research ethics, and regulatory guidelines for bringing SynAxis to market. ",
      "Claire Tan contributed to conceptualization, background research, investigation, notebook/record keeping, fundraising, public engagement, entrepreneurship, visualization, and writing. Specifically, she was responsible for researching the spore-biotic delivery system, performing experiments in the wet lab to test the activity of the molecular switches, reaching out to potential sponsors and stakeholders, conducting interviews and workshops, volunteering for public events, designing the wiki, and writing various documents. For example, she authored sections of the wiki, ethics handbook, entrepreneurship deliverables, and clinical trial timeline, which involved reviewing scientific literature and government regulations. Additionally, she illustrated the collaborative storybook and graphics for the wiki. ",
      "Lindsay contributed to the human practices team by engaging in fundraising, writing, entrepreneurship, and public engagement. More specifically, she researched the market of PD treatments by investigating the economic burden and current interventions. She also identified potential risks associated with the project and proposed solutions. Furthermore, she conducted several interviews with experienced researchers to gain insight into the project direction. ",
      "Lily contributed to the entrepreneurship, background research, analysis, conceptualization, and writing for the business plan. She is responsible for the business plan write-up, which contains the overall visualization and planning of how the business will operate in the biotech industry. The process required research and references from professional businesses and resources to ensure the business could operate in the real world. Writing details cover from the business background research to the business operations plan. ",
      "Emma was a member of the Human Practises subteam, contributing to research, fundraising, writing and entrepreneurship. She was responsible for sponsorship outreach and connecting with industry professionals and patients for integrated human practices interviews. She also assisted in reviewing background research and regulations for developing and writing various entrepreneurship deliverables. For example, she contributed to various sections of the regulatory roadmap report and compiled background research for the development of the competitive landscape matrix and projected financial statement . In addition, she volunteered at Queen’s University’s Parkinson’s Canada Superwalk and raised over $300 for Parkinson’s Research. ",
      "Hannah Schwartz contributed to public engagement, fundraising, writing, entrepreneurship, and visualization tasks. Specifically, she was responsible for creating and distributing the monthly newsletter describing key project updates for stakeholders, advisors, and the QGEM team. Hannah also created social media campaigns to promote community engagement and awareness. For example, Hannah developed a “Parkinson’s Star of the Week Campaign” over Instagram, which featured prominent figures with Parkinson’s disease in the media, highlighting how they are inspiring newly diagnosed individuals and advocating for improved access/quality of healthcare. Overall, these initiatives helped communicate project objectives to the public, promoting multidisciplinary collaboration in a way that ensured final outcomes were relevant and appropriate to the populations they will affect. ",
      "Victor contributed to the team’s wiki via web design and development, and was involved in writing and entrepreneurship for the human practices team. He researched the competitive landscape of current Parkinson’s Disease treatments, synthesizing relevant insights into Market Analysis and Risk Analysis reports. Additionally, he contributed to the integrated human practices page of the wiki, collaborating with team members to ensure an informative and accessible site. ",
      "Stella contributed to conceptualization, background research, entrepreneurship, fundraising and writing. Specifically, she was responsible for contributing to conceptualization by reviewing relevant literature during the early development phases of the project, fundraising by reaching out to potential sponsors, and entrepreneurship / writing by contributing to the pre-seed and seed deliverables. This involved extensive research regarding the process of bringing a therapeutic to market including the time frame, financial components, associated ethical considerations and potential risks. ",
    ],
  };

  return (
    <Container
      fluid
      className="card-container"
      style={{ paddingBottom: "0", marginBottom: "0" }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          id={`section-${index}`}
          className="card-wrapper"
          style={{ marginBottom: "0" }}
        >
          <Card
            className="custom-card"
            style={{
              border: "none",
              ...(index === 0 ? { minHeight: "100px" } : {}),
              ...(index === 1 ? { minHeight: "300px" } : {}),
              ...(index === 2 ? { minHeight: "700px" } : {}),
              ...(index === 3 ? { minHeight: "300px" } : {}),
              ...(index === 4 ? { minHeight: "700px" } : {}),
              ...(index === 5 ? { minHeight: "900px" } : {}),
              ...(index === 6 ? { minHeight: "300px" } : {}),
              ...(index === 7 ? { minHeight: "900px" } : {}),
              ...(index === 8 ? { minHeight: "700px" } : {}),
              ...(index === 9 ? { minHeight: "900px" } : {}),
            }}
          >
            <Card.Header
              style={{
                fontSize: "3.5em",
                fontWeight: "bold",
                color: "#590000",
                textAlign: "left",
                backgroundColor: "transparent",
                borderBottom: "none",
                paddingBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span>{section}</span>
              <div
                style={{
                  flexGrow: 1,
                  height: "0.1em",
                  backgroundColor: "#590000",
                  marginLeft: "10px",
                }}
              ></div>
            </Card.Header>

            <Card.Body
              style={
                index === 0
                  ? { padding: "30px", minHeight: "600px" }
                  : { padding: "30px" }
              }
            >
              <Row>
                {/* content for PI section*/}
                {index === 0 && (
                  <Row>
                    <Col xs={12} md={3} style={{ textAlign: "center" }}>
                      <div style={{ marginTop: "20px" }}>
                        <img
                          src="https://static.igem.wiki/teams/5079/headshots/chris-lohans-pi.jpg"
                          className="headshot-img"
                          alt={`Headshot`}
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                          }}
                        />
                        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                          Dr. Chris Lohans
                        </p>
                      </div>
                    </Col>

                    <Col xs={12} md={9}>
                      <div
                        style={{
                          textAlign: "left",
                          marginTop: "30px",
                          marginLeft: "30px",
                        }}
                      >
                        <p>
                          Dr. Lohans is the faculty supervisor for the QGEM
                          team. He met with team members on a regular basis,
                          discussing progress with the QGEM director and the
                          executives leading the wet-lab, dry-lab, and outreach
                          efforts. Dr. Lohans provided suggestions during the
                          conceptualization of the project, offered guidance
                          related to the planning and implementation of
                          experimental protocols, and assisted with the
                          interpretation of research data. He also helped the
                          QGEM team navigate the resources and personnel at
                          Queen's University, assisting with the identification
                          of local expertise and with the procurement of
                          research consumables and facilities.
                        </p>
                      </div>
                    </Col>
                  </Row>
                )}

                {/* content for advisor section*/}
                {index === 1 && (
                  <Row>
                    <Col xs={12} md={3} style={{ textAlign: "center" }}>
                      <div style={{ marginTop: "20px" }}>
                        <img
                          src="https://static.igem.wiki/teams/5079/headshots/youzi-bi-advisor.jpg"
                          className="headshot-img"
                          alt={`Headshot`}
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                          Youzi Bi
                        </p>
                      </div>
                    </Col>

                    <Col xs={12} md={9}>
                      <div
                        style={{
                          textAlign: "left",
                          marginTop: "30px",
                          marginLeft: "30px",
                        }}
                      >
                        <p>
                          Youzi contributed to team project conceptualization,
                          experimental support, and competition preparation.
                          Specifically, she was responsible for guiding the team
                          through brainstorming and refining project ideas. For
                          example, she worked on answering questions related to
                          wet lab experiments and computational modeling,
                          providing insights on experimental protocols and data
                          analysis, which ensured accuracy and clarity in the
                          research process. Additionally, she assisted with
                          reviewing and offering suggestions on the team’s wiki
                          page and competition deliverables, ensuring that the
                          documentation was comprehensive, professional, and
                          aligned with competition guidelines. Through bi-weekly
                          meetings, she maintained regular communication with
                          the team to monitor progress, troubleshoot issues, and
                          provide strategic feedback, which helped drive the
                          project towards key milestones.
                        </p>
                      </div>
                    </Col>
                  </Row>
                )}

                {/* Content for External Contributors (Section 1) */}
                {index === 2 && (
                  <>
                    {/* First Row of Headshots (4 headshots) */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        {
                          name: "Christie Gilmour",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/christie-gilmour.jpg",
                        },
                        {
                          name: "Dr. John Allingham",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/john-allingham.jpg",
                        },
                        {
                          name: "Dane Bedward",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/dane-bedward.jpg",
                        },
                        {
                          name: "Barbara Salsberg Mathews",
                          role: "Collaborator",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/barbara-salsberg-mathews.jpg",
                        },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot1(idx)}
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                          <p style={{ color: "#8B0000" }}>{headshot.role}</p>{" "}
                          {/* Role added */}
                        </Col>
                      ))}
                    </Row>

                    {/* Second Row of Headshots (4 headshots) */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        {
                          name: "Dean Tripp",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/dean-tripp.jpg",
                        },
                        {
                          name: "Stephen Scribner",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/avatar.jpg",
                        },
                        {
                          name: "Plasmidsaurus",
                          role: "Contractor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/plasmidsaurus.jpeg",
                        },
                        {
                          name: "Mitchell Jeffs",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/mitchell-jeffs.jpeg",
                        },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot1(idx + 4)} // Offset by 4 for the second row
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                          <p style={{ color: "#8B0000" }}>{headshot.role}</p>{" "}
                        </Col>
                      ))}
                    </Row>

                    {/* Third Row of Headshots (3 headshots) */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        {
                          name: "Montse Mora Ochomogo",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/montse-mora.jpeg",
                        },
                        {
                          name: "Laila Masalha",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/laila-masalha.jpg",
                        },
                        {
                          name: "Dylan Zhao",
                          role: "External Advisor",
                          image: "https://static.igem.wiki/teams/5079/headshots/extern/dylan-zhao.jpeg",
                        },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot1(idx + 8)} // Offset by 8 for the third row
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                          <p style={{ color: "#8B0000" }}>{headshot.role}</p>{" "}
                          {/* Role added */}
                        </Col>
                      ))}
                    </Row>

                    {/* Display Selected Paragraph */}
                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot1 !== null
                          ? paragraphs[1][selectedHeadshot1]
                          : "Click on a headshot to read more about our amazing team!"}
                      </p>
                    </div>
                  </>
                )}

                {/* Team Lead Section */}
                {index === 3 && (
                  <Row>
                    <Col xs={12} md={3} style={{ textAlign: "center" }}>
                      <div style={{ marginTop: "20px" }}>
                        <img
                          src="https://static.igem.wiki/teams/5079/headshots/mariam-el-behiry-director.jpg"
                          className="headshot-img"
                          alt={`Headshot`}
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                          Mariam El-Behiry
                        </p>
                      </div>
                    </Col>

                    <Col xs={12} md={9}>
                      <div
                        style={{
                          textAlign: "left",
                          marginTop: "30px",
                          marginLeft: "30px",
                        }}
                      >
                        <p>
                          As the QGEM Director, Mariam played a big role in every aspect of the project, overseeing the progress of all three sub-teams—Wet Lab, Dry Lab, and Human Practices—while also stepping in to assist with general tasks as needed. She developed the original project idea but also led the team in identifying key system components, such as the use of KLK6, documenting and organizing all background research, and naming the project. Additionally, Mariam she raised over $20,000 to cover project and competition fees. 
                        </p>
                        <p>
                          She designed all protein switch candidates tested in the lab, conducting an extensive literature review on computational protein engineering methods to create a unique rational design protocol. This led to successful expression of all switches, with the majority demonstrating cleavage activity. Mariam also conducted numerous Integrated Human Practices (IHP) interviews, contributed to entrepreneurship efforts, and participated in designing and writing the team's wiki pages. 
                        </p>
                        <p>
                          In the lab, she guided the Wet Lab team through experiments, ensuring they met deadlines, secured necessary materials, and followed clear, well-documented experimental protocols. 
                        </p>
                      </div>
                    </Col>
                  </Row>
                )}

                {/* Wet Lab Leads Section */}
                {index === 4 && (
                  <>
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        {
                          name: "Zain Ali",
                          image: "https://static.igem.wiki/teams/5079/headshots/zain-ali-wet-lab-co-lead.jpeg",
                        },
                        {
                          name: "Marianna Florez",
                          image: "https://static.igem.wiki/teams/5079/headshots/marianna-florez-camacho-wet-lab-co-lead.jpg",
                        },
                      ].map((lead, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshotWetLabLeads(idx)}
                          >
                            <img
                              src={lead.image}
                              alt={`Headshot ${lead.name}`}
                              className="headshot-img"
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {lead.name}
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshotWetLabLeads !== null
                          ? paragraphs[2][selectedHeadshotWetLabLeads]
                          : "Click on a headshot to read more about our amazing team!"}
                      </p>
                    </div>
                  </>
                )}

                {/* Wet Lab Section */}
                {index === 5 && (
                  <>
                    {/* First Row of Headshots (Now with 4 headshots) */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Cole Sandler", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/cole-sandler.jpg" },
                        { name: "Emmaley Hunter", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/emmaley-hunter.jpg" },
                        { name: "Claire Tan", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/claire-t.jpg" },
                        { name: "Isabella Perini", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/isabella-perini.jpg" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot3(idx)}
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "175px",
                                height: "175px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Jason Song", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/jason-song.jpg" },
                        { name: "Cole Noble", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/cole-noble.jpg" },
                        { name: "Christopher Lainas", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/christopher-lainas.jpeg" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot3(idx + 4)} // Offset by 4 for the second row
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                        </Col>
                      ))}
                    </Row>

                    {/* Third Row of Headshots (Now with 3 headshots) */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Yasmine Farah", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/yasmine-farah.jpg" },
                        { name: "Katherine Brewer", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/katherine-brewer.jpeg" },
                        { name: "Taylor Powers-Luketic", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/taylor-powers-luketic.jpeg" }, // New headshot added
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot3(idx + 7)} // Offset by 7 for the third row
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                        </Col>
                      ))}
                    </Row>

                    {/* Display Selected Paragraph */}
                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot3 !== null
                          ? paragraphs[3][selectedHeadshot3]
                          : "Click on a headshot to read more about our amazing team!"}
                      </p>
                    </div>
                  </>
                )}

                {index === 6 && (
                  <Row>
                    <Col xs={12} md={3} style={{ textAlign: "center" }}>
                      <div style={{ marginTop: "20px" }}>
                        <img
                          src="https://static.igem.wiki/teams/5079/headshots/aden-wong-dry-lab-lead.jpg"
                          className="headshot-img"
                          alt={`Headshot`}
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                          Aden Wong
                        </p>
                      </div>
                    </Col>

                    <Col xs={12} md={9}>
                      <div
                        style={{
                          textAlign: "left",
                          marginTop: "30px",
                          marginLeft: "30px",
                        }}
                      >
                        <p>
                        Aden contributed to analysis, background research, investigation, data curation, project administration, software, and writing. Specifically, he was responsible for researching the molecular switch. He researched the creation of molecules with similar function. He ran molecular simulations in order to gather data for the creation of switches as well as to test their feasibility. He kept notes of the results of this research and used it to advise future steps of the project. Additionally, he managed and organized the team that created the wiki. He was also responsible for much of the code on the wiki as well as the protocol that was used for the molecular modelling aspects of the project. 
                        </p>
                      </div>
                    </Col>
                  </Row>
                )}

                {/* Dry Lab Section */}
                {index === 7 && (
                  <>
                    {/* First Row of Headshots */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Ali Cotten", image: "https://static.igem.wiki/teams/5079/headshots/dry-lab/ali-cotten.jpg" },
                        { name: "Victor Chowdhury", image: "https://static.igem.wiki/teams/5079/headshots/dry-lab/victor-chowdhury.jpg" },
                        { name: "Dylan Rietze", image: "https://static.igem.wiki/teams/5079/headshots/dry-lab/dylan-rietze.jpg" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot4(idx)}
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                        </Col>
                      ))}
                    </Row>

                    {/* Second Row of Headshots (with only 2 headshots now) */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Shrinidhi Krishnan", image: "https://static.igem.wiki/teams/5079/headshots/dry-lab/shrinidhi-thatahngudi-sampath-krishnan.jpg" },
                        { name: "Tigh Gallagher", image: "https://static.igem.wiki/teams/5079/headshots/dry-lab/tigh-gallagher.jpg" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot4(idx + 3)} // Offset by 3 for the new headshots
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>
                        </Col>
                      ))}
                    </Row>

                    {/* Display Selected Paragraph */}
                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot4 !== null
                          ? paragraphs[5][selectedHeadshot4]
                          : "Click on a headshot to read more about our amazing team!"}
                      </p>
                    </div>
                  </>
                )}

                {/* Human Practices Leads Section */}
                {index === 8 && (
                  <>
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Claire Bunker", image: "https://static.igem.wiki/teams/5079/headshots/claire-bunker-human-practices-co-lead.jpg" },
                        { name: "Stephanie Tong", image: "https://static.igem.wiki/teams/5079/headshots/stephanie-tong-human-practices-co-lead.jpg" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot5(idx)}
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>{" "}
                          {/* Unique names */}
                        </Col>
                      ))}
                    </Row>

                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot5 !== null
                          ? paragraphs[6][selectedHeadshot5]
                          : "Click on a headshot to read more about our amazing team!"}
                      </p>
                    </div>
                  </>
                )}

                {/* Human Practices Section */}
                {index === 9 && (
                  <>
                    {/* First Row of Headshots */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Sophie Spicer", image: "https://static.igem.wiki/teams/5079/headshots/hp/sophie-spicer.jpg" },
                        { name: "Claire Tan", image: "https://static.igem.wiki/teams/5079/headshots/wet-lab/claire-t.jpg" },
                        { name: "Lindsay Yu", image: "https://static.igem.wiki/teams/5079/headshots/hp/lindsay-yu.jpg" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot5(idx)}
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "150px", // Slightly smaller headshot size
                                height: "150px", // Slightly smaller headshot size
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>{" "}
                          {/* Unique names */}
                        </Col>
                      ))}
                    </Row>

                    {/* Second Row of Headshots */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Lily Chen", image: "https://static.igem.wiki/teams/5079/headshots/hp/lily-chen.jpg" },
                        { name: "Emma Wright", image: "https://static.igem.wiki/teams/5079/headshots/hp/emma-wright.jpeg" },
                        { name: "Hannah Schwartz", image: "https://static.igem.wiki/teams/5079/headshots/hp/hannah-headshot-copy.png" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot5(idx + 3)}
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "150px", // Slightly smaller headshot size
                                height: "150px", // Slightly smaller headshot size
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>{" "}
                          {/* Unique names */}
                        </Col>
                      ))}
                    </Row>

                    {/* Third Row with 2 Headshots */}
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[
                        { name: "Victor Chowdhury", image: "https://static.igem.wiki/teams/5079/headshots/dry-lab/victor-chowdhury.jpg" },
                        { name: "Stella Pesut", image: "https://static.igem.wiki/teams/5079/headshots/hp/stella-pesut.jpg" },
                      ].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot5(idx + 6)} // Offset by 6 for the third row
                          >
                            <img
                              src={headshot.image}
                              alt={`Headshot ${headshot.name}`}
                              className="headshot-img"
                              style={{
                                width: "150px", // Slightly smaller headshot size
                                height: "150px", // Slightly smaller headshot size
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            {headshot.name}
                          </p>{" "}
                          {/* Unique names */}
                        </Col>
                      ))}
                    </Row>

                    {/* Display Selected Paragraph */}
                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot5 !== null
                          ? paragraphs[7][selectedHeadshot5]
                          : "Click on a headshot to read more about our amazing team!"}
                      </p>
                    </div>
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
