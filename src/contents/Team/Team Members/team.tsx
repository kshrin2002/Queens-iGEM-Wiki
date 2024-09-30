import { useState, useEffect, useRef } from "react";
import "./Team.css";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

type PersonData = {
  name: string;
  role: string;
  bio: string;
};

export function Team() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"top" | "bottom">(
    "bottom"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<PersonData | null>(null);

  // Define the peopleData type explicitly
  const peopleData: Record<string, PersonData> = {
    "Dr. Chris Lohans": {
      name: "Dr. Chris Lohans",
      role: "Principal Investigator",
      bio: "Place Holder Text",
    },
    "Dr. John Doe": {
      name: "Dr. John Doe",
      role: "Senior Advisor",
      bio: "Place Holder Text",
    },
    "Dr. Jane Smith": {
      name: "Dr. Jane Smith",
      role: "Technical Advisor",
      bio: "Place Holder Text",
    },
    "Youzi Bi": {
      name: "Youzi Bi",
      role: "Consultant",
      bio: "Place Holder Text",
    },
    "Mariam El-Behiry": {
      name: "Mariam El-Behiry",
      role: "Team Lead",
      bio: "Place Holder Text",
    },
    "Zain Ali": {
      name: "Zain Ali",
      role: "Wet Lab Co-Lead",
      bio: "Place Holder Text",
    },
    "Marianna Florez Camacho": {
      name: "Marianna Florez Camacho",
      role: "Wet Lab Co-Lead",
      bio: "Place Holder Text",
    },
    "Aden Wong": {
      name: "Aden Wong",
      role: "Dry Lab Lead",
      bio: "Place Holder Text",
    },
    "Stephanie Tong": {
      name: "Stephanie Tong",
      role: "Human Practices Co-Lead",
      bio: "Place Holder Text",
    },
    "Claire Bunker": {
      name: "Claire Bunker",
      role: "Human Practices Co-Lead",
      bio: "Place Holder Text",
    },
    // Wet Lab Members
    "Cole Noble": {
      name: "Cole Noble",
      role: "Wet Lab Member",
      bio: "Place Holder Text",
    },
    "Cole Sandler": {
      name: "Cole Sandler",
      role: "Wet Lab Member",
      bio: "Place Holder Text",
    },
    "Emmaley Hunter": {
      name: "Emmaley Hunter",
      role: "Wet Lab Member",
      bio: "Place Holder Text",
    },
    "Claire Tan": {
      name: "Claire Tan",
      role: "Wet Lab Member",
      bio: "Place Holder Text",
    },
    "Jason Song": {
      name: "Jason Song",
      role: "Wet Lab Member",
      bio: "Place Holder Text",
    },
    "Isabella Perini": {
      name: "Isabella Perini",
      role: "Wet Lab Member",
      bio: "Place Holder Text",
    },
    "Yasmine Farah": {
      name: "Yasmine Farah",
      role: "Wet Lab Member",
      bio: "Place Holder Text",
    },
    // Dry Lab Members
    "Shri": {
      name: "Shri",
      role: "Dry Lab Member",
      bio: "Place Holder Text",
    },
    "Tigh Gallagher": {
      name: "Tigh Gallagher",
      role: "Dry Lab Member",
      bio: "Place Holder Text",
    },
    "Victor Chowdhury": {
      name: "Victor Chowdhury",
      role: "Dry Lab Member",
      bio: "Place Holder Text",
    },
    "Dylan Rietze": {
      name: "Dylan Rietze",
      role: "Dry Lab Member",
      bio: "Place Holder Text",
    },
    "Ali Cotten": {
      name: "Ali Cotten",
      role: "Dry Lab Member",
      bio: "Place Holder Text",
    },
    // Human Practices Members
    "Lindsay Yu": {
      name: "Lindsay Yu",
      role: "Human Practices Member",
      bio: "Place Holder Text",
    },
    "Stella Pesut": {
      name: "Stella Pesut",
      role: "Human Practices Member",
      bio: "Place Holder Text",
    },
    "Sophie Spicer": {
      name: "Sophie Spicer",
      role: "Human Practices Member",
      bio: "Place Holder Text",
    },
    "Hannah": {
      name: "Hannah",
      role: "Human Practices Member",
      bio: "Place Holder Text",
    },
  };

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage]);

  const toggleScroll = () => {
    const target =
      scrollDirection === "bottom" ? document.body.scrollHeight : 0;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
    setScrollDirection((prev) => (prev === "bottom" ? "top" : "bottom"));
  };

  const handleHeadshotClick = (personName: string) => {
    const person = peopleData[personName];
    if (person) {
      setSelectedPerson(person);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  const pageHeaders = [
    "Team Members",
    "Advisors",
    "Team Leads",
    "Wet Lab",
    "Dry Lab",
    "Human Practices",
  ];

  return (
    <div className="engineering-container">
      <div
        className="page-wrapper"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
          width: `${totalPages * 100}vw`,
        }}
        ref={containerRef}
      >
        {pageHeaders.map((header, index) => (
          <div
            className="page"
            key={index}
            style={{ width: "100vw", height: "100vh" }}
          >
            <h1 className="page-header">{header}</h1>

            {/* Principal Investigator Section */}
            {index === 0 ? (
              <div className="two-column-layout">
                <div className="left-column">
                  <h2 className="sub-header">Principal Investigator</h2>
                </div>
                <div className="right-column">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Principal Investigator"
                    className="headshot"
                    onClick={() => handleHeadshotClick("Dr. Chris Lohans")}
                  />
                  <p className="pi-name">Dr. Chris Lohans</p>
                </div>
              </div>
            ) : index === 1 ? (
              // Advisors Section
              <div className="advisors-layout">
                <div className="advisor-headshot">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Advisor 3"
                    className="advisor-img"
                    onClick={() => handleHeadshotClick("Youzi Bi")}
                  />
                  <p className="advisor-name">Youzi Bi</p>
                  <p className="advisor-role">Consultant</p>
                </div>
              </div>
            ) : index === 2 ? (
              // Team Leads Section
              <div className="leads-layout">
                <div className="lead-single-headshot">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Lead Manager"
                    className="lead-img"
                    onClick={() => handleHeadshotClick("Mariam El-Behiry")}
                  />
                  <p className="lead-name">Mariam El-Behiry</p>
                  <p className="lead-role">Team Lead</p>
                </div>

                <div className="leads-row">
                  <div className="lead-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Lead 1"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Zain Ali")}
                    />
                    <p className="lead-name">Zain Ali</p>
                    <p className="lead-role">Wet Lab Co-Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Lead 2"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Marianna Florez Camacho")}
                    />
                    <p className="lead-name">Marianna Florez Camacho</p>
                    <p className="lead-role">Wet Lab Co-Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Lead 3"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Aden Wong")}
                    />
                    <p className="lead-name">Aden Wong</p>
                    <p className="lead-role">Dry Lab Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Lead 4"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Stephanie Tong")}
                    />
                    <p className="lead-name">Stephanie Tong</p>
                    <p className="lead-role">Human Practices Co-Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Lead 5"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Claire Bunker")}
                    />
                    <p className="lead-name">Claire Bunker</p>
                    <p className="lead-role">Human Practices Co-Lead</p>
                  </div>
                </div>
              </div>
            ) : index === 3 ? (
              // Wet Lab Section
              <div className="lab-layout">
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 1"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Cole Noble")}
                    />
                    <p className="lab-name">Cole Noble</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 2"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Cole Sandler")}
                    />
                    <p className="lab-name">Cole Sandler</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Emmaley Hunter")}
                    />
                    <p className="lab-name">Emmaley Hunter</p>
                  </div>
                </div>
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 4"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Claire Tan")}
                    />
                    <p className="lab-name">Claire Tan</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 5"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Jason Song")}
                    />
                    <p className="lab-name">Jason Song</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Isabella Perini")}
                    />
                    <p className="lab-name">Isabella Perini</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Yasmine Farah")}
                    />
                    <p className="lab-name">Yasmine Farah</p>
                  </div>
                </div>
              </div>
            ) : index === 4 ? (
              // Dry Lab Section
              <div className="lab-layout">
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Dry Lab Member 2"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Shri")}
                    />
                    <p className="lab-name">Shri</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Dry Lab Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Tigh Gallagher")}
                    />
                    <p className="lab-name">Tigh Gallagher</p>
                  </div>
                </div>
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Dry Lab Member 4"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Victor Chowdhury")}
                    />
                    <p className="lab-name">Victor Chowdhury</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Dry Lab Member 5"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Dylan Rietze")}
                    />
                    <p className="lab-name">Dylan Rietze</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Dry Lab Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Ali Cotten")}
                    />
                    <p className="lab-name">Ali Cotten</p>
                  </div>
                </div>
              </div>
            ) : index === 5 ? (
              // Human Practices Section
              <div className="lab-layout">
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 1"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Victor Chowdhury")}
                    />
                    <p className="lab-name">Victor Chowdhury</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 2"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Claire Tan")}
                    />
                    <p className="lab-name">Claire Tan</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Lindsay Yu")}
                    />
                    <p className="lab-name">Lindsay Yu</p>
                  </div>
                </div>
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 4"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Stella Pesut")}
                    />
                    <p className="lab-name">Stella Pesut</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 5"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Sophie Spicer")}
                    />
                    <p className="lab-name">Sophie Spicer</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Hannah")}
                    />
                    <p className="lab-name">Hannah</p>
                  </div>
                </div>
              </div>
            ) : (
              <h2 className="page-content">Page {index + 1}</h2>
            )}
          </div>
        ))}
      </div>

      {/* Modal for displaying person info */}
      {isModalOpen && selectedPerson && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-text">
              <h2>{selectedPerson.name}</h2>
              <p>{selectedPerson.role}</p>
              <p>{selectedPerson.bio}</p>
            </div>
          </div>
        </div>
      )}

      <div className="navigation-dots">
        {pageHeaders.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentPage === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <button className="scroll-button" onClick={toggleScroll}>
        {scrollDirection === "bottom" ? "Footer  " : "Pages "}
        {scrollDirection === "bottom" ? (
          <BsArrowDownCircleFill />
        ) : (
          <BsArrowUpCircleFill />
        )}
      </button>
    </div>
  );
}

export default Team;