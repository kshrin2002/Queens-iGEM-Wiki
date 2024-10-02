import React, { useState, useEffect } from "react";
import './ihp.css';
import { X } from 'lucide-react';
import { Button } from "react-bootstrap";

export function HumanPractices() {
  return (
    <>
      <IHPHeading />
      <OverviewSection />
      <PuzzleSection />
      <FinalSection />
      <BackToTopButton />
    </>
  );
}

const OverviewSection = () => {
  return (
    <section style={{ backgroundColor: '#FE9BA1', color: 'white', padding: '20px', marginTop: '100px', width: '100%', height: '350px', marginBottom: '100px' }}>
      <h2>Overview</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
};

const IHPHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px' }}>
        INTEGRATED HUMAN PRACTICES
      </h1>
      <h1>
        "The end of all knowledge should be truth to others"
      </h1>
      <h1>
        - Ceasar Chevez
      </h1>
    </div>
  );
};


const PuzzleSection: React.FC = () => {
  const [enlargedPiece, setEnlargedPiece] = useState<string | null>(null);

  const handlePieceClick = (piece: string) => {
    setEnlargedPiece(piece === enlargedPiece ? null : piece);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const pieces = document.querySelectorAll('.pieces .piece');
    const clickedInside = Array.from(pieces).some(piece => piece.contains(event.target as Node));
    
    if (!clickedInside) {
      setEnlargedPiece(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="ihp-container">
      <h1 className="puzzle-title">
          Solving the SynAxis Puzzle
      </h1>
      <h1 className="section-title">
          Section 0 Stakeholder's of Interest
      </h1>
      <p className="section-text">
      <p>We created 6 categories to sort our experts: </p>

        <p>1. Researchers </p>

<p>2. Patients and Patient Advocates </p>

<p>3. Movement Disorder Neurologists </p>

<p>4. Ethicists </p>

<p>5. Clinical Development Experts </p>

<p>6. Investors and Entrepreneurs </p>

Each category displays the unique roles and contributions of that area of expertise. Each category reflects a specific perspective that enhances our project.  
      </p>
      <div className="brain-puzzle">
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/brain-puzzle.png" alt="brain" className="brain-shell" />
        <div className="pieces">
          <div onClick={() => handlePieceClick("piece-1")} className={`piece piece-1 ${enlargedPiece === "piece-1" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 1" />
            <div className="piece-content">
              {enlargedPiece === "piece-1" ? "Text for Piece 1" : "Researchers"}
            </div>
          </div>
          <div onClick={() => handlePieceClick("piece-2")} className={`piece piece-2 ${enlargedPiece === "piece-2" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece2.png" alt="Piece 2" />
            <div className="piece-content">
              {enlargedPiece === "piece-2" ? "Text for Piece 2" : "Patientsand Advocates"}
            </div>
          </div>
          <div onClick={() => handlePieceClick("piece-3")} className={`piece piece-3 ${enlargedPiece === "piece-3" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece3.png" alt="Piece 3" />
            <div className="piece-content">
              {enlargedPiece === "piece-3" ? "Text for Piece 3" : "Movement Disorder Neurologists"}
            </div>
          </div>
          <div onClick={() => handlePieceClick("piece-4")} className={`piece piece-4 ${enlargedPiece === "piece-4" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece4.png" alt="Piece 4" />
            <div className="piece-content">
              {enlargedPiece === "piece-4" ? "Text for Piece 4" : "Ethicists"}
            </div>
          </div>
          <div onClick={() => handlePieceClick("piece-5")} className={`piece piece-5 ${enlargedPiece === "piece-5" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece5.png" alt="Piece 5" />
            <div className="piece-content">
              {enlargedPiece === "piece-5" ? "Text for Piece 5" : "Clinical Development Experts"}
            </div>
          </div>
          <div onClick={() => handlePieceClick("piece-6")} className={`piece piece-6 ${enlargedPiece === "piece-6" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece6.png" alt="Piece 6" />
            <div className="piece-content">
              {enlargedPiece === "piece-6" ? "Text for Piece 6" : "Investors and Entrepreneurs"}
            </div>
          </div>
        </div>
      </div>

      <h1 className="section-title">
          Section Stage 1 Methodology Design
      </h1>
      <h1 className="subsection-title">
          Subsection 1 Framework Design
      </h1>
      <p className="section-text">
      <p>The AREA framework stands for Anticipate, Reflect, Engage and Act (The University of Edinburgh, 2020) . Adapting from this, SynAxis has created a similar framework that we have implemented into our IHP interviews. The following framework allows us to display how we integrated and utilized the knowledge from stakeholders. </p>
 
 <p>1. Relevance & Objective: For this section we describe why we met with a particular stakeholder and what we hoped to gain from the IHP interview </p>
 
   
 
 <p>2. Stakeholder Insights: For this section we summarize the key contributions of the stakeholder and their unique perspectives </p>
 
  
 
 <p>3. Application of Insights: For this section we reflect on how we incorporated the stakeholder’s feedback into our project and what direction they led us in  </p>
 
  
 
 <p>4. Future Directions: For this section we describe what next steps our team took after the interview to further enhance our project </p>
      </p>
      <div className="diagram-container">
      <img src="https://static.igem.wiki/teams/5079/brainpuzzle/area-template.png" alt="" className="framework-diagram"/>
      </div>
      <h1 className="subsection-title">
          Subsection 2 Reflection Tool
      </h1>
      <p className="section-text">
      Throughout the interview and post interview process, we utilized the Gibbs reflective tool shown below. The Gibbs reflective tool contains a description of the experience, feelings and thoughts about the experience, evaluation of the experience, analysis to make sense of the situation, conclusion about what you learned and what you could have done differently and action plan for how you would deal with similar situations in the future (The University of Edinburgh, 2020). This structured approach allows us to learn from each interview and incorporate as much expert knowledge as possible into the design of our project.  
      </p>
      <div className="diagram-container">
      <img src="https://static.igem.wiki/teams/5079/brainpuzzle/gibbs-reflection.png" alt="" className="reflection-diagram"/>
      </div>

      <h1 className="section-title">
      Section Stage 2 Building the Snyaxis Network
      </h1>
      <p className="section-text">
      To build our SynAxis network we utilized the snowball sampling technique. Snowball sampling is a recruitment style in which research participants are asked to assist researchers in identifying other potential subjects (Oregon State University, 2012). We used this in our IHP interviews. During each interview and at the end as a final question, we discussed with the expert other possible experts that would be of assistance to us. This worked very well and allowed us to establish a wide variety of experts across interdisciplinary fields. This snowball effect can be seen in the below diagram that shows the connections between experts and how we found them
      <img src="https://static.igem.wiki/teams/5079/brainpuzzle/updated-web.png" alt="" style={{width:'80vw'}}/>
      </p>
    </div>
  );
};

interface TimelineItem {
  id: number;
  name: string;
  image: string;
  description: JSX.Element;
}

interface TimelineCardProps {
  item: TimelineItem;
  isEven: boolean;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    name: "Andrew Ashby",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/12.png",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Andrew Ashby is the Manager of Accessibility Services at Queen's University. We met with him in order to gain valuable insights on how to ensure that our project’s wiki is accessible to a diverse audience, including individuals with disabilities. Given his extensive experience in coordinating accessibility initiatives across the university and his personal understanding of the importance of dignity, independence, integration, and equal opportunity, Andrew was an ideal stakeholder for our Integrated Human Practices interview. Our primary objective was to learn how we could structure our wiki to be more user-friendly and accessible, ensuring that people from all backgrounds could engage with and benefit from the information.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Andrew Ashby provided us with a variety of practical advice and specific guidelines to ensure that our wiki meets the Web Content Accessibility Guidelines (WCAG) 2.1 standards, focusing on inclusivity for people with disabilities. He emphasized the importance of using simple, easy-to-read fonts, with a minimum size of 16 points, ensuring content is large enough for readability. Andrew also highlighted the need for proper color contrast, ensuring that text stands out clearly for people with visual impairments. Additionally, he discussed keyboard-only navigation, underlining how essential it is to ensure that every feature on the site is accessible through keyboard input alone. Andrew also stressed the value of using alt text for images, clear captions for videos, and incorporating voice control options like VoiceOver for macOS and Narrator for Windows. While peripherals for motor disabilities may not pose a significant challenge for compatibility, he noted that technologies like eye trackers, though potentially beneficial, could be more difficult to integrate. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>
      <p>
      Based on Andrew Ashby’s feedback, we made several important adjustments to our project’s wiki to enhance accessibility. We adopted simple fonts and increased the font size to 16 points minimum to ensure readability for a broad audience. We also ensured color contrast for those with visual impairments. Though we decided not to implement eye-tracking technology due to its complexity, we remained committed to making the site as simple and accessible as possible to benefit users with various needs. Alternative text was added to all images, and video captions were improved for clarity.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      Following our interview with Andrew Ashby, our team took several key steps to further enhance the accessibility of our project’s wiki. First, we committed to fully implementing the WCAG 2.1 guidelines, as recommended, ensuring that our website is as up-to-date and inclusive as possible. To improve user experience, we prioritized incorporating high-contrast color schemes and larger font sizes throughout the site. Although we initially considered the use of eye-tracking technology, we ultimately decided against it due to the complexity and scope of work required, recognizing that it might be too ambitious for the given project timeline. After meeting with Andrew, our team continued to refine the site’s design with inclusivity in mind, ensuring that it is easy to navigate and accessible to users with diverse needs
      </p>
      </>
    )
  },
  {
    id: 2,
    name: "Angelica Asis",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/angelica-asis-photo.jpeg",
    description: (
      <>
      <p>
      Angelica is a vice president of research for Parkinson Canada. In this meeting with Angelica, we discussed how we can incorporate patients into our project as well as some of the heterogeneity of Parkinson’s disease.
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Angelica to discuss how we can incorporate patients into our project as well as some of the heterogeneity of Parkinson’s diseas
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      During this interview Angelica talked about having an impact and value statement for patients. What does our project mean for them? Why is it something that will have an impact? We should aim to improve patient quality of life 
      </p>
      <p>
      Angleica also gave some general advice for the project. She told us to be clear on our approach to the entire project. We should have a good methodology, experts, and be mindful of asking if it is feasible/operationally viable. She also mentioned that it is a good idea to have a strong business plan. 
      </p>
      <p>
      Angelica was very interested in our project as there are not currently any disease modifying therapeutics on the market for Parkinson’s disease. She talked about Parkinson’s being a multisystem disease. She advised us to question where do genetics and environment play a role? Overall, the full picture of PD is not clear. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>
      <p>
      We incorporated Angelica’s feedback into writing a detailed business plan. We also made it a goal of ours to incorporate patient feedback and input wherever possible.
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we planned to create a detailed business plan as well as incorporate the patient voice wherever we can. 
      </p>
      </>
    )
  },
  {
    id: 3,
    name: "Barbara Salsberg Mathews",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/barbara-salsberg-matthews-photo-1.jpg",
    description: (
      <>
      <p>
      Barabara was a high school art teacher who now uses mime and creative expression to navigate life with Parkinson's. She still creates art and now expresses how Parkinson’s makes her feel through her creative works. Barbara is an advocate for others with Parkinson’s always taking on projects to help the community. In this meeting with Barbara, we hoped to discuss her work with mime and art related to Parkinson’s disease.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Barbara after we had read an article about her titled ‘Guelph artist dances her way through Parkinson’s disease’ written by Guelph Today. We wanted to hear more about her journey with Parkinson’s disease as well as her use of dance and mime 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      During this interview Barbara disscused how mime is useful for the muscle memory of Parkinson's patients. It can help practice the muscle movements required for day-to-day activities such as drinking a glass of water. Barbara loves to dance and teach.  

      Barbara is also currently working on a project with Parkinson Europe to create a series on what it feels like to live with Parkinson’s disease. Barabara is truly an inspiration, her commitment to the work she does within the Parkinson’s community is heartwarming.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>
      <p>
      We incorporated Barbara’s insights into our project by reaching out to local Kingston support groups in hopes of hosting a mime session of our own with them to help with their motor movements. We also decided that Barbara would be perfect for a patient story and interviewed her and incorporated that in our patient stories page.
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we planned to incorporate art, dance or mime into our project. There is a lot to learn from Barbara! 
      </p>
      </>
    )
  },
  {
    id: 4,
    name: "Ben Stecher",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/11.png",
    description: (
      <>
      <p>
      Ben Stecher is a prominent patient advocate specializing in neurodegenerative diseases, particularly Parkinson's disease. With over eight years of experience, he has established himself as a leading voice in the field, co-authoring two impactful books, Brain Fables and Reprogramming the Brain, with highly respected neurologists. His work focuses on bridging the gap between patient experiences and clinical research, advocating for patient-driven approaches in therapeutic development.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Ben’s extensive background in advocacy, research collaboration, and his firsthand experiences with PD make him an invaluable resource for our team. The objective of this meeting is multifaceted: 

      <p>To gain insights into effective patient engagement strategies that can be integrated into our current projects. </p>

      <p>To discuss the unique challenges faced by patients in accessing timely and effective treatments, especially regarding early-onset Parkinson's disease. </p>

      <p>To explore potential collaboration opportunities that can leverage his advocacy network to enhance outreach and support for our therapeutic initiatives. </p>
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      Ben argued that patients are not just subjects in research; they are vital partners whose experiences and insights can significantly inform research priorities. This collaboration can lead to more effective and relevant therapeutic developments. 

      <p>He highlighted significant challenges in the diagnostic landscape for early-stage Parkinson's disease, including the variability of symptoms and the lack of clear biomarkers. Ben suggests a need for greater investment in research that seeks to define and identify these markers. </p>

      <p>Ben strongly advocates for a personalized approach to treatment, where therapies are tailored to individual patient profiles based on genetic, environmental, and lifestyle factors. He notes that understanding the heterogeneity in patient responses is crucial for developing effective interventions. </p>

      <p>He discussed the potential of integrating AI and wearable technologies into patient care to improve monitoring and management of symptoms. These technologies can provide real-time data, enabling better decision-making for both patients and healthcare providers. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>   
      <p>We integrated Ben's recommendations on patient engagement into our project, ensuring that patient voices are included in every stage of research, from conception to execution. This involved repeatedly meeting with him and other patients for ongoing feedback. </p>

      <p>Ben’s insights can guide the development of more personalized therapeutic strategies, ensuring that our solutions are adaptable to the diverse needs of Parkinson's patients. This might involve conducting preliminary studies to better understand patient demographics and responses to SynAxis, as well as looking into how we can adapt it to later stage patients. </p>

      <p>We can explore partnerships to incorporate advanced monitoring technologies into our project, facilitating the collection of real-time data that can enhance our understanding of disease progression and treatment efficacy. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      Establish a framework for collaboration with Ben and his networks to foster patient-centered research that prioritizes real-world experiences. This could involve joint projects that examine the efficacy of new therapies from a patient perspective. 

      <p>Create educational initiatives aimed at healthcare professionals and patients to bridge knowledge gaps about Parkinson's disease. Workshops or seminars could focus on improving the understanding of the disease, the importance of patient engagement, and recent advancements in treatment options. </p>

      <p>Work with Ben to advocate for policy changes that support increased funding and research into personalized medicine and early diagnosis for neurodegenerative diseases. Engaging with policymakers could help ensure that patient perspectives are included in healthcare planning and funding decisions. </p>

      <p>Utilize Ben’s connections within the pharmaceutical and biotech industries to identify potential funding opportunities for research that emphasizes patient engagement and personalized therapies. This could lead to collaborative grant proposals that align with both our research objectives and the needs expressed by patients. </p>
      </>
    )
  },
  {
    id: 5,
    name: "Christine Beswick",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/christine-bewsick-photo.jpeg",
    description: (
      <>
      <p>
      Christine is a research ethics advisor at Queen’s University. She works with research compliance, training and ethics. In this meeting with Christine, we discussed ethical obligations for QGEM, specifically regarding our intention of interviewing patients. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Christine to discuss how QGEM must comply with ethical standards. We were interested in interviewing patients to hear their stories and with these people, being a vulnerable population, we wanted to ensure that we followed guidelines for safe and moral interactions. We had earlier met with her colleague Meera who have us Christine’s contact. After conducting our own research we thought that our project would fall under a ‘REB Exemption Letter for Teaching-Based Medical Case Studies’
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>After explaining our intentions Christine agreed and told us to apply under ‘REB Exemption Letter for Teaching-Based Medical Case Studies’ on TRAQ and it will be reviewed by the ethics committee. Christine walked us through these steps and gave advice. </p>

      <p>For conducting the interviews Christine said to not approach patients directly as that can be inappropriate. She gave us options on how to reach patients, including reaching out to a support group leader. She offered her support and knowledge for any questions we had later down the line as well as for clinical trials or other ethical considerations. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>
      <p>
      We incorporated Christine insights into applying for an ethics exemption. We were approved for this and proceeded with our patient consultations following all ethical standards  
      </p>  
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we plan to incorporate the ethical guidelines into our patient consultations. We also plan to, in the future, send out a survey to patients and we will contact Meera or Christine again for ethical guidance.  
      </p>
      </>
    )
  },
  {
    id: 6,
    name: "Dr Nicholas Cothros",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/cothros-nicholas-0.jpg",
    description: (
      <>
      <p>
      Dr. Cothros is a neurologist and clinical researcher with interest Parkinson’s disease and other forms of parkinsonism. His research interests span human motor control and behavioural/cognitive neuroscience. The meeting aimed to gather insights on patient demographics, trial outcome measures, and connections to the pharmaceutical industry. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Dr. Cothros’s  ability to connect the team to both PD patients and pharmaceutical contacts makes him a key stakeholder for the development and testing of SynAxis. The objective is to define the target patient group, refine clinical trial outcome markers, and explore opportunities for pharmaceutical partnerships. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>Current PD studies focus on clinical symptoms, with no established biomarkers. Clinical trials should utilize both biomarkers and clinical outcome markers, especially clinometric scales like the Unified Parkinson's Disease Rating Scale (UPDRS) and Hoehn-Yahr staging. </p>

      <p>UPDRS, particularly tremor score, is a common scoring system in PD clinical trials. Exploring potential correlations between alpha-synuclein (s-syn) and disease progression is a potential avenue for improving clinical trial design. </p>

      <p>Emerging sintographic methods for detecting alpha-synuclein could be beneficial in future studies, though they are not yet widely used. Incorporating both traditional clinical outcomes and innovative biomarkers could enhance trial accuracy. </p>

      <p>There is no current method to prevent dropouts in clinical trials, which can affect long-term data. Exploring retention strategies and working with experienced clinicians may mitigate this issue. </p>

      <p>Dr. Cothros has offered to connect the team with PD patients, which is invaluable for defining the target patient group. Most of his patients have Parkinson’s, which could be a primary group for clinical testing. Additionally, he can connect the team with individuals in the pharmaceutical industry, which could aid in scaling SynAxis to clinical trials and potentially toward market approval. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <p>Dr. Cothros’s offer to connect the team with PD patients will provide direct insights into patient needs and demographics. This will help define the primary patient group for SynAxis and future clinical trials. </p>

      <p>Leveraging both clinical and biomarker outcome measures as suggested (UPDRS, Hoehn-Yahr staging, alpha-synuclein correlations) can create a robust trial framework. Dr. Cothros’s insights into current limitations in biomarkers should shape the study’s design. </p>

      <p>Connecting with the pharmaceutical industry through Dr. Cothros’s network could be crucial in navigating the commercial and regulatory paths for SynAxis. This could facilitate clinical trial funding and post-trial steps toward market release. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>Begin patient consultations with connections provided by Dr. Cothros to refine target demographics. </p>

      <p>Investigate the correlation between alpha-synuclein levels and disease progression, incorporating current research into future trial designs. </p>

      <p>Explore emerging methods like sintographic techniques for detecting biomarkers during trials. </p>

      <p>Follow up with pharmaceutical contacts to discuss potential partnerships for SynAxis trials and commercialization </p>
      </>
    )  
  },
  {
    id: 7,
    name: "Dane Bedward",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/dane-bedward-photot.jpg",
    description: (
      <>
      <p>
      Dane is CEO of NBot Inc, a global commercialization advisory group with experience in a number of biopharmaceutical and medical device product categories. He also works on the board of directors of various other companies. In this meeting with Dane, we discussed how we can optimize the entrepreneurship side of our project and our overall presentation at the international competition. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Dane to discuss how we can optimize the entrepreneurship side of our project and our overall presentation at the international competition. As most of our team has a science background, this side of things does not come naturally to us. We overall wanted advice and mentorship from Dane. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During the interview Dane gave us a lot of advice. He told us to keep things as simple as possible, especially when we are presenting something, the general audience needs to be able to understand it. Dane advised us to seek out intellectual property (IP) guidance. He was mentioning how once we present at an international competition, things become public domain.  </p>

      <p>Dane also offered to give feedback on our deliverables and offer any advice he has.  </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Dane’s feedback into our overall entrepreneurship approach. On a more specific note, based on his advice we sought out IP advice from Queen’s professionals. We also sent Dane our deliverables (pre-seed, seed, etc.) and we incorporated his insights. Dane acted as a mentor and offered us guidance as to how we can turn our project into a company.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we planned to meet with IP experts at Queen’s to discuss how we can protect our ideas and intellectual property. We came across Michael Wells who will be discussed further in future interviews! We sent Dane our deliverables and received wonderful feedback from him.  
      </p>
      </>
    )
  },
  {
    id: 8,
    name: "Dr David Grimes",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/dr-david-grimes-headshot.jpeg",
    description: (
      <>
      <p>
      Dr. David Grimes is the division head of neurology/medicine at the University of Ottawa. He is an experienced scientist and physician that performs clinical research in movement disorders with a focus on Parkinson's disease. He concentrates on botulinum toxin injections for the treatment of focal dystonia and hemifacial spasm. In 2012, he received the Queen’s Diamond Jubilee Medal, nominated by the Parkinson Society Canada for his contribution to the development of the Canadian Guidelines on Parkinson’s disease.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Through this interview, we hoped to gain insight into the current outlook and status of research regarding Parkinson’s Disease. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Dr. Grimes addressed important questions regarding the linkage between the gut and PD. Although there has been evidence of this linkage, we must be confident in this theory. We must consider if our therapeutic can propagate and reverse the impacts of PD. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <p>
      Dr. Grimes gave us some very important advice that we incorporated into our research. We researched the idea of restoring potential damages caused by the original disease. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      Dr. Grimes suggested that our therapy may be beneficial in preventing disease progression and prevention, but it will be difficult to erase the physical damages suffered by current PD patients; there is a distinction between a cure and a preventative drug. For future references, our drug should focus on preventative measures.  
      </p>
      </>
    )
  },
  {
    id: 9,
    name: "Dr Paul Passier",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/dr-paul-passier-photo.jpeg",
    description: (
      <>
      <p>
      Dr. Passier is a principal consultant of clinical development at 3D-PharmXchange. In this meeting with Dr. Passier, we discussed preclinical/clinical development and clinical trials.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      We met with Dr. Passier to discuss preclinical/clinical development and clinical trials. 
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During this interview Dr. Passier walked us through the main steps involved in preclinical and clinical trials.  </p>

      <p>Dr. Passier also mentioned that it is best to find the least invasive methods to confirm if patients have aggregation. This is to ensure patient comfort, safety and overall happiness. </p>

      <p>He explained a lot of safety things to keep in mind. In general, it is about benefit: risk ratio and about (unnecessary) burden; risk and burden in general should be as low as possible.  </p>

      <p>He said that the study should have a good scientific rationale and related design addressing the posed hypotheses/questions.  </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>We incorporated Dr. Passier’s insights by creating preclinical and clinical trials development plans. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>From this interview, we planned to create preclinical and clinical trials development plans. </p>
      </>
    )
  },
  {
    id: 10,
    name: "Dr Perter Davies",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/13.png",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Dr. Peter Davies, a professor at Queen’s University and Canada Research Chair in Protein Engineering, to leverage his expertise in protein engineering and characterization. Our objective was to gain insights into computational modeling for our modular switch system, which aligns with his research on antifreeze proteins and protein engineering. We hoped to learn about the tools and technologies his lab uses and any potential challenges we might encounter in both the dry and wet lab phases of our project. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Dr. Davies provided valuable insights into the complexities of designing a modular switch, emphasizing the many hurdles involved in computational approaches. He suggested that if computational methods proved too difficult, an in-vitro approach, such as the In Vitro Virus (IVV) method, could be a viable alternative. He also discussed the viability of using FRET peptides in high throughput screening experiments but warned us about the high cost of FRET peptides. Lastly, he recommended reaching out to graduate students such as Kody Klupt in his lab to further explore computational protein engineering. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      Following Dr. Davies' advice, we reconsidered some of our approaches in both the dry and wet lab. His concerns about the cost of FRET peptides influenced us to look into alternative reagents for high-throughput screening. In the dry lab, we started exploring in-vitro methods as a backup for computational modeling. Furthermore, we reached out to graduate students, as recommended, to gain more detailed guidance on the computational tools and approaches that could optimize our modular switch design. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      After the interview, our team took steps to integrate Dr. Davies’ feedback into our project. We adjusted our computational approach by using the results from multiple computational models to design our switches. We also began investigating more cost-effective alternatives for FRET peptides to make high-throughput screening feasible. Additionally, we connected with Kody Klupt, graduate students in Dr. Davies’ lab, who helped us refine our protein engineering strategies and suggested additional resources for advancing our project 
      </p>
      </>
    )
  },
  {
    id: 11,
    name: "Dr Roger Liddle",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/dr-rodger-liddle-headshot.jpg",
    description: (
      <>
      <p>
      Dr. Rodger Liddle is an experienced professor at Duke University who focuses on enteroendocrine cell biology and pancreatic pathobiology. More specifically, he has an interest in studying the regulation of hormone secretion such as cholecystokinin (CCK). His lab discovered that enteroendocrine cells have several neuronal-like characteristics including basal processes such as “neuropods”. He has studied the structure and function of uropods and how enteroendocrine cells communicate with the nervous system.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Given Dr. Liddle’s experience and knowledge of the gut and Parkinson’s Disease, we aimed to learn more about the gut connectome that permits communication between the gut and the nervous system. The gut connectome is crucial for understanding how pathogens or toxicants can access the nervous system and cause diseases such as Parkinson’s Disease.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Dr. Liddle provided valuable insight on potential mechanisms to deliver proteins into our cells. Since enteroendocrine cells do not take up the proteins from the media, he recommended that we should permeabilize the membrane to deliver the protein without genetic mutation. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <p>
      Dr. Liddle’s helpful insights were incorporated ad researched to help us build our delivery system of our therapeutic. We chose to do a spore biotic as it does not cause any genetic mutation and is relatively safe for patients to ingest orally.    
      </p> 
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      Dr. Liddle suggested potential cell lines including CCK cells, L-Cells, and GLP cells that may be applicable for the future. These cell lines may be potential biomarkers. Although we may not pinpoint the specific cell lines that are involved in the development of Parkinson’s Disease, we can perform a proof of concept.  
      </p>
      </>
    )
  },
  {
    id: 12,
    name: "Dr Prameet Sheth",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/dr-sheth.jpg",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Dr. Prameet Sheth is an associate professor at the School of Medicine at Queen’s University. We met with him given he is a clinical microbiologist and researcher, due to his extensive expertise in gut microbiome interactions and serine proteases, which are central to our spore-biotic delivery system. Our objective was to gain valuable feedback on the delivery mechanism of our protein switch, specifically focusing on the feasibility of using the spore-biotic containing the KLK6-CypD fusion. We aimed to explore any potential concerns or alternative methods for optimizing delivery and ensuring effective integration with the gut microbiome. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Dr. Sheth raised several key concerns, particularly regarding the spore-biotic method of delivery. He highlighted the possibility that the spore may not germinate unless the gut is disturbed, such as during inflammation, and questioned whether it would compete effectively for nutrients within the microbiome. However, he also reassured us that based on current research, B. subtilis spores should germinate in the duodenum. Additionally, he suggested alternative delivery methods, such as circular mRNA or extracellular vesicles, and emphasized potential interactions between the serine protease component and neurons in the enteric nervous system (ENS). 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Dr. Sheth’s feedback by further assessing the germination signals we plan to rely on for our spore-biotic system, ensuring that it can function optimally without significant disruption to the gut. His concerns about competition with gut bacteria also led us to refine our focus on the spore's role in lysing rather than full germination. Furthermore, we began considering alternative methods of delivery, such as extracellular vesicles, and initiated deeper investigations into the possible effects of our protein switch on the ENS. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      Following the interview, our team took several steps to enhance our project. We initiated more in-depth studies into the germination and lysing mechanisms of B. subtilis spores, particularly focusing on their competitive behavior in the gut microbiome. Finally, we conducted further research into the interactions between the serine protease and the ENS, with the goal of ensuring that our delivery method does not provoke unintended nociceptive responses. 
      </p>
      </>
    )
  },
  {
    id: 13,
    name: "Garrett Elliott",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/garrett-elliott-photo.jpg",
    description: (
      <>
      <p>
      Garrett is the general manager of the Launch Lab’s Kingston office. Launch Labs is a company that offers entrepreneurs guidance and mentorship. In this meeting with Garrett, we discussed how Launch Labs can help support our project. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Garrett to discuss how Launch Labs can help our SynAxis project develop. From this meeting, we hoped to learn more about how to strengthen the entrepreneurship side of our project and how to present our information well at an international competition. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During this interview, we explained our project to Garrett. Right away he knew of someone that would be of assistance. He talked about Dane Bedward being a possible mentor for us as his prior experiences align with our project. Dane is the company's life science expert. </p>

      <p>Although Garrett is not the life sciences expert of the company, he was still able to offer us some advice that was helpful. Overall, he described the process of starting any biotechnological company for a therapeutic as slow and expensive. This is mainly due to costly clinical trials. He noted that it would be a good idea to research this. He was hopeful about our project and reassured us that anything is possible if you put your mind to it. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      Using Garrett’s and Launch Labs resources, we applied their knowledge by applying to be a part of their mentorship program and requested Dane Bedward. Beyond this mentorship, we incorporated Garrett’s insights into planning to research preclinical/clinical trials and creating a financial plan.   
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, our next steps are to create a preclinical/clinical trials plan and a financial statement plan. We applied to and got accepted for the mentorship program and got paired with Dane Bedward who will be discussed in future interviews! 
      </p>
      </>
    )
  },
  {
    id: 14,
    name: "Graeme Howe",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/14.png",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Dr. Howe is an associate professor in the Department of Chemistry at Queen’s University. He completed his undergraduate degree at the University of Toronto using computation to predict the properties and reactivities of small molecules. Given his experience with computational modeling and enzymatic testing techniques, we aimed to get feedback particularly on the computational modelling of our molecular switch as well as to identify which enzymatic tests were the most ideal for us to test the activity of our molecular switch. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Dr. Howe gave clarity on what types of enzymatic tests would provide us with the most valuable data to analyze the activity of our molecular switch. He suggested using SDS Page Electrophoresis to identify if there was successful cleavage of alpha-synuclein. He recommended using high performance liquid chromatography, if possible, to determine specific cleavage sites of alpha-synuclein to confirm them with our intended sites. He also suggested using densitometry of the SDS results to identify amount of protein cleavage.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      Dr. Howe's feedback helped us determine the ideal enzymatic tests to evaluate the activity of our molecular switch. His recommendation of using SDS-PAGE Electrophoresis to confirm the successful cleavage of alpha-synuclein provided a clear direction for our protein analysis. Additionally, his suggestion to use high-performance liquid chromatography (HPLC) to identify and verify specific cleavage sites allowed us to refine our approach to analyzing the activity of the molecular switch at a higher resolution. We began to get in contact with graduate students who would provide us use of their equipment and guidance. He also recommended using the densitometry of SDS-PAGE gels to quantify the extent of protein cleavage, which will enable us to measure the efficiency of the switch's enzymatic action. Following his feedback, we refined our experimental protocols, focusing more on precise cleavage site identification and protein quantification to ensure that the molecular switch was functioning as intended
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      Moving forward, we will implement Dr. Howe's recommendations by optimizing our SDS-PAGE and densitometry protocols to accurately detect and quantify the cleavage of alpha-synuclein. In addition, we plan to research and incorporate other advanced enzymatic assays such as testing enzymatic parameters including Km and Vmax, that may complement our current methods to provide a more comprehensive evaluation of our molecular switch. These steps will ensure that we gather robust and precise data on the switch's activity, ultimately helping us refine its design and effectiveness in future applications. 
      </p>
      </>
    )
  },
  {
    id: 14,
    name: "Joseph Geraci",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/joseph-geraci-photo.jpg",
    description: (
      <>
      <p>Dr. Geraci is a mathematician, medical scientist, and quantum machine learning specialist. He is the founder of Netramark. He has postdocs in machine learning, oncology, and neuropsychiatry. He developed machine learning intelligence algorithms that provide extraordinary insights into complex data sets. In this meeting with Dr. Geraci we wanted to talk about utilizing machine learning in our project to define our patient population. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Dr. Geraci to talk about utilizing machine learning in our project to define our patient population. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      During this interview Dr. Geraci discussed his current work with similar machine learning intelligence algorithms that give insights into clinical trials and patient data. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Dr. Geraci’s insights into planning to use machine leanring to define our patient population. Based on his insights we will set up more meetings with similar people in the field. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview we will further explore the use of machine learning to define our patient population.
      </p>
      </>
    )
  },
  {
    id: 15,
    name: "Keegan Scott",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/keegan-scott-photo.jpeg",
    description: (
      <>
      <p>
      Keegan Scott works at Integrated DNA Technologies (IDT) as an inside sales representative. In this meeting with Keegan, we discussed biotechnological startup companies and the associated commercial market.
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Keegan to discuss the process of starting a biotechnological company. In this interview, we hoped to gain in-depth information on the market, costs associated, steps to go from lab to market and any difficulties in the process.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During this interview, Keegan helped us gain a deeper understanding of the process of starting a biotechnological company. He helped us gain insight into what the current market looks like and the major difficulties that companies face trying to launch. He mentioned that it is important to research the market and the competition's products. A major difficulty that we would face in biotechnological startup is financials. It is very costly to go through the entire process. Keegan described the current market as being very big and a great place to be!  </p>

<p>Keegan also gave us great advice. He gave overall advice for the project as well as some big things to keep in mind: document everything, demonstrate effectiveness in the lab and to not give up and to see things through as best we can. A tangible piece of advice that he gave was to research and contact local “incubators”. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Keegan’s insights into our market analysis and business plan. Keegan’s advice directed us to look into competitors in the market to find out where we stand. His knowledge also helped us to find our direction in entrepreneurship and business startup. Based on his incubator advice, we began to research incubators in Kingston and came across Launch Labs, which will be discussed in later interviews. This direction that Keegan sent us in allowed us to land contact with some people that would end up being very supportive in our project.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview we made it a future goal to investigate patenting and intellectual property (IP) protection. This interview also prompted us to create strategies that we could follow in the future (IP protection, business plan, financial statement etc.). This interview prompted our devotion to the entrepreneurship side of our project. 
      </p>
      </>
    )
  },
  {
    id: 16,
    name: "Kody Klupt",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/kody-klupt.jpeg",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Kody is a PhD candidate, studying biochemistry at Queen’s University. He was a previous Queen’s iGEM wet lab lead in 2020. His research includes protein design (including de novo protein), biophysical characterization of protein & enzymes, and structural biology techniques such as X-ray crystallography. Our team met with Kody to gain valuable insights from his experience as a wet lab lead and as well as advice regarding the computational modelling of our molecular switches, given his area of expertise. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Kody offered valuable insights, particularly regarding the challenges of designing stable protein systems and molecular switches for therapeutic use. A recurring theme in these discussions was the complexity of creating a binder molecular switch, as it involves balancing protein stability and function. He highlighted the importance of carefully considering the environment in which a protein operates to maintain stability and avoid misfolding. Additionally, they emphasized that while combining proteins using linkers—such as glycine-rich disordered proteins—could be an effective method, docking them independently with cross-linkers or engineering entirely new protein folds would present significant challenges. Importantly, Kody noted that the use of Cyclophilin D as a natural linker for synuclein is already seen in biological systems, suggesting that our research could build upon this knowledge to enhance binding mechanisms. Kody also mentioned that although AlphaFold is more effective for folding rather than de novo protein design, Rosetta may work as a better tool for creating new protein structures 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      Kody asked questions of our team’s procedures of designing our molecular models and the parameters we intended to use. He suggested exploring Rosetta to identify our proposed structures more accurately, as well as looking into the use of direct evolution with error through PCR to introduce desirable constraints and improve protein binding efficiency. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      After our interview with Kody, we used results from both Rosetta and AlphaFold when designing our molecular switches, leveraging computational power to help us determine optimal parameters for our switches. 
      </p>
      </>
    )
  },
  {
    id: 17,
    name: "Larry Gifford",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/larry-gifford-photo.webp",
    description: (
      <>
      <p>
      Larry Gifford is president of the ‘PD Avengers Global Alliance’ advocacy group and patient council member for the ‘Micheal J. Fox Foundation’. He also is host of the Podcast “When Life Gives you Parkinson’s,” presented by Parkinson Canada, which details his journey as person with Young Onset PD. With this interview with Larry, we will dive into some questions relating to his life with Parkinson’s disease. From this we hope to gain a better patient perspective of the disease.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Larry to discuss what life is like with Parkinson’s. From this interview we hope to expand our knowledge of the disease to have a patient-centric approach to our project.
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Larry is a person who was had Parkinson’s disease since 2017. He has also had a deep brain stimulation treatment (DBS). Larry being the advocate that he is, holds great knowledge about the disease and any unmet needs of the Parkinson’s community.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Larry’s insights into our patient's story section of our wiki. Through this we hope to give him a voice and help others learn more about life with Parkinson’s disease
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      Larry’s patient perspectives can be incorporated into future Parkinson’s related work outside of QGEM. His insights can also help society learn about the disease.  
      </p>
      </>
    )
  },
  {
    id: 18,
    name: "Lucas Ng",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/lucas-ng-photo.jpeg",
    description: (
      <>
      <p>
      Lucas is a manager in investment & entrepreneurship at the Ontario Brain Institute, which is a provincially funded, not-for-profit organization that accelerates discovery and innovation. In this meeting with Lucas, we discussed funding opportunities and the therapeutic market.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Lucas to discuss how QGEM can get funding for our project as well as what the therapeutic market looks like currently.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During this interview Lucas gave us some great funding resources.  </p>

<p>Lucas also described how expensive the therapeutic market is in terms of clinical trials and manufacturing.  </p>

<p>Lucas also offered to help with feedback on any of our entrepreneurship deliverables.  </p>

      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <p>
      We incorporated Lucas’s feedback by applying to the funding opportunities he mentioned.    
      </p> 
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we planned to apply for more funding and create a market analysis deliverable to analyze the current market.  
      </p>
      </>
    )
  },
  {
    id: 19,
    name: "Meera Siduh",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/meera-sidhu-photo.jpeg",
    description: (
      <>
      <p>
      Meera is a manager of research ethics at Queen’s University. She works with research compliance, training and ethics. In this meeting with Meera, we discussed ethical obligations for QGEM, specifically regarding interviewing patients.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Meera to discuss how QGEM must comply with ethical standards. We were interested in interviewing patients to hear their stories and with these people, being a vulnerable population, we wanted to ensure that we followed guidelines for safe and moral interactions.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During this interview Meera gave us some great advice. She explained the Queen’s system of REB and how they follow ethical standards. Meera walked us through the steps of applying for an ethics approval through the Queen’s TRAQ system for the patient interviews we intended to conduct. She also gave us some contacts of experts in neuroscience and other ethicists. Overall, she offered us support, guidance and mentorship on ethics. </p>

<p>During this interview, we discussed our current creation and compilation of an ethics handbook for the QGEM team and future iGEM teams to utilize. As Meera has a lot of expertise in this area, we asked if she would be interested in providing us with some feedback.  </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Meera’s insights into applying for an ethics approval. As we began going through the process that she had laid out for us, we ran into more questions. We wondered if what we were doing was considered ‘research’ or if there was a different process we could go through. Our human practices team did some digging and believed that our project would fall under a ‘REB Exemption Letter for Teaching-Based Medical Case Studies’. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we planned to meet with Meera again to discuss this different approach to our ethical considerations. We sent her our ethics handbook and incorporated all feedback that her and her team gave us. 
      </p>
      </>
    )
  },
  {
    id: 20,
    name: "Michael Wells",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/michael-wells-photo-1.webp",
    description: (
      <>
      <p>Michael first joined Queen's Partnerships and Innovation (QPI) in 2008. He is a Partnerships Development Officer at QPI, with his focus being commercialization of life science-related research discoveries and supporting innovation by researchers at Queen’s University. In this meeting with Michael, we hoped to discuss patenting and intellectual property (IP) protection</p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Michael to discuss patenting and intellectual property (IP) protection.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During this interview Michael explained the key components to something being patentable are: novelty, obviousness and utility. He also mentioned that you can patent different parts, methods of treatment, composition etc.  </p>

      <p>When discussing when the right time to patent something is, Michael mentioned provisional patents which are temporary patents that can be used to protect your idea for a short period of time.  </p>

      <p>Michael walked me through the steps of a patent search to check if our IP is already patented anywhere.  </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Michael’s insights into planning to create an IP strategy plan for our company, SynAxis. We also used his insights to patent search for aspects of our project that may already be patented. We used his advice on provisional patenting to investigate the pros and cons and if it is right for the needs of our project.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we planned to meet with Michael again with the wet lab team and director to gauge what specific aspects of our project are patentable and how to approach protecting our IP. Based on Micahel’s feedback we created an IP strategy plan for SynAxis 
      </p>
      </>
    )
  },
  {
    id: 21,
    name: "Olivia Samotus",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/olivia-samotus-photo.jpg",
    description: (
      <>
      <p>
      Olivia Samotus holds a MITACS industry funded scholarship for her clinical research focusing on optimizing treatment of movement disorders using sensor kinematic technology. She is a medical science liaison at Ipsen Biopharmaceuticals. In this meeting with Olivia, we discussed how QGEM can effectively communicate our SynAxis project.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Olivia to discuss how QGEM can effectively communicate our SynAxis project. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During this interview Olivia had some great insights. She told us to use lots of images, compare healthy vs unhealthy gut, diagrams of mechanism, normal vs disease states, show systems and pathways, where it would target to get back to healthy stage, what each stages means/what each state means and stop light, go light, X’s and animations to tell people what they should be looking at. </p>

      <p>Overall, Olivia advised us to tell a story with our diagrams. Everything should flow nicely and cohesively.  </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      We incorporated Olivia’s feedback into the communication of our findings. Specifically, after the meeting we made it a priority to ensure that our diagrams are simple and easily understood by someone with little to no science background.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we planned to alter our diagrams and communications to effectively translate our project to the public.  
      </p>
      </>
    )
  },
  {
    id: 22,
    name: "Dr Robert Campbell",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/robert-campbell.jpg",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Dr. Campbell is the current director of the Life Sciences and Biochemistry program and an associate professor at the Department of Biomedical and Molecular Sciences at Queen’s University. He is a biochemist who studies protein structure and function, particularly using molecular dynamic simulations. Given his experience with protein structure determination, we aimed to get feedback particularly on the computational modelling of our molecular switch. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      Dr. Campbell provided insights on how to use molecular modelling simulations like Gromacs to identify what properties of linkers would be good to use between for our molecular switch. He suggested adding a few rigid residues in our linker ensuring that our two fused molecules do not fold onto themselves. However, he also mentioned there should not be too much distance between our molecules (i.e. the linker be too flexible or long) as they may not be able to find each other. He suggested exploring adding electrostatic charges to the binding site of our switch, by placing positive charges on the Cyclophilin D and negative on the KLK6. This would help form a weak electrostatic interaction that can help drive correct binding. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      Dr. Campbells advice helped guide us when designing our molecular switches, regarding dynamics and structure. Following his feedback, we refined the length and flexibility of the linker designed. This optimization was tested using molecular simulations, where we observed more stable conformations in switches. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      Our team continued to design several linkers with different properties and different lengths. We used several molecular simulators such as Gromacs and Alpha Fold among others to identify ideal binding conformations for further analysis. 
      </p>
      </>
    )
  },
  {
    id: 23,
    name: "Dr Martin McKowen",
    image: "/api/placeholder/100/100",
    description: (
      <>
      <p>
      Dr. Martin McKeown is the PPRI/UBC Chair in Parkinson’s Research and Director at the 

Pacific Parkinson’s Research Centre (PPRC). In this meeting, we planned to discuss 

clinical applications of SynAxis, and potential risks involved with development of a 

neurodegenerative disease therapeutic. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      During this interview, we were able to discuss some ethical considerations and logistical 

      difficulties involved in developing a treatment targeting sporadic Parkinson's Disease. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>
      During this interview, Dr. McKeown expressed that there is a high level of risk involved 

in developing a novel Parkinson’s therapeutic, as currently there are no current 

endogenous protein-based drugs targeting early onset Parkinson’s disease that have 

disease modifying effects. In addition, Dr. McKeown informed us that Parkinson’s drugs 

typically fail phase I and II clinical trials at a higher rate than other drugs. With this, he 

advised us to look at the macroscopic level of Parkinson’s disease alongside the 

microscopic level to ensure we consider the full picture of this complex disease. 

Furthermore, as SynAxis is a therapy designed to target early-onset sporadic pd, we 

asked Dr. McKeown his opinion on who our target patient population should be. We 

were informed that, despite there being some early indicators of pd such as REM sleep 

disorder and loss of smell, it is currently difficult to diagnose / identify those at risk of 

developing severe Parkinson’s disease. Thus, our patient population must have multiple 

positive biomarkers including imaging and serum biomarkers before being approved for 

the therapy. The identification of positive biomarkers is necessary, as it is unethical to 

provide a potentially dangerous drug to someone with an indefinite diagnosis. With this 

Dr. McKeown emphasized that the reward of participating in a clinical trial must always 

outweigh the risk. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1>  
      <p>
      This feedback from Dr. McKeown highlighted potential areas of weakness within our 

project. His input allowed us to address our project's potential pitfalls, which helped us 

while creating components of our business model, such as the risk analysis report. His 

insights on the ethical considerations of early onset PD clinical trials also provided 

direction for our pre-clinical development plan. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      This interview prompted the wet lab sub-team to create a comprehensive pre-clinical 

development plan, to ensure that the risks associated with SynAxis were minimized. His 

insights also led us to further investigate REM sleep disorder / loss of smell as potential 

indicators of sporadic PD development. 
      </p>
      </>
    )
  },
  {
    id: 24,
    name: "Naila Kuhlmann",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/naila-kuhlmann-photo.webp",
    description: (
      <>
      <p>
      Naila is a postdoctoral student at McGill focusing on an arts-based knowledge translation of Parkinson’s disease. She obtained her Ph.D. in Neuroscience from the University of British Columbia, in which she studied the neurobiology of Parkinson's disease in a genetic mouse model. In meeting with, Naila, we discussed her research in Parkinson’s disease both the mouse model and knowledge translation.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      We met with Naila to learn about her Parkinson’s research, specifically her knowledge translation. With how complicated our project is, we thought it would be beneficial to learn from her to ensure we have effective communication.  
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>During the interview, Naila described how she felt disconnected from the human aspect of Parkinson’s disease. She wanted to find a way to incorporate patient perspective in her work. Her work combines science and emotional lived experiences. </p>

<p>After explaining our project to Naila she helped us to brainstorm ways we could better communicate our findings. Some of the ideas we came up with were using dance, using cartoons and making our website easier for Parkinson’s patients to use. Overall Naila helped us to tailor our project findings to all people, not just scientists.  </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <p>
      We incorporated Naila’s insights into our plans for how we would present our findings. We made it a goal of ours to incorporate patient perspective. Based on Naila’s advice, we began to research how to make our website more accessible for Parkinson's patients
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>
      From this interview, we made it a goal to look at other ways to utilize art to communicate. We came across Barbara Salsberg Matthews in our research who will be discussed in future interviews! 
      </p>
      </>
    )
  },
  {
    id: 25,
    name: "",
    image: "https://static.igem.wiki/teams/5079/headshots/hp/10.png",
    description: (
      <>
      <p>
      Kevin is the CEO and co-founder of Hyasynth Bio, an iGEM startup focused on opening up the potential of cannabis-derived medicine, by replacing plant growth with engineered microorganisms. This meeting aimed to gain insights on the viability and commercialization of SynAxis and advice for launching a synthetic biology startup, as an iGEM team. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <p>
      Kevin’s expertise in synthetic biology and experience in building Hyasynth Bio from the lab to the market is highly relevant to QGEM and SynAxis. The objective is to understand the potential market for synthetic biology products, steps for commercialization, and strategies for scaling the production of SynAxis while maintaining accessibility and affordability for PD patients. 
      </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <p>Kevin emphasized the importance of thorough market research when considering the commercialization of SynAxis. He discussed the complexities of the current market for synthetic biology products, particularly for diseases like PD, where patients often require multiple medications. A detailed market analysis should consider factors like patient demographics, the income structures of individuals affected by PD, and the healthcare systems in different countries. It’s crucial to understand how SynAxis fits within the broader medication regimen for PD patients and whether it will be a standalone treatment or used alongside other therapies. Understanding these elements is key to assessing the product's market potential and positioning it for success. </p>

<p>Regarding the challenges of launching a synthetic biology startup, Kevin highlighted that every stage presents significant obstacles, from fundraising to committing to a solution. He noted that raising capital is often less challenging than staying committed to the process of bringing a product to market. One of the primary hurdles is building the right expertise and assembling a team with the necessary skills. Startups must decide whether to develop capabilities in-house or outsource them to external partners, especially in areas like intellectual property, where the patenting process is ongoing and requires a deep understanding of international regulations. Kevin stressed the importance of working with experienced IP lawyers to protect the product globally. </p>

<p>In terms of manufacturing strategy, Kevin explained that bringing a synthetic biology product from lab to market can take several years. It involves understanding the scalability of the product and ensuring that the manufacturing process can be optimized for patient accessibility, particularly in lower- and middle-income countries. He advised that startups begin with high-level assumptions about their ideal manufacturing process and adjust based on real-world scalability assessments. The goal is to make the therapeutic accessible to as many patients as possible while keeping production costs manageable. </p>

<p>Kevin also encouraged QGEM team to incorporate creativity and storytelling into their work, emphasizing the importance of making the project stand out both in the competition and in the marketplace. Kevin suggested that engaging patients through innovative methods, such as art or lived experience, could create a deeper connection with the PD community. He, then referred to us to his friend, Naila Kuhlmann, a researcher who works with patients using arts-based knowledge translation. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <p>SynAxis should focus on a thorough market analysis, considering patient demographics and affordability. Developing a detailed pitch for investors is also essential, including financial projections and cost analysis for the therapeutic. </p>

<p>A manufacturing plan will start with high-level assumptions and be refined based on scalability. QGEM will consider both low- and middle-income country accessibility when designing the production process. </p>

<p>Incorporating more innovative, patient-centered approaches, such as art and lived experience, could increase SynAxis's impact. </p>
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      <p>Continue market research to refine SynAxis’s commercialization strategy. </p>

<p>Explore collaborations with social impact organizations to build a more patient-centered approach. </p>

<p>Conduct scalability assessments early to optimize manufacturing for cost-effective, widespread distribution. </p>
      </>
    )
  },
  {
    id: 26,
    name: "Dr Martin McKowen",
    image: "/api/placeholder/100/100",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      </>
    )
  },
  {
    id: 27,
    name: "Dr Martin McKowen",
    image: "/api/placeholder/100/100",
    description: (
      <>
      <h1 style={{fontSize: '20px', color:'red'}}>Relevance & Objective</h1>
      <h1 style={{fontSize: '20px', color:'red'}}>Stakeholder Insights</h1>
      <h1 style={{fontSize: '20px', color:'red'}}>Application Insights</h1> 
      <h1 style={{fontSize: '20px', color:'red'}}>Future Directions</h1>
      </>
    )
  },

];

