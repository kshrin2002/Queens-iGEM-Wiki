export function Description() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Parkinson's Disease (PD)</h2>
          <hr />
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px' }}>
            <h3><em>Introduction</em></h3>
            <p>
              Parkinson’s disease (PD) is a chronic and progressive neurodegenerative condition characterized by the degeneration of dopaminergic neurons in the brain. This disruption leads to a spectrum of motor symptoms including rigidity, bradykinesia, difficulty walking, and resting tremors. However, PD is not solely a movement disorder; it also encompasses a wide range of non-motor symptoms, including cognitive impairment, gastrointestinal dysfunction, and psychiatric disturbances. (Kouli et al., 2018)
            </p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
            <h3><em>Global Impact and Prevalence</em></h3>
            <p>
              According to the World Health Organization, the prevalence of PD has doubled in the past 25 years. Global estimates in 2019 showed over 8.5 million individuals with PD. As the global population ages, the prevalence of PD is expected to rise, further amplifying the socio-economic impact of the disease. It is estimated that the number of individuals with PD will double by 2040, with the greatest increases projected to occur in low- and middle-income countries. (World Health Organization, 2023)
            </p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
            <h3><em>Current Treatments and Limitations</em></h3>
            <p>
              Despite significant advancements in PD research and drug development, current therapies primarily focus on symptom management and fail to address disease progression. Levodopa, the gold standard treatment for PD, provides temporary symptomatic relief but does not address the underlying neurodegenerative process, while exacerbating non-motor symptoms. (Murakami et al., 2023) Therefore, there is an urgent need for a clinically feasible therapy that targets the underlying pathophysiological mechanisms of PD.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Background</h2>
          <hr />
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px' }}>
            <h3><em>Alpha-Synuclein: Structure and Pathological Mechanisms</em></h3>
            <p>
              Alpha-synuclein (α-Syn) is a protein predominantly localized in brain regions associated with motor control. Comprising of 140 amino acids, it exhibits a natively unfolded structure and is primarily concentrated at presynaptic terminals in the mammalian brain. (Vidović & Rikalovic, 2022)
            </p>
            <img
              src="https://static.igem.wiki/teams/5079/alpha-syn-structure.png"
              alt="Figure 1: Characteristics of an alpha-syn monomer. Adapted from Schim et al."
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
            />
            <p>
              In PD, α-Syn undergoes misfolding, leading to the formation of toxic oligomers and fibrils that accumulate in dopaminergic neurons. This process involves nucleation, where initial misfolded proteins act as seeds for further aggregation, by forming stable nuclei that recruit additional monomers. (Jan et al., 2021; Vidović & Rikalovic, 2022) The aggregated forms of α-Syn contribute to the formation of Lewy bodies, intracellular inclusions found within neurons, which are a hallmark of PD. (Vidović & Rikalovic, 2022)
            </p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
            <h3><em>The Gut-Origin Hypothesis</em></h3>
            <p>
              The gut-origin hypothesis suggests that α-syn pathology begins within the submucosal plexus of the enteric nervous system (ENS) before propagating retrogradely to the central nervous system (CNS) via the vagus nerve. (Rietdijk et al., 2017) Preclinical studies using animal models demonstrate the transmission of pathology from the gut to the brain, primarily facilitated by the vagus nerve. Severing the vagus nerve interrupts this transmission and reduces the risk of developing PD, further supporting the hypothesis. (Kim et al., 2019) Additionally, the discovery of Lewy bodies in the intestinal submucosal and myenteric plexuses of PD patients explicitly highlights the role of the intestine in PD etiology. (Chen & Mor, 2023)
            </p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
            <h3><em>Neurosin (KLK-6)</em></h3>
            <p>
              Neurosin (AKA KLK-6) is a 244 aa serine protease capable of cleaving α-syn. In vitro studies show that KLK-6 prevents α-syn aggregation by reducing the number of monomers while also generating fragmented α-syns that themselves inhibit polymerization. (Bluhm et al., 2021; Kasai et al., 2008)
            </p>
            <p>
              The specific sites of α-syn cleavage by neurosin consist of one major cleavage product and three additional cleavage products. The predominant cleavage site is located within the NAC domain of α-syn (specifically at aa K80 and T81). Residues 71-82 within the NAC region have a propensity for folding into β-sheets which promote fibril formation – thereby their cleavage reduces α-syn aggregation. However, the other identified cleavage sites (K97/D98, E114/D115, and D121/N122) are found within the C-terminal region of the α-synuclein molecule. The C-terminal contains an intrinsically disordered region which upon cleavage by neurosin may promote further aggregation (rather than reduction). (Bluhm et al., 2021)
            </p>
            <img
              src="https://static.igem.wiki/teams/5079/klk6-cleavage-sites.jpg"
              alt="Figure 2: Neurosin (KLK-6) cleavage sites shown in orange. Adapted from Bluhm et al."
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
            />
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Objectives</h2>
          <hr />
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px' }}>
          <p>
            We propose the first localized and specific delivery vector to target a-synuclein pathology within the GI tract. We aim to:
          </p>
            <ul>
              <li>Engineer a delivery system that:
                <ul>
                  <li>Survives while maintaining therapeutic effects in the gut.</li>
                  <li>Ensures minimal off-target effects.</li>
                  <li>Targets misfolded monomeric seeds at desired residues, as to ensure no reaggregation or toxic fragments.</li>
                </ul>
              </li>
              <li>Formulate a treatment with a dosage, frequency and duration that is clinically feasible.</li>
            <</ul>
          </div>
        </div>
      </div>

          <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Therapeutic Design</h2>
          <hr />
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px' }}>
            <h3><em>Modular Switch</em></h3>
            <p>
              The ability of KLK6 to generate pathogenic products from C-terminal cleavage and the potential for off-target effects limits its potential in vivo. To circumvent this, we aim to design a modular protein switch to ensure neurosin activation only in the presence of pathological α-synuclein monomeric seeds.
            </p>
            <p>
              Modular protein switches are created by fusing protein domains in a way that their activities are interlinked. These fusions exhibit characteristic switch activities, controlled by specific ligands. (Nicholes et al., 2016) In our case, the switch will consist of an input domain that binds to the ligand (α-synuclein) and an output domain (neurosin) whose activity is modulated upon ligand binding in the input domain.
            </p>
            <p>
              The input domain selected for this purpose is cyclophilin D (CypD), a peptidyl-prolyl isomerase. This enzyme’s ligand-binding pocket is known to interact directly with α-synuclein at its acidic proline-rich C-terminal region. (Torpey et al., 2020)
            </





