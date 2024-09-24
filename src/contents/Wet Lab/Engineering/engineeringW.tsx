import { useState } from 'react';
import './engineering.css';
import { BsArrowRightCircle } from "react-icons/bs";

export function EngineeringW() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 3; // Total number of static pages

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="engineering-container">
      <div
        className="page-wrapper"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
          width: `${totalPages * 100}vw`,
        }}
      >
        {/* Static Page 1 - Overview */}
        <div className="page">
          <div className="page-1">
            <div className="page-content arrow-container">
              <div className="arrow">
                <h2 className="page-title">Overview</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc tincidunt eros, vel egestas justo erat et lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Ut efficitur, odio eu cursus laoreet, lorem lacus vulputate dolor, eget hendrerit turpis nunc at massa.
                </p>
              </div>
            </div>
            {/* Right navigation arrow for page 1 */}
            <BsArrowRightCircle 
              className='navarrow1'
              size={50}
              onClick={() => handleDotClick(1)}
            />
          </div>
        </div>

        {/* Static Page 2 - First Process Page */}
        <div className="page">
          <div className='page-2'>          
          <div className="page-content">
            <h2>Page 1</h2>
            <p>Content for the first page...</p>
          </div>
            <BsArrowRightCircle 
                className='navarrow2'
                size={50}
                onClick={() => handleDotClick(2)}
              />
          </div>
        </div>

        {/* Static Page 3 - Second Process Page */}
        <div className="page">
          <div className="page-content">
            <h2>Page 2</h2>
            <p>Content for the second page...</p>
          </div>
          <div className="circle-diagram">
            <img className="circle-img" src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png" alt="" />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="navigation-dots">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EngineeringW;
