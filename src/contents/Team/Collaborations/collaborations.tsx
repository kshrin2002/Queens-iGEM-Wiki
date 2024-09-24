import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Card, Row, Col, Container } from "react-bootstrap";
import './collaboration.css'; // Assuming design.css holds your custom styles

gsap.registerPlugin(ScrollTrigger);

export function Collaborations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel") as HTMLElement[];

    if (containerRef.current) {
      // Horizontal scroll trigger with pinning
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        start: "top top", // Pin the container when it hits the top of the viewport
        end: () => "+=" + containerRef.current!.scrollWidth, // Scroll for the width of the container
        invalidateOnRefresh: true,
      });

      // Horizontal scrolling animation
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 0.2,
          start: "top top", // Start horizontal scroll when container hits the top of the viewport
          end: () => "+=" + containerRef.current!.scrollWidth,
          anticipatePin: 1,
        },
      });
    }

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Inline styles for the components
  const styles = {
    html: {
      overflowX: "hidden" as "hidden",
      height: "100%",
    },
    body: {
      overflow: "visible",
      position: "relative" as "relative",
      height: "100vh",
      margin: 0,
    },
    container: {
      width: "400vw", // Total width for 4 sections
      height: "100vh",
      display: "flex",
      flexDirection: "row" as "row", // Horizontal layout
      flexWrap: "nowrap" as "nowrap",
      position: "relative", // Ensure relative positioning
      left: 0,
      padding: 0,
      margin: 0,
    },
    firstContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Align content to the top
      alignItems: "center",
      height: "100vh",
      background: "white", // White background
      margin: 0,
      paddingTop: "50px", // Add some padding at the top
      position: "relative",
    },
    title: {
      color: "#A80505", // Bold red color
      fontSize: "8rem", // Adjusted font size
      fontWeight: "bold" as "bold",
      textAlign: "center" as "center",
      marginBottom: "20px", // Add space between title and other content
    },
    lastContainer: {
      display: "flex",
      height: "100vh",
      background: "yellow",
    },
    panel: {
      flex: "0 0 100vw", // Each panel takes full viewport width
      height: "100vh",   // Each panel takes full viewport height
      boxSizing: "border-box", // Ensure padding does not affect panel size
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white", // Make all panels' background white
    },
  };

  return (
    <>
      <div style={styles.firstContainer}>
        <h1 style={styles.title}>Collaborations</h1>
      </div>
      <div className="container" ref={containerRef} style={styles.container}>
        <section className="panel blue" style={styles.panel}>
          <CardSection title="Section 1" />
        </section>
        <section className="panel red" style={styles.panel}>
          <CardSection title="Section 2" />
        </section>
        <section className="panel orange" style={styles.panel}>
          <CardSection title="Section 3" />
        </section>
        <section className="panel purple" style={styles.panel}>
          <CardSection title="Section 4" />
        </section>
      </div>
    </>
  );
}

// CardSection component used in each horizontal section
const CardSection: React.FC<{ title: string }> = ({ title }) => {
  const placeholderImage = "https://via.placeholder.com/150"; // Placeholder image for now
  return (
    <Container fluid className="card-container">
      <Card className="custom-card">
        <Card.Body>
          <Card.Title className="center-title">{title}</Card.Title>
          <Row>
            <Col xs={8} className="text-container">
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mauris eros.
              </Card.Text>
            </Col>
            <Col xs={4}>
              <img src={placeholderImage} alt={`Image for ${title}`} style={{ width: '100%', height: 'auto' }} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
