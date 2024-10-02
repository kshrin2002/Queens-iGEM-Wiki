import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./design.css"; // Import the CSS file
import { useEffect, useState } from "react";

export function Design() {
  return (
    <>
      <div className="main">
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
    <div style={{ textAlign: "center", marginTop: "138px" }}>
      <h1
        style={{
          fontSize: "5em",
          color: "#590000",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        DESIGN
      </h1>
    </div>
  );
};

// FOR WRITE UPS CHANGE TITLES AND SIBTITLES ON SIDEBAR AS NEEDED
const Sidebar: React.FC = () => {
  const sections = [
    {
      name: "Background",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["Introduction", "Background"],
    },
    {
      name: "Molecular Switches",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: [
        "Introduction",
        "Output Domain - Neurosin",
        "Stages of Targeting in Brack’s Hypothesis",
        "Input Domain - Cyclophilin D",
        "Purpose",
      ],
    },
    {
      name: "Delivery System Design",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: [
        "Section 1.1: Overview of Spores (197words)",
        "Section 1.2: Overview of Sporulation and Germination (450 words)",
        "Section 2.1. Life Cycle of Spore Through Gastrointestinal Tract (363 words), ",
        "Section 2.2: Enteroendocrine Cells as a Therapeutic Target (387 words)",
        "Section 2.3. Display of Ligand on Spore Surface (725 words)",
        "Section 2.4: Localization of the Spore to Enteroendocrine Cells (991 words)",
        "Section 3.1: Germination Within Small Intestine (400 Words)",
        "Section 3.2. Spore Lysis and Release of Protein-of-Interest (POI) into Lumen (487 words)",
        "Section 4.1: Modulation of physiological interactions and delivery of POI into Cells (Absorption into tissues) (319 Words)",
      ],
    },
    {
      name: "References",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: [
        "References",
      ],
    },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className="sidebar-contributions">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <div
              onClick={() =>
                setOpenSection(openSection === index ? null : index)
              }
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={section.image}
                alt={section.name}
                className="section-image"
                style={{
                  marginRight: "8px",
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
              <span>{section.name}</span>
            </div>
            {openSection === index && (
              <StaggeredDropDown
                options={section.content}
                image={section.image}
                sectionIndex={index}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StaggeredDropDown = ({
  options,
  image,
  sectionIndex,
}: {
  options: string[];
  image: string;
  sectionIndex: number;
}) => {
  return (
    <motion.ul
      style={{
        padding: "10px",
        backgroundColor: "#fff",
        listStyle: "none",
        marginLeft: "0",
        marginTop: "10px",
        width: "100%",
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

const Option = ({
  text,
  image,
  sectionIndex,
  sectionPartIndex,
}: {
  text: string;
  image: string;
  sectionIndex: number;
  sectionPartIndex: number;
}) => {
  const handleClick = () => {
    const sectionId = `section-${sectionIndex}-part-${sectionPartIndex}`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const topPosition =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <li
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center" }}
    >
      <img
        src={image}
        alt="icon"
        style={{
          marginRight: "8px",
          width: "30px",
          height: "30px",
          objectFit: "cover",
        }}
      />
      <span>{text}</span>
    </li>
  );
};

// FOR WRIETUPS CHANGE TITLES AND DESCRIPTIONS AS NEEDED. SEE WETLAB/SAFETY FOR REFERENCE
const CardSection: React.FC = () => {
  const sections = [
    {
      title: "Background",
      subsections: [
        {
          subtitle: "Introduction ",
          description: (
            <>
              <p>
                Parkison’s disease (PD) remains a significant challenge in
                healthcare, necessitating innovative therapeutic approaches.
                Until recently no neuroprotective or neurorestorative therapy
                has been found for the treatment of PD. Existing treatments
                predominantly target dopamine-related symptoms, while only few
                target nondopaminergic symptoms that cause a severe burden on
                patients. Furthermore, no current PD treatments provides relief
                for disease progression – since they do not alter the extent of
                neuronal cell loss
              </p>
              <p>
                Therefore, there is need for the development of drugs that can
                both address the non-motor symptoms and disease progression by
                targeting the underlying pathology of PD. Recent advancements in
                the understanding of the gut-origin hypothesis provides a
                foundation for novel treatment modalities that target the
                gastrointestinal (GI) tract to combat early stages of the
                disease.
              </p>
              <p>Research Objective</p>
              <p>
                We propose the first localized and specific delivery vector to
                target a-synuclein pathology within the enteric nervous system
                of the intestines.
              </p>
            </>
          ),
        },
        {
          subtitle: "Background ",
          description: (
            <>
              <p>
                α-Synuclein (a-syn) is a key pathogenetic factor in
                neurodegenerative diseases (synucleinopathies) like PD. A-syn is
                a 140 amino acid (aa) natively unfolded protein localized
                predominantly at nerve terminals. The localization and behaviour
                of a-synuclein is suggestive of its function in vesicle
                trafficking. Its sequence consists of three major regions:
              </p>

              <ul>
                <li>
                  <p>
                    <strong>The N-terminal (aa 1-60)</strong>: This domain can
                    reversibly adopt an amphipathic alpha-helical structure that
                    enables it to embed into synaptic vesicle membranes.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      The non-beta amyloid component (NAC) region (aa 61-95)
                    </strong>
                    : This region consists of a hydrophobic core that is
                    implicated in the interactions that cause a-synuclein
                    aggregation.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>The C-terminal (aa 96-140)</strong>: This remains
                    unfolded.
                  </p>
                </li>
              </ul>

              <p>
                While the freely diffusible (non-membrane bound) version of
                a-syn in the cytoplasm is intrinsically disordered, certain
                pathological triggers may induce it to take a rigid beta
                sheet-enriched conformation that can polymerize into fibrils.
                These a-syn multimers may accumulate for a variety of reasons,
                including conformational stability, inefficient removal by
                proteases within neurons, and ongoing self-expansion through
                nucleation.
              </p>

              <p>
                Nucleation refers to the process whereby the initial misfolded
                proteins act as seeds for further aggregation. This involves the
                spontaneous assembly of a few a-syn monomers into a stable seed,
                which provides a template for additional monomers to join.
                Overall, this aggregation contributes to the formation of
                insoluble intracellular inclusions known as Lewy bodies, a
                pathological hallmark of PD.
              </p>

              <p>
                Braak's hypothesis suggests that a-syn pathology begins within
                the submucosal plexus of the enteric nervous system (ENS) before
                propagating retrogradely to the central nervous system (CNS) via
                vagal preganglionic axons. This has been validated through
                animal studies, some of which have demonstrated that severing
                the vagus nerve can prevent the spread of aggregated a-syn
                injected into the GI tract. Clinical studies further support
                this, finding that truncal vagotomy decreases the risk of PD –
                suggesting a link between vagal nerve function and the
                development of synucleinopathies.
              </p>

              <p>
                Internalization of a-syn aggregates into neurons of the ENS is
                not well characterized – however it may involve mechanisms
                analogous to endocytosis. After internalization, the aggregates
                may undergo axonal transport along Vagus nerve fibers that
                project to various regions of the brainstem involved in
                autonomic regulation of the gut. Aggregates may then propagate
                from the brainstem nuclei to brain regions implicated in PD
                including the substantia nigra and basal ganglia. This
                propagation may involve trans-synaptic transmission, whereby
                alpha-synuclein spreads between neurons through synaptic
                connections.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "Molecular Switches ",
      image: "",
      subsections: [
        {
          subtitle: "Introduction ",
          description: (
            <>
              <p>
                The unique appeal of proteins as therapeutic agents stems from
                their specificity in the functions they have. They can catalyze
                a single specific reaction or inhibit a single right cell
                receptor. However, they also possess the potential to be
                regulated at the protein level by molecular signals - a property
                that has huge therapeutic potential.
              </p>

              <p>
                An elegant approach to establishing such unique regulatory
                relationships within proteins is to synthesize switches
                —proteins whose activity is modulated through interactions with
                an input signal such as small molecules or other proteins. These
                molecular devices may be engineered by fusing two domains:
                <i>(i)</i> An input domain – responsible for recognizing an
                input signal, and
                <i>(ii)</i> An output domain – which possesses the desired
                output function such as enzymatic activity. This fusion must be
                in such a way that the reception of stimulus by the former
                induces a conformational and functional change in the latter.
              </p>

              <p>
                Such switches exist endogenously within biological systems.
                Cells can be viewed as complex circuits with an interacting
                network of molecules. A fundamental part of this interaction
                network of molecules are protein switches that couple cellular
                functions. The most predominant example of natural switches
                includes allosteric enzymes that link the presence of an
                effector molecule to enzymatic activities. Another key example
                includes ligand-dependent transcription factors – which can only
                modulate gene expression after forming a complex with a ligand.
              </p>

              <p>
                The ability to create novel tailor-engineered switches by
                coupling two uncoupled custom functions allows us to re-write
                cellular circuitry and actuate molecular functions. The most
                common method of switch creation is by domain insertion between
                two different proteins with the prerequisite input and output
                properties. This is described in Figure 1. Inputs for
                biomolecular switches are diverse, spanning ligand binding,
                post-translational modifications, and environmental – including
                temperature and pH – changes. Outputs are also variable,
                including changes in binding partner affinity, exposure or
                burial of functional sites, and changes in oligomeric states.
                The most common output domains include enzymes, binding
                proteins, fluorescent proteins, and luminescent proteins.
                Overall, through such protein engineering, we can develop a
                mechanism by which our protein-of-interest may be switched on or
                off by a stimulus.
              </p>

              <img
                src="https://static.igem.wiki/teams/5079/writeups/design/1.png"
                alt="Schematic depiction of protein switch by domain insertion"
              ></img>

              <p>
                <strong>Figure 1.</strong> Schematic depiction of the creation
                and components of a protein switch by domain insertion. The
                switch is engineered by the fusion of two domains in such a way
                that the activity of the output domain is regulated by the input
                domain’s recognition of its (input) signal. The light grey color
                of the output domain indicates that it is inactive. The input
                signal is depicted as a grey circle complexed with the input
                domain. The input and output domains are attached with a linker.
              </p>
            </>
          ),
        },
        {
          subtitle: "Output Domain - Neurosin ",
          description: (
            <>
              <p>
                Neurosin (human kallikrein 6, KLK6, Zyme, Protease M) is a
                serine protease that is expressed preferentially in the brain –
                including throughout CNS neurons, in the choroid plexus, and in
                oligodendrocytes and astroglia cells. The protein itself is 244
                amino acids long (27 kDa) and shares much homology with
                trypsinogen I and II. As serine proteases, both KLK6 and trypsin
                are known to recognize lysine residues.
              </p>

              <p>
                α-synuclein is a lysine-rich protein, characterized by repeats
                of the sequence KTKEGV. Therefore, they would be predicted to be
                capable of cleaving α-synuclein. Inhibition studies of
                α-synuclein clearly showed that its degrading activity within
                HEK-293 is inhibited by the application of serine protease
                inhibitors. Kallikrein inhibitor application also shows
                dose-dependent inhibition of the degradation – suggesting that
                the formation of α-synuclein fragments is generated in large
                part by proteases of the kallikrein family - especially
                neurosin.
              </p>

              <p>
                Endogenous neurosin is expressed in an inactive pro-form
                (pro-neurosin). As demonstrated by Iwata et al., a significant
                amount of the protease exists within cell bodies – particularly
                in mitochondria and microsomes in sub-cellular fractionation.
                However, if the enzyme was abundant only in the mitochondria,
                with a low cytosolic and extracellular fraction, the chance for
                it to degrade α-synuclein would be minimal. Therefore, during
                times of cellular stress, it undergoes secretion both from the
                mitochondria into the cytoplasm and from the cytoplasm into the
                interstitial space. Upon secretion, pro-neurosin is activated by
                autocatalytic proteolysis (self-cleavage). This auto-activation
                process begins with cleavage at the Q19 residue, followed by
                cleavage at K21, resulting in the formation of the mature active
                neurosin enzyme. Proteolytic reactions in-vitro show that
                autocatalytic cleavage may begin within 10 minutes and full
                cleavage can occur by 240 minutes. However, after becoming
                active, the mature neurosin enzyme may undergo auto-proteolytic
                inactivation by cleavage at R80. Simple modification of the R80
                residue to glutamine (Q) prevents the auto-inactivation of
                neurosin – generating a longer-half life for the protease.
              </p>

              <p>
                Kasai et al. reported the exact sites of α-synuclein cleavage by
                neurosin. Upon degradation of α-synuclein, one major and three
                additional cleavage products were detected by Western blot
                analysis. The identity of these fragments was subsequently
                revealed by liquid chromatography-ion trap mass spectrometry.
                The predominant cleavage was identified within the NAC domain at
                K80/T81. Residues 71-82 within the NAC region have a propensity
                for folding into β-sheets, which promote fibril formation –
                thereby their cleavage reduces a-syn aggregation. However, the
                other identified cleavage sites (K97/D98, E114/D115, and
                D121/N122) are found within the C-terminal region of the
                α-synuclein molecule. The C-terminal contains an intrinsically
                disordered region which upon cleavage by neurosin may promote
                further aggregation (rather than reduction).
              </p>

              <p>
                <strong>Figure 1.</strong> Schematic representation of cleavage
                sites within the α-synuclein molecule. Neurosin cleavage sites
                are shown in orange. Adapted from Bluhm et al.
              </p>

              <img
                src="https://static.igem.wiki/teams/5079/writeups/design/6.png"
                alt="Schematic representation of a-synuclein cleavage sites"
              ></img>

              <p>
                The use of neurosin to limit α-synuclein oligomerization and
                prevent its propagation has been investigated in many studies.
                Kasai et al. showed that neurosin prevents aggregation of
                α-synuclein by degrading both its monomeric and oligomeric
                forms, as well as by generating fragments that themselves
                inhibit polymerization. These fragments generated by neurosin
                are unharmful to neurons. Spencer et al. demonstrated through a
                lentiviral-driven expression system for neurosin that the
                protease reduced the accumulation of wild-type (WT) α-synuclein
                as well as its associated toxicity in neuronal cell cultures.
                Additionally, the authors demonstrated that in transgenic mice
                expressing human α-synuclein, neurosin application markedly
                reduced α-synuclein accumulation. In contrast, the delivery of
                neurosin siRNA exacerbated α-synuclein aggregation. The same
                group also demonstrated that peripheral administration of
                neurosin through an apoB vector reduced its accumulation with
                oligodendrocytes and astrocytes, as well as its cell-to-cell
                spread between glial cells. This resulted in improved myelin
                sheath formation in the corpus callosum and behavioral
                improvements.
              </p>
            </>
          ),
        },
        {
          subtitle: "Stages of Targeting in Brack’s Hypothesis",
          description: (
            <>
              <p>
                The propagation of α-syn pathology from the ENS to the CNS
                remains an ongoing area of debate. The protein has been shown to
                exist both intracellularly and extracellularly. The propagation
                can be summarized by the following steps:
              </p>

              <ul>
                <li>
                  <p>
                    Transfer within the ENS begins with misfolded α-syn seeds
                    being secreted from enteric neurons into the interstitial
                    compartment either as free proteins or encapsulated within
                    vesicles like exosomes.
                  </p>
                </li>
                <li>
                  <p>
                    Once in the extracellular space, α-syn seeds can be taken up
                    by neighboring cells in the ENS through various mechanisms.
                    These mechanisms include direct penetration of the plasma
                    membrane, endocytosis, and fusion of plasma-exosomal
                    membranes.
                  </p>
                </li>
                <li>
                  <p>
                    Upon internalization by neighboring cells in the ENS, α-syn
                    seeds undergo multiple post-translational modifications
                    (PTMs), such as truncation, phosphorylation, and
                    ubiquitination. The PTMs facilitate interactions between the
                    exogenous α-syn seeds and endogenous α-syn monomers, as well
                    as other cytosolic proteins. These interactions promote
                    further aggregation of α-syn within the recipient cells and
                    often prevent degradation of the fibril by enzymes such as
                    KLK6.
                  </p>
                </li>
              </ul>

              <p>
                KLK6 may cleave α-synuclein when it exists as a misfolded
                α-synuclein seed in the interstitial space or within neuronal
                cells of the ENS. After PTMs, the efficacy of KLK6 in reducing
                α-synuclein concentration is reduced.
              </p>
            </>
          ),
        },
        {
          subtitle: "Input Domain - Cyclophilin D ",
          description: (
            <>
              <p>
                Cyclophilin D (CypD) is a highly conserved peptidyl-prolyl
                cis-trans isomerase (PPIase) – which catalyzes the
                cis-trans-isomerization of proline residues and thereby
                modulates conformational changes of target proteins. It is
                encoded by the nuclear Ppif gene and contains a mitochondrial
                targeting sequence which is cleaved upon its translocation into
                the mitochondrial matrix. CypD is the only member of the
                cyclophilin family that is resident in the mitochondria. It is
                nuclearly encoded by the PPIF gene and imported into the
                mitochondrial matrix.
              </p>

              <p>
                Although the physiological role of CypD remains unclear, it has
                been shown to be a sensitizer of the putative mitochondrial
                permeability transition pore (MPTP) - a nonspecific large
                conductance pore in the inner mitochondrial membrane. Opening of
                the MPTP leads to dissipation of the inner mitochondrial
                membrane potential, loss of ATP production, and eventually cell
                death. However, short transients of the MPTP may play a
                beneficial physiological role in modulating matrix calcium
                levels. Indeed, CypD was reported to regulate mitochondrial
                calcium levels via transient mPTP opening in relation to the
                metabolic needs of the cell. This likely provides insight into
                its physiological function.
              </p>

              <p>
                Most notably, the cyclophilin family has been shown to act as
                chaperones accelerating protein folding and maturation –
                particularly through isomerization of proline residues. In
                accordance with this, CypD was recently shown to directly
                interact with α-Synuclein in the acidic proline-rich C-terminus
                region. Torpey et al. demonstrated that incubation of CypD with
                freshly prepared αSyn repressed the aggregation of αSyn, as
                assessed using Thioflavin T (ThT) fluorescence, over a period of
                3 days. They subsequently used NMR to identify the binding site
                residues for each protein. Residues in 15N-labelled α-Synuclein
                whose resolved resonances significantly broadened after the
                addition of CypD included: H50, A53-K58 (part of the NAC
                region), and E110, D119-Y125, S129, E130, Q134, and E137 (part
                of the acidic C-terminal region).
              </p>

              <p>
                Further experiments were conducted using synthetic α-synuclein
                peptides of “51-65” α-synM and “119-140” α-synC - each
                corresponding to the two C-terminal regions identified in the
                NMR studies. αSynC binds CypD with a Kd ~ 78 µM, whereas αSynM
                binds with less affinity. αSynM is also not an isomerisation
                substrate of CypD, whereas αSynC is.
              </p>

              <p>
                Torpey et al. also showed through NMR data that CypD promotes
                disassembly of pre-formed αSyn fibrils by its increased
                isomerase activity – along with attenuating aggregation by its
                binding. In pre-formed αSyn fibrils, resonances from residues
                37–60 are not observable – as this region is involved in
                intermolecular hydrogen bonds forming the beta-sheet structure
                of the fibril. Application of CypD to the fibrillar αSyn sample
                caused a gradual recovery of many αSyn resonances. This
                indicates that less fibrillar states of αSyn were being formed
                over time while it was simultaneously being degraded, allowing
                for the return of resonances of certain residues.
              </p>

              <p>
                This protein disaggregation by CypD may be viewed as
                advantageous – acting as a housekeeping process that prevents
                the cell from accumulating persistent oligomer, aggregates, and
                fibrils. However, this disaggregation produces small oligomers,
                whose toxicity is debated and who may act as "seeds" for further
                aggregation. Hence, although the ability of CypD to bind and
                prevent αSyn aggregation is clearly beneficial, the same cannot
                be concluded for its disaggregase role.
              </p>

              <p>
                Thereby, a catalytically inert cyclophilin variant was preferred
                by our team in the modular switch design. We performed an R55K
                (R97K in human mitochondrial precursor sequence) mutation. The
                arginine at residue 97 is important for PPIase activity, and
                mutating it abolishes the PPIase activity of CypD. Substitution
                for lysine has been demonstrated to retain CypD binding to
                substrate peptides, while only having minimal isomerase
                activity. This allows CypD to act closer to an antibody mimetic
                protein.
              </p>
            </>
          ),
        },
        {
          subtitle: "Purpose",
          description: (
            <>
              <p>
                KLK6 and Cyclophilin D – two unrelated proteins – may be
                systematically recombined to link their respective functions and
                create a molecular switch. The purpose of such a design serves
                two purposes.
              </p>

              <p>
                First, off-target effects greatly limit the therapeutic
                potential of enzymes in disease treatment. Though KLK6 has been
                shown to be capable of cleaving α-synuclein – it is also equally
                capable of cleaving other proteins. One significant example
                includes members of the protease activated receptor (PAR)
                family. Recombinant KLK6 has been shown to mobilize Ca2+ in PAR2
                overexpressing cells as well as mediate aortic ring relaxation
                in a PAR2-dependent fashion. KLK6 has also been shown to cleave
                and thus activate PAR1 in neurons – both PAR1 and PAR2 elicit
                Ca2+ influx within astrocytes. Moreover, through a PAR1
                dependent mechanism, KLK6 also mediates Bcl2 family member
                signaling in lymphocytes. Lastly, fluorescent experiments using
                FRET peptides have demonstrated that KLK6 has activity on many
                peptides containing clusters of basic amino acids. This includes
                the Furin cleavage sequences which are needed for activation of
                MMP-14, human nerve growth factor, and neurotrophin-3.
                Therefore, taken together, these results suggest that KLK6
                extensively regulates cell physiology as well as pathological
                responses. The design of a molecular switch would prevent any
                such adverse events due to extension of its physiological
                functions or possible pathophysiological associations. This is
                demonstrated in Figure 1.
              </p>

              <p>
                <strong>Figure 3.</strong> (a) Schematic depiction of cleavage
                sites of KLK6 within α-synuclein molecule. Sites are shown with
                orange arrows. (b) Representation of the mechanism by which
                coupling of the functions of Cyclophilin D and KLK6 may prevent
                cleavage of any molecule when the input signal is not present.
                Binding of cyclophilin-D to α-synuclein activates KLK6 –
                allowing it to cleave adjacent monomeric or oligomeric forms of
                the protein. Created in Biorender.
              </p>

              <img
                src="https://static.igem.wiki/teams/5079/writeups/design/2.png"
                alt="Schematic depiction of KLK6 and Cyclophilin D function"
              ></img>

              <p>
                As depicted in Figure 3, KLK6 remains in an inactive state when
                Cyclophilin D is not bound to its substrate. However, in regions
                with high concentrations of α-synuclein, Cyclophilin D binds to
                the input domain, triggering KLK6 activation, which facilitates
                the cleavage of neighboring α-synuclein molecules. It is
                important to note that Cyclophilin D may not be an optimal
                candidate for the input domain due to its numerous off-target
                interactions. In particular, Cyclophilin D exhibits affinity for
                the mitochondrial permeability transition pore (MPTP) and ATP
                synthase, which can inadvertently influence the function of the
                output domain. These interactions pose significant challenges
                for maintaining the specificity and efficacy of the designed
                switch. Despite these concerns, we propose that the successful
                engineering of this molecular switch could pave the way for
                novel protein-based therapies, enabling precise and targeted
                therapeutic interventions for complex diseases like Parkinson’s.
              </p>

              <p>
                The second function of the molecular switch aims to improve the
                specificity of KLK6-mediated cleavage of α-synuclein. As
                previously mentioned, KLK6 generates one major cleavage product
                and three minor cleavage products when acting on α-synuclein.
                The minor cleavage products, located within the acidic
                C-terminal region, are of particular concern due to their
                association with pathological reaggregation of α-synuclein when
                cleaved. To mitigate this, we decided to incorporate an input
                domain (Cyclophilin D) that specifically binds to the C-terminal
                region of α-synuclein, in proximity to KLK6’s cleavage sites. We
                hypothesized that this input domain would exert a steric
                hindrance effect, obstructing KLK6's access to the C-terminal
                residues. Consequently, as shown in Figure 4, this restriction
                would limit KLK6’s cleavage to the NAC region, where its
                activity is more beneficial and less likely to induce
                pathological reaggregation.
              </p>

              <p>
                <strong>Figure 3.</strong> (a) Diagram of two molecular switches
                interacting with two α-synuclein molecules. Cyclophilin D (blue)
                first binds to the C-terminus of α-synuclein, activating the
                KLK6 domain. Once activated, the KLK6 domain may then cleave the
                NAC domain of an adjacent α-synuclein molecule. (b) Schematic
                representation of the steric hindrance effect, where CypD
                binding to the C-terminus of α-synuclein prevents KLK6 from
                cleaving residues within the acidic region.
              </p>

              <img
                src="https://static.igem.wiki/teams/5079/writeups/design/3.png"
                alt="Diagram of molecular switches and steric hindrance effect"
              ></img>
            </>
          ),
        },
      ],
    },
    {
      title: "Delivery System Design ",
      subsections: [
        {
          subtitle: "Section 1.1: Overview of Spores (197words) ",
          description: (
            <>
              <p>
                Recent literature implicating the importance of the gut
                microbiome in human health suggests that among commensal
                occupants of the gut microbiome, approximately half are spore
                forming bacteria (Egan et al., n.d.; Koopman et al., 2022).
                Bacterial spores are metabolically inactive and have a life
                cycle of three distinct process triggered by environmental
                changes; growth of active vegetative cells, germination and
                sporulation (Sella et al., 2014). Vegetative cells differentiate
                into spores through sporulation which culminates in the release
                of the mature spore from the mother cell. Germination follows
                the dormant spore phase and is the transition back into a
                vegetative cell. Sporulation exists across multiple bacterial
                classes including the bacilli, and clostridia which are innate
                inhabitants of the gut microbiome (Basta & Annamaraju, 2024).
                The presence of the bacilli Bacillus subtilis is already
                associated with various human diseases such as inflammatory
                bowel disease, but is also shown to have a potential role in the
                protection against a-synuclein aggregation in Parkinson’s
                Disease (Goya et al., 2020; Guo et al., 2020; Ilinskaya et al.,
                2017). For its localization and therapeutic opportunities, B.
                subtilis is a species of interest for the delivery of the POI of
                our Parkinson’s therapeutic into the gut.
              </p>
            </>
          ),
        },
        {
          subtitle:
            "Section 1.2: Overview of Sporulation and Germination (450 words) ",
          description: (
            <>
              <p>
                Sporulation and germination are very tightly regulated processes
                initiated by both internal and external stimuli in response to
                changes in the environment of a bacterium (Koopman et al.,
                2022). Sporulation occurs when a bacterial cell is present
                within an unfavourable external environment, whereas germination
                occurs when the environment has become favourable. Low
                extracellular nutrient density and a high population density are
                common external signals that trigger sporulation, particularly
                for the sporulation-linked quorum-sensing system of B. subtilis
                that surveys these conditions. Internal signals triggering
                sporulation include a decrease in guanosine triphosphate (GTP)
                levels, which correspond to a lack of nutrient density in the
                external environment. As such, alteration of intracellular GTP
                levels may be utilized to induce sporulation without major
                genetic alterations. Mechanistically, sporulation in Bacillus
                genus is regulated by a phosphorelay involving the transference
                of phosphate groups by histidine kinases from ATP to
                transcription factor Spo0A for expression of genes needed for
                the release of the mature spore from its mother cell (Koopman et
                al., 2022; Sella et al., 2014). Thus, highly conserved
                sporulation initiation proteins such as Spo0A and RNA polymerase
                sigma factors within B. subtilis may offer targets for more
                complex induction of sporulation for a spore-biotic, a spore
                forming probiotic (Koopman et al., 2022).
              </p>
              <p>
                The germination process by which dormant bacterial cells or
                spores become active vegetative cells features three stages;
                activation, germination stage I and stage II (Koopman et al.,
                2022). Both activation and stage I do not require adenine
                triphosphate (ATP), with the same likely being true for stage II
                as well. Upon the completion of germination, outgrowth occurs,
                requiring a return to homeostatic metabolic processes and the
                biosynthesis of macromolecules. Like sporulation, germination
                requires appropriate signals for initiation and is irreversible
                once started. Several triggering signals exist within the gut,
                primarily including bile acids and dietary components of the
                host. These stimuli, termed germinants, can trigger germination
                through interactions with germinant receptor proteins expressed
                on the surface of metabolically inactive spores. For example, B.
                subtilis features a germinant receptor GerA specific for the
                germinant L-alanine and inhibited by D-alanine. Spores also
                feature the ability to initiate germination in the absence of
                germinant receptor-based signalling. External dipicolinic acid
                is an example of a stimulus that results in germination through
                this manner. Dipicolinic acid activates a cortex lytic enzyme,
                Cw1J, which enables receptor independent germination. High
                hydrostatic pressure is another germinant of spores by which
                high pressures trigger germination through direct activation of
                inner membrane germinant receptors and channels like CaDPA.
                Finally, many antimicrobial compounds from various bacterial
                species can either activate or inhibit germination. Like for
                sporulation, each germinant offers an opportunity for the
                development of our spore biotic (Koopman et al., 2022).
              </p>
            </>
          ),
        },
        {
          subtitle:
            "Section 2.1. Life Cycle of Spore Through Gastrointestinal Tract (363 words) ",
          description: (
            <>
              <p>
                The density and composition of microbiota throughout the gut is
                unique and is affected by chemical, nutritional and
                immunological gradients (Neish, 2009). High levels of acids,
                oxygen, and antimicrobials in the small intestine often limit
                bacterial growth so that mainly facultative anaerobes that can
                adhere to epithelia survive (Donaldson et al., 2016) . In
                contrast, colonic microbiomes are generally dense, diverse, and
                highly populated by anaerobes that utilize undigested
                carbohydrates found in dietary fibre (Gu et al., 2013). The
                colon is also home to a thick mucus which offers energy and
                preferential binding sites for commensal bacteria (Tailford et
                al., 2015). Bile acids are highly relevant in bacterial balance
                by providing homing signals that promote germination of spores.
                Thus, early germination is most common in the upper most part of
                the tract, and the amount of vegetative cells that reach the
                lower gastrointestinal tract are reduced (Ceuppens et al.,
                2012).
              </p>
              <p>
                While the majority of studies on spores and their life cycle in
                the gastrointestinal (GI) tract use models of mice, farm
                animals, or artificial tracts, recent studies surrounding their
                successful application in the human GI tract have shown great
                promise (Bernardeau et al., 2017). Spore-based probiotics, which
                are typically derived from the Bacillus genus, have been shown
                to be highly beneficial when administered to the GI tract,
                primarily due to their ability to thrive in various harsh
                intestinal environments. Further, in a randomized, open-label
                cross-over trial comparing two commercial probiotic
                formulations, oral administration was proven to be an effective
                method of delivery to the GI tract confirmed by detection of
                germinating, outgrowth, and multiplication spores (Bernardeau et
                al., 2017; Ghelardi et al., 2015).
              </p>
              <p>
                The symbiosis of the gut microbiome is trivial to overall
                health; the enrichment or depletion of certain orders of
                bacteria disrupts intrinsic metabolic processes, signaling
                pathways, nutrient use and distribution, immune responses (Egan
                et al., n.d.). Gut dysbiosis is therefore an emerging biomarker
                and intervention target for complex diseases like Parkinson’s
                (Chan et al., n.d.). In a study examining the relationship and
                predictive capacity of the gut microbiome composition with
                Parkinson’s Disease, an increase in Butyricicoccus and
                Faecalibacterium genera showed the strongest correlation with
                disease progression (Huang et al., 2023).
              </p>
            </>
          ),
        },
        {
          subtitle:
            "Section 2.2: Enteroendocrine Cells as a Therapeutic Target (387 words) ",
          description: (
            <>
              <p>
                Enteroendocrine cells (EECs) are specialized sensory cells
                dispersed along the epithelial layer of the gut. EECs detect the
                luminal contents of the intestine, including products of food
                breakdown and microbial fermentation. They respond to these
                signals by releasing hormones into the interstitial space, which
                act locally though paracrine actions or enter the bloodstream to
                act on distant organs. These gut hormones can modulate
                digestion, absorption, nutrient disposal, and appetite (Gribble
                & Reimann, 2019). Most EECs are open-type, whereby the apical
                membrane interacts with the gut lumen while the basolateral
                surface faces the interstitial space. Open-type EECs interact
                with luminal stimuli with several types of sensory proteins,
                including G protein-coupled receptors (GPCRs), transporters, and
                ion channels (Gribble & Reimann, 2019). The signaling pathways
                mediated by EECs have been leveraged in the development of
                therapeutic treatments for several conditions tied to
                gastrointestinal dysfunction, including type 2 diabetes
                mellitus, obesity, and irritable bowel syndrome (Barton et al.,
                2023).
              </p>
              <p>
                Many EECs possess neuropods, which are basal cytoplasmic
                processes that connect to and share properties with enteric
                neurons (Liddle, 2019). They contain neurofilaments, presynaptic
                and postsynaptic proteins, secretory vesicles, and neurotrophin
                receptors, and mRNA for enzymes involved in dopamine synthesis
                (Bohórquez et al., 2015; Liddle, 2019). Neuropod cells are
                uniquely involved in both endocrine, paracrine, and neural
                communication, as they are packed with large vesicles containing
                hormones, as well as small vesicles containing
                neurotransmitters. EECs in the proximal small intestine
                expressing cholecystokinin (CCK) and EECs in the distal small
                intestine expressing peptide YY (PYY) have been shown to express
                neuropods (Liddle, 2019).
              </p>
              <p>
                Neuropod cells are a keystone in the gut-brain axis, uniquely
                positioned to mediate the direct communication between the gut
                epithelium and the enteric nervous system. With regards to the
                accumulating evidence of a gut-first pathogenesis of PD, EECs
                have been suggested as a potential site where intestinal stimuli
                could drive the misfolding of α-synuclein (Ortiz de Ora et al.,
                2024). CCK cells and PYY cells have both been shown to express
                α-synuclein, and it was recently discovered that
                dopamine-dependent mechanisms of α-synuclein aggregation can
                occur in the gut (Chandra et al., 2017; Ortiz de Ora et al.,
                2024). By targeting EECs with a genetically engineered
                spore-biotic, early PD pathology could be intercepted before
                misfolded α-synuclein and aggregates reach the synaptic
                connection between neuropods and enteric nerves (Chandra et al.,
                2017).
              </p>
            </>
          ),
        },
        {
          subtitle:
            "Section 2.3. Display of Ligand on Spore Surface (725 words) ",
          description: (
            <>
              <p>
                Once the spore-biotic has successfully passed through the
                initial phases of the alimentary canal, it will enter the lumen
                of the duodenum and will need to be designed such that it can
                bind to the target EECs via highly specific ligand-receptor
                binding interactions. For this interaction to work, a
                heterologous protein can be used as a ligand specific to
                receptors on CCK and PYY cells, and must be displayed on the
                surface of the spore. The bacterial endospore generally consists
                of eight distinct layers which can be visualized in the figure
                below: the core, a cortex flanked by both an inner and outer
                forespore membrane, a basement layer, an inner coat, an outer
                coat, and crust (McKenney et al., 2013). The outer layers of the
                bacterial spore consist of a network of crosslinked spore coat
                proteins that are exposed to the extracellular environment,
                making this region ideal for heterologous protein expression.
              </p>

              <p>
                <strong>Figure X.</strong> (a) Cartoon representation of the
                typical <i>B. subtilis</i> spore, detailing eight distinct
                layers that surround the genome housed in the central core. (b)
                Transmission electron micrograph of a stained section of a{" "}
                <i>B. subtilis</i> spore. (c) Transmission electron micrograph
                of a stained section of a <i>Bacillus anthracis</i> spore,
                detailing similar morphology to that of <i>B. subtilis</i>{" "}
                spores (McKenney et al., 2013).
              </p>

              <img
                src="https://static.igem.wiki/teams/5079/writeups/design/4.png"
                alt="Cartoon representation and electron micrographs of spore structure"
              ></img>

              <p>
                Among the different coat proteins, CotG, CotB, and CotC have
                most commonly been used as fusion partners to display
                heterologous proteins on the spore surface. CotG is associated
                with the crust layer of the spore, while CotB and CotC are
                associated with the outer coat (McKenney et al., 2013). In one
                study, CotB was used to display the non-toxic C-terminal
                fragment of the tetanus toxin (TTFC) on the spore surface (Duc
                et al., 2003). Without knowledge of the anchoring domain for
                CotB at the time, the tetC gene was cloned in at both the 3′ and
                5′ ends of the CotB gene, resulting in a ‘sandwich’ fusion (Duc
                et al., 2003). This approach has since been refined with a
                preference for N-terminal fusions where the anchoring domain of
                the coat protein is at its C-terminus or when the epitope of the
                displayed heterologous protein is at its N-terminus (Isticato et
                al., 2001; Mauriello et al., 2004). Similarly, when CotC is used
                as a fusion partner, the efficiency of heterologous protein
                display is also highly dependent on the location of gene
                insertion. For example, a five-fold increase in display
                efficiency was observed when TTFC was inserted at the N-terminus
                of CotC rather than the C-terminus (Mauriello et al., 2004).
              </p>

              <p>
                While CotB and CotC serve as plausible fusion partners for the
                heterologous protein, they present different patterns of
                heterologous protein expression. One study by Hinc et al. (2010)
                directly compared the expression patterns of each fusion
                partner, using the UreA protein from{" "}
                <i>Helicobacter acinonychis</i> as the heterologous protein to
                be displayed on the spore surface. Their results found that
                while both fusion partners expressed high levels of recombinant
                protein, with CotB displaying 1 × 10<sup>3</sup> recombinant
                proteins per spore and CotC displaying 7-15 × 10<sup>3</sup>{" "}
                recombinant proteins per spore, CotC did not adequately display
                the proteins on the spore surface and instead displayed them
                within the spore coat. For this reason, CotB is the preferred
                fusion partner, as it both displays high levels of heterologous
                proteins and adequately displays them on the spore surface.
              </p>

              <p>
                To further enhance the integrity and efficiency of the displayed
                heterologous protein, linker peptides of 5-11 amino acid
                residues are often inserted between the heterologous protein and
                the chosen coat protein. This enhanced display of heterologous
                proteins is thought to arise from the physical separation of the
                components of a fusion by the insertion of the linker peptide,
                which may help to overcome misfolding of fused protein complexes
                (Hinc et al., 2013). In one study, Hinc et al. (2013) tested two
                peptide linkers, GGGGS and GGGEAAAKGGG, for the display of
                recombinant UreA protein using CotB as a fusion partner. The
                sequence for GGGGS or GGGEAAAKGGG was inserted between the
                C-terminus of CotB and the N-terminus of UreA, and display
                patterns of recombinant UreA using either linker peptide were
                compared. Hinc et al. (2013) found that when GGGGS was used as a
                linker peptide, there was a loss of recombinant UreA protein
                display on the spore surface. However, when GGGEAAAKGGG was used
                as the linker peptide, there was a marked improvement of UreA
                expression, both in integrity and in expression efficiency. This
                is thought to result from the EAAAK motif within the GGGEAAAKGGG
                linker peptide, which forms a stable α-helix secondary structure
                (Hinc et al., 2013). As such, the GGGEAAAKGGG linker peptide
                will be inserted between CotB and our peptide ligand of choice
                to increase the efficiency and integrity of display on the spore
                surface.
              </p>
            </>
          ),
        },
        {
          subtitle:
            "Section 2.4: Localization of the Spore to Enteroendocrine Cells (991 words) ",
          description: (
            <>
              <p>
                To target EECs carrying abnormal forms of α-synuclein, the
                spore-biotic will present a peptide ligand specific to receptors
                on CCK cells and PYY cells. Employing the spore-biotic with a
                targeting ligand confers cellular selectivity, which is expected
                to improve its therapeutic efficacy and minimize off-target
                toxicities. Peptides are highly biodegradable and generally
                non-immunogenic, offering a site-specific delivery system that
                does not generate new toxicities or trigger immune responses
                (Zhao et al., 2020). Several GPCRs expressed by CCK cells and
                PYY cells are responsible for chemosensing the gastrointestinal
                lumen and pose as potential targets for peptide-spore conjugate.
                Specifically, sweet-taste and fatty acid receptors in the gut
                are well-established and predominantly expressed by EECs.
                Numerous peptide ligands for these receptors have been
                investigated in recent efforts to develop treatments for
                metabolic conditions and establish artificial sweeteners that
                are safe for consumption (Milligan et al., 2017; Sprous &
                Palmer, 2010). By engineering the spore-biotic to express a
                peptide ligand on its outer surface that is known to interact
                with a target receptor, it could localize to neuropod cells and
                enact its therapeutic action with great specificity and
                precision.
              </p>
              <p>
                The detection of sugar and sweeteners involves sweet-taste
                receptors and glucose transporters abundantly expressed in the
                proximal small intestine. The sweet-taste receptor, T1R2-T1R3,
                is a heterodimer of two GPCRs expressed by enteroendocrine PYY
                cells, CCK cells, EECs secreting gastric inhibitory peptide
                (GIP), and brush cells (Kojima & Nakagawa, 2011). Recent
                evidence suggests that sweet-taste signals in the intestine
                originate from CCK-positive neuropod cells bearing T1R2-T1R3 and
                propagate to the vagus nerve (Kaelberer et al., 2018). Sweet
                sensation by neuroendocrine PYY cells leads to the secretion of
                GLP-1, which regulates insulin secretion from pancreatic β-cells
                and modulates appetite and intestinal motility (Kojima &
                Nakagawa, 2011). Due to its influence on ingestive behaviour,
                the sweet-taste receptor is the target of developing
                interventions aimed to mitigate obesity and its associated
                health risks (Joseph et al., 2019; Masuda et al., 2018; Sprous &
                Palmer, 2010).
              </p>
              <p>
                Sweet compounds can take the form of amino acids, peptides,
                proteins, carbohydrates, and other natural and synthetic organic
                compounds (Kojima & Nakagawa, 2011). Namely, thaumatin is a
                natural non-nutritive peptide sweetener that is heat and pH
                stable, owing to its strong tertiary structure reinforced by
                eight disulfide bridges (Joseph et al., 2019). Thaumatin binds
                to the outer surface of T1R2-T1R3 through multipoint
                electrostatic interactions and with a sweetness potency 100,000
                times greater than that of sucrose (Joseph et al., 2019; Masuda
                et al., 2018). It does not elicit any allergenicity or toxicity
                upon ingestion, and it is ultimately metabolized as a dietary
                protein (Joseph et al., 2019). Moreover, thaumatin can be
                synthesized by recombinant production through several bacterial
                systems, including B. subtilis. Its relative molecular weight of
                22 kDa is compatible for anchoring the peptide to CotB for
                display on the spore surface (Illingworth et al., 1988). Thus,
                thaumatin could be a promising targeting ligand to direct the
                spore-biotic to T1R2-T1R3 receptors on CCK cells and PYY cells.
              </p>
              <p>
                Free fatty acid receptor 4 (FFAR4) is a GPCR densely expressed
                by EECs for the detection of long-chain fatty acids (LCFAs). In
                the proximal small intestine, FFAR4 activation stimulates CCK
                secretion, leading to pancreatic enzyme secretion and gall
                bladder contraction. In the distal small intestine, LCFAs
                stimulate the secretion of GLP-1 and PYY, which together reduce
                gastric emptying to promote complete digestion and absorption in
                the proximal intestine (Lu et al., 2018). Although early efforts
                to characterize FFAR4 were focused on its expression by EECs in
                the lower gut and therapeutic opportunities for obesity and type
                2 diabetes, varying expression profiles have been detected in
                various tissues and cell subtypes, such as proinflammatory
                macrophages. More recently, the receptor has been investigated
                in efforts to treat other eating disorders, cancer, and chronic
                airway inflammatory conditions (Milligan et al., 2017). However,
                LCFAs can be rapidly converted to other compounds that act on
                GPCRs besides the free fatty acid receptors, generating
                potential off-target toxicity. As such, the development of
                synthetic ligands of FFAR4 has allowed for a more thorough
                investigation of the receptor as a therapeutic target with
                minimal adverse effects (Milligan et al., 2017; Pedroni et al.,
                2024).
              </p>
              <p>
                Some synthetic, low-polar hexapeptides bearing similar
                properties to LCFAs can alternatively activate FFAR4. Recently,
                Pedroni et al. (2024) aimed to investigate the molecular
                mechanism driving FFAR4-ligand interactions by screening over
                500,000 low-polar hexapeptide sequences for binding activity.
                The amino acid sequence GIFGGG yielded the highest molecular
                docking score, reflecting its affinity for the FFAR4 binding
                site. Further, the binding interaction between the hexapeptide
                and FFAR4 was observed to be energetically favourable. The
                hexapeptide is a promising ligand for FFAR4 and a potential
                targeting device to localize the spore-biotic at PYY cells and
                CCK cells. We will term the hexapeptide, GIFGGG, as F4L.
              </p>
              <p>
                Thaumatin and F4L present as targeting ligands apt for the
                site-specific delivery of the spore-biotic. The ligands bind to
                target receptors that are enriched in neuroendocrine PYY cells
                and CCK cells. Both ligands are expected to be safe for
                consumption, as evidenced by the strong safety profile of
                thaumatin as a non-nutritive sweetener, and the small size of
                the hexapeptide (Joseph et al., 2019; Zhao et al., 2020). The
                size of the hexapeptide is also likely advantageous for
                recombinant expression and presentation on the spore surface,
                but simultaneously disadvantageous for target engagement (Zhao
                et al., 2020). Further, the broad expression pattern of FFAR4
                and its range of physiological functions have not been
                adequately explored, and no peptide agonists have entered
                clinical studies. Interindividual differences in the extent of
                FFAR4 expression in the gut have been detected, and the levels
                of ligands sufficient to engage the receptor for substantial
                therapeutic effect are unknown (Milligan et al., 2017).
                Therefore, T1R2-T1R3 is the most suitable target for the
                site-specific delivery of the spore-biotic due to its
                specificity and its well-established, potent interaction with
                thaumatin. Thaumatin will be selected as the peptide agonist to
                be displayed on the outer surface of the spore-biotic.
              </p>
            </>
          ),
        },
        {
          subtitle:
            "Section 3.1: Germination Within Small Intestine (400 Words) ",
          description: (
            <>
              <p>
                Germination within the small intestine requires the use of an
                appropriate germinant to evoke the desired response, without
                causing harm. Specific to the gut, bile acids and host food
                intake are primary germinants for the sporebiota (Koopman et
                al., 2022). Despite each of these choices being acceptable due
                to their safety within the host, their dependence on specific
                dietary intakes from patients renders them less enticing. While
                non-physiological germinants such as hydrostatic pressure or the
                surfactant dodecylamine may offer specificity independently of
                dietary intake, these germinants may lead to side effects. An
                intriguing option for the induction of germination inside the
                small intestine is the use of D stereochemistry amino acids.
                This approach is fruitful as the opposing stereochemistry offers
                selective germination by a molecule not typically produced in
                the body. Several mechanisms may be utilized to provide patients
                with requisite amounts of D-alanine for germination such as an
                oral bolus dose of D-alanine within an appropriate timeframe of
                ingestion of the spore-biotic. Another option is to provide
                D-alanine through a combination pill with the spore-biotic. In
                both cases, D-alanine may be coated with enteric-soluble
                polymers, which are resistant to dissolution in the acidic
                environment of the stomach but may dissolve at the higher pH
                values of the intestine (Merry et al., 2010). While this is a
                great option, it would require careful engineering of the
                capsule to (i) ensure appropriate separation of the amino acid
                and spore-biotic (ii) ensure appropriate release location and
                timing of each component for efficacy. A more efficient delivery
                option would be the engineering of D-alanine production and
                efflux machinery into the spore through a promoter sequence
                relevant to germination. Considering its important role in
                germination, the gene encoding Cw1J may be used (Koopman et al.,
                2022). Several proteins exist to enable D-Alanine production and
                efflux within . E. coli features a protein called AlaE which
                features the ability to export D-Alanine (Katsube et al., 2016).
                Proteins like AvtA, YfbQ and YfdZ can produce L-alanine within
                the spore, providing the appropriate amount of substrates for
                the two alanine racemases, Alr and DadX. Despite findings
                indicating individual proteins for each requisite function of
                D-alanine function, several questions remain unanswered: (1) Can
                these proteins be successfully expressed in B. subtilis, (2) can
                they be organized and regulated for activation at the
                appropriate times to induce germination and, (3) which
                combinations of proteins will yield the greatest function?
              </p>
            </>
          ),
        },
        {
          subtitle:
            "Section 3.2. Spore Lysis and Release of Protein-of-Interest (POI) into Lumen (487 words) ",
          description: (
            <>
              <p>
                Used as a mechanism to prevent premature initiation of the lytic
                cycle in λ phages when in prophage inside Escherichia coli, the
                λpL/pR-cI system functions to repress all lytic genes (Dodd,
                2001). Made up of six operators (oL1, oL2, oL3, oR1, oR2 and
                oR3) and three promoters (pL, pR and pRM), the repressor of this
                mechanism, cI, functions to prevent transcription of downstream
                genes until conditions are met such that it represses its own
                gene, cI, decreases in concentration, and stops repression of
                all lytic genes (Dodd). This system has been adapted through
                replacement of residues in the repressor, making it thermolabile
                at varying degrees depending on the residue replacement.
                Initially described by Lieb in 1966, later adapted in industry
                by Singha et al in 2018, an Ala66Thr mutation in the core of cI
                led to it becoming thermolabile at 37 °C, termed cI857
                (Restrepo-Pineda, 2021). More specifically, Singha et al
                achieved production of 0.625 g/L of TNF-α in DH5α/pET-14b/pGp12
                E. coli with the expression system λpL-cI857 T7 in a 5L batch
                reactor. The λpL/pR-cI857 thermoinducible system is now commonly
                used in the bioprocessing industry to regulate recombinant
                protein (RP) expression without the requirement of external
                ligands such as IPTG or tryptophan to facilitate transcription
                (Restrepo-Pineda). Similarly inspired by a phage, what is
                referred to as a holin-endolysin system was sourced from the
                PBSX prophage found in Bacillus subtilis as its mechanism to
                facilitate bacterial cell lysis, and release newly assembled
                phages into the host (Krogh, 1998; Wood, 1990). Holins function
                to create pores in a bacterium’s inner membrane, whereby
                endolysins can pass through and degrade the peptidoglycan layer
                (Toyofuku, 2017). Following the destabilization of both layers,
                the outer membrane inevitably buckles, releasing membrane
                vesicles (MVs) as the cell begins to degrade (Toyofuku). These
                MVs have been shown to transmit this degradation by interacting
                with the surface of adjacent bacteria (Toyofuku). In combining
                parts of both systems, a novel system has been produced such
                that its constitutively expressed repressor, cI, is thermolabile
                at 37 °C, resulting in transcription of RPs at core body
                temperature. in the figure below, cI will be transcribed below
                37 °C, binding to the operators, oR1 and 2 for the rightward
                holin-endolysin system. Once core temperature is met as the
                spore-biotic is ingested, cI will still be expressed but its
                product cI will no longer be able to bind the operator, allowing
                transcription to proceed of the rightward genes.
              </p>
              <p>
                In combining parts of both systems, a novel system has been
                produced such that its constitutively expressed repressor, cI,
                allowing transcription of RPs at core body temperature. As shown
                in figure 1, cI will be transcribed below 37 °C, binding to the
                operators, oR1 and 2 for the rightward holin-endolysin system.
                Once core temperature reaches 37 °C as the spore-biotic is
                ingested, cI will remain expressed but will no longer be able to
                bind the operator, allowing transcription to proceed of the
                rightward genes.
              </p>
              <img src="https://static.igem.wiki/teams/5079/writeups/design/5.png" alt=""></img>
            </>
          ),
        },
        {
          subtitle:
            "Section 4.1: Modulation of physiological interactions and delivery of POI into Cells (Absorption into tissues) (319 Words) ",
          description: (
            <>
              <p>
                When introducing biologically active molecules to patients as
                therapeutics, mitigation of host-therapeutic interactions is
                crucial to limit adverse effects and ensure efficacy. As such,
                careful consideration was required in design of the spore-biotic
                resulting in the selection of the bacterial strain B. subtilis
                for spore generation. It is an autochthonous spore-forming
                bacteria in the human gut sporobiota that offers protective
                effects against α-synuclein aggregation in model organisms and
                can be taken as a probiotic safely (Koopman et al., 2022).
                Another consideration is limiting immunogenic effects of the
                active therapeutic protease upon release from the spore-biotic.
                To do so, inspiration comes in the form of B. anthracis, a
                pathogenic Bacillus species which secretes toxins into host
                cells (Machen et al., 2021). In this process, it’s protective
                antigen binding component forms an oligomeric pore allowing
                translocation of various active toxic components into the host
                cell. Interestingly, it has been suggested that this mechanism
                may have utility in delivery of peptide therapeutics showing
                promise for utility in the prophage structure to produce a route
                for our peptide drug to enter host cells (Machen et al., 2021).
              </p>
              <p>
                In order to have the opportunity to enter a host cell, the
                immunological response system of the host must be evaded; the
                removal of the acetyl group of the N-acetylglucosamine subunits
                of peptidoglyans protects pathogens from recognition by
                lysozymes (Bishop et al., 2007). Lysozymes are PG
                N-acetl-muramoylhydrolases that adhere to bacteria through
                electrostatic interactions with teichoic, lipoteichoid acids,
                and phospholipids on the bacterial surface to target them for
                degradation. However, bacteria with pdgA knockouts, the gene
                that is responsible for self N-deacetylation, are highly
                sensitive to death by lysozymes compared to wild type (Boneca et
                al., 2007). Listeria monocytogenes is an invasive pathogen that
                utilizes this gene and N-deacetylation to its advantage, and so
                could our B. subtilis spore biotic either by treatment with
                peptidoglycan deacetylases or by cloning the pdgA gene into our
                vector.
              </p>
            </>
          ),
        },
      ],
    },
    {
      title: "References",
      subsections: [
        {
          subtitle: "Referencees",
          description: (
            <>
              <p>
                Barton, J. R., Londregan, A. K., Alexander, T. D., Entezari, A.
                A., Covarrubias, M., & Waldman, S. A. (2023). Enteroendocrine
                cell regulation of the gut-brain axis.{" "}
                <i>Frontiers in Neuroscience, 17</i>.{" "}
                <a href="https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2023.1272955">
                  https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2023.1272955
                </a>
              </p>

              <p>
                Basta, M., & Annamaraju, P. (2024). Bacterial Spores. In{" "}
                <i>StatPearls</i>. StatPearls Publishing.{" "}
                <a href="http://www.ncbi.nlm.nih.gov/books/NBK556071/">
                  http://www.ncbi.nlm.nih.gov/books/NBK556071/
                </a>
              </p>

              <p>
                Bernardeau, M., Lehtinen, M. J., Forssten, S. D., & Nurminen, P.
                (2017). Importance of the gastrointestinal life cycle of{" "}
                <i>Bacillus</i> for probiotic functionality.{" "}
                <i>J Food Sci Technol, 54</i>(8), 2570-2584.{" "}
                <a href="https://doi.org/10.1007/s13197-017-2688-3">
                  https://doi.org/10.1007/s13197-017-2688-3
                </a>
              </p>

              <p>
                Bishop, J. L., Boyle, E. C., & Finlay, B. B. (2007). Deception
                point: Peptidoglycan modification as a means of immune evasion.{" "}
                <i>
                  Proceedings of the National Academy of Sciences of the United
                  States of America, 104
                </i>
                (3), 691–692.{" "}
                <a href="https://doi.org/10.1073/pnas.0611133104">
                  https://doi.org/10.1073/pnas.0611133104
                </a>
              </p>

              <p>
                Bohórquez, D. V., Shahid, R. A., Erdmann, A., Kreger, A. M.,
                Wang, Y., Calakos, N., Wang, F., & Liddle, R. A. (2015).
                Neuroepithelial circuit formed by innervation of sensory
                enteroendocrine cells.{" "}
                <i>The Journal of Clinical Investigation, 125</i>(2), 782–786.{" "}
                <a href="https://doi.org/10.1172/JCI78361">
                  https://doi.org/10.1172/JCI78361
                </a>
              </p>

              <p>
                Boneca, I. G., Dussurget, O., Cabanes, D., Nahori, M.-A., Sousa,
                S., Lecuit, M., Psylinakis, E., Bouriotis, V., Hugot, J.-P.,
                Giovannini, M., Coyle, A., Bertin, J., Namane, A., Rousselle,
                J.-C., Cayet, N., Prévost, M.-C., Balloy, V., Chignard, M.,
                Philpott, D. J., … Girardin, S. E. (2007). A critical role for
                peptidoglycan N-deacetylation in <i>Listeria</i> evasion from
                the host innate immune system.{" "}
                <i>
                  Proceedings of the National Academy of Sciences of the United
                  States of America, 104
                </i>
                (3), 997–1002.{" "}
                <a href="https://doi.org/10.1073/pnas.0609672104">
                  https://doi.org/10.1073/pnas.0609672104
                </a>
                <p>
                  Ceuppens, S., Uyttendaele, M., Drieskens, K., Rajkovic, A.,
                  Boon, N., & Van de Wiele, T. (2012). Survival of{" "}
                  <i>Bacillus cereus</i> Vegetative Cells and Spores during In
                  Vitro Simulation of Gastric Passage.{" "}
                  <i>Journal of Food Protection, 75</i>(4), 690-694.{" "}
                  <a href="https://doi.org/10.4315/0362-028X.JFP-11-481">
                    https://doi.org/10.4315/0362-028X.JFP-11-481
                  </a>
                </p>
                <p>
                  Chan, D. G., Ventura, K., Villeneuve, A., Du Bois, P., &
                  Holahan, M. R. (n.d.). Exploring the Connection Between the
                  Gut Microbiome and Parkinson’s Disease Symptom Progression and
                  Pathology: Implications for Supplementary Treatment Options.{" "}
                  <i>Journal of Parkinson’s Disease, 12</i>(8), 2339–2352.{" "}
                  <a href="https://doi.org/10.3233/JPD-223461">
                    https://doi.org/10.3233/JPD-223461
                  </a>
                </p>
                <p>
                  Chen, X., Zaro, J. L., & Shen, W. C. (2013). Fusion protein
                  linkers: property, design and functionality.{" "}
                  <i>Advanced Drug Delivery Reviews, 65</i>(10), 1357–1369.{" "}
                  <a href="https://doi.org/10.1016/j.addr.2012.09.039">
                    https://doi.org/10.1016/j.addr.2012.09.039
                  </a>
                </p>
                <p>
                  Chandra, R., Hiniker, A., Kuo, Y.-M., Nussbaum, R. L., &
                  Liddle, R. A. (2017). α-Synuclein in gut endocrine cells and
                  its implications for Parkinson’s disease.{" "}
                  <i>JCI Insight, 2</i>(12).{" "}
                  <a href="https://doi.org/10.1172/jci.insight.92295">
                    https://doi.org/10.1172/jci.insight.92295
                  </a>
                </p>
                <p>
                  Dodd IB, Perkins AJ, Tsemitsidis D, Egan JB. (2001).
                  Octamerization of lambda CI repressor is needed for effective
                  repression of P(RM) and efficient switching from lysogeny.{" "}
                  <i>Genes Dev., 15</i>(22), 3013-022.{" "}
                  <a href="https://doi.org/10.1101/gad.937301">
                    https://doi.org/10.1101/gad.937301
                  </a>
                </p>
                <p>
                  Donaldson, G. P., Lee, S. M., & Mazmanian, S. K. (2016). Gut
                  biogeography of the bacterial microbiota.{" "}
                  <i>Nature Reviews. Microbiology, 14</i>(1), 20–32.{" "}
                  <a href="https://doi.org/10.1038/nrmicro3552">
                    https://doi.org/10.1038/nrmicro3552
                  </a>
                </p>
                <p>
                  Duc, L. H., Hong, H. A., Fairweather, N., Ricca, E., &
                  Cutting, S. M. (2003). Bacterial spores as vaccine vehicles.{" "}
                  <i>Infection and Immunity, 71</i>(5), 2810–2818.{" "}
                  <a href="https://doi.org/10.1128/IAI.71.5.2810-2818.2003">
                    https://doi.org/10.1128/IAI.71.5.2810-2818.2003
                  </a>
                </p>
                <p>
                  Egan, M., Dempsey, E., Ryan, C. A., Ross, R. P., & Stanton, C.
                  (n.d.). The Sporobiota of the Human Gut.{" "}
                  <i>Gut Microbes, 13</i>(1), 1863134.{" "}
                  <a href="https://doi.org/10.1080/19490976.2020.1863134">
                    https://doi.org/10.1080/19490976.2020.1863134
                  </a>
                </p>
                <p>
                  Ghelardi, E., Celandroni, F., Salvetti, S., Gueye, S. A.,
                  Lupetti, A., & Senesi, S. (2015). Survival and persistence of{" "}
                  <i>Bacillus clausii</i> in the human gastrointestinal tract
                  following oral administration as spore‐based probiotic
                  formulation. <i>Journal of Applied Microbiology, 119</i>(2),
                  552-559.{" "}
                  <a href="https://doi.org/10.1111/jam.12848">
                    https://doi.org/10.1111/jam.12848
                  </a>
                </p>
                <p>
                  Goya, M. E., Xue, F., Sampedro-Torres-Quevedo, C., Arnaouteli,
                  S., Riquelme-Dominguez, L., Romanowski, A., Brydon, J., Ball,
                  K. L., Stanley-Wall, N. R., & Doitsidou, M. (2020). Probiotic{" "}
                  <i>Bacillus subtilis</i> Protects against α-Synuclein
                  Aggregation in <i>C. elegans</i>. <i>Cell Reports, 30</i>(2),
                  367-380.e7.{" "}
                  <a href="https://doi.org/10.1016/j.celrep.2019.12.078">
                    https://doi.org/10.1016/j.celrep.2019.12.078
                  </a>
                </p>
              </p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <Container fluid className="card-container-contribution">
      {sections.map((section, sectionIndex) => (
        <Card
          key={sectionIndex}
          className="custom-card"
          id={`section-${sectionIndex}`}
        >
          <Card.Body>
            <Card.Title>{section.title}</Card.Title>
            <Row>
              <Col xs={8}>
                {section.subsections.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <h3 id={`section-${sectionIndex}-part-${subsectionIndex}`}>
                      {subsection.subtitle}
                    </h3>
                    <Card.Text>{subsection.description}</Card.Text>
                  </div>
                ))}
              </Col>
              <Col xs={4}>
                <img
                  src={section.image}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      className={`button ${isVisible ? "visible" : ""}`}
      variant="custom"
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};

export default Design;
