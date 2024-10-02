import { useState, useEffect } from 'react';
import './engineering.css';
import {BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

// Define types
interface PageContent {
  title: string;
  content: JSX.Element;
}

interface PageSet {
  [key: number]: PageContent[];
}

// Page content structure
const pageContent: PageSet = {
  0: [
    {
      title: "Cycle 1",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            The sequence for pro-KLK6 was obtained as a gene fragment with no prefix or suffix portions. We intended to clone this sequence into the multiple cloning site of the pET-28a vector upstream to a C-terminal His-tag. There have been reports that pro-KLK6 is activated by autocatalytic proteolysis (self-cleavage). This auto-activation process begins with cleavage at the Q19 residue, followed by cleavage at K21, resulting in the formation of the mature active KLK6 enzyme. As such, our team decided that the introduction of N-terminal tags to KLK6 may cause issue and C-terminal tags (including any His- or soluble-tags) should be preferred
            </p>
            <p>
            We decided to use a HiFi cloning method to insert KLK6 into the pET-28a vector. The HiFi cloning method is discussed in more detail in the design section. We first decided to digest the pET-28a vector with the NcoI and HindIII restriction enzymes. These enzymes were chosen for two reasons i) They allowed for the removal of the N-terminal His-Tag and left few nucleotides 5’ to the C-terminal, ii) They were available in our PIs lab.  
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Design",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture1.png" alt="" />
              <p>Figure 1. Multiple Cloning Site of the pET-28a vector.  </p>

 

<p>In HiFi assembly, the entire overlap sequence must originate from the vector sequence and must be added to primers that will be used to amplify the insert. Once the vector is linearized by restriction digestion, the overlap region of primer forward for KLK6 must be identical to the 3´ ends of the overhang of the NcoI sides of the vector. Similarly, primer reverse for KLK6 must be identical to the 3´ ends of the overhang of the HindIII digested side of the vector.  </p>
            <p>
            We designed two primers (forward and reverse) to introduce these specific overhangs onto the KLK6 sequence. The length of the genomic sequence portion of the primers were both 22 nucleotides (nt) and the melting temperatures were 64°C and 65°C. The melting temperatures were specific for the Q5 polymerase – which we intended to use for our PCR experiments.  
            </p>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Build",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture2.png" alt="" style={{height:'200px'}}/>
              <p>Figure 1. Multiple Cloning Site of the pET-28a vector.  </p>
              <p>
              <p>Figure 1. Design and Analyses of Forward and Reverse primers for insertion of KLK6 into the pET-28a vector. Performed in SnapGene.  </p>

 

<p>A PCR reaction for KLK6 was performed with the following conditions: </p>
<img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture3.png" alt="" style={{height:'200px'}}/>
              </p>
             </p>
          </div>
        </>
      ),
    },
  ],
  1: [
    {
      title: "Cycle 2 - Design",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            To increase the efficiency of the PCR reaction, we decided it might be worth it to attempt a gradient PCR. By trying annealing temperatures ranging from 55°C to 65°C, we may reduce the amount of non-specific amplification. We believed that this would allow for increase the chance of successful cloning and lead to an increased amount of viable transformed colonies in the future.  
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 2 Build",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            A PCR reaction for KLK6 was performed with the following conditions:
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture4.png" alt="" style={{height:'200px'}}/>

          </div>
        </>
      ),
    },
    {
      title: "Cycle 2",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            For the gradient PCR we decided to test eight different annealing temperatures ranging from 55-65°C. The total reaction volume for each gradient PCR was 10 uL with 1 uL of the gene fragment and each primer.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 2 Test",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            The PCR results were again analysed by agarose gel to observe if the amplification of KLK6 was more specific.  
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture5.png" alt="" style={{height:'200px'}}/>
            <p>
            Figure 3. Agarose Gel results of the gradient PCR reaction for KLK6 as well as a second PCR reaction for its substrate, a-synuclein. 
            </p>
            <p>
            The gradient PCR results showed that changing the annealing temperature did not affect the specificity of the primers and amplification.  
            </p>
          </div>
        </>
      ),
    },
  ],
  2: [
    {
      title: "Cycle 3",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            <p>Based on the results of the gradient PCR, our team was conflicted on whether to perform a gel purification to remove the non-specific amplification products or simply perform a PCR cleanup on the entire PCR reaction mixture. Due to the mechanism by which HiFi works and its efficiency, our team concluded that some non-specific amplification will not harm our cloning process. There is a chance that some of the colonies we get after HiFi may be derived from the undesired DNA products, but given the intensity of the major bands, most of the HiFi products should be what our intended product. </p>

<p>As such, we decided to move forward with performing a PCR cleanup of the PCR reaction mixture – using PCR conditions identical to cycle 1. Following this, we used HiFi cloning to insert the KLK6 sequence into a digested pET-28a vector. </p>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 3 Build",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            <p>The PCR reaction for KLK6 was cleaned up using the NEB PCR/DNA clean-up kit. The vector was digested with the chosen NcoI and HindIII restriction enzymes, as outlined in the experimental protocols. The vector was purified by gel extraction. The melting time for the agarose was increased to 15 minutes, from the manufacturer recommended 10 minutes. This was due to previous failures in gel extraction of the digested vector and our literature searches showing that the most common problem with gel extraction is the melting of the agarose.  </p>

<p>The PCR cleaned-up KLK6 and the gel-extracted pET-28a were quantified using a Nanodrop Spectrophotometer to determine their concentrations. The concentration of the latter was 65 ng/uL and the former was 80 ng/uL. The KLK6 solution was diluted by a factor of 2.5 to ensure that there was enough volume to accurately pipette during cloning. </p>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 3 Build",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            The KLK6 insert was then cloned into the gel-purified pET-28a vector using the following conditions: 
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture6.png" alt="" style={{height:'200px'}}/>
            <p>
            <p>*Based on the determined concentration, the volume was 2.63 uL </p>

<p>**Based on the determined concentration, the volume was 1 uL </p>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 3 Test",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
              <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture7.png" alt="" />
            <p>
              To test if the cloning was successful, we transfected the cloned product into chemically competent NEB-5a E. Coli cells. A negative control was added, where the cloned product was not included in the transformation mixture, to check for false positives. Transformants were plated on LB-agar plates and grew overnight at 37 ॰C, as outlined in the experimental procedures document. Successful colonies were observed as shown in figure 4. 
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 3 Test",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
              <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture8.png" alt="" style={{height:'200px'}} />
            <p>
            <p>Figure 6. Restriction Digest Results for pET-28a/KLK6. A 1 kb ladder was used as reference. A control vector was run as a control to compare  </p>

<p>The whole plasmid sequencing results for the cloned product were screened against the predicted sequence of the cloned product by NEB. It was found that the sequencing results had 4 less bp than the computationally assembled products. There was a "TAT" codon deletion in the bom sequence of the pET-28a vector (responsible for plasmid transfer during bacterial conjugation). This TAT deletion is not present in any of the official sequences for pET-28a (which were used for the snap gene analyses), but it is correct. There is also a single bp deletion at the end of the F1 origin in the real sequence of pET-28a that are also not in the "official" sequence.              </p></p>
          </div>
        </>
      ),
    },
  ],
  3: [
    {
      title: "Cycle 1 Purification",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            We performed an IPTG induction trial with the following conditions. Varying conditions were attempted to examine whether the protein may express better with faster rate of synthesis (higher temperature and high IPTG concentration) or a slow rate of synthesis (low temperature and low IPTG concentration). The total volume of culture in each flask was 10 mL.  
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture9.png" alt="" />
          </div>
        </>
      ),
    },
    {
      title: "Test",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            To determine whether the induced BL21 DE3 cells expressed KLK6, 1 mL aliquots were taken from the grown cells after they had reached the desired time point (4 hours or 18 hours). The aliquots were harvested by centrifugation, and then frozen at -20°C. In the morning, the pellets were resuspended and lysed using BugBuster® Protein Extraction Reagent. Insoluble debris was removed by centrifugation and then transferred to a new tube. The crude supernatant and the insoluble debris were then run on an SDS-gel to check for the presence of our protein. 
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture10.png" alt="" />
            <p>
            <p>Figure 8. SDS Gel Results for IPTG Induction runs of soluble and insoluble fractions of pET-28a/KLK6. A total of four SDS-PAGE gels were ran - one for each fraction and temperature combination.  </p>

<p>Figure 8 indicates that KLK6 is expressing in the insoluble fraction with nearly no soluble expression. There is not much difference in the expression between 18 C overnight and 37 C for 4 hours for the insoluble fraction.  </p>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 2 Expression",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            <p>Based on the results of the SDS-PAGE, our PI advised that we should still attempt a large-scale purification with a 100 mL culture. Our hypothesis was that some protein may still be expressing in the soluble fraction and that a 1 mL aliquot may not be enough to observe a large amount of it in the SDS-PAGE. After nickel affinity chromatography, even if there is a small amount of soluble protein, it should be easily visible (as compared to it being much harder to visualize in the crude lysate from cycle 1).  </p>
<p></p>
<p>It is well-known that a reduced growth rate usually leads to more soluble expression and hence reduces the tendency to form inclusion bodies. A few straightforward modiﬁcations to culture conditions, aimed at reducing the growth rate and/or the rate of expression, are thus worthwhile to consider for optimizing soluble expression. A drawback is that the overall yield of recombinant protein is also likely to decrease as a result.  </p>

<p>1. A reduced growth rate can be achieved by lowering the growth temperature.  </p>

<p>2. For proteins that are expressed under the control of an inducible promoter (as in the case of the pET-28a vector), the rate of expression can also be reduced by altering the induction conditions:  </p>

<p>a. induce at lower cell densities (A600 = 0.5)  </p>

<p>b. induce for a shorter period of time  </p>

<p>c. induce using a lower concentration of the inducing agent (e.g., 0.1 mM IPTG)  .</p>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Cycle 2 Expression",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            <p>Understanding that the optimal conditions would see reduced growth rate and low expression, we attempted the large-scale purification with 0.5 and 0.1 mM IPTG at 18°C overnight. However, as shown in our lab notebook - after the purification - no protein band was visible in any of the elution or wash fractions that could correspond to our protein-of-interest (POI). As such, our team decided on two simultaneous directions to move forward: </p>

<p>1. Clone KLK6 into a new vector with a soluble tag – particularly pNH-Trxt. This vector was chosen as Trxt has been well-characterized in its ability to prevent protein aggregation and contribute to protein folding. The highly soluble thioredoxin tag, like many other tags, does not aggregate and allows time for correct folding of the fusion protein. An advantage of Trxt is that it may aid in disulfide bond formation which would be essential as our protein contains a disulfide bond in its biologically active form.  </p>

<p>2. Attempt solubilizing and re-folding of the inclusion body (IB). The only study to previously isolate functional KLK6 from E. Coli cells had performed an on-column refolding of the IB. Therefore, we had precedent for attempting this method using a similar protocol to the study. However, as we did achieve a soluble fraction by our last cycle, we discarded the re-folded IB. The efficiency of re-folding could not be characterized without circular dichroism.  </p>
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Build",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            The gene fragment for KLK6 was re-cloned using identical steps to cycles 1-3. New forward and reverse primers were constructed for the insertion of KLK6 into pNH-Trxt in-frame with an N-terminal His-tag;Trxt-tag; and TEV sequence, and C-terminal His-tag. No additional iterations were needed in the cloning workflow.
            </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture11.png" alt="" />
          </div>
        </>
      ),
    },
    {
      title: "Test",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            To determine whether the induced BL21 DE3 cells expressed KLK6, 1 mL aliquots were taken from the grown cells after they had reached the desired time point (4 hours or 18 hours). The aliquots were harvested by centrifugation, and then frozen at -20°C. In the morning, the pellets were resuspended and lysed using BugBuster® Protein Extraction Reagent – identical to cycle 1.              </p>
            <img src="https://static.igem.wiki/teams/5079/writeups/engineering/capture12.png" alt="" />
          </div>
        </>
      )
    }
  ],
  4: [
    {
      title: "Cycle 3 Expression",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            As discussed in cycle 2, in figure 10, a protein of the desired size could be seen in the 0.1-1 mM soluble fractions. However, this protein could also be observed in the 0 mM (negative control). It is possible that there was leaky expression of our protein when no IPTG was added. Therefore, our team decided to again attempt a large-scale purification. If any soluble proteins were present, they would be visible in the elution fractions due to their N- and C-termini His-tag. 
            </p>
            <p>
            One of the main reasons our team believed we were getting inclusion bodies is that KLK6 was being overly expressed and produced by the cell. This is evident by the insoluble fractions in figure 8 and 10. We hypothesized that the cell could not handle the amount of protein being produced, causing KLK6 to crash out of the soluble fraction. As such based on prior knowledge, we attempted to add a low percentage (2%) of glucose along with IPTG during cell induction. Glucose is a negative catabolic repressor of the lac operon (IPTG or allolactose are positive catabolic repressors). Therefore, a low percentage of it serves to stop basal and overexpression of KLK6, possibly preventing it from crashing out of the soluble fraction into the IB. Lane 6 in figure 11 shows an IPTG induction trial with 1 mM IPTG and 2% glucose. The SDS-PAGE showed large amounts of our POI. 
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Build",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
            A large-scale purification of KLK6 was performed using the steps listed in the experimental procedures. A 100 mL culture was induced with 2% glucose and 1 mM IPTG overnight at 18 C. The cells were harvested, and the pellets re-suspended in 10 mL of a resuspension buffer (20 mM Tris-HCl, 0.1% Triton-X100, 0.5 M NaCl) that was optimized for increasing soluble expression. The solution underwent sonication at 50% with 7 intervals (30 seconds on, 1 minute off). We had previously attempted to sonicate at 25-40% during cycle 1 and saw minimal lysis of the cell on the SDS-PAGE (not reported). Proteins were centrifuged at 16,000 x g in a microcentrifuge and were then filter-syringe. The filtered protein solution was purified by Nickel affinity chromatography with a gravity-flow system. 
            </p>
          </div>
        </>
      ),
    },
    {
      title: "FULL BREAKDOWN",
      content: (
        <>
          <div className="circle-diagram">
            <img
              className="circle-img"
              src="https://static.igem.wiki/teams/5079/engineeringcirclediagram.png"
              alt="Engineering Diagram"
            />
          </div>
          <div className="vertical-rectangle-r">
            <p>
              <iframe src="https://static.igem.wiki/teams/5079/writeups/engineering/qgem-engineering-cycle-wet-lab-1.pdf" style={{width:'700px', height:'550px'}}></iframe>
            </p>
          </div>
        </>
      ),
    },
  ],
};

