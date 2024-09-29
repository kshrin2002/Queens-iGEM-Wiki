import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export function Entrepreneurship() {
  return (
    <>
      <EntrepreneurshipHeading />
      <OverviewSection />
      <Timeline />
      <ReferenceSection />
      <BackToTopButton />
    </>
  );
}

const OverviewSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#FE9BA1',
        color: 'white',
        padding: '20px',
        marginTop: '100px',
        width: '100%',
        height: '350px',
        marginBottom: '100px',
      }}
    >
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

const EntrepreneurshipHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        ENTREPRENEURSHIP
      </h1>
    </div>
  );
};

const Timeline: React.FC = () => {
  const stages = [
    'PRE-SEED STAGE',
    'SEED STAGE',
    'EARLY STAGE',
    'GROWTH STAGE',
    'LATE STAGE'
  ];

  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [boxStyle, setBoxStyle] = useState({
    width: '150px',
    height: '50px',
    padding: '5px',
  });
  const [boxPosition, setBoxPosition] = useState<'left' | 'right'>('right'); // Track left or right

  const handleStageClick = (stage: string) => {
    if (isAnimating) return;

    const index = stages.indexOf(stage);
    const isEvenStage = index % 2 === 1; // Even stage check (1-based index)
    const position = isEvenStage ? 'left' : 'right';

    if (selectedStage && selectedStage !== stage) {
      setIsAnimating(true);
      setBoxStyle(prev => ({ ...prev, height: '30px', padding: '5px' }));
      setTimeout(() => {
        setBoxStyle(prev => ({ ...prev, width: '80px' }));
        setTimeout(() => {
          openBox(stage, position);
        }, 300);
      }, 300);
    } else if (selectedStage === stage) {
      closeBox();
    } else {
      openBox(stage, position);
    }
  };

  const openBox = (stage: string, position: 'left' | 'right') => {
    setSelectedStage(stage);
    setIsAnimating(true);
    setBoxPosition(position); // Set box to open on the left or right side

    // Expand width first
    setBoxStyle(prev => ({ ...prev, width: '40%' }));
    setTimeout(() => {
      // Then expand the height and padding
      setBoxStyle(prev => ({ ...prev, height: '75vh', padding: '20px' }));
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  const closeBox = () => {
    setIsAnimating(true);
    setBoxStyle(prev => ({ ...prev, height: '30px', padding: '5px' }));
    setTimeout(() => {
      setBoxStyle(prev => ({ ...prev, width: '80px' }));
      setTimeout(() => {
        setSelectedStage(null);
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '3.5em', margin: '0', color: '#590000' }}>Timeline</h1>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 'calc(50% + 120px)',
            right: '0',
            height: '6px',
            backgroundColor: '#590000',
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '12vh',
          width: '6px',
          height: '90vh',
          backgroundColor: '#590000',
        }}
      >
        {stages.map((stage, index) => (
          <button
            key={index}
            onClick={() => handleStageClick(stage)}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: `${index * 20}vh`, // Adjust the spacing based on the number of stages
              backgroundColor: selectedStage === stage ? '#a00000' : '#590000',
              color: '#fff',
              padding: '5px 15px',
              borderRadius: '25px',
              fontSize: '1.2em',
              fontWeight: 'bold',
              textAlign: 'center',
              width: '80px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {stage}
          </button>
        ))}
      </div>

      {selectedStage && (
        <div
          style={{
            position: 'absolute',
            top: '20vh',
            // Set box on the left or right of the timeline based on the stage
            left: boxPosition === 'right' ? 'calc(50% + 120px)' : 'auto',
            right: boxPosition === 'left' ? 'calc(50% + 120px)' : 'auto',
            backgroundColor: '#fff',
            border: '2px solid #590000',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            ...boxStyle,
            transition: 'width 0.3s ease, height 0.3s ease, padding 0.3s ease',
            zIndex: 2,
          }}
        >
          <h2 style={{ margin: '0', color: '#590000' }}>{selectedStage}</h2>
          <p>Details about {selectedStage} go here.</p>
          <button onClick={closeBox} style={{ marginTop: '10px', backgroundColor: '#590000', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>Close</button>
        </div>
      )}
    </div>
  );
};

const ReferenceSection: React.FC = () => {
  return (
    <section>
      <h2>References</h2>
      <p>Some references will be listed here.</p>
    </section>
  );
};

const BackToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#590000',
        color: 'white',
      }}
    >
      Back to Top
    </Button>
  );
};
export default Entrepreneurship;
