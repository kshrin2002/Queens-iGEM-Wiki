import React, { useState } from 'react';
import './entrepreneurship.css';

export function Entrepreneurship() {
  return (
    <>
      <EntrepreneurshipHeading />
      <OverviewSection />
      <StagesContainer />
    </>
  );
}

// Component for the stages section
const StagesContainer = () => {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  // Stage data
  const stagesData = [
    {
      stage: 'Pre-Seed Stage',
      deliverables: [
        'Market Analysis',
        'Competitor Landscape Matrix',
        'Skills Gap Analysis',
        'Advisory Board Profiles',
        'PESTEL Analysis',
        'SWOT Analysis',
      ],
    },
    {
      stage: 'Seed Stage',
      deliverables: [
        'Lean Canvas',
        'Business Plan',
        'IP Protection Strategy',
        'Risk Analysis Report',
      ],
    },
    // Additional stages can be added here
  ];

  const handleStageClick = (stage: string) => {
    setSelectedStage(selectedStage === stage ? null : stage);
  };

  return (
    <div className="stages-container">
      {stagesData.map((stageData, index) => (
        <div key={index} className="stage-section">
          <div
            className={`stage-title ${selectedStage === stageData.stage ? 'active' : ''}`}
            onClick={() => handleStageClick(stageData.stage)}
          >
            {stageData.stage}
          </div>

          {/* Deliverables list */}
          {selectedStage === stageData.stage && (
            <ul className="deliverables-list">
              {stageData.deliverables.map((deliverable, idx) => (
                <li key={idx} className="deliverable-item">{deliverable}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

// Simple overview section
const OverviewSection = () => {
  return (
    <section className="overview-section">
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
      </p>
    </section>
  );
};

// Main heading for the page
const EntrepreneurshipHeading: React.FC = () => {
  return (
    <div className="heading-container">
      <h1 className="main-heading">ENTREPRENEURSHIP</h1>
    </div>
  );
};

export default Entrepreneurship;
