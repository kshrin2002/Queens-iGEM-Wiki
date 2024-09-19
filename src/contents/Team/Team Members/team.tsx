import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Team() {
  // Reference to the container that holds all sections
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionsRef.current;

    if (sections) {
      const numSections = sections.children.length; // Get the number of sections (5 in this case)

      // Set up the horizontal scrolling effect
      gsap.to(sections, {
        xPercent: -100 * (numSections - 1), // Scroll through all sections
        ease: 'none',
        scrollTrigger: {
          trigger: sections,
          pin: true, // Pin the sections in place during the scroll
          scrub: 1, // Smooth scrolling
          start: 'top top',
          // End after the last section, allowing vertical scroll afterward
          end: () => `+=${window.innerWidth * (numSections - 1)}`,
          onLeave: () => {
            ScrollTrigger.refresh(); // Refresh to allow normal vertical scrolling
          }
        },
      });
    }

    // Cleanup ScrollTrigger on unmount to avoid issues
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Styles directly in the component
  const containerStyle: React.CSSProperties = {
    height: '100vh',
    overflow: 'hidden', // Prevent overflow during scroll
    position: 'relative',
  };

  const sectionsStyle: React.CSSProperties = {
    display: 'flex',
    width: `calc(100vw * 5)`, // Dynamically set width based on 5 sections
  };

  const sectionStyle: React.CSSProperties = {
    width: '100vw', // Each section takes the full width of the viewport
    height: '100vh', // Full height
    padding: '20px', // Add padding for the header
    position: 'relative',
    boxSizing: 'border-box', // Ensure padding is inside the width/height
    display: 'flex', // Enables flex layout for positioning
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center the grid horizontally
    justifyContent: 'flex-end', // Push the grid to the bottom
    backgroundColor: '#fff', // Set the background color to white
  };

  const headerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50px', // Lower the header slightly
    left: '30px', // Move the header slightly to the right
    fontSize: '2rem',
    color: '#a6262e', // Change header text color to #a6262e
    fontWeight: 'bold', // Make the header bold
  };

  const verticalLineStyle: React.CSSProperties = {
    position: 'absolute',
    height: '80%', // Increase height to 80%
    top: '10%', // Start the line 10% from the top
    right: '0', // Line on the right edge of the section
    width: '2px', // Thin line
    backgroundColor: '#a6262e', // Line color
  };

  const imageGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
    gridTemplateRows: 'repeat(2, 1fr)', // 2 rows
    gap: '15px', // Adjust gap between images
    width: '70%', // Slightly smaller grid width
    height: 'auto', // Let the height adjust naturally
    marginBottom: '10px', // Reduce margin to almost touch the bottom
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative', // Set relative to contain the absolutely positioned text
    display: 'flex', // Use flexbox to align items
    flexDirection: 'column', // Stack portrait and LinkedIn logo vertically
    alignItems: 'center', // Center the LinkedIn logo horizontally
    width: '100%', // Match the image width
  };

  const mainImageStyle: React.CSSProperties = {
    width: '95%', // Reduced width to make the portrait images slightly smaller
    height: 'auto',
    objectFit: 'cover', // Ensures the image covers the cell without stretching
  };

  const smallImageStyle: React.CSSProperties = {
    width: '30px', // Small size for the LinkedIn logo
    height: 'auto',
    marginTop: '10px', // Space between the main image and the small image
  };

  const nameTextStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '60px', // Moved 50px up from the original 10px
    left: '10px', // Place text 10px from the left of the image
    fontSize: '1rem', // Small font size for the name
    color: '#fff', // White text color
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for visibility
    padding: '2px 5px', // Padding around the text for better readability
    borderRadius: '5px', // Slight border radius for better appearance
  };

  // Footer style with the image
  const footerStyle: React.CSSProperties = {
    height: '100vh', // Full height footer
    backgroundColor: '#fff', // Set footer background color to white
    display: 'flex', // Flex to center content
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  };

  const footerImageStyle: React.CSSProperties = {
    width: '50%', // Adjust image size to fit nicely
    height: 'auto', // Maintain aspect ratio
    objectFit: 'contain', // Ensure the image fits inside the container without stretching
  };

  // The image link provided by you
  const mainImageURL = 'https://static.igem.wiki/teams/5079/headshot-template-picture.png';
  const smallImageURL = 'https://static.igem.wiki/teams/5079/linkedin-logo-initials.png';
  const footerImageURL = 'https://static.igem.wiki/teams/5079/rose-logo.png'; // Footer image

  return (
    <>
      <div style={containerStyle}>
        {/* Section wrapper */}
        <div ref={sectionsRef} style={sectionsStyle}>
          {/* First section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>First Section</div>
            <div style={imageGridStyle}>
              {Array(6).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  {/* Name text directly on the bottom-left of the image */}
                  <span style={nameTextStyle}>Name</span>
                  {/* LinkedIn image centered under the portrait */}
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
            {/* Vertical line to separate sections */}
            <div style={verticalLineStyle}></div>
          </section>

          {/* Second section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>Second Section</div>
            <div style={imageGridStyle}>
              {Array(6).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  <span style={nameTextStyle}>Name</span>
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
            {/* Vertical line */}
            <div style={verticalLineStyle}></div>
          </section>

          {/* Third section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>Dry Lab</div>
            <div style={imageGridStyle}>
              {Array(6).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  <span style={nameTextStyle}>Name</span>
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
            <div style={verticalLineStyle}></div>
          </section>

          {/* Fourth section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>Wet Lab</div>
            <div style={imageGridStyle}>
              {Array(6).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  <span style={nameTextStyle}>Name</span>
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
            <div style={verticalLineStyle}></div>
          </section>

          {/* Fifth section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>Human Practices</div>
            <div style={imageGridStyle}>
              {Array(6).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  <span style={nameTextStyle}>Name</span>
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
            {/* No vertical line after the last section */}
          </section>
        </div>
      </div>

      {/* Footer content */}
      <div style={footerStyle}>
      </div>
    </>
  );
}
