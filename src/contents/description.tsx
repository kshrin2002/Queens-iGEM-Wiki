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
            <h3><em>Introduction</em></h3>
            <p>
              Parkinson’s disease (PD) is a chronic and progressive neurodegenerative condition characterized by the degeneration of dopaminergic neurons in the brain. This disruption leads to a spectrum of motor symptoms including rigidity, bradykinesia, difficulty walking, and resting tremors. However, PD is not solely a movement disorder; it also encompasses a wide range of non-motor symptoms, including cognitive impairment, gastrointestinal dysfunction, and psychiatric disturbances. (Kouli et al., 2018)
            </p>
          </div>
          <div>
            <h3><em>Global Impact and Prevalence</em></h3>
            <p>
              According to the World Health Organization, the prevalence of PD has doubled in the past 25 years. Global estimates in 2019 showed over 8.5 million individuals with PD. As the global population ages, the prevalence of PD is expected to rise, further amplifying the socio-economic impact of the disease. It is estimated that the number of individuals with PD will double by 2040, with the greatest increases projected to occur in low- and middle-income countries. (World Health Organization, 2023)
            </p>
          </div>
          <div>
           <h3><em>Current Treatments and Limitations</em></h3>
            <p>
              Despite significant advancements in PD research and drug development, current therapies primarily focus on symptom management and fail to address disease progression. Levodopa, the gold standard treatment for PD, provides temporary symptomatic relief but does not address the underlying neurodegenerative process, while exacerbating non-motor symptoms. (Murakami et al., 2023) Therefore, there is an urgent need for a clinically feasible therapy that target the underlying pathophysiological mechanisms of PD. 
              </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Background</h2>
                   <hr />
          <div>
            <h3><em>Alpha-Synuclein: Structure and Pathological Mechanisms</em></h3>
            <p>
              Alpha-synuclein (α-Syn) is a protein predominantly localized in brain regions associated with motor control. Comprising of 140 amino acids, it exhibits a natively unfolded structure and is primarily concentrated at presynaptic terminals in the mammalian brain. (Vidović & Rikalovic, 2022)
            </p>
          </div>
          <div>
            <h3><em>Global Impact and Prevalence</em></h3>
            <p>
              According to the World Health Organization, the prevalence of PD has doubled in the past 25 years. Global estimates in 2019 showed over 8.5 million individuals with PD. As the global population ages, the prevalence of PD is expected to rise, further amplifying the socio-economic impact of the disease. It is estimated that the number of individuals with PD will double by 2040, with the greatest increases projected to occur in low- and middle-income countries. (World Health Organization, 2023)
              <p>
              In PD, α-Syn undergoes misfolding, leading to the formation of toxic oligomers and fibrils that accumulate in dopaminergic neurons. This process involves nucleation, where initial misfolded proteins act as seeds for further aggregation, by forming stable nuclei that recruit additional monomers. (Jan et al., 2021; Vidović & Rikalovic, 2022) The aggregated forms of α-Syn contribute to the formation of Lewy bodies, intracellular inclusions found within neurons, which are a hallmark of PD. (Vidović & Rikalovic, 2022)
            </p>
          </div>
          <div>
           <h3><em>The Gut-Origin Hypothesis</em></h3>
            <p>
              The gut-origin hypothesis suggests that a-syn pathology begins within the submucosal plexus of the enteric nervous system (ENS) before propagating retrogradely to the central nervous system (CNS) via the vagus nerve. (Rietdijk et al., 2017) Preclinical studies using animal models demonstrate the transmission of pathology from the gut to the brain, primarily facilitated by the vagus nerve. Severing the vagus nerve interrupts this transmission and reduces the risk of developing PD, further supporting the hypothesis. (Kim et al., 2019) Additionally, the discovery of Lewy bodies in the intestinal submucosal and myenteric plexuses of PD patients explicitly highlights the role of the intestine in PD etiology. (Chen & Mor, 2023)
              </p>
          </div>
          <div>
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
