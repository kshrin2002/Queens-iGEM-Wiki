import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import "./judging.css";
import { motion } from "framer-motion";

export function Judging() {
  const tableData = [
    {
      title: "Bronze Medal",
      rows: [
        {
          criteria: "Competition Deliverables",
          status: "In Progress",
          details:
            "Wiki and judging form are complete. Presentation video is in progress, to be submitted by October 9th. Judging session assigned.",
        },
        {
          criteria: "Attributions",
          status: "Complete",
          details: (
            <>
              Please see attributions page{" "}
              <a
                href="https://2024.igem.wiki/queens-canada/attributions"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </>
          ),
        },
        {
          criteria: "Project Description",
          status: "Complete",
          details: (
            <>
              Please see project description page{" "}
              <a
                href="https://2024.igem.wiki/queens-canada/description"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </>
          ),
        },
        {
          criteria: "Contribution",
          status: "Complete",
          details: (
            <>
              Please see contributions page{" "}
              <a
                href="https://2024.igem.wiki/queens-canada/contribution"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </>
          ),
        },
      ],
    },
    {
      title: "Silver Medal",
      rows: [
        {
          criteria: "Human Practices",
          status: "Complete",
          details: (
            <>
              Our team’s human practices work centered on ensuring that our
              project is ethically grounded and relevant to real-world needs. By
              engaging directly with Parkinson's patients, researchers, and
              healthcare professionals, we gathered valuable insights that
              shaped the design and application of our therapeutic. Our
              collaboration with iGEM teams on an ethics handbook further
              reinforced the responsible and inclusive nature of our work.
              Through public engagement efforts, including organizing the
              Kingston Chapter of the Parkinson SuperWalk and launching our
              "Parkinson’s Unscripted" podcast, we raised awareness about our
              research and the challenges faced by those with neurodegenerative
              diseases. Our integrated approach ensured that societal, ethical,
              and patient perspectives were considered throughout the
              development of SynAxis. Please see our Integrated Human Practices
              page{" "}
              <a
                href="https://2024.igem.wiki/queens-canada/human-practices"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to learn more.
            </>
          ),
        },
        {
          criteria: "Engineering Success",
          status: "Complete",
          details: (
            <>
              Our engineering success centered on several critical iterations.
              In the lab, we optimized KLK6 expression and purification by
              refining expression conditions and vector selection, significantly
              improving yield and activity. Concurrently, we conceptualized and
              designed a minimally invasive delivery system, refining it as we
              were by guided by continuous feedback from relevant stakeholders.
              Our molecular switch underwent computational design iterations in
              the design of a rational approach to select insertion residues and
              circular permutation sites that would produce the switch
              functionality we desired. After in silico optimization, we focused
              on switch expression and purification, iterating the expression
              and purification parameters similarly to KLK6. Please see our
              Engineering page{" "}
              <a
                href="https://2024.igem.wiki/queens-canada/engineering"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to learn more.
            </>
          ),
        },
      ],
    },
    {
      title: "Gold Medal",
      rows: [
        {
          criteria: "New Basic Part",
          status: "Complete",
          details: (
            <>
              Our team has developed an innovative BioBrick part that encodes a
              molecular switch comprising KLK6 (Neurosin) and cyclophilin D
              (CypD). This switch is designed to modulate the activity of KLK6,
              a serine protease that cleaves α-synuclein, a protein associated
              with neurodegenerative diseases like Parkinson's. By fusing KLK6
              with CypD, we enable KLK6 activation specifically in the presence
              of α-synuclein, thereby reducing off-target effects. The switch
              capitalizes on CypD's ability to bind to α-synuclein, which not
              only activates KLK6 but also provides steric hindrance at
              C-terminal cleavage sites that are linked to pathogenic
              aggregation. Our extensive documentation includes detailed
              experimental validation, showing that this engineered switch
              effectively decreases α-synuclein levels and mitigates toxicity,
              making it a promising tool for therapeutic applications in
              neurodegeneration. The development of this switch highlights the
              potential of synthetic biology to create tailored protein
              interactions that can enhance therapeutic specificity and
              efficacy. Learn more about it in our Parts page{" "}
              <a
                href="https://2024.igem.wiki/queens-canada/parts"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </>
          ),
        },
        {
          criteria: "Entrepreneurship",
          status: "Complete",
          details: (
            <>
              Our iGEM team’s entrepreneurial strategy for SynAxis centers on
              addressing the urgent need for effective Parkinson’s Disease
              therapies that provide more permanent relief than currently
              available treatments. Recognizing this gap, we have structured our
              approach to transition from laboratory research to market-ready
              product development. Over the summer, our human practices team
              conducted thorough market research, developed a comprehensive
              business model, and outlined a regulatory strategy, risk analysis,
              product specifications, and manufacturing plans. Collaborating
              with industry professionals at each stage has been essential to
              our progress. Additionally, we created a detailed business plan in
              partnership with the Smith School of Business, covering market
              analysis, team profiles, intellectual property protection, and
              financial strategies. Although we are in the pre-seed development
              stage, we are confident in our path toward the successful
              commercialization of SynAxis, aiming to positively impact the
              lives of millions affected by Parkinson’s Disease. To learn more
              about our efforts, please see our Entrepreneurship page{" "}
              <a
                href="https://2024.igem.wiki/queens-canada/entrepreneurship"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </>
          ),
        },
        {
          criteria: "Integrated Human Practices ",
          status: "Complete",
          details: (
            <>
              We have actively engaged with Parkinson’s Disease patients, 
              researchers, and healthcare professionals to ensure our therapeutic 
              is designed with their needs and perspectives in mind. By conducting 
              interviews using the snowball sampling technique and utilizing the 
              AREA framework, we gathered valuable insights that have shaped our 
              approach and prioritized patient-centric features. Our conversations 
              revealed three key themes from interviews with experts across various 
              fields. First, Parkinson’s disease is highly heterogeneous, making 
              clinical diagnosis and defining our early-stage population a 
              significant challenge. Second, the path from lab to market is 
              prohibitively expensive, with clinical trials and manufacturing costs 
              contributing to why many therapeutics never reach patients. Lastly, 
              Parkinson’s disease is not just a medical condition—it is life-altering. 
              As researchers, we must adopt a patient-centric approach in our work, 
              ensuring that our therapeutic addresses the holistic needs of those 
              affected. These insights have deeply informed the development of SynAxis, 
              ensuring it is designed with both scientific and real-world 
              considerations in mind. To learn more, please see our Integrated 
              Human Practices page {" "}
              <a
                href="https://2024.igem.wiki/queens-canada/human-practices"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <ImplementationHeading />
      <div className="main-content-implementation">
        <Sidebar sections={tableData} />
        <CardSection sections={tableData} />
      </div>
      <BackToTopButton />
    </>
  );
}

const ImplementationHeading: React.FC = () => {
  // Function to handle scrolling to the specific section
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "138px", position: "relative" }}
    >
      <h1
        style={{
          fontSize: "9em",
          color: "#590000",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        Judging
      </h1>

      {/* Red horizontal line */}
      <hr
        style={{
          border: "none",
          borderTop: "8px solid #a6262e",
          width: "100%",
          margin: "20px 0 0 0",
        }}
      />

      {/* Image to be divided into clickable sections */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <img
          src="https://static.igem.wiki/teams/5079/writeups/judging/9ed0823f77d9f7716bef0d28b74ee967.png"
          alt="Judging Image"
          style={{ width: "100%", maxWidth: "800px" }}
        />

        {/* Left section for Gold Medal */}
        <div
          onClick={() => scrollToSection("gold-medal-section")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "33.33%",
            height: "100%",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0)", // Invisible
          }}
        ></div>

        {/* Middle section for Silver Medal */}
        <div
          onClick={() => scrollToSection("silver-medal-section")}
          style={{
            position: "absolute",
            top: 0,
            left: "33.33%",
            width: "33.33%",
            height: "100%",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0)", // Invisible
          }}
        ></div>

        {/* Right section for Bronze Medal */}
        <div
          onClick={() => scrollToSection("bronze-medal-section")}
          style={{
            position: "absolute",
            top: 0,
            left: "66.66%",
            width: "33.33%",
            height: "100%",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0)", // Invisible
          }}
        ></div>
      </div>
    </div>
  );
};

