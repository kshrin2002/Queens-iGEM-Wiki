import { useState, useEffect, useRef } from "react";
import "./Team.css";
import { BsArrowUpCircleFill, BsArrowDownCircleFill } from "react-icons/bs";

type PersonData = {
  name: string;
  role: string;
  bio: string;
};

export function Team() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"top" | "bottom">(
    "bottom"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<PersonData | null>(null);

  // Define the peopleData type explicitly
  const peopleData: Record<string, PersonData> = {
    "Dr. Chris Lohans": {
      name: "Dr. Chris Lohans",
      role: "Principal Investigator",
      bio: "Dr. Lohans completed his PhD at the University of Alberta with Prof. John Vederas, followed by postdoctoral research in Prof. Chris Schofield’s lab at the University of Oxford. In 2019, he became an Assistant Professor in the Department of Biomedical and Molecular Sciences at Queen’s University. His research focuses on the interaction mechanisms between antibiotics and resistance enzymes, particularly β-lactam antibiotics and β-lactamase enzymes, using biochemical, microbiological, and biophysical approaches. ",
    },
    "Youzi Bi": {
      name: "Youzi Bi",
      role: "Advisor",
      bio: "Youzi, a graduate student at UCLA's Department of Bioengineering, is conducting research in Dr. Jennifer Wilson's lab, focusing on pulmonary hypertension through network optimization and omics data analysis. A seasoned iGEM participant, she has successfully mentored high-achieving teams in 2022 and 2023, and is now lending her expertise to the QGEM team in 2024.",
    },
    "Mariam El-Behiry": {
      name: "Mariam El-Behiry",
      role: "Team Lead",
      bio: `Program and Year: 5th Year, Chemical Engineering (Bioengineering Sub-plan) 

Why did you join QGEM? 
I joined QGEM to apply my leadership skills and creativity to a project that connects to a cause deeply meaningful to me. Combining my engineering background with synthetic biology has been both challenging and rewarding. I enjoy working with a diverse team that brings together various skills and academic backgrounds. The interdisciplinary nature of iGEM research excites me, and I’ve found immense value in integrating input from patients, neurologists, and entrepreneurs into our project’s decision-making process. It’s been an incredible journey, uniting science with real-world impact. 

What do you like to do outside of school and work? 
I love yoga, running, reading, cooking, collecting records, thrifting, fashion, and traveling! 

Personal Anthem: 
"Say Yes to Heaven" by Lana Del Rey. `,
    },
    "Zain Ali": {
      name: "Zain Ali",
      role: "Wet Lab Co-Lead",
      bio: `Program and Year: Health Sciences, 2026 

Why did you join QGEM? 
I joined QGEM because genetic engineering, especially of proteins, aligns perfectly with my interests. 

What do you like to do outside of school and work? 
I enjoy playing football. 

Favorite Food: 
Ice cream. `,
    },
    "Marianna Florez Camacho": {
      name: "Marianna Florez Camacho",
      role: "Wet Lab Co-Lead",
      bio: `Program and Year: 4th Year, Life Sciences Specialization 

Why did you join QGEM? 
I joined QGEM because of my growing interest in synthetic biology and its applications to address global challenges through innovative research. The interdisciplinary nature of QGEM motivates me to explore new techniques, merging creativity with science to drive the development of solutions that can make a real impact on society. I was excited to work with like-minded and passionate individuals who share the same drive for innovation and collaboration to produce meaningful solutions! 

What do you like to do outside of school and work? 
 I love spending time with my family, friends, and dog! I enjoy playing soccer and going swimming in the lake. 

Favorite Food: 
Spaghetti bolognese with lots of fresh parmesan! `,
    },
    "Aden Wong": {
      name: "Aden Wong",
      role: "Dry Lab Lead",
      bio: `Program and Year: 5th Year, Computer Science 

Why did you join QGEM? 
QGEM was a perfect opportunity to merge my passion for coding and technology with my interest in clinical and biological solutions. 

What do you like to do outside of school and work? 
I am currently a student researcher at the Laboratory for Percutaneous Surgery, where I am working on a project focused on a proctor-less mastery-based training system for surgical skills. 

Favorite Song: 
"If I Ain't Got You" by Alicia Keys. `,
    },
    "Stephanie Tong": {
      name: "Stephanie Tong",
      role: "Human Practices Co-Lead",
      bio: `Program and Year: 3rd Year, Biochemistry 

Why did you join QGEM? 
I joined QGEM because it is one of the most unique design teams at Queen's University. I was intrigued by the concept of undergraduate students designing and coordinating research based on ideas developed entirely by students. As a dual member of the human practices and research teams, I recognized the importance of engaging with the community we aim to serve to enhance the usability of our project. 

What do you like to do outside of school and work? 
Outside of academics, my favorite hobby is knitting, and I play four instruments: piano, electric and acoustic guitar, ukulele, and euphonium. 

Personal Anthem: 
Any Noah Kahan song instantly makes me feel like the main character, but my current favorite is "Sailor Song" by Gigi Perez! `,
    },
    "Claire Bunker": {
      name: "Claire Bunker",
      role: "Human Practices Co-Lead",
      bio: `Program and Year: 3rd Year, Life Sciences 

Why did you join QGEM? 
I joined QGEM because I'm a big science nerd and love learning new things. Although QGEM is more engineering-focused, I wanted hands-on experience designing a project that has the potential to solve real-world challenges. It also provides a fantastic opportunity to collaborate with like-minded individuals. 

What do you like to do outside of school and work? 
Outside of academics, I enjoy baking and going for runs by the water during sunset. 

Favorite Food: 
Pasta! `,
    },
    // Wet Lab Members
    "Cole Noble": {
      name: "Cole Noble",
      role: "Wet Lab Member",
      bio: `Program and Year: 5th Year, Biotechnology 

Why did you join QGEM? 
I joined QGEM because the competition provides an environment where we can have fun with science again. It encourages us to push the limits of our knowledge and explore the potential of organisms and their parts as tools for a wide variety of applications. 

What do you like to do outside of school and work? 
Outside of academics, I enjoy working on puzzles and caring for plants. 

Fun Fact: 
If I could master any skill in the world, it would be restoration—taking anything worn or broken and making it new again, usable in its own way. `,
    },
    "Taylor Powers-Luketic": {
      name: "Taylor Powers-Luketic",
      role: "Wet Lab Member",
      bio: `Program and Year: 5th Year, Bachelor of Life Sciences / Concurrent Education 

Why did you join QGEM? 
I joined QGEM because I have a strong interest in biotechnology, which is a career path I'd like to pursue. Bioengineering and biotechnology are fascinating fields, and gaining lab experience along with unique problem-solving skills from a student-driven project seemed incredibly valuable. 

What do you like to do outside of school and work? 
I'm an avid rock climber, and I also love music. I play the piano and ukulele. I also love to look for 4 leaf clovers in the summer! I find it very relaxing. 

Personal Anthem: 
Right now, I'm absolutely obsessed with a song called "Lonely Bones" by the Honest Heart Collective. It's a very pretty song 😊`,
    },
    "Cole Sandler": {
      name: "Cole Sandler",
      role: "Wet Lab Member",
      bio: `Program and Year: 5th Year, Life Sciences 

Why did you join QGEM? 
I joined QGEM because of my strong interest in biochemistry and drug design, and I wanted to apply my knowledge in a hands-on, collaborative environment. 

What do you like to do outside of school and work? 
 I enjoy playing hockey and have recently picked up tennis as a new hobby! 

Favorite Food: 
Sushi `,
    },
    "Emmaley Hunter": {
      name: "Emmaley Hunter",
      role: "Wet Lab Member",
      bio: `Program and Year: 4th Year Life Sciences Specialization in Biomedical Discovery 

Why did you join QGEM? 
I joined QGEM to explore genetic engineering and work with other students in the Queen's community who are passionate about topics in biomedical research that align with my own interests and goals. 

What do you like to do outside of school and work? 
I enjoy skating in the winter, playing sports, listening to music, and hanging out with friends. 

Fun Fact 
I wish I could instantly master using my sewing machine so I could make more of my own clothes and create unique gifts for my friends and family. `,
    },
    "Katherine Brewer": {
      name: "Katherine Brewer",
      role: "Wet Lab Member",
      bio: `Program and Year: Biochemistry Specialization 

Why did you join QGEM? 
I joined QGEM to collaborate with and be surrounded by students who share the same interests and passion for research as I do. 

What do you like to do outside of school and work? 
Outside of academics, I enjoy going for runs, baking, spending time with friends, and swimming at the pier. 

Fun Fact: 
If I could master any skill in the world, it would be making sushi! Watching professional sushi chefs is so fascinating, and I think it would be really interesting to learn how to make it myself. `,
    },
    "Claire Tan": {
      name: "Claire Tan",
      role: "Wet Lab Member",
      bio: `Program and Year: 4th Year, Life Sciences 

Why did you join QGEM? 
I joined QGEM to collaborate with like-minded individuals and make a meaningful impact on the community. 

What do you like to do outside of school and work? 
In my free time, I enjoy playing video games, baking, working out, and drawing on Procreate. 

Favorite Song: 
"Id" by Keshi`,
    },
    "Christopher Lainas": {
      name: "Christopher Lainas",
      role: "Wet Lab Member",
      bio: `Program and Year: Life Sciences '25 

Why did you join QGEM? 
I joined QGEM because I wanted to have the chance to apply the knowledge I've gained throughout my undergraduate career to a real-life research project. The idea of working on innovative research with a passionate team was really exciting to me, as it offered a way to bring my academic learning into practical use. 

 What do you like to do outside of school and work?  
In my free time, I love playing guitar with my roommates and going to concerts on the weekends. 

Fun Fact:  
If I could time travel, I think I would rather go into the past rather than the future. While the future would be cool to see, I find it even more interesting to go back in time and visit my ancestors! `,
    },
    "Jason Song": {
      name: "Jason Song",
      role: "Wet Lab Member",
      bio: `Program and Year: 2nd Year, Health Sciences 

Why did you join QGEM? 
I joined QGEM to deepen my understanding of synthetic biology, especially the entire process of developing a project rationale, conducting research, and analyzing data. QGEM has also been a fantastic opportunity to connect with like-minded peers and gain practical lab skills! 

What do you like to do outside of school and work? 
 I enjoy cooking, playing sports with my friends, and performing violin in an orchestra. 

Fun Fact: 
If I could travel to the past, I’d predict the future and get rich! `,
    },
    "Isabella Perini": {
      name: "Isabella Perini",
      role: "Wet Lab Member",
      bio: `Program and Year: 4th year Life Sciences Specialization 

Why did you join QGEM? 
I have passion, enthusiasm, and curiosity surrounding biochemical advancements and medical innovations. I joined QGEM to work with like-minded individuals who are also interested in applying what we learn in the classroom to a real and applicable project, and ultimately creating the solution to a problem. 

What do you like to do outside of school and work? 
I love dancing ballet, jazz, and contemporary. I also enjoy taking my dog on walks and swimming in the lake. 

Favorite Food: 
Sushi, sushi, SUSHI!! `,
    },
    "Yasmine Farah": {
      name: "Yasmine Farah",
      role: "Wet Lab Member",
      bio: `Program and Year: 3rd Year Life Science 

Why did you join QGEM?  
I joined QGEM because I'm fascinated by the potential of synthetic biology to address real-world problems. With prior experience in vaccine research, specifically with monoclonal antibodies, I developed a passion for both hands-on lab work and broad research projects. QGEM offered me the perfect opportunity to collaborate with like-minded students and explore innovative projects that have tangible applications. The team also provides a platform for me to challenge herself and learn new techniques beyond my standard coursework. 

What do you like to do outside of school and work? 
I enjoy reading, going for long runs, and exploring Kingston with friends. 

Personal Anthem:  
Senorita by Justin Timberlake `,
    },
    // Dry Lab Members
    "Shrinidhi Thatahngudi Sampath Krishban": {
      name: "Shrinidhi Thatahngudi Sampath Krishban",
      role: "Dry Lab Member",
      bio: `Program and Year: 4th Year, Biomedical Computing 

Why did you join QGEM? 
I joined QGEM to gain more experience in computational modeling and research, while also learning more about synthetic biology and its exciting applications. 

What do you like to do outside of school and work? 
Outside of academics, I enjoy going bowling and doing karaoke with my friends! 

Favorite Food: 
Tacos`,
    },
    "Tigh Gallagher": {
      name: "Tigh Gallagher",
      role: "Dry Lab Member",
      bio: ``,
    },
    "Victor Chowdhury": {
      name: "Victor Chowdhury",
      role: "Dry Lab Member",
      bio: `Program and Year: 2nd Year, Computer Engineering 

Why did you join QGEM? 
I joined QGEM to contribute to an interdisciplinary team of like-minded undergraduates in the unique and emerging field of synthetic biology. 

What do you like to do outside of school and work? 
I enjoy reading and playing tennis! 

Fun Fact: 
If I could travel to the future, I’d love to see our QGEM projects implemented in the real world and making a direct impact within the local and global community. `,
    },
    "Dylan Rietze": {
      name: "Dylan Rietze",
      role: "Dry Lab Member",
      bio: `Program and Year: 3rd Year, Life Sciences, Specializing in Biomedical Discovery 

Why did you join QGEM? 
I joined QGEM to contribute to a student-led research project and develop key research skills that will aid my growth as a researcher. QGEM’s reputation and its connections with professors at Queen’s University were appealing, providing an excellent opportunity to expand my professional network. Working in the dry lab has allowed me to expand my knowledge of protein modeling and website development beyond what my academic program offers. 

What do you like to do outside of school and work? 
I enjoy reading, playing the guitar, and volunteering with school clubs. These activities help me decompress and reenergize. 

Fun Fact: 
If I could time travel, I would visit the future to see how our current trajectory impacts future generations. I’d want to learn how today’s global issues are resolved and how we can efficiently prepare for those solutions. `,
    },
    "Ali Cotten": {
      name: "Ali Cotten",
      role: "Dry Lab Member",
      bio: `Program and Year: 4th Year, Electrical Engineering 

Why did you join QGEM? 
I joined QGEM to get involved in a club focused on research, and I saw it as a great opportunity to develop and strengthen my coding skills. The Dry Lab work really appealed to me because it allowed me to apply my skills in a meaningful way and collaborate with others on innovative projects. 

What do you like to do outside of school and work? 
I enjoy hanging out with my friends. 

Fun Fact: 
If I could instantly master any skill in the world, it would be cooking. `,
    },
    // Human Practices Members
    "Lindsay Yu": {
      name: "Lindsay Yu",
      role: "Human Practices Member",
      bio: `Program and Year: 3rd Year, Life Sciences 

Why did you join QGEM? 
I joined QGEM because of my keen interest in the intersection of engineering and biology. These fields have exciting applications in the pharmaceutical industry, therapeutic treatments, sustainability, and the future of biology. I am eager to contribute to this field and apply these skills in my future career! 

What do you like to do outside of school and work? 
In my free time, I enjoy cooking and baking. I also love watching sports, especially basketball and soccer. 

Fun Fact: 
If I could time-travel, I would fast forward into the future to see the career paths and lifestyles that my friends and I take on!`,
    },
    "Stella Pesut": {
      name: "Stella Pesut",
      role: "Human Practices Member",
      bio: `Program and Year: Third year Biochemistry 

Why did you join QGEM? 
I joined QGEM because I am very interested in applying my knowledge of biochemistry to tackle real-world issues, and I wanted to learn more about synthetic biology! 

What do you like to do outside of school and work? 
I love to go on hikes, cook, and rock climb. 

Favorite Food: 
Pasta! `,
    },
    "Emma Wright": {
      name: "Emma Wright",
      role: "Human Practices Member",
      bio: `Program and Year: 3rd Year, Biology 

Why did you join QGEM? 
I joined QGEM to develop essential soft skills related to research and networking while collaborating with other undergraduate students. I loved learning about the process of creating a product and start-up plan, especially within the pharmaceutical and biotechnology industries. 

What do you like to do outside of school and work? 
I'm active in intramural basketball, committed to a healthy lifestyle through bodybuilding and cooking nutritious meals, and I’m involved in extracurriculars such as CARRM (regenerative medicine) and QMM (music therapy for neurodegenerative disorders). In my free time, I enjoy doing yoga, singing and playing guitar, and spending time with loved ones. 

Favorite Food: 
Steak `,
    },
    "Lily Chen": {
      name: "Lily Chen",
      role: "Human Practices Member",
      bio: `Program and Year: Commerce, Class of 2025 

Why did you join QGEM? 
I joined QGEM to engage in social impact volunteering and contribute to meaningful projects. 

What do you like to do outside of school and work? 
 I love hanging out with friends and playing badminton. 

Favorite Food: 
Malatang, because you can put anything into it and it will taste delicious! `,
    },
    "Sophie Spicer": {
      name: "Sophie Spicer",
      role: "Human Practices Member",
      bio: `Program and Year: 4th Year, Life Sciences 

Why did you join QGEM? 
I joined QGEM because I was impressed by the innovative projects, and it provided me with the opportunity to develop valuable skills while collaborating with a talented team of students. 

What do you like to do outside of school and work? 
In my free time, I enjoy reading and spending quality time with my dogs, family, and friends. 

Favorite Food: 
If I could only eat one food for the rest of my life, it would definitely be a fruit—probably pomelo! `,
    },
    "Hannah Schwartz": {
      name: "Hannah Schwartz",
      role: "Human Practices Member",
      bio: `Program and Year: Fourth Year, Life Sciences 

Why did you join QGEM? 
I joined QGEM because I am passionate about synthetic biology and was inspired by the team's mission to improve the quality of care for individuals living with Parkinson's disease. QGEM allows students to apply university learning to create tangible societal impacts, and I was eager to be part of such a meaningful project. 

What do you like to do outside of school and work? 
I enjoy painting, playing chess, and going for nature walks. One of my favorite places to walk in Kingston is City Park, where the trees are especially beautiful in the fall. 

Favorite Food: 
Watermelon `,
    },
  };

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
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentPage]);

  const toggleScroll = () => {
    const target =
      scrollDirection === "bottom" ? document.body.scrollHeight : 0;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
    setScrollDirection((prev) => (prev === "bottom" ? "top" : "bottom"));
  };

  const handleHeadshotClick = (personName: string) => {
    const person = peopleData[personName];
    if (person) {
      setSelectedPerson(person);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPerson(null);
  };

  const pageHeaders = [
    "Team Members",
    "Advisors",
    "Team Leads",
    "Wet Lab",
    "Dry Lab",
    "Human Practices",
  ];

  return (
    <div className="engineering-container">
      <div
        className="page-wrapper"
        style={{
          transform: `translateX(-${currentPage * 100}vw)`,
          width: `${totalPages * 100}vw`,
        }}
        ref={containerRef}
      >
        {pageHeaders.map((header, index) => (
          <div
            className="page"
            key={index}
            style={{ width: "100vw", height: "100vh" }}
          >
            <h1 className="page-header">{header}</h1>

            {/* Principal Investigator Section */}
            {index === 0 ? (
              <div className="two-column-layout">
                <div className="left-column">
                  <h2 className="sub-header">Principal Investigator</h2>
                </div>
                <div className="right-column">
                  <img
                    src="https://static.igem.wiki/teams/5079/headshots/chris-lohans-pi.jpg"
                    alt="Principal Investigator"
                    className="headshot"
                    onClick={() => handleHeadshotClick("Dr. Chris Lohans")}
                  />
                  <p className="pi-name">Dr. Chris Lohans</p>
                </div>
              </div>
            ) : index === 1 ? (
              // Advisors Section
              <div className="advisors-layout">
                <div className="advisor-headshot">
                  <img
                    src="https://static.igem.wiki/teams/5079/headshots/youzi-bi-advisor.jpg"
                    alt="Advisor"
                    className="advisor-img"
                    onClick={() => handleHeadshotClick("Youzi Bi")}
                  />
                  <p className="advisor-name">Youzi Bi</p>
                  <p className="advisor-role">Advisor</p>
                </div>
              </div>
            ) : index === 2 ? (
              // Team Leads Section
              <div className="leads-layout">
                <div className="lead-single-headshot">
                  <img
                    src="https://static.igem.wiki/teams/5079/headshots/mariam-el-behiry-director.jpg"
                    alt="Lead Manager"
                    className="lead-img"
                    onClick={() => handleHeadshotClick("Mariam El-Behiry")}
                  />
                  <p className="lead-name">Mariam El-Behiry</p>
                  <p className="lead-role">Team Lead</p>
                </div>

                <div className="leads-row">
                  <div className="lead-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Team Lead 1"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Zain Ali")}
                    />
                    <p className="lead-name">Zain Ali</p>
                    <p className="lead-role">Wet Lab Co-Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/marianna-florez-camacho-wet-lab-co-lead.jpg"
                      alt="Team Lead 2"
                      className="lead-img"
                      onClick={() =>
                        handleHeadshotClick("Marianna Florez Camacho")
                      }
                    />
                    <p className="lead-name">Marianna Florez Camacho</p>
                    <p className="lead-role">Wet Lab Co-Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/aden-wong-dry-lab-lead.jpg"
                      alt="Team Lead 3"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Aden Wong")}
                    />
                    <p className="lead-name">Aden Wong</p>
                    <p className="lead-role">Dry Lab Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/stephanie-tong-human-practices-co-lead.jpg"
                      alt="Team Lead 4"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Stephanie Tong")}
                    />
                    <p className="lead-name">Stephanie Tong</p>
                    <p className="lead-role">Human Practices Co-Lead</p>
                  </div>
                  <div className="lead-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/claire-bunker-human-practices-co-lead.jpg"
                      alt="Team Lead 5"
                      className="lead-img"
                      onClick={() => handleHeadshotClick("Claire Bunker")}
                    />
                    <p className="lead-name">Claire Bunker</p>
                    <p className="lead-role">Human Practices Co-Lead</p>
                  </div>
                </div>
              </div>
            ) : index === 3 ? (
              // Wet Lab Section
              <div className="lab-layout">
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/cole-noble.jpg"
                      alt="Wet Lab Member 1"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Cole Noble")}
                    />
                    <p className="lab-name">Cole Noble</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/cole-sandler.jpg"
                      alt="Wet Lab Member 2"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Cole Sandler")}
                    />
                    <p className="lab-name">Cole Sandler</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/emmaley-hunter.jpg"
                      alt="Wet Lab Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Emmaley Hunter")}
                    />
                    <p className="lab-name">Emmaley Hunter</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Katherine Brewer")}
                    />
                    <p className="lab-name">Katherine Brewer</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Christopher Lainas")}
                    />
                    <p className="lab-name">Christopher Lainas</p>
                  </div>
                </div>
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/claire-t.jpg"
                      alt="Wet Lab Member 4"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Claire Tan")}
                    />
                    <p className="lab-name">Claire Tan</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/jason-song.jpg"
                      alt="Wet Lab Member 5"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Jason Song")}
                    />
                    <p className="lab-name">Jason Song</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/isabella-perini.jpg"
                      alt="Wet Lab Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Isabella Perini")}
                    />
                    <p className="lab-name">Isabella Perini</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Wet Lab Member 6"
                      className="lab-img"
                      onClick={() =>
                        handleHeadshotClick("Taylor Powers-Luketic")
                      }
                    />
                    <p className="lab-name">Taylor Powers-Luketic</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/yasmine-farah.jpg"
                      alt="Wet Lab Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Yasmine Farah")}
                    />
                    <p className="lab-name">Yasmine Farah</p>
                  </div>
                </div>
              </div>
            ) : index === 4 ? (
              // Dry Lab Section
              <div className="lab-layout">
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Dry Lab Member 2"
                      className="lab-img"
                      onClick={() =>
                        handleHeadshotClick(
                          "Shrinidhi Thatahngudi Sampath Krishban"
                        )
                      }
                    />
                    <p className="lab-name">
                      Shrinidhi Thatahngudi Sampath Krishban
                    </p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/dry-lab/tigh-gallagher.jpg"
                      alt="Dry Lab Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Tigh Gallagher")}
                    />
                    <p className="lab-name">Tigh Gallagher</p>
                  </div>
                </div>
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/dry-lab/victor-chowdhury.jpg"
                      alt="Dry Lab Member 4"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Victor Chowdhury")}
                    />
                    <p className="lab-name">Victor Chowdhury</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/dry-lab/dylan-rietze.jpg"
                      alt="Dry Lab Member 5"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Dylan Rietze")}
                    />
                    <p className="lab-name">Dylan Rietze</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/dry-lab/ali-cotten.jpg"
                      alt="Dry Lab Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Ali Cotten")}
                    />
                    <p className="lab-name">Ali Cotten</p>
                  </div>
                </div>
              </div>
            ) : index === 5 ? (
              // Human Practices Section
              <div className="lab-layout">
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/dry-lab/victor-chowdhury.jpg"
                      alt="Human Practices Member 1"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Victor Chowdhury")}
                    />
                    <p className="lab-name">Victor Chowdhury</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/wet-lab/claire-t.jpg"
                      alt="Human Practices Member 2"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Claire Tan")}
                    />
                    <p className="lab-name">Claire Tan</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Emma Wright")}
                    />
                    <p className="lab-name">Emma Wright</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/hp/lindsay-yu.jpg"
                      alt="Human Practices Member 3"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Lindsay Yu")}
                    />
                    <p className="lab-name">Lindsay Yu</p>
                  </div>
                </div>
                <div className="lab-row">
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/hp/stella-pesut.jpg"
                      alt="Human Practices Member 4"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Stella Pesut")}
                    />
                    <p className="lab-name">Stella Pesut</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/hp/sophie-spicer.jpg"
                      alt="Human Practices Member 5"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Sophie Spicer")}
                    />
                    <p className="lab-name">Sophie Spicer</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://static.igem.wiki/teams/5079/headshots/hp/hannah-headshot-copy.png"
                      alt="Human Practices Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Hannah Schwartz")}
                    />
                    <p className="lab-name">Hannah Schwartz</p>
                  </div>
                  <div className="lab-headshot">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Human Practices Member 6"
                      className="lab-img"
                      onClick={() => handleHeadshotClick("Lily Chen")}
                    />
                    <p className="lab-name">Lily Chen</p>
                  </div>
                </div>
              </div>
            ) : (
              <h2 className="page-content">Page {index + 1}</h2>
            )}
          </div>
        ))}
      </div>

      {/* Modal for displaying person info */}
      {isModalOpen && selectedPerson && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-text">
              <h2>{selectedPerson.name}</h2>
              <p>{selectedPerson.role}</p>
              <p>{selectedPerson.bio}</p>
            </div>
          </div>
        </div>
      )}

      <div className="navigation-dots">
        {pageHeaders.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentPage === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <button className="scroll-button" onClick={toggleScroll}>
        {scrollDirection === "bottom" ? "Footer  " : "Pages "}
        {scrollDirection === "bottom" ? (
          <BsArrowDownCircleFill />
        ) : (
          <BsArrowUpCircleFill />
        )}
      </button>
    </div>
  );
}

export default Team;
