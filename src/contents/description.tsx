import { Inspirations, InspirationLink } from "../components";

export function Description() {
  const links: InspirationLink[] = [
    { year: 2022, teamName: "DTU-Denmark", pageName: "Description" },
    { year: 2019, teamName: "ITESO_Guadalajara", pageName: "Description" },
    { year: 2020, teamName: "Technion-Israel", pageName: "Description" },
    { year: 2020, teamName: "Botchan_Lab_Tokyo", pageName: "Description" },
    { year: 2020, teamName: "St_Andrews", pageName: "Description" },
    { year: 2020, teamName: "MIT", pageName: "Description" },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Bronze Medal Criterion #3</h4>
            <p>Describe how and why you chose your iGEM project.</p>
            <hr />
            <p>
              Please see the{" "}
              <a href="https://competition.igem.org/judging/medals">
                2024 Medals Page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Parkinson's Disease (PD)</h2>
          <hr />
          <div>
            <h3>Introduction</h3>
            <p>
              Parkinson’s disease (PD) is a chronic and progressive neurodegenerative condition characterized by the degeneration of dopaminergic neurons in the brain. This disruption leads to a spectrum of motor symptoms including rigidity, bradykinesia, difficulty walking, and resting tremors. However, PD is not solely a movement disorder; it also encompasses a wide range of non-motor symptoms, including cognitive impairment, gastrointestinal dysfunction, and psychiatric disturbances. (Kouli et al., 2018)
            </p>
          </div>
          <div>
            <h3>Prevalence and Global Impact</h3>
            <p>
              According to the World Health Organization, the prevalence of PD has doubled in the past 25 years. Global estimates in 2019 showed over 8.5 million individuals with PD. As the global population ages, the prevalence of PD is expected to rise, further amplifying the socio-economic impact of the disease. It is estimated that the number of individuals with PD will double by 2040, with the greatest increases projected to occur in low- and middle-income countries. 
            </p>
          </div>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Some advice</h2>
          <hr />
          <p>
            We encourage you to put up a lot of information and content on your
            wiki, but we also encourage you to include summaries as much as
            possible. If you think of the sections in your project description
            as the sections in a publication, you should try to be concise,
            accurate, and unambiguous in your achievements. Your Project
            Description should include more information than your project
            abstract.
          </p>
        </div>
        <div className="col-lg-4">
          <h2>References</h2>
          <hr />
          <p>
            iGEM teams are encouraged to record references you use during the
            course of your research. They should be posted somewhere on your
            wiki so that judges and other visitors can see how you thought about
            your project and what works inspired you.
          </p>
        </div>
      </div>
    </>
  );
}