// Main component
export function EngineeringW() {
  const [currentPageSet, setCurrentPageSet] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<'top' | 'bottom'>('bottom');

  const pageSets = [
    { id: 0, totalPages: 3, label: 'Section 1' },
    { id: 1, totalPages: 9, label: 'Section 2' },
    { id: 2, totalPages: 5, label: 'Section 3' },
    { id: 3, totalPages: 6, label: 'Section 4' },
    { id: 4, totalPages: 4, label: 'Section 5' },
  ];

  const totalPages = pageContent[currentPageSet].length;

  const handleDotClick = (index: number) => {
    setCurrentPage(index);
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage]);

  const toggleScroll = () => {
    const target = scrollDirection === 'bottom' ? document.body.scrollHeight : 0;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
    setScrollDirection((prev) => (prev === 'bottom' ? 'top' : 'bottom'));
  };

  const handlePageSetClick = (setId: number) => {
    setCurrentPageSet(setId);
    setCurrentPage(0);
  };

  return (
    <div className="engineering-container">
      {/* Navbar for switching between page sets */}
      <div className="engnavbar">
        {pageSets.map((set) => (
          <button
            key={set.id}
            className={`engnavbar-button ${currentPageSet === set.id ? 'active' : ''}`}
            onClick={() => handlePageSetClick(set.id)}
          >
            {set.label}
          </button>
        ))}
      </div>

      <div
        className="page-wrapper"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
          width: `${totalPages * 100}vw`,
        }}
      >
        {Array.from({ length: totalPages }, (_, index) => (
          <div className="page" key={index}>
            <div className="page-content">
              <h2 className="page-title">{pageContent[currentPageSet][index].title}</h2>
              <div className="flex-container">
                {pageContent[currentPageSet][index].content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="navigation-dots">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {/* Scroll Button */}
      <button className="scroll-button" onClick={toggleScroll}>
        {scrollDirection === 'bottom' ? 'Footer  ' : 'Pages '}
        {scrollDirection === 'bottom' ? <BsArrowDownCircleFill /> : <BsArrowUpCircleFill />}
      </button>
    </div>
  );
}

export default EngineeringW;
