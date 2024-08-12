import { stringToSlug } from "../utils";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="pt-5 pb-5 footer py-5 mt-5 bg-dark text-white">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-6 col-xs-12">
            <h4 className="mb-3">Our Sponsors</h4>
            <img src= "https://static.igem.wiki/teams/5079/bt-jpg-logo-86.jpg"/>
            <img src= "https://static.igem.wiki/teams/5079/csi-bio-combined-logo-bio-bottom-w-maple-leaf-full-size-rgb.png"/>
            <img src= "https://static.igem.wiki/teams/5079/idt-logo-thumb-800.png" />
            <img src= "https://static.igem.wiki/teams/5079/logo-shaded-stacked-no-leaf-eps.pdf" />
            <img src= "https://static.igem.wiki/teams/5079/neb-2024-50ans-475x335.png" />
            <img src= "https://static.igem.wiki/teams/5079/qhs-stacked.png" />
            <img src= "https://static.igem.wiki/teams/5079/smith-engineering-logo.png" />
            <img src= "https://static.igem.wiki/teams/5079/snapgene-logo-2022-1.png" />
          </div>

          <div className="col-lg-3 col-xs-12">
            <h4 className="mt-lg-0 mt-sm-4 mb-3">Contact</h4>
            <p>99 University Ave. Kingston, Ontario.</p>
            <p className="mb-0">(613) - 533 - 2000</p>
            <p>qgem@engsoc.queensu.ca</p>
          </div>
        </div>
        <hr />
        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
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
        </div>
      </div>
    </footer>
  );
}
