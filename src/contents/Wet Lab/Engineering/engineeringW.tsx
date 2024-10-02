import { useState, useEffect } from 'react';
import './engineering.css';
import {BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

// Define types
interface PageContent {
  title: string;
  content: JSX.Element;
}

interface PageSet {
  [key: number]: PageContent[];
}

// Page content structure
const pageContent: PageSet = {
  0: [
    {
      title: "Page 1 of Set 1",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Welcome to Set 1, Page 1. This section discusses the basics of engineering principles.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 2 of Set 1",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 1, Page 2 delves into fundamental design processes.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "References",
      content: (
        <>
        <p>References Go here</p>
        </>
      )
    }
  ],
  1: [
    {
      title: "Page 1 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 1 covers advanced engineering concepts.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 2 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 2 focuses on project management in engineering.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 3 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 3 discusses quality control methodologies.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 4 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 4 explores emerging technologies in engineering.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 5 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 5 covers sustainability in engineering.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 6 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 6 highlights interdisciplinary approaches in engineering.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 7 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 7 reviews ethical considerations in engineering.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 8 of Set 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 2, Page 8 discusses the future of engineering education.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "References",
      content: (
        <>
        <p>References Go here</p>
        </>
      )
    }
  ],
  2: [
    {
      title: "Page 1 of Set 3",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 3, Page 1 introduces mechanical engineering concepts.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 2 of Set 3",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 3, Page 2 explores thermal dynamics.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 3 of Set 3",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 3, Page 3 covers fluid mechanics.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 4 of Set 3",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 3, Page 4 examines materials science.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "References",
      content: (
        <>
        <p>References Go here</p>
        </>
      )
    }
  ],
  3: [
    {
      title: "Page 1 of Set 4",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 4, Page 1 introduces electrical engineering fundamentals.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 2 of Set 4",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 4, Page 2 explores circuit design.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 3 of Set 4",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            Set 4, Page 3 discusses signal processing.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 4 of Set 4",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 4, Page 4 covers control systems.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 5 of Set 4",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 4, Page 5 discusses renewable energy technologies.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "References",
      content: (
        <>
        <p>References Go here</p>
        </>
      )
    }
  ],
  4: [
    {
      title: "Page 1 of Set 5",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 5, Page 1 introduces systems engineering.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 2 of Set 5",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 5, Page 2 explores requirements engineering.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Page 3 of Set 5",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              Set 5, Page 3 covers validation and verification processes.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "References",
      content: (
        <>
        <p>References Go here</p>
        </>
      )
    }
  ],
};

// Main component
export function EngineeringW() {
  const [currentPageSet, setCurrentPageSet] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<'top' | 'bottom'>('bottom');

  const pageSets = [
    { id: 0, totalPages: 3, label: 'Section 1' },
    { id: 1, totalPages: 9, label: 'Section 2' },
    { id: 2, totalPages: 5, label: 'Section 3' },
    { id: 3, totalPages: 6, label: 'Section 4' },
    { id: 4, totalPages: 4, label: 'Section 5' },
  ];

  const totalPages = pageContent[currentPageSet].length;

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage]);

  const toggleScroll = () => {
    const target = scrollDirection === 'bottom' ? document.body.scrollHeight : 0;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
    setScrollDirection((prev) => (prev === 'bottom' ? 'top' : 'bottom'));
  };

  const handlePageSetClick = (setId: number) => {
    setCurrentPageSet(setId);
    setCurrentPage(0);
  };

  return (
    <div className="engineering-container">
      {/* Navbar for switching between page sets */}
      <div className="engnavbar">
        {pageSets.map((set) => (
          <button
            key={set.id}
            className={`engnavbar-button ${currentPageSet === set.id ? 'active' : ''}`}
            onClick={() => handlePageSetClick(set.id)}
          >
            {set.label}
          </button>
        ))}
      </div>

      <div
        className="page-wrapper"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
          width: `${totalPages * 100}vw`,
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <div className="page" key={index}>
            <div className="page-content">
              <h2 className="page-title">{pageContent[currentPageSet][index].title}</h2>
              <div className="flex-container">
                {pageContent[currentPageSet][index].content}
              </div>
            </div>
          </div>
        ))}
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

      {/* Scroll Button */}
      <button className="scroll-button" onClick={toggleScroll}>
        {scrollDirection === 'bottom' ? 'Footer  ' : 'Pages '}
        {scrollDirection === 'bottom' ? <BsArrowDownCircleFill /> : <BsArrowUpCircleFill />}
      </button>
    </div>
  );
}

export default EngineeringW;
