import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import './resultsandanalysis.css'; // Import the CSS file
import { useEffect, useState } from 'react';
export function Results() {
  return (
    <>
      <DesignHeading />
      <div className="main-content">
        <Sidebar />
        <CardSection />
      </div>
      <BackToTopButton />
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
        RESULTS AND ANALYSIS
      </h1>
    </div>
  );
};


// FOR WRITE UPS CHANGE TITLES AND SIBTITLES ON SIDEBAR AS NEEDED
const Sidebar: React.FC = () => {
  const sections = [
    { name: 'KLK6 Expression and Purification', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['PCR Amplification of Insert', 'Induction Trials', 'Large Scale Purification'] },
    { name: 'A-synuclein Expression and Purification', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['PCR Amplification','Cloning','Transformation','Large Scale Purification'] },
    { name: 'Molecular Switch Expression and Purification', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['PCR Amplification','Cloning','Transformation','Large Scale Purification'] },
    { name: 'RISK MANAGEMENT', image: 'https://static.igem.wiki/teams/5079/rose-logo.png', content: ['Identifying Project Risks', 'Anticipating Future Risks', 'Managing Risks'] },
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
      title: 'KLK6 Expression and Purification',
      subsections: [
        {
          subtitle: 'PCR Amplification of Insert',
          //CONTENT FOR SECTION GOES IN DESCRIPTION
          description: (
            <>
            A PCR reaction for KLK6 was performed with the following conditions: 
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-1.png"
                  alt="Table 1"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "700px",
                    borderRadius: "10px",
                  }}
                />
              The PCR results were analysed by agarose gel to ensure that the fragments were properly amplified with the desired overhangs for HiFi assembly. 
              <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/ladder-1.png"
                  alt="Ladder 1"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
              <p>
                Figure 1. Agarose Gel results of the first PCR reaction for KLK6 as well as its substrate a-synuclein.
                The agarose gel results showed non-specific amplification of KLK6 that resulted in a smaller DNA fragment. However, a DNA fragment of the correct size (approximately 700 bp) was also noticeable and was the predominant band. Due to the mechanism by which HiFi works and its efficiency, our team concluded that some non-specific amplification will not harm our cloning process.
              </p>
            </>
          ),
        },
        {
          subtitle: 'Cloning',
          description: (
            <>
            The PCR reaction for KLK6 was cleaned up using the NEB PCR/DNA clean-up kit. The vector was digested with the chosen NcoI and HindIII restriction enzymes The vector was also cleaned by column purification (DNA cleanup kit). The PCR cleaned-up KLK6 and pNH-Trxt were quantified using a Nanodrop Spectrophotometer to determine their concentrations. The concentration of the latter was 91 ng/uL and the former was 17.59 ng/uL. The KLK6 solution was diluted by a factor of 2.5 to ensure that there was enough volume to accurately pipette during cloning. 

            The KLK6 insert was then cloned into the column-purified pNH-Trxt vector using the following conditions: 
            
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-2.png"
                  alt="Table 2"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "700px",
                    borderRadius: "10px",
                  }}
                />
            *Based on the determined concentration, the volume was 4.347 uL
            **Due to the determined concentration, the insert was diluted by a factor of 2.9. The volume added to the cloning mixture was 1.10 uL. 

            To test if the cloning was successful, we transfected the cloned product into chemically competent NEB-5a E. Coli cells. A negative control was added, where the cloned product was not included in the transformation mixture, to check for false positives. Transformants were plated on LB-agar plates and grew overnight at 37 ॰C, as outlined in the experimental procedures document. Successful colonies were observed as shown in figure 4. 
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-3.png"
                  alt="Agar plates"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>=
            Figure 2. LB-Agar plates. Successful colony growth was observed till the 10-5 dilution. The sterility and negative control plates were clean.  

            To verify that the sequence of the cloned product was correct, the transformations of KLK6 underwent colony screening. If cloning was successful, the agarose results from colony screening would be expected to show an amplified band of around 1321 bp. 
            </p>
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-4.png"
                  alt="Figure 3"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Figure 3. Sequence Length of pNH-Trxt/KLK6. There are 1321 nucleotides between the T7 promoter and the T7 terminator. 

            Results of colony screening for pNH-Trxt/KLK6 in figure 6, showed a drop-out of the expected size. Therefore, our team proceeded to purify the molecularly cloned cells by mini-prep and then transform into chemically competent E. Coli BL21 DE3 cells. 
            </p>
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-5.png"
                  alt="Figure 4"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
              <p>
            Figure 4. Colony PCR Results for pNH-Trxt/KLK6. A 1 kb ladder was used as reference.  
            </p>
            </>
          ),
        },
        {
          subtitle: 'Induction Trials',
          description: (
            <>
            We performed an IPTG induction trial with the following conditions. Varying conditions were attempted to examine whether the protein may express better with faster rate of synthesis (higher temperature and high IPTG concentration) or a slow rate of synthesis (low temperature and low IPTG concentration). The total volume of culture in each flask was 10 mL.   

            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-6.png"
                  alt="Table 3"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "700px",
                    borderRadius: "10px",
                  }}
                />
            To determine whether the induced BL21 DE3 cells expressed KLK6, 1 mL aliquots were taken from induced cells after they had reached the desired time point (4 hours or 18 hours). The aliquots were harvested by centrifugation, and then frozen at -20°C. In the morning, the pellets were resuspended and lysed using BugBuster® Protein Extraction Reagent. Insoluble debris was removed by centrifugation and then transferred to a new tube. The crude supernatant and the insoluble debris were then run on an SDS-gel to check for the presence of our protein.  
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-7.png"
                  alt="Figure 5 and 6"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Figure 5. SDS Gel Results for IPTG Induction runs of soluble and insoluble fractions of pET-28a/KLK6. A total of four SDS-PAGE gels were ran - one for each fraction and temperature combination.  

            Figure 6 indicates that KLK6 is expressing in the insoluble fraction with nearly no soluble expression. There is not much difference in the expression between 18 C overnight and 37 C for 4 hours for the insoluble fraction. One of the main reasons our team believed we were getting inclusion bodies is that KLK6 was being overly expressed and produced by the cell. This is evident in our engineering cycle. We hypothesized that the cell could not handle the amount of protein being produced, causing KLK6 to crash out of the soluble fraction. As such based on prior knowledge, we attempted to add a low percentage (2%) of glucose along with IPTG during cell induction. Glucose is a negative catabolic repressor of the lac operon (IPTG or allolactose are positive catabolic repressors). Therefore, a low percentage of it serves to stop basal and overexpression of KLK6, possibly preventing it from crashing out of the soluble fraction into the IB. Lane 6 in figure 9 shows an IPTG induction trial with 1 mM IPTG and 2% glucose. The SDS-PAGE showed large amounts of our POI.   
            </p>
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-8.png"
                  alt="Figure 7"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Figure 7. SDS Gel Results for elution fractions from large-scale purification of pNH-trxt/KLK6. From right to left, the lanes represent: Flow-through; Wash-fraction; Elution-fraction 1; Elution-fraction 2; Elution-fraction 3; IPTG induction trial of soluble fraction with 1 mM IPTG and 2% glucose 
            </p>
            </>
          )
        },
        {
          subtitle: 'Large Scale Purification',
          description: (
            <>
            A large-scale purification of KLK6 was performed using the steps listed in the experimental procedures. A 100 mL culture was induced with 2% glucose and 1 mM IPTG overnight at 18 C. The cells were harvested, and the pellets re-suspended in 10 mL of a resuspension buffer (20 mM Tris-HCl, 0.1% Triton-X100, 0.5 M NaCl) that was optimized for increasing soluble expression. Protease inhibitors were not used as they could complex with and inhibit KLK6. The solution underwent sonication at 50% with 7 intervals (30 seconds on, 1 minute off). We had previously attempted to sonicate at 25-40% during cycle 1 and saw minimal lysis of the cell on the SDS-PAGE (not reported). Proteins were centrifuged at 16,000 x g in a microcentrifuge and were then filter-syringe. The filtered protein solution was purified by Nickel affinity chromatography with a gravity-flow system. 

            The elution fractions of the nickel-affinity chromatography were run on an SDS gel, as shown below.

            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-9.png"
                  alt="Figure 8"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Figure 8. SDS Gel Results for elution fractions of KLK6 after induction at 2% glucose and 1 mM IPTG. From left to right, the lanes represent: Precision plus protein dual color standards ladder; KLK6 flow-through; KLK6 wash-fraction; KLK6 elution-fraction 1; KLK6 elution-fraction 2; KLK6 elution-fraction 3; Cyclophilin-D flow-through; Cyclophilin-D wash-fraction; Cyclophilin-D elution-fraction 1; Cyclophilin-D elution-fraction 2; Cyclophilin-D elution-fraction 3.

            There is a significant amount of KLK6 in elution fraction 3. Elution fraction 3 was diafiltrated to replace the imidazole with 200 uL of PBS. The concentration of the diafiltrated solution was determined by nanodrop spectrophotometry. The A280 value was 0.01 A. The concentration was high enough for our initial enzymatic tests. In the future, we would hope to perform a large-scale purification with a 1 L culture, using the same conditions, to obtain more soluble KLK6 protein. 
            </p>
            </>
          )
        },
      ],
    },
    {
      title: 'A-synuclein Expression and Purification',
      image: '',
      subsections: [
        {
          subtitle: 'PCR Amplification for A-syn expression',
          description: (
            <>
            A PCR reaction for a-synuclein was performed with the following conditions: 

            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-10.png"
                  alt="Table 4"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "700px",
                    borderRadius: "10px",
                  }}
                />
            The PCR results were analysed by agarose gel to ensure that the fragments were properly amplified with the desired overhangs for HiFi assembly. The results for this PCR reaction are shown in Figure 2. 
            
            </>
            
          )
        },
        {
          subtitle: 'Cloning',
          description:(
            <>
            The cloning workflow was identical to KLK6. The concentration of the mini-prepped purified pET-28a vector was 88.00 ng/uL. The concentration of mini-prepped a-synuclein was 56 ng/uL. 
            
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-11.png"
                  alt="Figure 7"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Figure 7. Cloning Workflow for a-synuclein insertion into pET-28a 

            The a-synuclein insert was cloned into column-purified pET-28a vector using the following conditions:   
            </p>
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-12.png"
                  alt="Table 5"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "700px",
                    borderRadius: "10px",
                  }}
                />
            *Based on the determined concentration, the volume was 2.63 uL

            **Due to the determined concentration, the insert was diluted by a factor of 3.5. The volume added to the cloning mixture was 1.00 uL.
            </>
          )
        },
        {
          subtitle:'Transformation',
          description:(
          <>
          To test if the cloning was successful, we transfected the cloned product into chemically competent NEB-5a E. Coli cells. Successful colonies were observed. To verify that the sequence of the cloned product was correct, the plasmid was first purified using a mini-prep and then underwent restriction digest using BamHi and EcoRV restriction enzymes. If cloning was successful, the drop-out from the restriction digest would be expected to be 1631 base pairs. 
          <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-13.png"
                  alt="Figure 8"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
          Figure 8. Sequence Length of pET-28a/a-synuclein between BamHi and EcoRV restriction enzyme sites. 

          Results of colony screening for a-synuclein showed a significantly broad band at the size of the linearized vector (single digested). This was likely a result of the EcoRV restriction enzyme digest not going to completion. The EcoRV restriction enzyme had been used many times in the past – being freeze-thawed on multiple occasions by our lab. Regardless, the double digested vector band was at the expected size, as was the drop out band.  
          </p>
          <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-14.png"
                  alt="Figure 9"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
          Figure 9. Restriction Digest Results for pET-28a/a-synuclein. A 1 kb ladder was used as reference. A control vector was run as a control to compare. 

          The purified plasmid was sent for whole plasmid sequencing. Results for the cloned product were screened against the predicted sequence of the cloned product by NEB. It was found that the sequencing results had 4 less bp than the computationally assembled products. There was a "TAT" codon deletion in the bom sequence of the pET-28a vector (responsible for plasmid transfer during bacterial conjugation). This TAT deletion is not present in any of the official sequences for pET-28a (which were used for the snap gene analyses), but it is correct. There is also a single bp deletion at the end of the F1 origin in the real sequence of pET-28a that are also not in the "official" sequence.  
          </p>
          <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-15.png"
                  alt="Figure 7"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
          Figure 7. Whole Plasmid Sequencing results for pET-28a/a-synuclein aligned against the assembled construct of pET-28a/a-synuclein on Snapgene.  

          Favorable induction conditions for a-synuclein expression have been well documented in the literature as 37°C for 4 hours at a 1mM IPTG concentration (Stephens et al., 2020)(Powers et al., 1970)(Dada et al., 2024). Following induction, cells were harvested by centrifugation at 4000 x g for 30 minutes and then the supernatant decanted. The pellet was frozen at -20°C overnight, and then resuspended in 3 mL lysis buffer (20 mM tris-HCl, 5 M NaCl, 10% glycerol, and 1 mM phenylmethylsulfonyl fluoride (PMSF)). The buffer was specifically developed to decrease aggregation of a-synuclein during purification. The resuspended cells were then sonicated at 40% for 5 intervals of 30 seconds on; 1 minute rest. The cell lysate was centrifuged at 16,000 x g for 20 minutes and then filter sterilized. The sterilized solution was run on an SDS-PAGE gel.
          </p>
          <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-16.png"
                  alt="Figure 11"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
          <p>
          Figure 11. SDS Gel Results for elution fractions from large-scale purification of pET-28a/a-synuclein. From right to left, the lanes represent: a-synuclein Flow-through; KLK6 IB IPTG Induction Trial; a-synuclein Wash-fraction; a-synuclein Elution-fraction 1; a-synuclein Elution-fraction 2; a-synuclein Elution-fraction 3 

          The results from Figure 11 indicate that a large concentration of a-synuclein (16 kDa with His-tag) is present in elution fraction 2. Elution fraction 2 was diafiltrated to replace the imidazole with 200 uL of PBS. The concentration of the diafiltrated solution was determined by nanodrop spectrophotometry to be 65.31 ng/uL.  
          </p>
          </>
          )
        },
      ],
    },
    {
      title: 'Molecular Switch Expression and Purification',
      subsections: [
        {

          subtitle: 'PCR Amplification',
          description: (
            <>
            The cloning strategy for the switches was identical to KLK6 – which showed us great success in the past. The sequence for all 12 of the molecular switches (MS) were obtained as a gene fragment with no prefix or suffix portions.  Despite our previous experiments with KLK6 showing no expression within the pET-28a vector, we still decided to clone all MS sequences into the MCS of the pET-28a vector upstream to a C-terminal His-tag. We believed that the Cyclophilin D component of the MS would act as a soluble tag, like Trxt, and allows time for correct folding of the KLK6 domain – thereby increasing expression of the switch.  

            Despite the 5’ and 3’ nucleotides of each MS being derived from Cyclophilin D, due to codon optimization the sequence of each MS differed from each other (even though the amino acid sequence was identical for the first and last 10 amino acids). Therefore, we could not use the same forward and reverse primers for each MS. As such, we designed 24 primers (forward and reverse) to introduce specific overhangs onto the sequence of each MS for subsequent HiFi cloning. The length of the genomic sequence portion of the primers ranged from 15-22 nucleotides (nt) and the melting temperatures ranged from 58°C - 66°C. The melting temperatures were specific for the Q5 polymerase – which we intended to use for our PCR experiments. 
            
            A PCR reaction for the MS was performed with the following conditions: 

            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-17.png"
                  alt="Table 6"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "700px",
                    borderRadius: "10px",
                  }}
                />
            The PCR results were analysed by agarose gel to observe if the amplification occurred.  
            
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-18.png"
                  alt="Figure 1"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Figure 1. Agarose Gel results of the first PCR reaction for all MS. From left to right, the lanes represent: NEB 1 kb Plus DNA Ladder; MS 1-12. PCR amplification for all MS were successful except 4. The PCR reaction for these MS were repeated and successful amplification was observed (reported in engineering cycle). 
            </p>
            </>
          )
        },
        {
          subtitle: 'Cloning',
          description: (
          <>
          We digested the pET-28a vector with NcoI and HindIII restriction enzymes. The vector was column-purified (DNA clean-up kit). Previous cloning with Cyclophilin-D demonstrated that column purification of vector still allowed for successful construct assembly (not reported), and gel extraction was not needed. To save time, the MS were not column purified. The HiFi manual states that column purification of insert is not required. Each MS and pET-28a were quantified using a Nanodrop Spectrophotometer to determine their concentrations.  The MS were then cloned into pET-28a vector using the following conditions: 
          
          <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-19.png"
                  alt="Table 7"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "700px",
                    borderRadius: "10px",
                  }}
                />
          *Based on the determined concentration (19 ng/uL), the volume used for all MS was 0.4 uL 

          **Based on the determined concentration (300-400 ng/uL), the MS were diluted by a factor of 11.4 and volume added to the cloning mixture was 1.578 uL 

          </>
          ),
        },
        {
          subtitle:'Transformation',
          description:(
            <>
            To test if the cloning was successful, we transfected all cloned product into either chemically competent NEB-5a or NEB-10B E. Coli cells. A negative control was added, where the cloned product was not included in the transformation mixture, to check for false positives. Successful colonies were observed for MS 1-2, 5, 7-11. A second attempt at cloning was needed for both MS 3 and MS 4.  

            To verify that the sequence of the cloned product was correct, the transformations underwent colony screening. If cloning was successful, the agarose results from colony screening would be expected to show an amplified band of around 1200 bp. 
            
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-20.png"
                  alt="Figure 2"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Results of colony screening showed an amplified sequence of the excepted size for MS 6, and 8-12 in the first round of colony screening. No band was observed for the remaining MS. A second round of colony screening was performed with additional transformed colonies with MS-1, 2, 5 and 7. We hypothesized that for these switches – colonies apart from the ones tested in round 1 may have our cloned product. If cloning was successful, the agarose results from colony screening would be expected to show an amplified band of around 1200 bp. 
            </p>
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-21.png"
                  alt="Figure 4"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            Figure 4. Colony Screening Results for pET-28a/MS-1, 2, 5 and 7. A 1 kb ladder was used as reference. From right to left, the lanes represent: NEB 1 kb Plus DNA Ladder; MS 1.1-1.3 colonies; MS 2.1-2.3 colonies; MS 5.1-5.3 colonies; MS 7.1-7.3 colonies. Results demonstrated that viable constructs are present in colonies: 1.1, 2.1, 2.2 5.1 and 7.3. 
            
            Similar colony screening results to Figure 4. were found for MS 3 and MS 4. After successful cloning of all MS, the cloned products were purified by mini prep from the molecularly cloned cells and then transformed into chemically competent E. Coli BL21 DE3 cells. All transformations into BL21 DE3 cells were successful except for MS 1, 3, and 4. Our team did not have time to re-do these transformations. 
            </p>
            </>
          ),
        },
        {
          subtitle:'Large-Scale Purification',
          description:(
            <>
            Due to time limitations, an IPTG induction trial of the switches were skipped, and we moved straight to large scale purification. This was a large risk, but one we were willing to take. Large scale purification followed similar steps to cycle 3 of KLK6 purification – albeit without the addition of glucose to the induction mixture. After nickel affinity chromatography of all cell lysates for the switches, an SDS-PAGE gel was run to check for expression.  

            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-22.png"
                  alt="Figure 5"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
              <p>
              Figure 5. SDS Gel Results for elution fractions from large-scale purification of pET-28a/MS 1-2,5-12. Gel 1 from left to right, the lanes represent: precision plus protein dual color standards ladder; MS 2 EF1; MS 2 E2; MS 2 E3; MS 2 W; MS 8 E1; MS8 E2; MS 8 E3; MS 8 W. Gel 2 from left to right, the lanes represent: MS 5 E1; MS 5 E2; MS 5 E3; MS 5 W; MS 6 E1; MS 6 E2; MS 6 E3; MS 6 W. Gel 3 from left to right, the lanes represent: MS 7 E1; MS 7 E2; MS 7 E3; MS 7 W; MS9 E1; MS 9 E2; MS 9 E3; MS 9 W; MS 10 E1; MS 10 E2. Gel 4 from left to right, the lanes represent: MS 10 E3; MS 10 W; MS 11 E1; MS 11 E2; MS 11 E3; MS 11 W; MS 12 E1; MS 12 E2; MS 12 E3; MS 12 W. Abbreviations: E, elution fraction; W, wash fraction 

              Successful expression in figure 5 was noted in MS 2 E2, MS 5 E1, MS 6 E1, MS 7 E2, MS 8 E1, MS 9 E2, MS 10 E2, MS 11 E2, MS 12 E2. Large scale purification of MS 1, 3, and 4 which failed transformation into E. Coli BL21 cells will be done before the competition.  

              The successful expression of the protein switches in the soluble fraction is particularly significant, as it suggests that the in-silico design of the circular permutations and residue insertion sites was precise enough to maintain the structural integrity of both the input and output domains. Solubility is often a direct indicator of proper protein folding, as misfolded or aggregated proteins typically express as inclusion bodies. Therefore, our successful expression implies that the modifications we introduced—whether circular permutations or insertions—likely did not disrupt the native folding pathways of the separate domains. 
              </p>
            </>
          ),
        }
      ],
    },
    {
      title: 'Part 5',
      subsections: [
        {
          subtitle: 'Enzymatic Tests',
          description: (
            <>
            Both KLK6 and KLK6-CypD were incubated with their substrate, α-synuclein, to evaluate proteolytic activity. The resulting peptide fragments from these reactions were analyzed using SDS-PAGE. Aliquots were taken from the reaction mixtures at 0 hours, 2 hours, and 16 hours to track the time-dependent degradation of α-synuclein. The experiment was performed in duplicate to ensure reproducibility. These trials provide a comparative analysis of the proteolytic efficiency of native KLK6 versus the modular switch, KLK6-CypD, in cleaving α-synuclein. The results are shown in figure 15. 
            
            <img
                  src="https://static.igem.wiki/teams/5079/writeups/wet-lab/results-23.png"
                  alt="Figure 15"
                  style={{
                    height: "400px",
                    bottom: "25px",
                    right: "10px",
                    width: "500px",
                    borderRadius: "10px",
                  }}
                />
                <p>
            It is important to note that a 10% FastCast gel was employed for SDS-PAGE due to time constraints. The low porosity of the resolving layer resulted in significant amounts of the smaller α-synuclein fragments migrating off the gel, which contributed to false-negative outcomes for several of the switch variants. This limitation must be considered when interpreting the results, as it may underestimate the actual proteolytic activity of the constructs. 

            Visible a-synuclein fragments of kDa could be observed for KLK6 (as expected), and MS 5-8. For MS 5, 7-8; fragments were observed during both trials, while for MS 6; fragments were only observed during the first trial due to difficulties in gel imaging. The generated fragments correspond to C-terminal cleavage at D115 or N122. This is reasonable for these switches, as their insertion site (K45) is a conserved residue within Cyp-D. Insertion of KLK6 at this residue likely perturbed the binding affinity of Cyp-D for its substrates. If Cyp-D is unable to bind to a-synuclein; while KLK6 function is conserved - C-terminal cleavage products would be expected.  

            Accordingly, MS 2, MS 9, MS 11, and MS 12 did not show any detectable levels of a-synuclein fragments. This absence could be related to the retention of Cyp-D function within these switches; leading to a steric hindrance effect that prevents C-terminal cleavage. NAC domain cleavage products would have run off the gel – due to the use of a 10% resolving layer. Imaging diffuculties also further hindered fragment detection. We understand that it is possible for some of the switches to have lost their output domain function and thereby their catalytic cleavage properties. However, in this specific case – the absence of fragments is unlikely to reflect a lack of proteolytic activity but rather technical limitations. Future assays before the competition will focus on optimizing gel conditions to address these limitations and improve fragment detection.  
            </p>
            </>
          )
        },
        {
          subtitle:'References',
          description:(
            <>
            References:

            Dada, S. T., Toprakcioglu, Z., Cali, M. P., Röntgen, A., Hardenberg, M. C., Morris, O. M., Mrugalla, L. K., Knowles, T. P. J., & Vendruscolo, M. (2024, May 7). Pharmacological inhibition of α-synuclein aggregation within liquid condensates. Nature News. https://www.nature.com/articles/s41467-024-47585-x#:~:text=Expression%20and%20purification%20of%20%CE%B1-synuclein%20The 

            Powers, A. E., & Patel, D. S. (1970, January 1). Expression and purification of untagged α-synuclein. SpringerLink. https://link.springer.com/protocol/10.1007/978-1-4939-9124-2_20#:~:text=The%20study%20of%20the%20molecular%20events 

            Stephens, A. D., Matak-Vinkovic, D., Fernandez-Villegas, A., & Kaminski Schierle, G. S. (2020, December 8). Purification of recombinant α-synuclein: A comparison of commonly used protocols. Biochemistry. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7818547/#:~:text=Here,%20we%20compare%20four%20commonly%20used 
            </>
          )
        }
      ],
    },
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
                    <Card.Text>{subsection.description}</Card.Text>
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
export default Results;
