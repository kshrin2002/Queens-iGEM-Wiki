import { useState, useEffect, useRef } from "react";
import "./model.css";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

export function Model() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6; // Total number of pages
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
      header: "Determining Cyclophilin D Insertion Residues ",
      text: [
        "To identify optimal insertion sites in Cyclophilin D (CypD), residues are selected based on thermodynamic stability, structural compatibility, and functional impact. Sites are evaluated for stability using Gibbs free energy, where favorable insertions show negative ΔG values, indicating increased stability. Structural compatibility focuses on solvent-exposed loops that can accommodate modifications without disrupting the native fold. Molecular dynamics simulations further assess protein flexibility to ensure functional integrity is maintained. ",

        <iframe
          title="Queens-Canada: Gromacs_Asyn+Cypd (2024)"
          width="560"
          height="315"
          src="https://video.igem.org/videos/embed/e312063d-ab73-421e-9449-37c4deb915b8"
          frameborder="0"
          allowfullscreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>,
      ],
    },
    {
      header: "Solvent-Accessible Residue Identification ",
      text: [
        "Our international collaborations span across several continents.",
        "Working with teams from Europe, Asia, and the Americas, we fostered global connections.",
      ],
    },
    {
      header: "Cross-Referencing Insertion Sites ",
      text: [
        "The final CypD insertion sites are determined by cross-referencing solvent-accessible area (SASA) and root mean square fluctuation (RMSF) data. Key residues identified include N14, K45, P85, and K155, which exhibit optimal stability and flexibility, making them prime candidates for molecular switch design. ",
      ],
    },
    {
      header: "Circular Permutants in KLK6 ",
      text: [
        "Circular permutation (CP) is used to rewire KLK6, altering the termini to create new regulatory dynamics while maintaining function. CP enhances flexibility, allosteric control, and interaction interfaces, enabling the design of a molecular switch that activates proteolytic function under specific conditions. This approach is valuable for therapeutic designs in neurodegenerative diseases like Parkinson’s, where controlled enzymatic activity is critical. ",
      ],
    },
    {
      header: "Determining Circular Permutation Sites ",
      text: [
        "Creating circular permutants of KLK6 through computational analysis involves a methodical approach that combines solvent accessibility, multiple sequence alignment (MSA),  and secondary structure stability to modify the protein’s structure while preserving its function. The process begins by identifying solvent-accessible loops in KLK6 using 3D structural tools such as PyMOL. These loops are exposed and more flexible, making them ideal candidates for repositioning the protein’s N- and C-termini through circular permutation. Because these loops are less likely to disrupt the core structure, they are more tolerant of rearrangements, allowing researchers to redesign the protein without compromising its stability or activity. ",
        "Next, multiple sequence alignment (MSA) is performed to compare KLK6 with  trypsin. MSA highlights conserved regions and variable loops, helping researchers pinpoint less critical areas for permutation. By targeting regions that are not highly conserved, the core functions of KLK6—like its catalytic activity—remain intact. This ensures that the permutant retains its essential proteolytic function, even with the structural modifications introduced by circular permutation. ",
        "Trypsin serves as a comparative model in this process due to its structural and functional similarities to KLK6. By studying trypsin’s circular permutants, we can gain insights into how changes might impact KLK6’s activity. This comparison helps ensure that cleavage sites and other critical regions remain functional post-permutation, guiding the design of new termini that do not interfere with the protease’s catalytic mechanisms. Additionally, secondary structure analysis using PyMol to asses the overall fold of the permutated protein. By ensuring that α-helices and β-sheets are maintained after permutation, researchers can prioritize designs that minimize disruption to the protein’s native structure. ",
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
              <div className="collaborations-content full-page-video">
                {/* Header positioned on top of the video */}
                <h2 className="Model-title">Model</h2>
                <iframe
                  title="Queens-Canada: Gromacs_Asyn+Cypd (2024)"
                  src="https://video.igem.org/videos/embed/c7b24860-47ee-46bb-9373-684310fcf0a5?loop=1&amp;autoplay=1&amp;title=0&amp;warningTitle=0&amp;controlBar=0&amp;peertubeLink=0"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; encrypted-media"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  style={{
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                  }} // Full width & height, unclickable
                ></iframe>
              </div>
            ) : (
              <div className="rounded-box">
                <div className="text-section">
                  <h3 className="rounded-box-header">
                    {pageData[index - 1].header}
                  </h3>
                  {pageData[index - 1].text.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
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

export default Model;