const Sidebar: React.FC<{ sections: any[] }> = ({ sections }) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div
      className="sidebar-contributions"
      style={{ position: "sticky", top: "150px", alignSelf: "flex-start" }}
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
                src="https://static.igem.wiki/teams/5079/rose-logo.png" // Image restored
                alt={section.title}
                style={{
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
              <span>{section.title}</span>
            </div>
            {openSection === index && (
              <StaggeredDropDown
                options={section.rows.map((row: any) => row.criteria)}
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
  sectionIndex,
}: {
  options: string[];
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
          text={option}
          sectionIndex={sectionIndex}
          sectionPartIndex={index}
          key={index}
        />
      ))}
    </motion.ul>
  );
};

const Option = ({
  text,
  sectionIndex,
  sectionPartIndex,
}: {
  text: string;
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
      className="motion-implementation-li"
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center" }}
    >
      {text}
    </li>
  );
};

const CardSection: React.FC<{ sections: any[] }> = ({ sections }) => {
  return (
    <Container fluid className="card-container-contribution">
      {sections.map((section, sectionIndex) => (
        <Card
          key={sectionIndex}
          className="custom-card"
          id={
            section.title.toLowerCase().includes("gold")
              ? "gold-medal-section"
              : section.title.toLowerCase().includes("silver")
              ? "silver-medal-section"
              : "bronze-medal-section"
          }
        >
          <Card.Body>
            {/* Apply styles to the section title */}
            <Card.Title
              style={{
                fontSize: "2.5em", // Make the title larger
                fontWeight: "bold", // Make the title bold
                color: "#a6262e", // Set the color to #a6262e
                marginBottom: "20px", // Add spacing below the title
              }}
            >
              {section.title}
            </Card.Title>
            <div className="flex-table-header">
              <div className="table-column">Criteria</div>
              <div className="table-column">Status</div>
              <div className="table-column">Details</div>
            </div>
            {section.rows.map((row: any, rowIndex: number) => (
              <div
                className="flex-table-row"
                id={`section-${sectionIndex}-part-${rowIndex}`}
                key={rowIndex}
              >
                <div className="table-column">{row.criteria}</div>
                <div className="table-column">{row.status}</div>
                <div className="table-column">{row.details}</div>
              </div>
            ))}
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

export default Judging;
