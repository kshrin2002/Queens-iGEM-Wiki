import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Card, Row, Col, Container } from "react-bootstrap";
import './collaboration.css'; // Assuming collaboration.css holds your custom styles

gsap.registerPlugin(ScrollTrigger);

export function Collaborations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".collaborations-panel") as HTMLElement[];

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

  return (
    <>
      <div className="collaborations-first-container">
        <h1 className="collaborations-title">Collaborations</h1>
      </div>
      <div className="collaborations-container" ref={containerRef}>
        <section className="collaborations-panel blue">
          <CardSection title="Section 1" />
        </section>
        <section className="collaborations-panel red">
          <CardSection title="Section 2" />
        </section>
        <section className="collaborations-panel orange">
          <CardSection title="Section 3" />
        </section>
        <section className="collaborations-panel purple">
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
