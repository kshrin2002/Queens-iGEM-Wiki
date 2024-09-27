// src/contents/BarbaraSalsbergMathews.tsx

import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BarbaraSalsbergMathews: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main id="top" className="container my-5">
        {/* BRIEF DESCRIPTION + QUESTIONS WE ASKED */}
        <section id="brief-description">
          <h1>Barbara Salsberg Mathews</h1>
          <p>
            Barbara is an artist and writer living with Parkinson's disease. We asked her about her
            experiences and insights.
          </p>
          <h3>Questions We Asked:</h3>
          <ul>
            <li>Can you share your journey with Parkinson's disease?</li>
            <li>How has art helped you cope with the condition?</li>
            <li>What message do you have for others affected by Parkinson's?</li>
          </ul>
        </section>

        {/* VIDEO */}
        <section id="video" className="my-5">
          <h2>Interview Video</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://video.igem.org/embed/barbara-video-id" // Replace with actual video URL
              allowFullScreen
              title="Interview with Barbara Salsberg Mathews"
            ></iframe>
          </div>
        </section>

        {/* DESCRIPTION OF ART + THANKS */}
        <section id="description-of-art" className="my-5">
          <h2>Description of Art & Thanks</h2>
          <p>
            The art piece titled "Resilience" was inspired by Barbara's strength and positivity. We
            are grateful for her willingness to share her story and inspire others.
          </p>
          {/* Scroll function to navigate between patients */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/patient-stories/benjamin-stecher" className="btn btn-secondary">
              Previous Patient
            </Link>
            <Link to="/patient-stories/larry-gifford" className="btn btn-secondary">
              Next Patient
            </Link>
          </div>
        </section>

        {/* WHAT WE LEARNED */}
        <section id="what-we-learned" className="my-5">
          <h2>What We Learned</h2>
          <p>
            Barbara's story taught us about the importance of resilience and the power of art in
            expressing personal experiences with illness.
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

export default BarbaraSalsbergMathews;
