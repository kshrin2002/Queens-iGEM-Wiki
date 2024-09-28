// src/contents/PatientStories.tsx

import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PatientStories: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <PatientStoriesHeading />
        <OverviewSection />

        {/* Patient Sections */}
        <PatientInfoSection
          name="Barbara Salsberg Mathews"
          excerpt="Placeholder for Barbara's excerpt..."
          imageUrl="Placeholder for Barbara's image URL"
          link="/patient-stories/barbara-salsberg-mathews"
          artText="BARBARA ART"
        />

        <PatientInfoSection
          name="Larry Gifford"
          excerpt="Placeholder for Larry's excerpt..."
          imageUrl="Placeholder for Larry's image URL"
          link="/patient-stories/larry-gifford"
          artText="LARRY ART"
        />

        <PatientInfoSection
          name="Benjamin Stecher"
          excerpt="Placeholder for Benjamin's excerpt..."
          imageUrl="Placeholder for Benjamin's image URL"
          link="/patient-stories/benjamin-stecher"
          artText="BENJAMIN ART"
        />
      </main>
      <Footer />
    </>
  );
};

const PatientStoriesHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        PATIENT STORIES
      </h1>
    </div>
  );
};

const OverviewSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#FE9BA1',
        color: 'white',
        padding: '20px',
        marginTop: '100px',
        maxWidth: '1200px',
        margin: '100px auto',
        borderRadius: '15px',
      }}
    >
      <h2>Overview</h2>
      <p>
        Placeholder for the overview of patient stories, explaining the purpose and what readers can expect.
      </p>
    </section>
  );
};

interface PatientInfoProps {
  name: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  artText: string;
}

const PatientInfoSection: React.FC<PatientInfoProps> = ({ name, excerpt, imageUrl, link, artText }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          backgroundColor: '#800000',
          borderRadius: '15px',
          padding: '20px',
          width: '40%',
          minWidth: '300px',
          margin: '10px',
        }}
      >
        <h2 style={{ color: 'white', marginBottom: '10px' }}>{name}</h2>
        <p style={{ color: 'white' }}>{excerpt}</p>
        <Link to={link} className="btn btn-light">
          Read More
        </Link>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '2em',
          marginLeft: '30px',
          paddingRight: '30px',
          margin: '10px',
        }}
      >
        <img
          src={imageUrl}
          alt={`${name}'s Art`}
          style={{ maxWidth: '300px', borderRadius: '15px' }}
        />
        <p style={{ margin: 0 }}>{artText}</p>
      </div>
    </div>
  );
};

export default PatientStories;
