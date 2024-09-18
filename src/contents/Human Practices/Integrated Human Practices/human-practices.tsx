import React from "react"; // Ensure React is imported if you're using JSX/TSX

export function HumanPractices() {
  return (
    <>
      <IHPHeading />
      <OverviewSection />
      <InterviewsSection /> {/* Interviews section added here */}
    </>
  );
}

const OverviewSection = () => {
  return (
    <section
      style={{ backgroundColor: "maroon", color: "white", padding: "20px" }}
    >
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
};

const IHPHeading = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1
        style={{
          fontSize: "5em",
          color: "#590000",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        INTEGRATED HUMAN PRACTICES
      </h1>
    </div>
  );
};

// Interviews section added below existing code

const InterviewsSection = () => {
  return (
    <section style={{ marginTop: "30px" }}>
      <h2 style={{ color: "maroon" }}>Interviews</h2>

      <PatientSection patientName="PATIENT NAME" />
      <PatientSection patientName="PATIENT NAME" />
      <PatientSection patientName="PATIENT NAME" />
      <PatientSection patientName="PATIENT NAME" />
    </section>
  );
};

// Explicitly typing the props for PatientSection
interface PatientSectionProps {
  patientName: string;
}

const PatientSection: React.FC<PatientSectionProps> = ({ patientName }) => {
  return (
    <div style={styles.patientSection}>
      <div style={styles.photoPlaceholder}></div>
      <div style={styles.patientDescription}>
        <h3>{patientName}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
    </div>
  );
};

// CSS-in-JS styles for interviews section
const styles = {
  patientSection: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },
  photoPlaceholder: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "grey",
    marginRight: "20px",
  },
  patientDescription: {
    backgroundColor: "maroon",
    color: "white",
    padding: "20px",
    flex: 1,
  },
};

export default HumanPractices;
