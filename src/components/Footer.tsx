import { stringToSlug } from "../utils";
import "../styles/Footer.css"; // Import the CSS file

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer id="unique-footer" className="pt-5 pb-5 py-5 mt-5 bg-grey text-white">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12">
            <h4 className="mb-3">Our Sponsors</h4>
            <div className="sponsor-images">
              <img
                src="https://static.igem.wiki/teams/5079/brandtech-transparent-logo.png"
                alt="BrandTech"
              />
              <img
                src="https://static.igem.wiki/teams/5079/csi-bio-combined-logo-bio-bottom-w-maple-leaf-full-size-rgb.png"
                alt="CSI Bio"
              />
              <img
                src="https://static.igem.wiki/teams/5079/idt-transparent-logo-cropped-version.png"
                alt="IDT"
              />
              <img
                src="https://static.igem.wiki/teams/5079/agat-transparent-logo.png"
                alt="AGAT"
              />
              <img
                src="https://static.igem.wiki/teams/5079/new-england-biolabs-transparent-cropped-version.png"
                alt="New England Biolabs"
              />
              <img
                src="https://static.igem.wiki/teams/5079/qhs-stacked.png"
                alt="QHS"
              />
              <img
                src="https://static.igem.wiki/teams/5079/smith-engineering-transparent-logo.png"
                alt="Smith Engineering"
              />
              <img
                src="https://static.igem.wiki/teams/5079/snapgene-logo-2022-1.png"
                alt="SnapGene"
              />
            </div>
          </div>
        </div>

        {/* New Row for Contact Information */}
        <div className="row mb-4">
          <div className="col-lg-12">
            <h4 className="mt-lg-0 mt-sm-4 mb-3">Contact</h4>
            <p>Address: 99 University Ave. Kingston, Ontario.</p>
            <p className="mb-0">Phone Number: (613) - 533 - 2000</p>
            <p>Email: qgem@engsoc.queensu.ca</p>
            <p>LinkedIn: QGEM</p>
            <p>Instagram: @queens_igem</p>
          </div>
        </div>

        <hr />
        <div className="row mt-4">
          <div className="col">
            <p className="mb-0">
              <small>
                © 2024 - Content on this site is licensed under a{" "}
                <a
                  className="subfoot"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="license"
                >
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
          <div className="col text-right">
            <img
              src="https://static.igem.wiki/teams/5079/queenslogo-colour.png"
              alt="Queen's University"
              style={{ width: '150px', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
