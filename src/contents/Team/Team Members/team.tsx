import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const sections = gsap.utils.toArray(".team-panel") as HTMLElement[];

    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5, // Faster scroll
        start: "top top",
        end: () => "+=" + containerRef.current!.scrollWidth,
        invalidateOnRefresh: true,
      });

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

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    gsap.fromTo(modalRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setIsModalOpen(false),
    });
  };

  return (
    <>
      <div className="team-header-container">
        <h1 className="team-header">Team Members</h1>
      </div>

      <div className="team-first-container">
        <div className="team-content">
          <h2>Principal Investigator</h2>
        </div>
        <div className="team-headshot-container">
          <button className="PI-headshot-button" onClick={openModal}>
            <img
              src="https://via.placeholder.com/150" /* Replace with your image path */
              alt="Headshot"
              className="PI-headshot"
            />
          </button>
          <div className="PI-name">Dr. Christopher Lohans</div>
        </div>
      </div>

      <div className="team-container" ref={containerRef}>
        <div className="description team-panel team-blue-panel">
          <h1 className="advisor-header">Advisors</h1>
        </div>
        <section className="team-panel team-red-panel">
          <h1 className="advisor-header">Exec Team</h1>
        </section>
        <section className="team-panel team-orange-panel">
          <h1 className="advisor-header">Wet Lab</h1>
        </section>
        <section className="team-panel team-purple-panel">
          <h1 className="advisor-header">Dry Lab</h1>
        </section>
        <section className="team-panel team-green-panel">
          <h1 className="advisor-header">Human Practices</h1>
        </section>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <div className="modal-text">
              <h2>About Dr. Christopher Lohans</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                luctus urna sed urna ultricies ac tempor dui sagittis. In
                condimentum facilisis porta. Sed nec diam eu diam mattis viverra
                nulla.
              </p>
              <p>
                Integer in magna eu diam aliquet hendrerit. Ut ullamcorper velit
                ut dui convallis viverra. Donec vitae sapien ut libero venenatis
                faucibus. Nullam quis ante.
              </p>
              <p>
                Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; In ac dui quis mi consectetuer lacinia.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/150" /* Replace with your image path */
              alt="Headshot"
              className="PI-headshot-modal"
            />
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
