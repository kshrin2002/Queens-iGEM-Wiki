import React, { useState, useEffect } from "react";
import "./entrepreneurship.css";
import Button from "react-bootstrap/esm/Button";

interface MonthlyUpdates {
  month: string;
  description: JSX.Element;
}

const stagesData: { title: string; summary: string; months: MonthlyUpdates[] }[] = [
  {
    title: "Pre-Seed Stage",
    summary:
      "QGEM is currently in the pre-seed development stage of commercializing SynAxis. In this stage, we are primarily focused on perfecting our research to a usable product, as well as establishing our strengths and weaknesses as a company. This stage involved reflecting on the founding members of our team and advisory board, the existing market, and the advantages and disadvantages available to us. This stage of research began in May and proceeded until the beginning of June. To illustrate our findings, we authored several documents and graphics including Pitch Deck slides, a Market Analysis Report, Competitor Landscape Matrix, a Skills Gap Analysis, an Advisory Board Profile, a PESTLE Analysis, and a SWOT Analysis. The research conducted in this section was utilized to show our investors and stakeholders that that despite the weaknesses and disadvantages that we identified, SynAxis is a viable product.",
    months: [
      {
        month: "Pitch Deck",
        description: (
          <>
          <p>
          The SynAxis pitch deck was used in interviews for funding opportunities as well as to reach out to potential IHP interviewees. Our pitch deck outlines the key aspects of our business plan. This pitch deck allows us to effectively communicate our vision and company to potential investors, stakeholders etc. We utilized engaging visuals and a cohesive narrative to tell our SynAxis story. Through this pitch deck we convey our passion and commitment to our product.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/pitch-deck-final-2.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
        },
      {
        month: "Market Analysis",
        description: (
            <>
            <p>
            The Market Analysis report provides a comprehensive overview of the economic burden of PD. It establishes a background about the prevalence of PD and how this incidence number will evolve throughout the year. After establishing the background, the market analysis examines how PD will impact a country's economy in terms of direct and indirect medical costs. Examples of direct costs include treatment costs and hospital inpatient care while examples of indirect costs include social welfare programs, reduced employment, and absenteeism. Recognizing these challenges provides our team with the necessary information to potentially mitigate these costs. In addition to addressing the economic burden of PD, the market analysis delves into the leading interventions to treat PD. More specifically, it provides an in-depth investigation on the successes and limitations of Levodopa, a common first-line treatment for PD. Evaluating the current interventions for PD treatment provides our team with an insight on how to improve upon our therapeutic and build up previous successes.
            </p>
            {/* Embedded PDF centered with top and bottom margins */}
            <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "40px",
                    marginBottom: "40px",
                  }}
                >
                  <iframe
                    src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/market-analysis-report-fd.pdf"
                    width="80%"
                    height="600px"
                    style={{ border: "none" }}
                    title="Pitch Deck"
                  ></iframe>
                </div>
              </>
          )
          },
        
      {
        month: "Competitor Landscape Matrix",
        description: (
          <>
          <p>
          A competitor landscape matrix is a visual method of analyzing the leading competitors in a specific market. We included pharmaceutical companies producing both novel and existing therapeutics for Parkinson’s disease in our matrix. We evaluated the performance of these companies across five critical success factors — pipeline strength, efficacy, patient quality of life, innovation, research and development investment, and equity — and assigned a rating from 1 to 5 for each factor. These categories are roughly split between assessing the quality of the pharmaceutical products and the success of the company overall, reflecting the importance of both aspects. Analyzing competitors using a competitor landscape matrix is crucial for a business, as it allows the business to compare competitors to each other and to itself. As a result, we can determine where our business may be lacking and where we are succeeding relative to the industry.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/competitor-landscape-matrix.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "Skill Gap Analysis",
        description: (
          <>
          <p>
          At the beginning of development, our team conducted a skills gap analysis. The human practices team devised a breakdown of the team demographics, identifying that the team was composed of 15.4%, 3.8%, 65.4%, 11.5% and 3.8% of members from Queen’s University’s faculties of Engineering, Health Sciences, Arts and Sciences, Computing, and Commerce respectively. This diverse background contributes to our holistic approach, ensuring that our research not only meets rigorous scientific standards, but also maximizes its relevance and potential impact. However, we understand that as an undergraduate team, despite our diverse backgrounds, we acknowledge that there are several gaps in expertise within our team. To specifically identify these gaps, a google form was sent out to our team asking them to rank a list of relevant skills between a confidence level of 1 (being not at all) to 5 (being incredibly confident). The resulting answers were averaged and compared to an ideal confidence and the importance of that particular skill (in order of high to low). For all skills, several next steps were provided to improve the confidence of our team.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/skills-gap-analysis-write-up.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "Advisory Board Profiles",
        description: (
          <>
          <p>
          The primary purpose of an advisory board is to offer strategic advice to aid in making informed decisions, they help an organization gain new insights and advice to solve any problems that arise and to explore new opportunities for expansion. SynAxis is currently in the process of development, in the pre-seed stage. While we have conversed with experts in relation to best patient practices, drug development, regulatory landscape, and financial sustainability, SynAxis currently does not have an established formal advisory board. Through our skills gap analysis, our team has identified several skills that the founding team lacks confident expertise in. These skills include finance, product development, regulatory compliance, and marketing. Therefore, as we continue to bring SynAxis to market, we have begun to outline necessary members of an advisory board in order to fill in these skill gaps. This includes an Advisor Board Chair, Scientific & Medical advisors, Regualtory & Ethics advisors, and Business & Patient Advocacy advisors.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/advisory-board-profile-fd.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "PESTEL Analysis",
        description: (
          <>
          <p>
          The PESTLE Analysis was used to analyze the external macro-environmental factors that could impact our project. These factors were grouped under Political, Economic, Social, Technological, Legal, and Environmental Factors. This analysis helped us to better identify potential challenges and risks, as well as make informed strategic decisions by considering how the external factors may influence the project’s direction and success. This also allows for better ability to anticipate and react quickly to changes in the macro-environment and ensure long-term sustainability of the project and our goals.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/pestel-analysis.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "SWOT Analysis",
        description: (
          <>
          <p>
          The SynAxis SWOT analysis evaluate the Strengths, Weaknesses, Opportunities, and Threats related to our business. This analysis enhances our understanding of our business, identifies key areas for improvement, and provides a comprehensive view of the market. Overall, we are able to look at our own internal capabilities as well as the external environment and any threats it may pose. By identifying our strengths, we can leverage them to our advantage. This will give us a competitive edge in the market. By identifying our weaknesses, we can help find areas for improvement. By identifying our opportunities, we can capitalize on them to improve our business. By identifying our threats, we can protect our business proactively.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/swot-analysis-writeup.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
    ],
  },
  {
    title: "Seed Stage",
    summary:
      "The seed stage of establishing a start-up is typically considered the riskiest as companies are at their youngest and least established. In this stage, the idea has been developed into at least its first iteration of a usable product, and a start-up begins to pursue commercialization. Given that it is the next step for SynAxis, our team has diligently begun to prepare foundational documents such that we are adequately prepared when we begin to pursue integration into the market space. As the riskiest stage, our team has begun to identify potential issues that may arise during both the continued development of the project, as well as during the regulatory process. We’ve compiled these risks into our analysis report alongside a list of contingencies to mitigate these risks. QGEM has also begun looking into the patent application process for provisional and nonprovisional patenting in Canada and the United States in order to ensure that our project remains intellectually protected. Our largest document in this stage is our Business plan, an expanded upon version of our Lean Canvas graphic, detailing our future plans and strategies for ensuring the success of SynAxis in our target market. This document lays the groundwork for our next three stages.  ",
    months: [
      {
        month: "Lean Canvas",
        description: (
          <>
          <p>
          In order to begin planning our business plan and entrepreneurship deliverables, our human practices team utilized a lean canvas to begin planning our business strategy. A lean canvas is fundamentally an extremely simplified business plan. Using this model, we highlighted our ultimate goal as being to create a minimally invasive, transformative therapeutic for Parkinson’s Disease. The surrounding topics were utilized to identify necessary factors to achieve our goal. We touched upon what the current gap in the market is, existing alternatives, what we bring to the table in our solution and unique value proposition, how our team will measure the success of SynAxis, the advantages we have, and the advantages we have that will help us succeed.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/lean-canvas.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "Business Plan",
        description: (
          <>
          <p>
          In our business plan we plan various aspects of our project. We begin with a brief company overview and then dive deep into a market analysis that looks at industry trends, target demographics, and a thorough assessment of our competition. We then discuss the organization and management of our company, detailing our organizational structure, key team members, and their roles. We describe our product explaining its features, benefits, and how it addresses the needs of people with early-stage Parkinson’s disease. We then discuss associated marketing and sales strategies for it. We created an operation, financial and contingency plan for the future development of SynAxis. Our business plan ensures that we are well-prepared for both current trends and future developments as we establish SynAxis in industry.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/synaxis.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "IP Protection Strategy",
        description: (
          <>
          <p>
          SynAxis is an innovative treatment for Parkinson’s Disease. As such, our team has spent a significant amount of time researching how best to protect our ideas. This document outlines patentable traits in our project, such as our Neurosin (KLK6) and Cyclophilin D (CypD) protein molecular switch, and our oral spore-based probiotic delivery system. As well as all relevant documents, fees, and steps to attaining both Canadian, and United States provisional, and nonprovisional patents. In the development of this document, we partnered with Dr. Michael Wells and Dr. Stephen Scribner, Partnership Development Officer and Director of Intellectual Property respectively, at Queen’s University’s Partnerships and Innovation. Dr. Wells and Dr. Scribner have provided our team with invaluable advice in regard to pursuing IP protection of SynAxis and we are incredibly grateful for their assistance this past season.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/ip-protection-strategy.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "Risk Analysis Report",
        description: (
          <>
          <p>
          The Risk Analysis report summarizes our considerations of the potential challenges our team may face. It is divided into 8 distinct sections that details our findings. To begin, the report provides an overview of the background, scope, and goals of the project. It then transitions into the identification of risk factors, including events and conditions that may cause unprecedented challenges to our project performance. These risks address circumstances that may influence our budget, schedule, etc. in favourable or unfavourable fashions. Furthermore, the risk analysis report highlights key assumptions that are made in order for our project to proceed. These assumptions are made based on our research design, funding, and collaboration. This risk analysis while not entirely comprehensive of all the risks that may be encountered by our team as development of SynAxis continues, we have discussed in-depth the consequences of a lack of participation in clinical trials, transitional failures in the pre-clinical phase, and a lack of funding. These risks have been identified as the most pertinent to our project currently or in the coming future that if encountered, will have significant consequences on the projected timeline for development. Our report closes with our proposed solutions to mitigate these risks and minimize their impact. Several of which we have already begun pursuing as a contingency. Some of which include partnership with established Parkinson’s Disease advocacy organizations, utilizing computational biology to mimic biological models, and the creation of a thorough projected financials plan.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/risk-analysis-report-fd.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
    ],
  },
  {
    title: "Early Stage",
    summary:
      "The early-stage development stage involves the preclinical development plan. This stage focuses on our exploration and experimentation of our drug. Preclinical trials utilize laboratory animal models and help determine if a drug would be safe and effective to use in humans. The goal of early-stage development is to address the safety and efficacy of our SynAxis product. This will allow us in the future to properly allocate resources and identify any possible challenges that we may face down the road. The research conducted in this stage will shape the future for our business and drug development. This stage helps us to define a viable product for development. Once we pass this stage it is onto clinical trials and manufacturing.  ",
    months: [
      {
        month: "Preclinical Development Plan",
        description: (
          <>
          <p>
          The SynAxis preclinical development plan is crucial for our drug development plans. SynAxis being a therapeutic designed for human intake, needs to undergo vigorous preclinical and clinical trials. Preclinical trials and studies are based on non-human models, laboratory animals. These studies provide important data on pharmacokinetics, pharmacodynamics, and toxicology. All of these studies help researchers to understand how the drug behaves in a biological system and interacts with metabolism. They help to determine dose and protocols before being tested on humans (clinical trials). With these trials we hope to refine our drug candidates which will increase the chances of safe productive clinical trials. By creating a preclinical development plan, we can begin to look at what this important step in drug development would look like. The goal is to address the safety and efficacy of our SynAxis product. This will allow us in the future to properly allocate resources and identify any possible challenges that we may face down the road. 
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/preclinical-development-plan-fd.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
    ],
  },
  {
    title: "Growth Stage",
    summary:
      "The growth stage is pivotal as it transitions our earlier research into clinical trials and regulations. To illustrate our findings, we authored several documents and graphics including a regulatory strategy roadmap and clinical trials plan. The regulatory roadmap ensures regulatory compliance is followed when pursuing commercialization. SynAxis being a therapeutic designed for human intake, needs to undergo vigorous preclinical and clinical trials. The research conducted in this section will ensure that SynAxis delivers a safe and effective therapeutic for human use through positive clinical trials with compliance with regulations.  ",
    months: [
      {
        month: "Clinical Timeline Trials",
        description: (
          <>
          <p>
          The SynAxis clinical trials plan is crucial for our drug development plans. SynAxis being a therapeutic designed for human intake, needs to undergo vigorous preclinical and clinical trials. A clinical trial is a systematic investigation conducted to evaluate the safety, efficacy, and optimal usage of a new therapeutic intervention in humans with the aim to research and collect information on our proposed therapeutics appropriate dosage, effectiveness and safety in human patients. The primary goal is to generate robust data that supports the therapeutic potential benefits and identifies any risks associated with its use. Clinical trials are essential for advancing medical knowledge and ensuring that new treatments are both safe and effective for patients. In Phase I, the focus is on establishing the safety and determining the optimal dosage range. Phase Il shifts to evaluating the therapeutic's effectiveness and continues monitoring its safety. Phase Ill involves large-scale trials to confirm the therapeutic's effectiveness and compare it with existing treatments, ensuring that it meets the necessary standards. Finally, Phase IV continues to monitor the therapeutic in real-world settings, providing ongoing data on its long-term safety and effectiveness. This comprehensive approach is essential for identifying a therapeutic that not only shows promise in preclinical studies but can also deliver tangible benefits to patients in clinical practice. By creating a clinical trials plan, we can begin to look at what this important step in drug development would look like. The goal is always to address the safety and efficacy of our SynAxis product. This will allow us in the future to properly allocate resources and identify any possible challenges that we may face down the road.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/clinical-trial-plan-fd.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "Regulatory Strategy Roadmap",
        description: (
          <>
          <p>
          As a therapeutic, SynAxis is subject to many policies and regulations. In order to ensure regulatory compliance when pursuing commercialization, our team placed a heavy emphasis on remaining compliant from the beginning. To do this, our human practices team created a comprehensive regulatory strategy document that covers information regarding the Canadian and United States regulatory landscape, the intended use and indications for use of our product, key milestones, a brief risk assessment, appropriate regulatory pathways for SynAxis, as well as related regulatory documents. This document is meant to be a foundation for our team to align ourselves with to ensure the highest chance of regulatory approval when it comes time to bring SynAxis to market. This document will require continued expansion as our product continues to be designed and more aspects of its use are defined concretely.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
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
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
    ],
  },
  {
    title: "Late Stage",
    summary:
      "The late stage of drug development is involved with supporting the transition to commercialization. To illustrate our findings, we authored several documents and graphics including projected financial statement and manufacturing plan. The projected financial statements allow us to plan funding efforts and costs effectively. The manufaturing plan allows us to plan efficiently for the development of our therapeutic. The research conducted in this section will allow SynAxis to successfully enter the market and commercialize our product. By utilizing the above documents, we ensure we protect ourselves from any financial and manufacturing threats. Overall, this stage sets up SynAxis for success and sustainable growth in the market.  ",
    months: [
      {
        month: "EManufacturing Plan",
        description: (
          <>
          <p>
          The SynAxis manufacturing plan is crucial for our business development. It gives us a structured map of production processes which will lead to efficient and consistent product output. This will allow us to properly allocate resources, minimize waste and reduce any costs. Our goal is to maximize manufacturing and create operational effectiveness.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/manufacturing-plan-outline.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
      {
        month: "Projected Financial Statements",
        description: (
          <>
          <p>
          The SynAxis projected financial statement provides us with an estimation of future costs and revenues. This allows us to have a roadmap with strategic planning for our finances. Looking at possible revenues, expenses, and profits, these numbers help us to set up realistic future goals, allocate resources effectively, and identify potential financial challenges before we begin manufacturing our product.
          </p>
          {/* Embedded PDF centered with top and bottom margins */}
          <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/entrepreneurship/financial-report.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Pitch Deck"
                ></iframe>
              </div>
            </>
        )
      },
    ],
  },
];

export function Entrepreneurship() {
  const [selectedMonths, setSelectedMonths] = useState<(string | null)[]>(
    Array(stagesData.length).fill(null)
  );

  const [isModalVisible, setModalVisible] = useState(false);

  const handleMonthClick = (stageIndex: number, month: string) => {
    setSelectedMonths((prevSelectedMonths) =>
      prevSelectedMonths.map((selectedMonth, index) =>
        index === stageIndex
          ? selectedMonth === month
            ? null
            : month
          : selectedMonth
      )
    );
  };

  const handleBioImpactClick = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="experiments-container">
      <DesignHeading />
      <OverviewSection />
      <div className="content">
        {stagesData.map((stage, stageIndex) => (
          <div key={stage.title}>
            <h2 className="pills-section-header">{stage.title}</h2>
            <p className="stage-summary">{stage.summary}</p> {/* Move the summary here */}
            <MonthList
              monthsData={stage.months}
              onMonthClick={(month) => handleMonthClick(stageIndex, month)}
              selectedMonth={selectedMonths[stageIndex]}
            />
            <div className="month-list">
              {stage.months.map((monthData) => (
                <div
                  key={monthData.month}
                  className={`month-item ${selectedMonths[stageIndex] === monthData.month ? "active" : ""}`}
                >
                  <div
                    className={`month-label ${selectedMonths[stageIndex] === monthData.month ? "active" : ""}`}
                    onClick={() =>
                      handleMonthClick(stageIndex, monthData.month)
                    }
                  >
                    {monthData.month.toUpperCase()}
                  </div>
                  <MonthDetails
                    month={selectedMonths[stageIndex]}
                    description={monthData.description}
                    active={selectedMonths[stageIndex] === monthData.month}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* BioImpact Challenge Section */}
        <div className="bioimpact-section">
          <Button className="bioimpact-button" onClick={handleBioImpactClick}>
            The BioImpact Challenge
          </Button>
        </div>

        {/* Modal Component */}
        {isModalVisible && (
          <div className="modal-overlay">
            <div className="bioimpact-modal">
              <div className="modal-header">BioImpact Challenge</div>
              <div className="modal-paragraph">
                <p>
                One of QGEM’s main goals this season has been to uplift future innovators, providing them with a platform from which to launch their first venture. Through the entrepreneurial deliverables that we have completed, we have learned that the path for startups is incredibly difficult. With funding being limited and competitive, we wanted to provide Queen’s University undergraduate students with an opportunity to get their foot in the door.  
                </p>
                <p>
                We established QGEM’s first ever pitch competition under the theme of BioImpact. This pitch competition opened the floor to allow Queen's students to showcase their innovations and receive feedback and advice from judges. This challenge is focused on promoting innovative biotechnological solutions that have the power to make a remarkable impact on society. We want to support young minds and their groundbreaking ideas that utilize biology to solve global challenges and drive scientific advancement for the betterment of society.   
                </p>
                <p>
                For this event, we had a panel of three judges including Dr. Sharon Regan, Dr. George diCenzo, and Dr. Michael Wells. To provide more information on environmental research and policy, we invited speakers, Dr. Warren Mabee, and Dr. Kevin de France. 
                </p>
              </div>
              <Button className="close-button" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
      <BackToTopButton />
    </div>
  );
}

// Component for displaying the list of months
interface MonthListProps {
  monthsData: MonthlyUpdates[];
  onMonthClick: (month: string) => void;
  selectedMonth: string | null;
}

const MonthList: React.FC<MonthListProps> = ({
  monthsData,
  onMonthClick,
  selectedMonth,
}) => {
  return (
    <div className="left-bar">
      <div className="simple-month-list">
        {monthsData.map((monthData) => (
          <div
            key={monthData.month}
            className={`simple-month-label ${selectedMonth === monthData.month ? "active" : ""}`}
            onClick={() => onMonthClick(monthData.month)}
          >
            {monthData.month.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for displaying details about a selected month
interface MonthDetailsProps {
  month: string | null;
  description: JSX.Element;
  active: boolean;
}

const MonthDetails: React.FC<MonthDetailsProps> = ({
  description,
  active,
}) => {
  return (
    <div className="month-details">
      {active ? (
        <div className="month-details-card">
          <p>{description}</p>
        </div>
      ) : (
        <div className="no-updates">No updates available.</div>
      )}
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
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

// Overview and Design Heading Components
const OverviewSection = () => (
  <section
    style={{
      backgroundColor: "#FE9BA1",
      color: "white",
      padding: "20px",
      marginTop: "100px",
      width: "100%",
      height: "350px",
      marginBottom: "100px",
    }}
  >
    <h2>Overview</h2>
    <p>
    Scientific innovation often has the potential to address pressing challenges in healthcare, environmental sustainability, and technology. Throughout the development of SynAxis, QGEM has seen a necessity for a Parkinson’s Disease therapeutic that targets symptoms more permanently than current market-available treatments. Due to this, it has been one of our main goals to bring SynAxis to the world stage as a usable and commercialized product to bring relief to millions of Parkinson’s Disease patients all over the world. However, to do this, our team understands that adopting a structured approach is necessary to move from the lab to the marketplace. 
    Over the course of this summer, our human practices team has been dedicated to conducting thorough market research, building a business model, regulatory strategy roadmap, risk analysis, product analyses, and manufacturing plans. We have connected with relevant professionals at every step to ensure that SynAxis is on its way to entrepreneurial success.   
    Each of the above documents listed are available below as separate and more thorough PDFs. In addition to this, our team has produced a comprehensive business plan outlining our market analysis, team and advisory board profiles, product, intellectual property protection, marketing and sales strategies, operations plans, financial plans, and our contingency plans. This business plan was produced in collaboration with the Smith School of Business as a part of their Certificate in Social Impact program. This program provides undergraduate students with the necessary skills to become leaders in modern business. QGEM is currently in pre-seed development stage, however, we are incredibly confident in our ability to pursue the commercialization of SynAxis.  
    </p>
  </section>
);

const DesignHeading = () => (
  <div
    style={{
      color: "#590000",
      fontWeight: "bold",
      letterSpacing: "2px",
      textAlign: "center",
      marginTop: "100px",
    }}
  >
    <h1 style={{ fontSize: "9em" }}>Entrepreneurship</h1>
  </div>
);

export default Entrepreneurship;
