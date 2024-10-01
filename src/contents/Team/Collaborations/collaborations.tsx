import { useState, useEffect, useRef } from "react";
import "./collaboration.css";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

export function Collaborations() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5; // Total number of pages
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"top" | "bottom">(
    "bottom"
  );

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  // Function to handle wheel scrolling
  const handleWheel = (event: WheelEvent) => {
    event.preventDefault(); // Prevent default scrolling behavior

    // Scroll right if scrolling down and not on the last page
    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
    // Scroll left if scrolling up and not on the first page
    else if (event.deltaY < 0 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Add wheel event listener on mount
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage]);

  const toggleScroll = () => {
    const target =
      scrollDirection === "bottom" ? document.body.scrollHeight : 0; // Determine target scroll position
    window.scrollTo({
      top: target,
      behavior: "smooth", // Smooth scroll
    });
    setScrollDirection((prev) => (prev === "bottom" ? "top" : "bottom")); // Toggle direction
  };

  const pageData = [
    {
      header: "Collaborations Overview",
      text: [
        "On this page, we provide a summary of our team collaborations.",
        "We worked with multiple teams to achieve the goals of our project.",
      ],
    },
    {
      header: "International Collaborations",
      text: [
        "Our international collaborations span across several continents.",
        "Working with teams from Europe, Asia, and the Americas, we fostered global connections.",
      ],
    },
    {
      header: "Research Partnerships",
      text: [
        "We partnered with research institutions to enhance the scientific rigor of our work.",
        "Collaborations in research helped validate key components of our project.",
      ],
    },
    {
      header: "Outreach Collaborations",
      text: [
        "Our outreach efforts involved collaborations with local communities and educational institutions.",
        "These efforts helped us increase public awareness and engagement in synthetic biology.",
      ],
    },
    {
      header: "Final Reflections",
      text: [
        "In our final reflections, we emphasize the importance of teamwork and collaboration.",
        "These collaborations were critical to the success of our project, enabling us to achieve more together.",
      ],
    },
  ];

  return (
    <div className="engineering-container">
      <div
        className="page-wrapper"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`, // Translate pages horizontally
          width: `${totalPages * 100}vw`, // Set the width based on the number of pages
        }}
        ref={containerRef}
      >
        {[...Array(totalPages)].map((_, index) => (
          <div
            className="page"
            key={index}
            style={{ width: "100vw", height: "100vh" }}
          >
            {/* First page keeps the original design */}
            {index === 0 ? (
              <div className="collaborations-content">
                <h2 className="collaborations-title">Collaborations</h2>
                <div className="collaborations-image-container">
                  <img
                    src="https://static.igem.wiki/teams/5079/colabmapchart.png"
                    alt="Collaborations Map"
                    className="collaborations-image"
                  />
                  <img
                    src="https://static.igem.wiki/teams/5079/colabmapchart.png"
                    alt="Collaborations Map"
                    className="collaborations-image"
                  />
                  <img
                    src="https://static.igem.wiki/teams/5079/colabmapchart.png"
                    alt="Collaborations Map"
                    className="collaborations-image"
                  />
                </div>
              </div>
            ) : (
              // Other pages have unique content in the rounded box
              <div className="rounded-box">
                <div className="text-section">
                  <h3 className="rounded-box-header">{pageData[index - 1].header}</h3>
                  {pageData[index - 1].text.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="image-section">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder Image"
                    className="rounded-box-image"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="navigation-dots">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`dot ${currentPage === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {/* Scroll Button */}
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

export default Collaborations;
