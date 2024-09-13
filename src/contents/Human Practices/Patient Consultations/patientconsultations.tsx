import React from 'react';
import './consultations.css'; // This is for CSS

export function PatientConsultations() {
  return (
    <>
      <NavBar />
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Silver Medal Criterion #1</h4>
            <p>
              Demonstrate engineering success in a part of your project by going
              through at least one iteration of the engineering design cycle.
              This achievement should be distinct from your Contribution for
              Bronze.
            </p>
            <p>
              If you plan to show engineering success by creating a new Part
              that has been shown to work as expected, you must document your
              contribution on the Part's Main Page on the{" "}
              <a href="https://parts.igem.org/Main_Page">Registry</a> for your
              team to be eligible for this criteria.
            </p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const NavBar: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      {/* Logo */}
      <img
        src="https://static.igem.wiki/teams/5079/rose-logo.png"
        alt="Logo"
        style={{ width: '50px', marginRight: '20px' }}
      />

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {['Project', 'Wet Lab', 'Dry Lab', 'Outreach', 'Team'].map((text, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#590000',
              padding: '10px 20px',
              borderRadius: '20px',
              color: 'white',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

// Timeline component
const Timeline = () => {
  return (
    <div className="timeline">
      <TimelineItem patientName="Patient Name" details="" />
      <TimelineItem patientName="Patient Name" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus ultricies augue, vitae tincidunt lorem." />
      <TimelineItem patientName="Patient Name" details="" />
      <TimelineItem patientName="Patient Name" details="" />
    </div>
  );
};

// Timeline Item component
const TimelineItem: React.FC<{ patientName: string, details: string }> = ({ patientName, details }) => {
  return (
    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>{patientName}</h4>
        {details && <p>{details}</p>}
      </div>
    </div>
  );
};
