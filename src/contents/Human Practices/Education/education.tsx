import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

export function Education() {
  return (
    <>
      <DesignHeading />
      <OverviewSection />
      <div className="main-content">
        <Sidebar />
        <CardSection />
      </div>
      <BackToTopButton />
    </>
  );
}

const OverviewSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#FE9BA1",
        color: "white",
        padding: "20px",
        marginTop: "100px",
        width: "100%",
        height: "350px",
        marginBottom: "100px",
        marginRight: 0,
      }}
    >
      <h2>Overview</h2>
      <p>
      Fostering education in science is about nurturing curiosity, creativity, and an ethical consciousness that shapes the future of research. In a world that is increasingly driven by biotechnological advancements, education is the key to supporting the potential of this field. It empowers individuals to question, explore, and innovate. It encourages people to see biology not just as a passive force of nature but as a canvas of potential, where life itself can be designed, adapted, and innovated to address some of society’s most pressing challenges.
      </p>
      <p>
      QGEM has historically placed a huge emphasis on education and reaching out to our community to support the innovators of tomorrow. Through our initiatives, we have been so privileged to have been able to reach out to young minds through our workshop collaborations, to other undergraduate students through our pitch competition, and to the general community through our podcast. 
      </p>
    </section>
  );
};

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
        Education
      </h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const sections = [
    {
      name: "Students",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["Summer Workshops", "ASPC 103", "Experiential Learning", "Tea Room"],
    },
    {
      name: "Community",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: ["PD Canada Superwalk", "Social Media", "Survey of Future Outlook", "Story Book"],
    },
    {
      name: "Researchers",
      image: "https://static.igem.wiki/teams/5079/rose-logo.png",
      content: [
        "Podcast",
        "Ethics Handbook",
        "Pitch Competition",
      ],
    },
  ];

  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div
      className="sidebar-contributions"
      style={{
        position: "sticky",
        top: "150px",
        alignSelf: "flex-start",
      }}
    >
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

