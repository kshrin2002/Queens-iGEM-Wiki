import { useState, useEffect, useRef } from 'react';
import './engineering.css';
import { BsArrowRightCircle, BsArrowLeftCircle, BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

export function Engineering() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5; // Total number of static pages
  const [isImgInView, setIsImgInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollDirection, setScrollDirection] = useState<'top' | 'bottom'>('bottom');

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault(); // Prevent the default scrolling behavior

    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1); // Scroll right
    } else if (event.deltaY < 0 && currentPage > 0) {
      setCurrentPage(prev => prev - 1); // Scroll left
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsImgInView(true); // Set image as in view
        } else {
          setIsImgInView(false); // Optionally, remove animation when out of view
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current); // Observe the image element
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current); // Clean up observer
      }
    };
  }, []);

  const toggleScroll = () => {
    const target = scrollDirection === 'bottom' ? document.body.scrollHeight : 0; // Determine target scroll position
    window.scrollTo({
      top: target,
      behavior: 'smooth' // Smooth scroll
    });
    setScrollDirection(prev => (prev === 'bottom' ? 'top' : 'bottom')); // Toggle direction
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
                <h2 className="page-title">Overview drylab</h2>
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
          <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <BsArrowLeftCircle 
              className='navarrow3'
              size={50}
              onClick={() => handleDotClick(0)}
            />
            <div className="vertical-rectangle">
              <p>Text for Left Rectangle</p>
            </div>
            <div className="circle-diagram" style={{ flex: '1', position: 'relative' }}>
              <img
                ref={imgRef} // Reference to the image
                className={`circle-img ${isImgInView ? 'animate' : ''}`} // Add 'animate' class when in view
                src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
                alt=""
              />
              {/* Text over the image */}
              <div className="centered-text">LEARN</div>
            </div>
            <div className="vertical-rectangle-r">
              <p>Text for Right Rectangle</p>
            </div>
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
          <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <BsArrowLeftCircle 
              className='navarrow4'
              size={50}
              onClick={() => handleDotClick(1)}
            />
            <div className="vertical-rectangle">
              <p>Text for Left Rectangle</p>
            </div>
            <div className="circle-diagram" style={{ flex: '1', position: 'relative' }}>
              <img
                ref={imgRef} // Reference to the image
                className={`circle-img ${isImgInView ? 'animate' : ''}`} 
                src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
                alt=""
              />
              {/* Text over the image */}
              <div className="centered-text">DESIGN</div>
            </div>
            <div className="vertical-rectangle-r">
              <p>Text for Right Rectangle</p>
            </div>
            <BsArrowRightCircle 
              className='navarrow5'
              size={50}
              onClick={() => handleDotClick(3)}
            />
          </div>
        </div>

        {/* Static Page 4 - third Process Page */}
        <div className="page">
          <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <BsArrowLeftCircle 
              className='navarrow6'
              size={50}
              onClick={() => handleDotClick(2)}
            />
            <div className="vertical-rectangle">
              <p>Text for Left Rectangle</p>
            </div>
            <div className="circle-diagram" style={{ flex: '1', position: 'relative' }}>
              <img
                ref={imgRef} // Reference to the image
                className={`circle-img ${isImgInView ? 'animate' : ''}`} 
                src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
                alt=""
              />
              {/* Text over the image */}
              <div className="centered-text">BUILD</div>
            </div>
            <div className="vertical-rectangle-r">
              <p>Text for Right Rectangle</p>
            </div>
            <BsArrowRightCircle 
              className='navarrow7'
              size={50}
              onClick={() => handleDotClick(4)}
            />
          </div>
        </div>

        {/* Static Page 5 - third Process Page */}
        <div className="page">
          <div className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <BsArrowLeftCircle 
              className='navarrow8'
              size={50}
              onClick={() => handleDotClick(3)}
            />
            <div className="vertical-rectangle">
              <p>Text for Left Rectangle</p>
            </div>
            <div className="circle-diagram" style={{ flex: '1', position: 'relative' }}>
              <img
                ref={imgRef} // Reference to the image
                className={`circle-img ${isImgInView ? 'animate' : ''}`} 
                src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
                alt=""
              />
              {/* Text over the image */}
              <div className="centered-text">TEST</div>
            </div>
            <div className="vertical-rectangle-r">
              <p>Text for Right Rectangle</p>
            </div>
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

        {/* Scroll Button */}
        <button 
        className="scroll-button"
        onClick={toggleScroll}
        >
        {scrollDirection === 'bottom' ? 'Footer  ':'Pages '}
        {scrollDirection === 'bottom' ? <BsArrowDownCircleFill />: <BsArrowUpCircleFill /> }
      </button>
    </div>
  );
}

export default Engineering;


  