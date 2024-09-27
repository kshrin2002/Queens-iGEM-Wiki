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
      <main className="container my-5">
        <h1 className="mb-4">Patient Stories</h1>
        <div className="row">
          {/* Barbara Salsberg Mathews */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://static.igem.wiki/teams/your-team-number/barbara.jpg" // Replace with actual image URL
                className="card-img-top"
                alt="Barbara Salsberg Mathews"
              />
              <div className="card-body">
                <h2 className="card-title">Barbara Salsberg Mathews</h2>
                <p className="card-text">
                  Barbara shares her journey living with Parkinson's disease...
                </p>
                <Link to="/patient-stories/barbara-salsberg-mathews" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Larry Gifford */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://static.igem.wiki/teams/your-team-number/larry.jpg" // Replace with actual image URL
                className="card-img-top"
                alt="Larry Gifford"
              />
              <div className="card-body">
                <h2 className="card-title">Larry Gifford</h2>
                <p className="card-text">
                  Larry discusses his experiences and challenges with Parkinson's...
                </p>
                <Link to="/patient-stories/larry-gifford" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Benjamin Stecher */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://static.igem.wiki/teams/your-team-number/benjamin.jpg" // Replace with actual image URL
                className="card-img-top"
                alt="Benjamin Stecher"
              />
              <div className="card-body">
                <h2 className="card-title">Benjamin Stecher</h2>
                <p className="card-text">
                  Benjamin talks about his advocacy and research into Parkinson's disease...
                </p>
                <Link to="/patient-stories/benjamin-stecher" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PatientStories;