const CardSection: React.FC = () => {
  const sections = [
    {
      title: "Students",
      subsections: [
        {
          subtitle: "Summer Workshops",
          description: (
            <>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>

              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#a6262e",
                  borderRadius: "15px",
                  marginTop: "60px",
                  marginBottom: "40px",
                  position: "relative",
                }}
              >
                {/* Pills container */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    pointerEvents: "none",
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: "80px",
                        height: "20px",
                        backgroundColor: "#a6262e",
                        borderRadius: "50px",
                        pointerEvents: "none",
                      }}
                    ></div>
                  ))}
                </div>

                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    marginTop: "35px",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <img
                  src="https://via.placeholder.com/100"
                  alt="Placeholder"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </>
          ),
        },
        {
          subtitle: "APSC 103",
          description: (
            <p>
              ASPC 103 is the Queen’s University Engineering Design Course that partners undergraduate students with clients within the local community. This course is centered on a team-based project where students are partnered with a client, allowing students to develop skills in the design process and tools, project management, information management, teamwork, professional communication, personal learning styles, economics, and workplace safety. QGEM worked with the Faculty of Engineering and Applied Science as a client to develop a goal for participating undergraduate engineering students. 
            </p>
          ),
        },
        {
          subtitle: "Experiencial Learning",
          description: (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  maxWidth: "calc(100% - 170px)",
                  marginRight: "20px",
                }}
              >
                QGEM partnered with Queen’s University's Smith School of Business to provide their students with an experiential learning experience as part of their step towards a Certificate in Social Impact. This certificate aims to provide undergraduate Queen’s University Commerce students with the networks and knowledge needed to be a leader in modern business, teaching them about social innovation, entrepreneurship, environmental sustainability, social finance, impact investing, and impact measurement.
                The goal of this program is to produce business leaders who are conscientious and committed to social impact. QGEM collaborated with undergraduate student, Lily Chen, to produce the 2024 SynAxis Business Plan. Through weekly meetings, the human practices team provided feedback to Lily on the business plan and worked together to identify what deliverables needed to be met in order to realize SynAxis’ full entrepreneurial potential. 
              </p>
              <img
                src="https://static.igem.wiki/teams/5079/headshots/hp/lily-chen.jpg"
                alt="Placeholder"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "15px",
                }}
              />
            </div>
          ),
        },
        {
          subtitle: "Tea Room",
          description: (
            <p>
              The Tea Room is a student run cafe located on the Queen’s University campus in Kingston, Ontario. This organization has had roots in Queen’s student culture since 1924, first as a small diner frequented by Queen’s students and faculty of the time. Due to growing pressure, the original Tea Room closed down in 1973 but arose back again in 2006 due to the efforts of a group of engineering students.  
              The new Team Room has dedicated itself to a creed of environmental responsibility through education and a zero-consumer waste strategy. Due to it’s popularity amongst students, QGEM has had a history of collaborating with the Tea Room to produce a specialty drink in which a portion of the profits are allocated to the team.  
              This year, we’ve creatively named our speciality drink the Cinapple Cider, an appled cider drink with brown sugar syrup. Our team plans to have 10¢ from every drink be donated to Parkinson’s Canada as a continuance from our donation efforts from the Parkinson’s Canada Superwalk.  
            </p>
          ),
        },

        {
          description: (
            <Carousel
              style={{ marginTop: "40px", marginBottom: "40px" }}
              prevIcon={
                <span className="carousel-control-prev-icon custom-prev" />
              }
              nextIcon={
                <span className="carousel-control-next-icon custom-next" />
              }
            >
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/tea-room/cinapple-cider-poster.png"
                  alt="First slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/tea-room/synaxis-poster.png"
                  alt="First slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/tea-room/what-is-qgem-2024.png"
                  alt="Second slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/tea-room/img-7726.jpg"
                  alt="Third slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
            </Carousel>
          ),
        },
      ],
    },

    {
      title: "Community",
      subsections: [
        {
          subtitle: "PD Canada Superwalk",
          description: (
            <>
              <p>
              QGEM had the amazing opportunity to co-host the Kingston chapter of the 2024 Parkinson Canada SuperWalk. The QGEM team raised over $2300 in fundraising. The event was a huge success with over 50 people signing up. This event was deeply important to us as it allowed us to give back to the local Kingston Parkinson Community and the Parkinson community as a whole. With 15 QGEM members volunteering at the event, things ran smoothly. We want to thank QPK (Queen’s for Parkinson’s Kingston) club for allowing us to help run this event. 
              </p>
            </>
          ),
        },

        {
          description: (
            <Carousel
              style={{ marginTop: "40px", marginBottom: "40px" }}
              prevIcon={
                <span className="carousel-control-prev-icon custom-prev" />
              }
              nextIcon={
                <span className="carousel-control-next-icon custom-next" />
              }
            >
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/superwalk/img-7313-2.jpg"
                  alt="First slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/superwalk/img-7314-2.jpg"
                  alt="First slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/superwalk/img-7319-2.jpg"
                  alt="First slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/superwalk/img-7324.jpg"
                  alt="Second slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/superwalk/img-7327.jpg"
                  alt="First slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/superwalk/img-7337-2.jpg"
                  alt="Third slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
            </Carousel>
          ),
        },

        {
          subtitle: "Social Media",
          description: (
            <p>
              To further connect with the Queen’s University community, our team planned several initiatives communicated through our social media to increase awareness. One of these initiatives was our “Celebrities with Parkinson’s” post series. This section of our Instagram highlighted several well-known celebrities and politicians such as Ozzy Osbourne, Michael J. Fox, Janet Reno, Alan Alda, Linda Ronstadt, Brian Grant, and Muhammad Ali.  These posts included a secondary slide discussing what the individual was most well-known for, when they were diagnosed, and what they did after their diagnosis. This allowed us to communicate that individuals with Parkinson’s should not be defined by their diagnosis, a sentiment that many of our patient consultations shared with us as well. In addition, this series established the importance of understanding that anyone can have Parkinson’s, and that it is not limited to any one demographic or population.  
              Our Instagram also highlighted important events and fundraisers such as the Parkinson’s Superwalk, World Parkinson’s Day, and the Michael J. Fox foundation.  
            </p>
          ),
        },

        {
          description: (
            <Carousel
              style={{ marginTop: "40px", marginBottom: "40px" }}
              prevIcon={
                <span className="carousel-control-prev-icon custom-prev" />
              }
              nextIcon={
                <span className="carousel-control-next-icon custom-next" />
              }
            >
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/social/1.png"
                  alt="First slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/social/2.png"
                  alt="Second slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block"
                  src="https://static.igem.wiki/teams/5079/writeups/education/social/screen-shot-2024-09-30-at-12-46-47-pm.png"
                  alt="Third slide"
                  style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                />
              </Carousel.Item>
            </Carousel>
          ),
        },
        {
          subtitle: "Survey as Future Outlook",
          description: (
            <>
              <p>
              QGEM has created a survey that can be used by future teams or researchers. This survey would be conducted as a ‘Quality Improvement (QI) Study’. It would focus on identifying areas for improvement in Parkinson’s diagnosis/treatment plans with the hope of analyzing the survey data to suggest improvements that can enhance Parkinson's Patient’s healthcare journey 
              </p>
    
              {/* Embedded PDF centered with top and bottom margins */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/education/survey/qgem-survey-6.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Survey"
                ></iframe>
              </div>
            </>
          ),
        },
        {
          subtitle: "Story Book",
          description: (
            <>
              <p>
              As part of our initiative to ensure accessibility to learning, our team created a google form that was sent out to the iGEM global slack. This form asked teams to describe their projects, team members, and to provide a graphic that exemplified their project in a visually intriguing way. We received responses from iGEM UTokyo, AshesiGhana, UPF, and McMasterU. From these google form responses, we created an easy-to-understand children’s book about Gaelia, a friendly alien eager to find an idea for their big school project! This children’s book is meant to introduce the range of ideas that can be produced through synthetic biology to a younger or more general audience, we truly hope that this initiative will be an inspiration to the next generation of scientists.                </p>
    
              {/* Embedded PDF centered with top and bottom margins */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/education/story-book/gaelia-s-big-project-3.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Story Book: Gaelia's Big Project"
                ></iframe>
              </div>
            </>
          ),
        },
      ],
    },
    {
      title: "Researchers",
      subsections: [
        {
          subtitle: "Podcast",
          description: (
            <>
              <p>
              One of QGEM’s human practice’s deliverables was the establishment of the QGEM Podcast. Our first season, entitled Parkinson’s Unscripted, saw members of the executive team sitting down with experts in their fields in a 40+ minute casual conversation to discuss burning questions related to each of our three subteams (dry lab, wet lab, and human practices).  
              We chose a podcast as our main source of media as it is a highly accessible and versatile tool for education. We aimed to allow information to be delivered in an engaging manner with little jargon such that any listener, whether an experienced biologist, or a casual browser would be able to understand the diverse topics we cover in each of our 5 episodes. 
              </p>
    
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#a6262e",
                  borderRadius: "15px",
                  marginTop: "60px",
                  marginBottom: "40px",
                  position: "relative",
                }}
              >
                {/* Pills container */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    pointerEvents: "none",
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: "80px",
                        height: "20px",
                        backgroundColor: "#a6262e",
                        borderRadius: "50px",
                        pointerEvents: "none",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </>
          ),
        },
        {
          subtitle: "Ethics Handbook",
          description: (
            <>
              <p>
              Our ethics handbook is composed of several Canadian, American, and Hong Kong policies and regulations, philosophical ideologies, and relevant case studies. All of this information has been dutifully coordinated by the QGEM team in collaboration with UFlorida iGEM, BevaTech CityU iGEM Team, Stanford iGEM, and ASU iGEM. 
              Our team followed the concepts, notions, and guidelines discussed in this handbook throughout the development of our project, ensuring that our actions were guided by ethical responsibility. In addition to educating ourselves through the creation of this handbook, we also hope to educate other researchers, entrepreneurs, and iGEM teams on the ethical intricacies of scientific innovation. It is our intention for this guide to be passed down to future iGEM teams as well as other synthetic biology researchers. Our belief is that our responsibility does not end once our research concludes, but continues by opening dialogue related to critical ethical reflection. 
              </p>
    
              {/* Embedded PDF centered with top and bottom margins */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                <iframe
                  src="https://static.igem.wiki/teams/5079/writeups/education/ethics-handbook.pdf"
                  width="80%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Ethics Handbook PDF"
                ></iframe>
              </div>
            </>
          ),
        },
        {
          subtitle: "Pitch Competition",
          description: (
            <>
              <p>
              One of QGEM’s main goals this season has been to uplift future innovators, providing them with a platform from which to launch their first venture. Through the entrepreneurial deliverables that we have completed, we have learned that the path for startups is incredibly difficult. With funding being limited and competitive, we wanted to provide Queen’s University undergraduate students with an opportunity to get their foot in the door.  
              We established QGEM’s first ever pitch competition under the theme of BioImpact. This pitch competition opened the floor to allow Queen's students to showcase their innovations and receive feedback and advice from judges. This challenge is focused on promoting innovative biotechnological solutions that have the power to make a remarkable impact on society. We want to support young minds and their groundbreaking ideas that utilize biology to solve global challenges and drive scientific advancement for the betterment of society.   
              For this event, we had a panel of three judges including Dr. Sharon Regan, Dr. George diCenzo, and Dr. Michael Wells. To provide more information on environmental research and policy, we invited speakers, Dr. Warren Mabee, and Dr. Kevin de France. 
              </p>
    
              <Carousel
                style={{ marginTop: "40px", marginBottom: "40px" }}
                prevIcon={
                  <span className="carousel-control-prev-icon custom-prev" />
                }
                nextIcon={
                  <span className="carousel-control-next-icon custom-next" />
                }
              >
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.igem.wiki/teams/5079/writeups/education/pitch-comp/1b6a4311.jpg"
                    alt="First slide"
                    style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.igem.wiki/teams/5079/writeups/education/pitch-comp/1b6a4347.jpg"
                    alt="First slide"
                    style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.igem.wiki/teams/5079/writeups/education/pitch-comp/1b6a4360.jpg"
                    alt="First slide"
                    style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.igem.wiki/teams/5079/writeups/education/pitch-comp/1b6a4363.jpg"
                    alt="First slide"
                    style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.igem.wiki/teams/5079/writeups/education/pitch-comp/1b6a4364.jpg"
                    alt="First slide"
                    style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.igem.wiki/teams/5079/writeups/education/pitch-comp/img-7604.jpg"
                    alt="Second slide"
                    style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://static.igem.wiki/teams/5079/writeups/education/pitch-comp/img-7615.jpg"
                    alt="Third slide"
                    style={{ maxWidth: "80%", height: "auto", margin: "0 auto" }}
                  />
                </Carousel.Item>
              </Carousel>
            </>
          ),
        },
      ],
    }
     
  ];

  return (
    <Container fluid className="card-container-contribution">
      {sections.map((section, sectionIndex) => (
        <Card
          key={sectionIndex}
          className="custom-card"
          id={`section-${sectionIndex}`}
          style={{ border: "none" }}
        >
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "left",
                fontSize: "2.5rem",
                color: "#a6262e",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              {section.title}
            </Card.Title>
            <Row>
              <Col xs={12}>
                {section.subsections.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <h3 id={`section-${sectionIndex}-part-${subsectionIndex}`}>
                      {subsection.subtitle}
                    </h3>
                    <Card.Text>{subsection.description}</Card.Text>
                  </div>
                ))}
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

export default Education;