const TimelineCard: React.FC<TimelineCardProps> = ({ item, isEven }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`timeline-item ${isEven ? 'even' : 'odd'}`}>
      <div className="timeline-content">
        <div 
          className={`card ${isExpanded ? 'expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img src={item.image} alt={item.name} className="card-image" />
          <h3 className="card-title">{item.name}</h3>
          <div className={`card-description ${isExpanded ? 'show' : ''}`}>
            <p>{item.description}</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="close-button"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalTimeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">The Experts</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineCard key={item.id} item={item} isEven={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};


const FinalSection: React.FC = () =>{
  return (
    <div className="ihp-container">
      <h1 className="section-title">
          Section Stage 3 Putting the Pieces Together
      </h1>
      <VerticalTimeline />
      <h1 className="subsection-title">
          Subsection 1
      </h1>
      <p className="section-text">
        text for subsection 1
      </p>
      <h1 className="subsection-title">
          Subsection 2
      </h1>
      <p className="section-text">
        text for subsection 2
      </p>
      <h1 className="subsection-title">
          Subsection 3
      </h1>
      <p className="section-text">
        text for subsection 3
      </p>
      <h1 className="section-title">
          References
      </h1>
      <p className="section-text">
      <p>Oregon State University . (2012, April 27). Snowball Sampling | Division of Research and Innovation. Retrieved from Division of Research and Innovation website: https://research.oregonstate.edu/ori/irb/policies-and-guidance-investigators/guidance/snowball-sampling </p>

      <p>The University of Edinburgh. (2020a). Gibbs’ reflective cycle. Retrieved from The University of Edinburgh website: https://www.ed.ac.uk/reflection/reflectors-toolkit/reflecting-on-experience/gibbs-reflective-cycle </p>

      <p>The University of Edinburgh. (2020b, November 11). Responsible Research and Innovation/AREA – Research Impact. Retrieved from impact.wp.st-andrews.ac.uk website: https://impact.wp.st-andrews.ac.uk/responsible-research-and-innovation-area/ </p>
      </p>
    </div>
  )
}

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

export default HumanPractices;
