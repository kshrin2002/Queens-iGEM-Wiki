import React from "react";
import "./App.css"; // You can style further using this file.

export function HumanPractices() {
  return (
    <>
      <IHPHeading />
      <OverviewSection />
      <InterviewsSection />
    </>
  );
}

// Heading component
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

// Overview section component
const OverviewSection = () => {
  return (
    <section
      style={{ backgroundColor: "maroon", color: "white", padding: "20px" }}
    >
      <h2>Overview</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </section>
  );
};

// Interviews section component
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

// Patient section component (one per patient)
const PatientSection = ({ patientName }) => {
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

// CSS-in-JS styles
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
