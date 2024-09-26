import React, { useState } from 'react';
import './entrepreneurship.css';

export function Entrepreneurship() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [expandedDeliverables, setExpandedDeliverables] = useState<{ [key: string]: number | null }>({});

  const stagesData = [
    {
      stage: "Pre-Seed Stage",
      deliverables: ["Pitch Deck", "Market Analysis", "Competitor Landscape Matrix", "Skill Gap Analysis", "Advisory Board Profiles", "PSETEL Analysis", "SWOT Analysis"],
    },
    {
      stage: "Seed Stage",
      deliverables: ["Lean Canvas", "Business Plan", "IP Protection Strategy"],
    },
    {
      stage: "Early Stage",
      deliverables: ["Preclinical Development Plan"],
    },
    {
      stage: "Growth Stage",
      deliverables: ["Clinical Trials Timeline", "Regulatory Strategy Roadmap"],
    },
    {
      stage: "Late Stage",
      deliverables: ["Manufacturing Plan", "Projected Financial Statements"],
    },
  ];

  const handleStageClick = (stage: string) => {
    setSelectedStage(selectedStage === stage ? null : stage);
  };

  const handleDeliverableClick = (stage: string, index: number) => {
    setExpandedDeliverables((prevState) => ({
      ...prevState,
      [stage]: prevState[stage] === index ? null : index,
    }));
  };

  return (
    <>
      <EntrepreneurshipHeading />
      <OverviewSection />

      <div className="stages-container">
        <div className="content">
          <div className="stage-list">
            {stagesData.map((stageData) => (
              <div
                key={stageData.stage}
                className={`stage-item ${selectedStage === stageData.stage ? 'active' : ''}`}
              >
                <div
                  className={`stage-label ${selectedStage === stageData.stage ? 'active' : ''}`}
                  onClick={() => handleStageClick(stageData.stage)}
                >
                  {stageData.stage.toUpperCase()}
                </div>
                {selectedStage === stageData.stage && (
                  <div className="stage-details">
                    <ul>
                      {stageData.deliverables.map((deliverable, index) => (
                        <li key={index} onClick={() => handleDeliverableClick(stageData.stage, index)}>
                          {deliverable}
                          {expandedDeliverables[stageData.stage] === index && (
                            <div className="deliverable-content">
                              <p>
                                {`${deliverable} details go here...`} {/* You can replace this with actual content */}
                              </p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ReferenceSection />
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
        width: '1520px',
        height: '350px',
        marginBottom: '100px',
      }}
    >
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

const EntrepreneurshipHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        ENTREPRENEURSHIP
      </h1>
    </div>
  );
};

const ReferenceSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#FE9BA1',
        color: 'white',
        padding: '20px',
        marginTop: '100px',
        width: '1520px',
        height: '250px',
        marginBottom: '100px',
      }}
    >
      <h2>References</h2>
    </section>
  );
};

export default Entrepreneurship;
