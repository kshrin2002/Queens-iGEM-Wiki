import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./attributions.css"; // Import the CSS file

export function Attributions() {
  return (
    <>
      <div className="main" style={{ paddingBottom: "0", marginBottom: "0" }}>
        <DesignHeading />
        <div className="main-content">
          <Sidebar />
          <CardSection />
        </div>
        <Timeline />
      </div>
    </>
  );
}

const DesignHeading: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "138px" }}>
      <h1
        style={{
          fontSize: "7em",
          color: "#590000",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        ATTRIBUTIONS
      </h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const sections = [
    {
      name: "External Contributors",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Team Lead",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Wet Lab",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Dry Lab",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
    {
      name: "Human Practices",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
    },
  ];

  return (
    <div className="sidebar">
      <ul>
        {sections.map((section, index) => (
          <li
            key={index}
            onClick={() =>
              document
                .getElementById(`section-${index}`)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <img
              src={section.image}
              alt={section.name}
              className="section-image"
            />
            <span>{section.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardSection: React.FC = () => {
  const sections = [
    "External Contributors",
    "Team Lead",
    "Wet Lab",
    "Dry Lab",
    "Human Practices",
  ];
  const placeholderImage = "https://via.placeholder.com/150";

  const [selectedHeadshot1, setSelectedHeadshot1] = useState<number | null>(
    null
  );
  const [selectedHeadshot3, setSelectedHeadshot3] = useState<number | null>(
    null
  );
  const [selectedHeadshot4, setSelectedHeadshot4] = useState<number | null>(
    null
  );
  const [selectedHeadshot5, setSelectedHeadshot5] = useState<number | null>(
    null
  );

  const paragraphs = {
    1: [
      "Paragraph for headshot 1 in section 1.",
      "Paragraph for headshot 2 in section 1.",
      "Paragraph for headshot 3 in section 1.",
    ],
    3: [
      "Paragraph for headshot 1 in section 3.",
      "Paragraph for headshot 2 in section 3.",
      "Paragraph for headshot 3 in section 3.",
      "Paragraph for headshot 4 in section 3.",
      "Paragraph for headshot 5 in section 3.",
      "Paragraph for headshot 6 in section 3.",
      "Paragraph for the first Team Lead in section 3.",
      "Paragraph for the second Team Lead in section 3.",
    ],
    4: [
      "Paragraph for headshot 1 in section 4.",
      "Paragraph for headshot 2 in section 4.",
      "Paragraph for headshot 3 in section 4.",
      "Paragraph for headshot 4 in section 4.",
      "Paragraph for headshot 5 in section 4.",
      "Paragraph for headshot 6 in section 4.",
      "Paragraph for the first Team Lead in section 4.",
      "Paragraph for the second Team Lead in section 4.",
    ],
    5: [
      "Paragraph for headshot 1 in section 5.",
      "Paragraph for headshot 2 in section 5.",
      "Paragraph for headshot 3 in section 5.",
      "Paragraph for headshot 4 in section 5.",
      "Paragraph for headshot 5 in section 5.",
      "Paragraph for headshot 6 in section 5.",
      "Paragraph for the first Team Lead in section 5.",
      "Paragraph for the second Team Lead in section 5.",
    ],
  };

  return (
    <Container
      fluid
      className="card-container"
      style={{ paddingBottom: "0", marginBottom: "0" }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          id={`section-${index}`}
          className="card-wrapper"
          style={{ marginBottom: "0" }}
        >
          <Card
            className="custom-card"
            style={{
              border: "none",
              ...(index === 0 ? { minHeight: "700px" } : {}),
              ...(index >= 2 ? { minHeight: "1250px" } : {}),
            }}
          >
            <Card.Header
              style={{
                fontSize: "3.5em",
                fontWeight: "bold",
                color: "#590000",
                textAlign: "left",
                backgroundColor: "transparent",
                borderBottom: "none",
                paddingBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span>{section}</span>
              <div
                style={{
                  flexGrow: 1,
                  height: "0.1em",
                  backgroundColor: "#590000",
                  marginLeft: "10px",
                }}
              ></div>
            </Card.Header>

            <Card.Body
              style={
                index === 0
                  ? { padding: "30px", minHeight: "600px" }
                  : { padding: "30px" }
              }
            >
              <Row>
                {/* Content for External Contributors (Section 1) */}
                {index === 0 && (
                  <>
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[1, 2, 3].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot1(idx)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                          <p style={{ color: "#8B0000" }}>ROLE</p>
                        </Col>
                      ))}
                    </Row>

                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot1 !== null
                          ? paragraphs[1][selectedHeadshot1]
                          : "Click on a headshot to see the description."}
                      </p>
                    </div>
                  </>
                )}

                {/* Section 3: Wet Lab */}
                {index === 2 && (
                  <>
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[6, 7].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot3(6 + idx)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Team Lead Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                          <p style={{ color: "#8B0000" }}>Team Leads</p>
                        </Col>
                      ))}
                    </Row>

                    <Row
                      className="mt-4"
                      style={{
                        justifyContent: "space-around",
                        marginTop: "50px",
                      }}
                    >
                      {[1, 2, 3].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot3(idx)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[4, 5, 6].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot3(idx + 3)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot3 !== null
                          ? paragraphs[3][selectedHeadshot3]
                          : "Click on a headshot to see the description."}
                      </p>
                    </div>
                  </>
                )}

                {/* Section 4: Dry Lab */}
                {index === 3 && (
                  <>
                    <Row className="mt-4" style={{ justifyContent: "center" }}>
                      <Col
                        xs={12}
                        md={3}
                        lg={2}
                        style={{ textAlign: "center" }}
                      >
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                          }}
                          onClick={() => setSelectedHeadshot4(6)}
                        >
                          <img
                            src={placeholderImage}
                            alt="Team Lead Headshot"
                            style={{
                              width: "200px",
                              height: "200px",
                              borderRadius: "50%",
                            }}
                          />
                        </button>
                        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                          NAME
                        </p>
                        <p style={{ color: "#8B0000" }}>Team Lead</p>
                      </Col>
                    </Row>

                    <Row
                      className="mt-4"
                      style={{
                        justifyContent: "space-around",
                        marginTop: "50px",
                      }}
                    >
                      {[1, 2, 3].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot4(idx)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[4, 5, 6].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot4(idx + 3)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot4 !== null
                          ? paragraphs[4][selectedHeadshot4]
                          : "Click on a headshot to see the description."}
                      </p>
                    </div>
                  </>
                )}

                {/* Section 5: Human Practices */}
                {index === 4 && (
                  <>
                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[6, 7].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot5(6 + idx)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Team Lead Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                          <p style={{ color: "#8B0000" }}>Team Leads</p>
                        </Col>
                      ))}
                    </Row>

                    <Row
                      className="mt-4"
                      style={{
                        justifyContent: "space-around",
                        marginTop: "50px",
                      }}
                    >
                      {[1, 2, 3].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot5(idx)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <Row
                      className="mt-4"
                      style={{ justifyContent: "space-around" }}
                    >
                      {[4, 5, 6].map((headshot, idx) => (
                        <Col
                          key={idx}
                          xs={4}
                          md={3}
                          lg={2}
                          style={{ textAlign: "center" }}
                        >
                          <button
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => setSelectedHeadshot5(idx + 3)}
                          >
                            <img
                              src={placeholderImage}
                              alt={`Headshot ${headshot}`}
                              style={{
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%",
                              }}
                            />
                          </button>
                          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                            NAME
                          </p>
                        </Col>
                      ))}
                    </Row>

                    <div
                      className="mt-4"
                      style={{
                        textAlign: "left",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      <p>
                        {selectedHeadshot5 !== null
                          ? paragraphs[5][selectedHeadshot5]
                          : "Click on a headshot to see the description."}
                      </p>
                    </div>
                  </>
                )}

                {index === 1 && (
                  <>
                    <Col xs={12} md={3} style={{ textAlign: "center" }}>
                      <div style={{ marginTop: "20px" }}>
                        <img
                          src={placeholderImage}
                          alt={`Headshot`}
                          style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                          }}
                        />
                        <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                          NAME
                        </p>
                      </div>
                    </Col>

                    <Col xs={12} md={9}>
                      <div
                        style={{
                          textAlign: "left",
                          marginTop: "30px",
                          marginLeft: "30px",
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
};

const Timeline: React.FC = () => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [boxStyle, setBoxStyle] = useState({
    width: '80px',
    height: '30px',
    padding: '5px',
  });
  const [boxPosition, setBoxPosition] = useState<'left' | 'right'>('right'); // Track left or right

  const handleMonthClick = (month: string, index: number) => {
    if (isAnimating) return;

    const isEvenMonth = index % 2 === 1; // Even month check (1-based index)
    const position = isEvenMonth ? 'left' : 'right';

    if (selectedMonth && selectedMonth !== month) {
      setIsClosing(true);
      setIsAnimating(true);
      setBoxStyle(prev => ({ ...prev, height: '30px', padding: '5px' }));
      setTimeout(() => {
        setBoxStyle(prev => ({ ...prev, width: '80px' }));
        setTimeout(() => {
          openBox(month, index, position);
        }, 300);
      }, 300);
    } else if (selectedMonth === month) {
      closeBox();
    } else {
      openBox(month, index, position);
    }
  };

  const openBox = (month: string, index: number, position: 'left' | 'right') => {
    setSelectedMonth(month);
    setIsAnimating(true);
    setIsClosing(false);
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
    setIsClosing(true);
    setIsAnimating(true);
    setBoxStyle(prev => ({ ...prev, height: '30px', padding: '5px' }));
    setTimeout(() => {
      setBoxStyle(prev => ({ ...prev, width: '80px' }));
      setTimeout(() => {
        setSelectedMonth(null);
        setIsAnimating(false);
        setIsClosing(false);
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
        {months.map((month, index) => (
          <button
            key={index}
            onClick={() => handleMonthClick(month, index)}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: `${index * 8}vh`,
              backgroundColor: selectedMonth === month ? '#a00000' : '#590000',
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
            {month}
          </button>
        ))}
      </div>

      {selectedMonth && (
        <div
          style={{
            position: 'absolute',
            top: '20vh',
            // Set box on the left or right of the timeline based on the month
            left: boxPosition === 'right' ? 'calc(50% + 120px)' : 'auto',
            right: boxPosition === 'left' ? 'calc(50% + 120px)' : 'auto',
            backgroundColor: '#fff',
            border: '2px solid #590000',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            ...boxStyle,
            transition: 'width 0.3s ease, height 0.3s ease, padding 0.3s ease',
          }}
        >
          {!isClosing && (
            <>
              <h2 style={{ color: '#590000' }}>{selectedMonth} Details</h2>
              <p>
                This is the text content for the month of {selectedMonth}. You can fill this box with any
                details, such as events, data, or notes for the selected month.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Attributions;
