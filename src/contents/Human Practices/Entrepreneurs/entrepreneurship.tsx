import React, { useState, useEffect } from "react";
import "./entrepreneurship.css";
import Button from "react-bootstrap/esm/Button";
import Carousel from "react-bootstrap/Carousel";

interface MonthlyUpdates {
  month: string;
  description: string;
}

const stagesData: { title: string; months: MonthlyUpdates[] }[] = [
  {
    title: "Pre-Seed Stage",
    months: [
      {
        month: "Pitch Deck",
        description:
          "A detailed presentation to showcase your business idea to potential investors.",
      },
      {
        month: "Market Analysis",
        description:
          "An analysis of market trends, customer needs, and potential competitors.",
      },
      {
        month: "Competitor Landscape Matrix",
        description:
          "A matrix that maps out competitors and their relative strengths.",
      },
      {
        month: "Skill Gap Analysis",
        description:
          "Identifying key skills needed in your team and areas for improvement.",
      },
      {
        month: "Advisory Board Profiles",
        description:
          "Profiles of potential advisors to help guide your business.",
      },
      {
        month: "PESTEL Analysis",
        description:
          "A framework to analyze the Political, Economic, Social, Technological, Environmental, and Legal factors.",
      },
      {
        month: "SWOT Analysis",
        description:
          "An analysis of your business’s Strengths, Weaknesses, Opportunities, and Threats.",
      },
    ],
  },
  {
    title: "Seed Stage",
    months: [
      {
        month: "Lean Canvas",
        description:
          "A one-page business plan template focusing on problems, solutions, and metrics.",
      },
      {
        month: "Business Plan",
        description:
          "A detailed plan covering strategy, financials, and operational forecasts.",
      },
      {
        month: "IP Protection Strategy",
        description: "A strategy for protecting your intellectual property.",
      },
      {
        month: "Risk Analysis Report",
        description:
          "A report that outlines potential risks and mitigation strategies.",
      },
    ],
  },
  {
    title: "Early Stage",
    months: [
      {
        month: "Preclinical Development Plan",
        description:
          "A plan for the preclinical testing phases of drug development.",
      },
    ],
  },
  {
    title: "Growth Stage",
    months: [
      {
        month: "Clinical Timeline Trials",
        description: "The projected timeline for conducting clinical trials.",
      },
      {
        month: "Regulatory Strategy Roadmap",
        description:
          "A roadmap for obtaining regulatory approval in various markets.",
      },
    ],
  },
  {
    title: "Late Stage",
    months: [
      {
        month: "EManufacturing Plan",
        description: "A detailed plan for scaling manufacturing operations.",
      },
      {
        month: "Projected Financial Statements",
        description:
          "Financial projections showing expected revenue and costs.",
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
                Welcome to the BioImpact Challenge! Here you will test your
                knowledge in biotech innovation and learn new skills to help
                scale your business.
              </div>
              {/* Photo Carousel */}
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src="https://via.placeholder.com/150"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src="https://via.placeholder.com/150"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src="https://via.placeholder.com/150"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

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
  description: string;
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
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
