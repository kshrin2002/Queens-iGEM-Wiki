import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', text: '', image: '' });

  useEffect(() => {
    const sections = gsap.utils.toArray(".team-panel") as HTMLElement[];

    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5, 
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const openModal = (title: string, text: string, image: string) => {
    setModalContent({ title, text, image });
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
          <button className="PI-headshot-button" onClick={() => openModal('Dr. Christopher Lohans', 'About Dr. Christopher Lohans...', 'https://via.placeholder.com/150')}>
            <img
              src="https://via.placeholder.com/150" 
              alt="Headshot"
              className="PI-headshot"
            />
          </button>
          <div className="PI-name">Dr. Christopher Lohans</div>
        </div>
      </div>

      <div className="team-container" ref={containerRef}>
        {/* Advisors Section */}
        <div className="description team-panel team-blue-panel">
          <h1 className="advisor-header">Advisors</h1>
          <div className="advisor-headshots-container">
            <div className="advisor-headshot">
              <button className="advisor-headshot-button" onClick={() => openModal('Advisor 1', 'About Advisor 1...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Advisor 1"
                  className="advisor-headshot-img"
                />
              </button>
              <div className="advisor-name">Advisor 1</div>
              <div className="advisor-role">Role</div>
            </div>
            <div className="advisor-headshot">
              <button className="advisor-headshot-button" onClick={() => openModal('Advisor 2', 'About Advisor 2...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Advisor 2"
                  className="advisor-headshot-img"
                />
              </button>
              <div className="advisor-name">Advisor 2</div>
              <div className="advisor-role">Role</div>
            </div>
            <div className="advisor-headshot">
              <button className="advisor-headshot-button" onClick={() => openModal('Advisor 3', 'About Advisor 3...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Advisor 3"
                  className="advisor-headshot-img"
                />
              </button>
              <div className="advisor-name">Advisor 3</div>
              <div className="advisor-role">Role</div>
            </div>
          </div>
        </div>

        {/* Exec Team Section */}
        <section className="team-panel team-exec-panel">
          <h1 className="exec-header">Exec Team</h1>
          
          {/* Team Lead */}
          <div className="team-lead-container">
            <button className="team-lead-button" onClick={() => openModal('Team Lead', 'About Team Lead...', 'https://via.placeholder.com/150')}>
              <img
                src="https://via.placeholder.com/150" /* Replace with team lead image */
                alt="Team Lead"
                className="team-lead-headshot"
              />
            </button>
            <div className="team-lead-name">Team Lead</div>
            <div className="team-lead-role">Team Lead</div>
          </div>

          {/* Exec Members */}
          <div className="exec-headshots-container">
            <div className="exec-headshot">
              <button className="exec-headshot-button" onClick={() => openModal('Exec Member 1', 'About Exec Member 1...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Exec Member 1"
                  className="exec-headshot-img"
                />
              </button>
              <div className="exec-name">Exec Member 1</div>
              <div className="exec-role">Wet Lab Co-Lead</div>
            </div>
            <div className="exec-headshot">
              <button className="exec-headshot-button" onClick={() => openModal('Exec Member 2', 'About Exec Member 2...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Exec Member 2"
                  className="exec-headshot-img"
                />
              </button>
              <div className="exec-name">Exec Member 2</div>
              <div className="exec-role">Wet Lab Co-Lead</div>
            </div>
            <div className="exec-headshot">
              <button className="exec-headshot-button" onClick={() => openModal('Exec Member 3', 'About Exec Member 3...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Exec Member 3"
                  className="exec-headshot-img"
                />
              </button>
              <div className="exec-name">Exec Member 3</div>
              <div className="exec-role">Dry Lab Lead</div>
            </div>
            <div className="exec-headshot">
              <button className="exec-headshot-button" onClick={() => openModal('Exec Member 4', 'About Exec Member 4...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Exec Member 4"
                  className="exec-headshot-img"
                />
              </button>
              <div className="exec-name">Exec Member 4</div>
              <div className="exec-role">Human Practices Co-Lead</div>
            </div>
            <div className="exec-headshot">
              <button className="exec-headshot-button" onClick={() => openModal('Exec Member 5', 'About Exec Member 5...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Exec Member 5"
                  className="exec-headshot-img"
                />
              </button>
              <div className="exec-name">Exec Member 5</div>
              <div className="exec-role">Human Practices Co-Lead</div>
            </div>
          </div>
        </section>

        {/* Wet Lab Section */}
        <section className="team-panel team-wetlab-panel">
          <h1 className="wetlab-header">Wet Lab</h1>
          
          <div className="wetlab-headshots-container">
            <div className="wetlab-headshot">
              <button className="wetlab-headshot-button" onClick={() => openModal('Wet Lab Member 1', 'About Wet Lab Member 1...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Wet Lab Member 1"
                  className="wetlab-headshot-img"
                />
              </button>
              <div className="wetlab-name">Wet Lab Member 1</div>
            </div>
            <div className="wetlab-headshot">
              <button className="wetlab-headshot-button" onClick={() => openModal('Wet Lab Member 2', 'About Wet Lab Member 2...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Wet Lab Member 2"
                  className="wetlab-headshot-img"
                />
              </button>
              <div className="wetlab-name">Wet Lab Member 2</div>
            </div>
            <div className="wetlab-headshot">
              <button className="wetlab-headshot-button" onClick={() => openModal('Wet Lab Member 3', 'About Wet Lab Member 3...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Wet Lab Member 3"
                  className="wetlab-headshot-img"
                />
              </button>
              <div className="wetlab-name">Wet Lab Member 3</div>
            </div>
          </div>

          <div className="wetlab-headshots-container">
            <div className="wetlab-headshot">
              <button className="wetlab-headshot-button" onClick={() => openModal('Wet Lab Member 4', 'About Wet Lab Member 4...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Wet Lab Member 4"
                  className="wetlab-headshot-img"
                />
              </button>
              <div className="wetlab-name">Wet Lab Member 4</div>
            </div>
            <div className="wetlab-headshot">
              <button className="wetlab-headshot-button" onClick={() => openModal('Wet Lab Member 5', 'About Wet Lab Member 5...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Wet Lab Member 5"
                  className="wetlab-headshot-img"
                />
              </button>
              <div className="wetlab-name">Wet Lab Member 5</div>
            </div>
            <div className="wetlab-headshot">
              <button className="wetlab-headshot-button" onClick={() => openModal('Wet Lab Member 6', 'About Wet Lab Member 6...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Wet Lab Member 6"
                  className="wetlab-headshot-img"
                />
              </button>
              <div className="wetlab-name">Wet Lab Member 6</div>
            </div>
          </div>
        </section>

        {/* Dry Lab Section (Copied Wet Lab Structure) */}
        <section className="team-panel team-drylab-panel">
          <h1 className="drylab-header">Dry Lab</h1>
          
          <div className="drylab-headshots-container">
            <div className="drylab-headshot">
              <button className="drylab-headshot-button" onClick={() => openModal('Dry Lab Member 1', 'About Dry Lab Member 1...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Dry Lab Member 1"
                  className="drylab-headshot-img"
                />
              </button>
              <div className="drylab-name">Dry Lab Member 1</div>
            </div>
            <div className="drylab-headshot">
              <button className="drylab-headshot-button" onClick={() => openModal('Dry Lab Member 2', 'About Dry Lab Member 2...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Dry Lab Member 2"
                  className="drylab-headshot-img"
                />
              </button>
              <div className="drylab-name">Dry Lab Member 2</div>
            </div>
            <div className="drylab-headshot">
              <button className="drylab-headshot-button" onClick={() => openModal('Dry Lab Member 3', 'About Dry Lab Member 3...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Dry Lab Member 3"
                  className="drylab-headshot-img"
                />
              </button>
              <div className="drylab-name">Dry Lab Member 3</div>
            </div>
          </div>

          <div className="drylab-headshots-container">
            <div className="drylab-headshot">
              <button className="drylab-headshot-button" onClick={() => openModal('Dry Lab Member 4', 'About Dry Lab Member 4...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Dry Lab Member 4"
                  className="drylab-headshot-img"
                />
              </button>
              <div className="drylab-name">Dry Lab Member 4</div>
            </div>
            <div className="drylab-headshot">
              <button className="drylab-headshot-button" onClick={() => openModal('Dry Lab Member 5', 'About Dry Lab Member 5...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Dry Lab Member 5"
                  className="drylab-headshot-img"
                />
              </button>
              <div className="drylab-name">Dry Lab Member 5</div>
            </div>
            <div className="drylab-headshot">
              <button className="drylab-headshot-button" onClick={() => openModal('Dry Lab Member 6', 'About Dry Lab Member 6...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Dry Lab Member 6"
                  className="drylab-headshot-img"
                />
              </button>
              <div className="drylab-name">Dry Lab Member 6</div>
            </div>
          </div>
        </section>

        {/* Human Practices Section (Copied Wet Lab Structure) */}
        <section className="team-panel team-humanpractices-panel">
          <h1 className="humanpractices-header">Human Practices</h1>
          
          <div className="humanpractices-headshots-container">
            <div className="humanpractices-headshot">
              <button className="humanpractices-headshot-button" onClick={() => openModal('Human Practices Member 1', 'About Human Practices Member 1...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Human Practices Member 1"
                  className="humanpractices-headshot-img"
                />
              </button>
              <div className="humanpractices-name">Human Practices Member 1</div>
            </div>
            <div className="humanpractices-headshot">
              <button className="humanpractices-headshot-button" onClick={() => openModal('Human Practices Member 2', 'About Human Practices Member 2...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Human Practices Member 2"
                  className="humanpractices-headshot-img"
                />
              </button>
              <div className="humanpractices-name">Human Practices Member 2</div>
            </div>
            <div className="humanpractices-headshot">
              <button className="humanpractices-headshot-button" onClick={() => openModal('Human Practices Member 3', 'About Human Practices Member 3...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Human Practices Member 3"
                  className="humanpractices-headshot-img"
                />
              </button>
              <div className="humanpractices-name">Human Practices Member 3</div>
            </div>
          </div>

          <div className="humanpractices-headshots-container">
            <div className="humanpractices-headshot">
              <button className="humanpractices-headshot-button" onClick={() => openModal('Human Practices Member 4', 'About Human Practices Member 4...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Human Practices Member 4"
                  className="humanpractices-headshot-img"
                />
              </button>
              <div className="humanpractices-name">Human Practices Member 4</div>
            </div>
            <div className="humanpractices-headshot">
              <button className="humanpractices-headshot-button" onClick={() => openModal('Human Practices Member 5', 'About Human Practices Member 5...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Human Practices Member 5"
                  className="humanpractices-headshot-img"
                />
              </button>
              <div className="humanpractices-name">Human Practices Member 5</div>
            </div>
            <div className="humanpractices-headshot">
              <button className="humanpractices-headshot-button" onClick={() => openModal('Human Practices Member 6', 'About Human Practices Member 6...', 'https://via.placeholder.com/150')}>
                <img
                  src="https://via.placeholder.com/150" /* Replace with actual image */
                  alt="Human Practices Member 6"
                  className="humanpractices-headshot-img"
                />
              </button>
              <div className="humanpractices-name">Human Practices Member 6</div>
            </div>
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-top-left">
              <h2>{modalContent.title}</h2>
            </div>
            <div className="modal-text">
              <p>{modalContent.text}</p>
            </div>
            <img
              src={modalContent.image}
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
