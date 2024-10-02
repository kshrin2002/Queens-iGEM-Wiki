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
      header: "Cornell Regulatory Book Collaboration",
      text: [
        "QGEM and Cornell iGEM  have joined forces to gather valuable insights from iGEM participants regarding their understanding of their countries’ unique regulatory policies. As iGEM teams tackle real-world problems using synthetic biology, they carry a significant responsibility in ensuring their work adheres to relevant regulations. Understanding regulatory practices is crucial; these regulations go beyond mere administrative checklists—they are vital for fostering responsible scientific advancement. However, many iGEM participants may not be fully aware of the regulatory frameworks in their countries. This lack of awareness is not uncommon; regulatory knowledge is often not included in standard educational curricula. Nonetheless, gaps in this knowledge can lead to unintended consequences and missteps in research and innovation. With this booklet, we aim to identify and address these knowledge gaps in the regulatory landscape, paving the way for future teams to build upon our findings. Our goal is to foster collaboration and raise awareness within the iGEM community. By working together, we can enhance regulatory compliance and, ultimately, contribute to a more responsible and impactful application of synthetic biology for the betterment of society. ",
      ],
    },
    {
      header: "Ethics Handbook",
      text: [
        "Our ethics handbook was created with the goal of being both informative and relevant to the iGEM community, and we couldn’t have done it alone. In early April, we reached out to the global iGEM Slack, inviting teams interested in collaborating on this initiative. We worked closely with teams from UFlorida, ASU, Stanford, and BevaTech (CityU), aiming to establish consistent ethical standards across diverse backgrounds. This collaboration brought together perspectives from Canada, America, and Hong Kong, allowing us to consider different interpretations of ethical behavior and build a comprehensive approach to core values such as integrity, respect, and fairness. The QGEM team laid the foundation for the Medical, Business, and Research ethics sections, focusing on two of our target awards. The UFlorida iGEM team expanded our Research ethics section and introduced a new section on Educational ethics. They also provided case studies on HeLa cells and their 2024 iGEM project. ASU’s contribution was the Downstream Ethical Analysis in Research section. They conducted an exploratory study involving interviews with graduate students and postdoctoral researchers, providing insight into how institutional norms shape ethical engagement in research. The BevaTech (CityU) team enriched our handbook with examples showing how our ethical principles apply to their 2024 iGEM project. Stanford iGEM further strengthened our Educational ethics section, ensuring a broader understanding of ethical behavior in academic settings. A key highlight of our process was the thorough review we received from Queen’s University Research Ethics Board. Their rigorous evaluation ensured that our handbook aligns with the highest research standards. The board provided insightful feedback, validating our sources on philosophical and ethical principles . Our collaborative effort not only produced a detailed guide to bioethics but also laid the groundwork for future iGEM teams to approach their projects with a strong, diverse foundation in ethics. We hope this resource will be a lasting guide to help teams navigate the ethical challenges they may encounter in synthetic biology! ",
      ],
    },
    {
      header: "Storybook",
      text: [
        "One of our final collaborations for the 2024 season involved creating a children’s storybook that showcases the diverse applications of synthetic biology through simple, accessible descriptions of five iGEM projects. In August, our team initiated this project by distributing a Google form via the global iGEM Slack. This form gathered essential information, including the regions teams represented, their affiliated universities, details about team members, project descriptions, and graphics that illustrated their projects. We received enthusiastic responses from teams in four countries: iGEM UTokyo in Japan, AshesiGhana in Ghana, UPF in Spain, and McMasterU in Canada. By compiling and adapting these responses into a child-friendly format, we aimed to highlight the unique applications of synthetic biology that transcend borders. Our goal was to inspire young readers everywhere, demonstrating that anyone, regardless of their background or location, has the potential to become a scientist!",
      ],
    },
    {
      header: "Tea Room",
      text: [
        "The Tea Room is a student run cafe located on the Queen’s University campus in Kingston, Ontario. This organization has had roots in Queen’s student culture since 1924, first as a small diner frequented by Queen’s students and faculty of the time. Due to growing pressure, the original Tea Room closed down in 1973 but arose back again in 2006 due to the efforts of a group of engineering students. The new Tea Room has dedicated itself to a creed of environmental responsibility through education and a zero-consumer waste strategy. Due to its popularity amongst students, QGEM has had a history of collaborating with the Tea Room to produce a specialty drink in which a portion of the profits are allocated to the team.  This year, we’ve creatively named our specialty drink the CinApple Cider, an apple cider drink with brown sugar syrup. Our team plans to have 10¢ from every drink be donated to Parkinson’s Canada as a continuance from our donation efforts from the Parkinson’s Canada Superwalk.",
      ],
    },
    {
      header: "Superwalk",
      text: [
        "QGEM had the amazing opportunity to co-host the Kingston chapter of the 2024 Parkinson Canada SuperWalk. The QGEM team raised over $2300 in fundraising. The event was a huge success with over 50 people signing up. This event was deeply important to us as it allowed us to give back to the local Kingston Parkinson Community and the Parkinson community. We want to thank QPK (Queen’s for Parkinson’s Kingston) club for allowing us to help run this event!",
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
