import ReactFullpage from "@fullpage/react-fullpage";
import "./home.css";

export function Home() {
  return (
    <div className="App">
      <ReactFullpage
        anchors={["firstPage", "secondPage", "thirdPage"]}
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

              {/* Content displayed on top of the video */}
              <div
                style={{
                  minHeight: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative", // Ensure this stays above the video
                  zIndex: 1, // Higher than -1 to appear above the iframe
                }}
              >
                <h1>Syn/axis</h1>
                <p>2024</p>
              </div>
            </div>
            <div className="section">
              <img
                src="https://static.igem.wiki/teams/5079/flower-1.png"
                alt="Flower"
                style={{
                  maxWidth: "50%",
                  height: "100vh",
                  float: "left",
                  overflow: "hidden"
                }}
              />
              <div>
                <h2>
                  There is currently no disease modifying treatment for
                  Parkinson’s Disease...{" "}
                </h2>
                <h3>We're changing that</h3>
              </div>
            </div>
            <div className="section">
              <h1>Section 3</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
