// src/contents/BenjaminStecher.tsx

import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const BenjaminStecher: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main id="top" className="container my-5">
        {/* BRIEF DESCRIPTION + QUESTIONS WE ASKED */}
        <section id="brief-description">
          <h1>Benjamin Stecher</h1>
          <p>
            Benjamin is an advocate and researcher focused on Parkinson's disease. He shares his
            experiences and insights into the future of treatment.
          </p>
          <h3>Questions We Asked:</h3>
          <ul>
            <li>What motivated you to become an advocate and researcher?</li>
            <li>What advancements in Parkinson's research are you most excited about?</li>
            <li>How can patients contribute to the research community?</li>
          </ul>
        </section>

        {/* VIDEO */}
        <section id="video" className="my-5">
          <h2>Interview Video</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://video.igem.org/embed/benjamin-video-id" // Replace with actual video URL
              allowFullScreen
              title="Interview with Benjamin Stecher"
            ></iframe>
          </div>
        </section>

        {/* DESCRIPTION OF ART + THANKS */}
        <section id="description-of-art" className="my-5">
          <h2>Description of Art & Thanks</h2>
          <p>
            The artwork inspired by Benjamin reflects his dedication to progress and innovation in
            Parkinson's research. We appreciate his contributions to the community.
          </p>
          {/* Scroll function to navigate between patients */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/patient-stories/larry-gifford" className="btn btn-secondary">
              Previous Patient
            </Link>
            <Link to="/patient-stories/barbara-salsberg-mathews" className="btn btn-secondary">
              Next Patient
            </Link>
          </div>
        </section>

        {/* WHAT WE LEARNED */}
        <section id="what-we-learned" className="my-5">
          <h2>What We Learned</h2>
          <p>
            Benjamin's insights highlighted the importance of patient involvement in driving
            research and the potential for future breakthroughs.
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

export default BenjaminStecher;
