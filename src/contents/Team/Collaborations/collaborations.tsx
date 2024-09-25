import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Card, Row, Col, Container } from "react-bootstrap";
import './collaboration.css';

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
        start: "top top",
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
          start: "top top",
          end: () => "+=" + containerRef.current!.scrollWidth,
          anticipatePin: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="collaborations-first-container">
        <h1 className="collaborations-title">Collaborations</h1>
        {/* Embed the image under the main "Collaborations" title */}
        <img 
          src="https://static.igem.wiki/teams/5079/colabmapchart.png" 
          alt="Collaboration Map Chart" 
          style={{ width: '80%', height: 'auto', marginTop: '20px' }}
        />
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
      <Card className="custom-card" style={{ borderColor: 'ff1837', borderWidth: '2px', borderStyle: 'solid' }}>
        <Card.Body>
          <Card.Title className="center-title" style={{ color: '#ff1837' }}>{title}</Card.Title>
          <Row className="align-items-center">
            <Col xs={6} className="text-container">
              <Card.Text style={{ color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel mauris eros. 
                Vivamus eu augue vel felis dictum sollicitudin. Curabitur blandit, mauris vel ornare feugiat, 
                velit justo dictum sapien, at mollis erat leo in lorem. Integer placerat bibendum purus, 
                sit amet pharetra justo sollicitudin ut. Sed ultricies libero a neque fringilla, 
                at viverra metus congue. Nullam vitae libero lacinia, ultricies eros nec, feugiat odio.
              </Card.Text>
            </Col>

            <Col xs={6}>
              <img src={placeholderImage} alt={`Image for ${title}`} style={{ width: '100%', height: 'auto' }} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
