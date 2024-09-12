import ReactFullpage from "@fullpage/react-fullpage";
import "./home.css";

export function Home() {
  return (
    <div className="App">
      <ReactFullpage
        anchors={[
          "firstPage",
          "secondPage",
          "thirdPage",
          "fourthPage",
          "fifthPage",
        ]}
        scrollBar={true}
        autoScrolling={true}
        scrollOverflow={true}
        controlArrows={true}
        credits={{ enabled: false }}
        scrollingSpeed={1000}
        fitToSection={false}
        render={() => (
          <ReactFullpage.Wrapper>
            <div
              className="section"
              style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              {/* Video iframe as background */}
              <iframe
                title="Queens-Canada: Vecteezy Molecule - Background for Science or Medical 3d rendering (2024)"
                src="https://video.igem.org/videos/embed/c7b24860-47ee-46bb-9373-684310fcf0a5?start=1s&amp;loop=1&amp;autoplay=1&amp;muted=1&amp;title=0&amp;warningTitle=0&amp;controlBar=0&amp;peertubeLink=0"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100vw",
                  height: "56.25vw", // Maintain 16:9 aspect ratio
                  minHeight: "100vh",
                  minWidth: "100vw",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                  pointerEvents: "none",
                  border: "none",
                }}
              />
              <div
                style={{
                  minHeight: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <h1>SYN/AXIS</h1>
                <p
                  style={{
                    position: "absolute",
                    top: "46%",
                    left: "1.5%",
                    marginLeft: "30px",
                    fontSize: "1.5em",
                    fontWeight: "normal",
                  }}
                >
                  2024
                </p>
              </div>
            </div>
            <div className="section">
              <img
                src="https://static.igem.wiki/teams/5079/img-0433.png"
                alt="Flower"
                style={{
                  maxWidth: "50%",
                  height: "100vh",
                  marginLeft: "50px",
                  float: "left",
                  overflow: "hidden",
                }}
              />
              <div>
                <h2>
                  There is currently no disease modifying treatment for
                  Parkinson’s Disease...{" "}
                </h2>
                <h3>We are changing that.</h3>
              </div>
            </div>
            <div className="section" style={{ backgroundColor: "#e9e9e9" }}>
              <div>
                <img
                  src="https://static.igem.wiki/teams/5079/logo.png"
                  alt="logo"
                  style={{
                    maxWidth: "50%",
                    float: "right",
                    height: "25vh",
                    overflow: "hidden",
                    marginRight: "80px",
                  }}
                />
              </div>
              <p
                style={{
                  position: "absolute",
                  textAlign: "left",
                  left: "23%",
                  top: "33%",
                  fontSize: "2em",
                  maxWidth: "45vw",
                }}
              >
                SynAxis is a novel therapeutic approach to combat the gut
                pathology of Parkinson’s disease by harnessing Neurosin (KLK6),
                a natural enzyme with a remarkable ability to cleave
                alpha-synuclein pathological seeds.
              </p>
            </div>
            <div className="section" style={{ backgroundColor: "#ffffff" }}>
              <p
                style={{
                  position: "absolute",
                  textAlign: "right",
                  left: "40%",
                  top: "35%",
                  fontSize: "2em",
                  maxWidth: "50vw",
                }}
              >
                Parkinson's Disease (PD) is a chronic and progressive
                neurodegenerative disorder. PD results primarily from the death
                of dopaminergic neurons. PD includes various motor and nonmotor
                symptoms.
              </p>
            </div>
            <div className="section" style={{ backgroundColor: "#e9e9e9" }}>
              <p
                style={{
                  position: "absolute",
                  textAlign: "justify",
                  left: "20%",
                  top: "26%",
                  fontSize: "15em",
                  maxWidth: "70vw",
                  color: "var(--venetianred)",
                  fontWeight: "bold",
                }}
              >
                80%
              </p>

              <p
                style={{
                  position: "absolute",
                  textAlign: "justify",
                  left: "60%",
                  top: "39%",
                  fontSize: "2em",
                  maxWidth: "35vw",
                }}
              >
                of patients had gastrointestinal (GIT) that can precede the
                onset of motor symptoms by decades
              </p>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
