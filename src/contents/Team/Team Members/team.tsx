import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Team() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionsRef.current;

    if (sections) {
      const numSections = sections.children.length;

      gsap.to(sections, {
        xPercent: -100 * (numSections - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sections,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${window.innerWidth * (numSections - 1.25)}`,
          onLeave: () => {
            ScrollTrigger.refresh();
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
  };

  const sectionsStyle: React.CSSProperties = {
    display: 'flex',
    width: `calc(100vw * 4 + 1.25 * 100vw)`,
  };

  const sectionStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    padding: '20px',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  };

  const execTeamSectionStyle: React.CSSProperties = {
    ...sectionStyle,
    width: '125vw', // 1.25 times wider than other sections
  };

  const headerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '70px',
    left: '30px',
    fontSize: '3rem',
    color: '#a6262e',
    fontWeight: 'bold',
  };

  const titleStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50px',
    left: '30px',
    fontSize: '6rem',
    color: '#a6262e',
    fontWeight: 'bold',
  };

  const verticalLineStyle: React.CSSProperties = {
    position: 'absolute',
    height: '80%',
    top: '10%',
    right: '0',
    width: '2px',
    backgroundColor: '#a6262e',
  };

  const imageRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',  // Width of the row
    position: 'absolute',
    bottom: '30px',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  const headimageContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
  };

  const mainImageStyle: React.CSSProperties = {
    width: '90%',
    height: 'auto',
    objectFit: 'cover',
  };

  const PImainImageStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    bottom: '250px',
    left: '150px',
    flexDirection: 'column',
    width: '50%',
  };

  const smallImageStyle: React.CSSProperties = {
    width: '30px',
    height: 'auto',
    marginTop: '10px',
  };

  const nameTextStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '60px',
    left: '20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '2px 5px',
    borderRadius: '5px',
  };

  const footerStyle: React.CSSProperties = {
    height: '100vh',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const mainImageURL = 'https://static.igem.wiki/teams/5079/headshot-template-picture.png';
  const smallImageURL = 'https://static.igem.wiki/teams/5079/linkedin-logo-initials.png';

  return (
    <>
      <div style={containerStyle}>
        <div ref={sectionsRef} style={sectionsStyle}>
            {/* PI section */}
          <section style={sectionStyle}>
            <h1 style={titleStyle}>Team Members</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
              <div style={imageContainerStyle}>
                <img src={mainImageURL} alt="Portrait" style={PImainImageStyle} />
              </div>
            </div>
            <h2 style={{ position: 'absolute', bottom: '270px', fontSize: '3rem', color: '#a6262e' }}>Advisors</h2>
            <h2 style={{ position: 'absolute', bottom: '450px', width: '250px', textAlign: 'center', left: '400px', fontSize: '3rem', color: '#a6262e' }}>Principal Investigator</h2>
            <div style={imageRowStyle}>
              {Array(3).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  <span style={nameTextStyle}>Name</span>
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
          </section>

          {/* Exec Team section */}
          <section style={execTeamSectionStyle}>
            <div style={headerStyle}>Exec Team</div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={headimageContainerStyle}>
                <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                <span style={nameTextStyle}>Name</span>
                <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
              {Array(5).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  <span style={nameTextStyle}>Name</span>
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
            <div style={verticalLineStyle}></div>
          </section>

          {/* Dry Lab section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>Dry Lab</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '70%' }}>
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

          {/* Wet Lab section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>Wet Lab</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '70%' }}>
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

          {/* Human Practices section */}
          <section style={sectionStyle}>
            <div style={headerStyle}>Human Practices</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', width: '70%' }}>
              {Array(6).fill(null).map((_, index) => (
                <div style={imageContainerStyle} key={index}>
                  <img src={mainImageURL} alt="Portrait" style={mainImageStyle} />
                  <span style={nameTextStyle}>Name</span>
                  <img src={smallImageURL} alt="LinkedIn" style={smallImageStyle} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div style={footerStyle}></div>
    </>
  );
}
