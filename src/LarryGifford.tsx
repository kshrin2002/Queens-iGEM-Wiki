// src/contents/LarryGifford.tsx

import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const LarryGifford: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main id="top" className="container my-5">
        {/* BRIEF DESCRIPTION + QUESTIONS WE ASKED */}
        <section id="brief-description">
          <h1>Larry Gifford</h1>
          <p>
            Larry is a radio broadcaster who was diagnosed with Parkinson's disease. He shares his
            journey and insights.
          </p>
          <h3>Questions We Asked:</h3>
          <ul>
            <li>How has Parkinson's affected your daily life and career?</li>
            <li>What challenges have you faced, and how have you overcome them?</li>
            <li>What advice would you give to newly diagnosed patients?</li>
          </ul>
        </section>

        {/* VIDEO */}
        <section id="video" className="my-5">
          <h2>Interview Video</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://video.igem.org/embed/larry-video-id" // Replace with actual video URL
              allowFullScreen
              title="Interview with Larry Gifford"
            ></iframe>
          </div>
        </section>

        {/* DESCRIPTION OF ART + THANKS */}
        <section id="description-of-art" className="my-5">
          <h2>Description of Art & Thanks</h2>
          <p>
            Inspired by Larry's story, we created an art piece that reflects his determination and
            advocacy. We thank him for sharing his experiences with us.
          </p>
          {/* Scroll function to navigate between patients */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/patient-stories/barbara-salsberg-mathews" className="btn btn-secondary">
              Previous Patient
            </Link>
            <Link to="/patient-stories/benjamin-stecher" className="btn btn-secondary">
              Next Patient
            </Link>
          </div>
        </section>

        {/* WHAT WE LEARNED */}
        <section id="what-we-learned" className="my-5">
          <h2>What We Learned</h2>
          <p>
            Larry's story emphasized the importance of raising awareness and supporting those living
            with Parkinson's disease.
          </p>
        </section>

        {/* BACK TO TOP BUTTON */}
        <div className="text-center my-5">
          <a href="#top" className="btn btn-primary">
            Back to Top
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LarryGifford;