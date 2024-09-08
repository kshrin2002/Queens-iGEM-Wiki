import ReactFullpage from "@fullpage/react-fullpage";
import "./home.css";

export function Home() {
  return (
    <div className="App">
      <ReactFullpage
        debug={true}
        anchors={["firstPage", "secondPage", "3rdPage"]}
        scrollBar={true}
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
        credits=''
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
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  zIndex: -1,
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              ></iframe>

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
                  height: "auto",
                  marginBottom: "20px",
                  float: "left",
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
