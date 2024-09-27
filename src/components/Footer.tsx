import { stringToSlug } from "../utils";
import "../styles/Footer.css"; // Custom CSS
import Slider from "react-slick"; // Import the Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  // Settings for the react-slick carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  // Array of sponsor logos
  const sponsorLogos = [
    { src: "https://static.igem.wiki/teams/5079/brandtech-transparent-logo.png", alt: "BrandTech" },
    { src: "https://static.igem.wiki/teams/5079/csi-bio-combined-logo-bio-bottom-w-maple-leaf-full-size-rgb.png", alt: "CSI Bio" },
    { src: "https://static.igem.wiki/teams/5079/idt-transparent-logo-cropped-version.png", alt: "IDT" },
    { src: "https://static.igem.wiki/teams/5079/agat-transparent-logo.png", alt: "AGAT" },
    { src: "https://static.igem.wiki/teams/5079/new-england-biolabs-transparent-cropped-version.png", alt: "New England Biolabs" },
    { src: "https://static.igem.wiki/teams/5079/qhs-stacked.png", alt: "QHS" },
    { src: "https://static.igem.wiki/teams/5079/smith-engineering-transparent-logo.png", alt: "Smith Engineering" },
    { src: "https://static.igem.wiki/teams/5079/snapgene-logo-2022-1.png", alt: "SnapGene" },
    { src: "https://static.igem.wiki/teams/5079/asus-logo.png", alt: "Asus" },
    { src: "https://static.igem.wiki/teams/5079/lohans-lab-logo.png", alt: "Lohans" },
  ];

  return (
    <footer id="unique-footer" className="pt-5 pb-5 mt-5 bg-grey text-white">
      <div className="container">
        {/* Sponsor Logos Carousel */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <Slider {...settings}>
              {sponsorLogos.map((sponsor, index) => (
                <div key={index} className="sponsor-slide">
                  <img src={sponsor.src} alt={sponsor.alt} className="sponsor-logo" />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row mb-4 align-items-end">
          <div className="col-lg-8">
            <h4 className="mt-lg-0 mt-sm-4 mb-3">Contact</h4>
            <p>Address: 99 University Ave. Kingston, Ontario.</p>
            <p className="mb-0">Phone Number: (613) - 533 - 2000</p>
            <p>Email: <a href="mailto:qgem@engsoc.queensu.ca" className="contact-link">qgem@engsoc.queensu.ca</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/qgem" className="contact-link" target="_blank" rel="noopener noreferrer">QGEM</a></p>
            <p>Instagram: <a href="https://www.instagram.com/queens_igem" className="contact-link" target="_blank" rel="noopener noreferrer">@queens_igem</a></p>
          </div>

          {/* Queen's University Logo and Text Aligned Bottom Right */}
          <div className="col-lg-4 text-lg-right text-center mt-lg-0 mt-4">
            <div className="bottom-right-content">
              <img
                src="https://static.igem.wiki/teams/5079/queenslogo-colour.png"
                alt="Queen's University"
                className="queens-logo"
              />
              <div className="footer-text"> {/* Wrapper for text */}
                <p className="mb-0">
                  <small>
                    © 2024 - Content on this site is licensed under a{" "}
                    <a className="subfoot" href="https://creativecommons.org/licenses/by/4.0/" rel="license">
                      Creative Commons Attribution 4.0 International license
                    </a>
                    .
                  </small>
                </p>
                <p>
                  <small>
                    The repository used to create this website is available at{" "}
                    <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                      gitlab.igem.org/{teamYear}/{teamSlug}
                    </a>
                    .
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
