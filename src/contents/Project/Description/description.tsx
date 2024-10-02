import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import '../../Wet Lab/Design/design.css'; // Import the CSS file
import { useEffect, useState } from 'react';


export function Description() {
  return (
    <>
      <div className='main'>
        <DesignHeading />
        <div className="main-content">
          <Sidebar />
          <CardSection />
        </div>
        <BackToTopButton />
      </div>
    </>
  );
}


const DesignHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1
        style={{
          fontSize: '5em',
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}
      >
        DESCRIPTION
      </h1>
    </div>
  );
};

// FOR WRITE UPS CHANGE TITLES AND SIBTITLES ON SIDEBAR AS NEEDED
const Sidebar: React.FC = () => {
  const sections = [
    { name: 'Significance of Parkinsons Disease (PD)', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Introduction', 'Global Impact and Prevalene', 'Challenes in Current Treatments'] },
    { name: 'Background', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Alpha-Synuclein', 'Gut-Origin Hypothesis', 'Neurosin (KLK-6)'] },
    { name: 'Introducing SynAxis', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['SynAxis'] },
    { name: 'A Novel Therputic Design', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Modular Switch', 'Spore-Biotic Delivery'] },
    { name: 'References', image:'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['References'] }
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="sidebar-contributions">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <div onClick={() => setOpenSection(openSection === index ? null : index)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img src={section.image} alt={section.name} className="section-image" style={{ marginRight: '8px', width: '40px', height: '40px', objectFit: 'cover' }} />
              <span>{section.name}</span>
            </div>
            {openSection === index && (
              <StaggeredDropDown options={section.content} image={section.image} sectionIndex={index} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


const StaggeredDropDown = ({ options, image, sectionIndex }: { options: string[]; image: string; sectionIndex: number }) => {
  return (
    <motion.ul
      style={{
        padding: '10px',
        backgroundColor: '#fff',
        listStyle: 'none',
        marginLeft: '0',
        marginTop: '10px',
        width: '100%',
      }}
    >
      {options.map((option: string, index: number) => (
        <Option
          key={index}
          text={option}
          image={image}
          sectionIndex={sectionIndex}
          sectionPartIndex={index}
        />
      ))}
    </motion.ul>
  );
};


const Option = ({ text, image, sectionIndex, sectionPartIndex }: { text: string, image: string, sectionIndex: number, sectionPartIndex: number }) => {
  const handleClick = () => {
    const sectionId = `section-${sectionIndex}-part-${sectionPartIndex}`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const topPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      window.scrollTo({ top: topPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <li
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      onClick={handleClick}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <img src={image} alt="icon" style={{ marginRight: '8px', width: '30px', height: '30px', objectFit: 'cover' }} />
      <span>{text}</span>
    </li>
  );
};


// FOR WRIETUPS CHANGE TITLES AND DESCRIPTIONS AS NEEDED. SEE WETLAB/SAFETY FOR REFERENCE
const CardSection: React.FC = () => {
  const sections = [
    {
      title: 'Significance of Parkinsons Disease (PD)',
      subsections: [
        {
          subtitle: 'Introduction',
          description: (
            <>
              <p>
               Parkinson’s disease (PD) is a chronic and progressive neurodegenerative condition characterized by the degeneration of dopaminergic neurons in the brain. This disruption leads to a spectrum of motor symptoms including rigidity, bradykinesia, difficulty walking, and resting tremors. However, PD is not solely a movement disorder; it also encompasses a wide range of non-motor symptoms, including cognitive impairment, gastrointestinal dysfunction, and psychiatric disturbances. (Kouli et al., 2018)
             </p>
            </>
          ),
        },
        {
          subtitle: 'Global Impact and Prevalence',
          description: (
            <>
            <p>
              According to the World Health Organization, the prevalence of PD has doubled in the past 25 years. Global estimates in 2019 showed over 8.5 million individuals with PD. As the global population ages, the prevalence of PD is expected to rise, further amplifying the socio-economic impact of the disease. It is estimated that the number of individuals with PD will double by 2040, with the greatest increases projected to occur in low- and middle-income countries. (World Health Organization, 2023)
            </p>
            </>
          ),
        },
        {
          subtitle: 'Challanges in Current Treatments',
          description: (
            <>
            <p>
              Despite significant advancements in PD research and drug development, current therapies primarily focus on symptom management and fail to address disease progression. Levodopa, the gold standard treatment for PD, provides temporary symptomatic relief but does not address the underlying neurodegenerative process, while exacerbating non-motor symptoms. (Murakami et al., 2023) Therefore, there is an urgent need for a clinically feasible therapy that targets the underlying pathophysiological mechanisms of PD.
            </p>
            </>
          )
        },
      ],
    },
    {
      title: 'Background',
      image: '',
      subsections: [
        {
          subtitle: 'Alpha-Synuclein: Structure and Pathological Mechanisms',
          description: (
            <>
            <p>
              Alpha-synuclein (α-Syn) is a protein predominantly localized in brain regions associated with motor control. Comprising of 140 amino acids, it exhibits a natively unfolded structure and is primarily concentrated at presynaptic terminals in the mammalian brain. (Vidović & Rikalovic, 2022)
            </p>
            <figure>
              <img
                src="https://static.igem.wiki/teams/5079/alpha-syn-structure.png"
                alt="Figure 1: Characteristics of an alpha-syn monomer. Adapted from Schim et al."
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
              />
              <figcaption>Figure 1: Characteristics of an alpha-syn monomer. Adapted from Schim et al.</figcaption>
            </figure>
            <p>
              In PD, α-Syn undergoes misfolding, leading to the formation of toxic oligomers and fibrils that accumulate in dopaminergic neurons. This process involves nucleation, where initial misfolded proteins act as seeds for further aggregation, by forming stable nuclei that recruit additional monomers. (Jan et al., 2021; Vidović & Rikalovic, 2022) The aggregated forms of α-Syn contribute to the formation of Lewy bodies, intracellular inclusions found within neurons, which are a hallmark of PD. (Vidović & Rikalovic, 2022)
            </p>
            </>
          )
        },
        {
          subtitle: 'The Gut Origin Hypothesis',
          description: (
            <>
            <p>
              The gut-origin hypothesis suggests that α-syn pathology begins within the submucosal plexus of the enteric nervous system (ENS) before propagating retrogradely to the central nervous system (CNS) via the vagus nerve. (Rietdijk et al., 2017) Preclinical studies using animal models demonstrate the transmission of pathology from the gut to the brain, primarily facilitated by the vagus nerve. Severing the vagus nerve interrupts this transmission and reduces the risk of developing PD, further supporting the hypothesis. (Kim et al., 2019) Additionally, the discovery of Lewy bodies in the intestinal submucosal and myenteric plexuses of PD patients explicitly highlights the role of the intestine in PD etiology. (Chen & Mor, 2023)
            </p>
            </>
          )
        },
        {
          subtitle: 'Neurosin (KLK-6)',
          description: (
            <>
            <p>
              Neurosin (AKA KLK-6) is a 244 aa serine protease capable of cleaving α-syn. In vitro studies show that KLK-6 prevents α-syn aggregation by reducing the number of monomers while also generating fragmented α-syns that themselves inhibit polymerization. (Bluhm et al., 2021; Kasai et al., 2008)
            </p>
            <p>
              The specific sites of α-syn cleavage by neurosin consist of one major cleavage product and three additional cleavage products. The predominant cleavage site is located within the NAC domain of α-syn (specifically at aa K80 and T81). Residues 71-82 within the NAC region have a propensity for folding into β-sheets which promote fibril formation – thereby their cleavage reduces α-syn aggregation. However, the other identified cleavage sites (K97/D98, E114/D115, and D121/N122) are found within the C-terminal region of the α-synuclein molecule. The C-terminal contains an intrinsically disordered region which upon cleavage by neurosin may promote further aggregation (rather than reduction). (Bluhm et al., 2021)
            </p>
            <figure>
              <img
                src="https://static.igem.wiki/teams/5079/klk6-cleavage-sites.jpg"
                alt="Figure 2: Neurosin (KLK-6) cleavage sites shown in orange. Adapted from Bluhm et al."
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
              />
              <figcaption>Figure 2: Neurosin (KLK-6) cleavage sites shown in orange. Adapted from Bluhm et al.</figcaption>
            </figure>
            </>
          )
        },
      ],
    },
    {
      title: 'Introducing SynAxis',
      subsections: [
        {
          subtitle: 'SynAxis',
          description: (
            <>
            <p>
              SynAxis proposes the first localized and specific delivery vector to target α-synuclein pathology within the GI tract. We aim to:
            </p>
            <ul>
              <li>Engineer a delivery system that:
                <ul>
                  <li>Survives while maintaining therapeutic effects in the gut.</li>
                  <li>Ensures minimal off-target effects.</li>
                  <li>Targets misfolded monomeric seeds at desired residues, as to ensure no reaggregation or toxic fragments.</li>
                </ul>
              </li>
              <li>Formulate a treatment with a dosage, frequency, and duration that is clinically feasible.</li>
            </ul>
            </>
          )
        },
      ],
    },
    {
      title: 'A Novel Theraputic Design',
      subsections: [
        {
          subtitle: 'Modular Switch',
          description: (
            <>
            <p>
              The ability of KLK6 to generate pathogenic products from C-terminal cleavage and the potential for off-target effects limits its potential in-vivo. To circumvent this, we aim to design a modular protein switch to ensure neurosin activation only in the presence of pathological α-synuclein monomeric seeds.
            </p>
            <p>
              Modular protein switches are created by fusing protein domains in a way that their activities are interlinked. These fusions exhibit characteristic switch activities, controlled by specific ligands. (Nicholes et al., 2016) In our case, the switch will consist of an input domain that binds to the ligand (α-synuclein) and an output domain (neurosin) whose activity is modulated upon ligand binding in the input domain.
            </p>
            <p>
              The input domain selected for this purpose is cyclophilin D (CypD), a peptidyl-prolyl isomerase. This enzyme’s ligand-binding pocket is known to interact directly with α-synuclein at its acidic proline-rich C-terminal region. (Torpey et al., 2020)
            </p>
            <figure>
              <img
                src="https://static.igem.wiki/teams/5079/modular-switch-design.png"
                alt="Figure 3: A modular protein switch platform with an input domain and Neurosin (red) as the output domain. The substrates for the different domains are shown as the green triangle and yellow star – both of which in this case represent a-syn. Adapted from Nicholes et al."
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
              />
              <figcaption>Figure 3: A modular protein switch platform with an input domain and Neurosin (red) as the output domain. The substrates for the different domains are shown as the green triangle and yellow star – both of which in this case represent a-syn. Adapted from Nicholes et al.</figcaption>
            </figure>
            <p>
              Such a design would solve two previously identified challenges:
            </p>
            <ul>
              <li>
                The proteins are fused in such a way that binding of the input domain to α-syn is necessary for KLK6 activity. Neurosin would only be activated upon CypD binding to the α-syn seeds – thereby reducing off-target effects of the protease.
              </li>
              <li>
                CypD binding at the C-terminus will have a shielding effect that prevents cleavage by neurosin at these residues. As previously mentioned, C-terminal cleavage is associated with pathological reaggregation.
              </li>
            </ul>
            </>
          )
        },
        {
          subtitle: 'Spore-Biotic Delivery',
          description: (
            <>
            <p>
              Our current research focuses on designing an innovative spore-based probiotic delivery system that uses bacterial spores to deliver therapeutic proteins precisely to EECs upon oral administration. This approach targets enteroendocrine cells (EECs) in the intestinal lining, where α-synuclein aggregates start propagating to enteric neurons. (Rodrigues et al., 2022)
            </p>
            <p>
              The system integrates the modular switch by releasing the PBSX prophage upon germination, ensuring targeted release of the therapeutic payload in response to gut germination signals. By genetically fusing the ligand of interest to spore surface proteins, we enhance specificity for EEC receptors. (Mohamed & Christie, 2018) This innovative design aims to intervene early in Parkinson's disease progression through precise modulation of α-synuclein aggregation in the gut-brain axis, potentially offering a revolutionary treatment avenue for PD.


            </p>
            <figure>
              <img
                src="https://static.igem.wiki/teams/5079/spore-delivery-biorender.png"
                alt="Figure 4: System for the expression and release of a modular switch expressed within the spore core. The synthetic KLK6-CypD gene is placed downstream of the sspB promoter (PsspB), which normally controls expression of SASP-β. SASP-β is one of the most abundant proteins in the spore core. A ligand is genetically fused to the cotB coat protein sequence. This allows expression of our ligand on the spore surface for specific binding to an EECs receptor. The pcf positive control factor is controlled by an inducible promoter that responds to germination signals received by the spore. RNAP-TR refers to RNA polymerase termination sites.Created in BioRender."
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
              />
              <figcaption>Figure 4: System for the expression and release of a modular switch expressed within the spore core. The synthetic KLK6-CypD gene is placed downstream of the sspB promoter (PsspB), which normally controls expression of SASP-β. SASP-β is one of the most abundant proteins in the spore core. A ligand is genetically fused to the cotB coat protein sequence. This allows expression of our ligand on the spore surface for specific binding to an EECs receptor. The pcf positive control factor is controlled by an inducible promoter that responds to germination signals received by the spore. RNAP-TR refers to RNA polymerase termination sites.  Created in BioRender</figcaption>
            </figure>
            </>
          )
        },
      ],
    },
    {
      subsections: [
        {
          subtitle: 'References',
          description: (
            <>
           <ol>
             <li>Chen, M., & Mor, D. E. (2023). Gut-to-Brain α-Synuclein Transmission in Parkinson’s Disease: Evidence for Prion-like Mechanisms. <em>International Journal of Molecular Sciences, 24</em>(8), 7205. https://doi.org/10.3390/ijms24087205</li>
             <li>Kim, S., Kwon, S.-H., Kam, T.-I., Panicker, N., Karuppagounder, S. S., Lee, S., ... Ko, H. S. (2019). Transneuronal Propagation of Pathologic α-Synuclein from the Gut to the Brain Models Parkinson’s disease. <em>Neuron, 103</em>(4), 627-641.e7. https://doi.org/10.1016/j.neuron.2019.05.035</li>
             <li>Kouli, A., Torsney, K. M., & Kuan, W.-L. (2018). Parkinson’s Disease: Etiology, Neuropathology, and Pathogenesis. In T. B. Stoker & J. C. Greenland (Eds.), <em>Parkinson’s Disease: Pathogenesis and Clinical Aspects</em>. Codon Publications. http://www.ncbi.nlm.nih.gov/books/NBK536722/</li>
             <li>Mohamed, M. Y. H., & Christie, G. (2018). A system for the expression and release of heterologous proteins from the core of Bacillus subtilis spores. <em>FEMS Microbiology Letters, 365</em>(23), fny270. https://doi.org/10.1093/femsle/fny270</li>
             <li>Murakami, H., Shiraishi, T., Umehara, T., Omoto, S., & Iguchi, Y. (2023). Recent Advances in Drug Therapy for Parkinson’s Disease. <em>Internal Medicine, 62</em>(1), 33–42. https://doi.org/10.2169/internalmedicine.8940-21</li>
             <li>Nicholes, N., Date, A., Beaujean, P., Hauk, P., Kanwar, M., & Ostermeier, M. (2016). Modular protein switches derived from antibody mimetic proteins. <em>Protein Engineering, Design and Selection, 29</em>(2), 77–85. https://doi.org/10.1093/protein/gzv062</li>
             <li>World Health Organization. (2023). <em>Parkinson Disease.</em> Retrieved April 1, 2024, from https://www.who.int/news-room/fact-sheets/detail/parkinson-disease</li>
             <li>Rietdijk, C. D., Perez-Pardo, P., Garssen, J., van Wezel, R. J. A., & Kraneveld, A. D. (2017). Exploring Braak’s Hypothesis of Parkinson’s Disease. <em>Frontiers in Neurology, 8</em>, 37. https://doi.org/10.3389/fneur.2017.00037</li>
             <li>Rodrigues, P. V., de Godoy, J. V. P., Bosque, B. P., Amorim Neto, D. P., Tostes, K., Palameta, S., ... de Castro Fonseca, M. (2022). Transcellular propagation of fibrillar α-synuclein from enteroendocrine to neuronal cells requires cell-to-cell contact and is Rab35-dependent. <em>Scientific Reports, 12</em>(1), 4168. https://doi.org/10.1038/s41598-022-08076-5</li>
             <li>Torpey, J., Madine, J., Wood, A., & Lian, L.-Y. (2020). Cyclophilin D binds to the acidic C-terminus region of α-Synuclein and affects its aggregation characteristics. <em>Scientific Reports, 10</em>, 10159. https://doi.org/10.1038/s41598-020-66200-9</li>
             <li>Vidović, M., & Rikalovic, M. G. (2022). Alpha-Synuclein Aggregation Pathway in Parkinson’s Disease: Current Status and Novel Therapeutic Approaches. <em>Cells, 11</em>(11), 1732. https://doi.org/10.3390/cells11111732</li>
           </ol>
            </>
          )
        }
      ]
    }
  ];


  return (
    <Container fluid className="card-container-contribution">
      {sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="custom-card" id={`section-${sectionIndex}`}>
          <Card.Body>
            <Card.Title>{section.title}</Card.Title>
            <Row>
              <Col xs={8}>
                {section.subsections.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <h3 id={`section-${sectionIndex}-part-${subsectionIndex}`}>{subsection.subtitle}</h3>
                    <Card.Text style={{marginRight:'-10rem'}}>{subsection.description}</Card.Text>
                  </div>
                ))}
              </Col>
              <Col xs={4}>
                <img src={section.image} alt='' style={{ width: '100%', height: 'auto' }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Button
      className={`button ${isVisible ? 'visible' : ''}`}
      variant="custom"
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};
 
export default Description;
