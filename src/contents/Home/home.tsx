import { useEffect, useState } from 'react';
import { tsParticles } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import './home.css';

export function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const loadParticles = async (options: any) => {
      await loadAll(tsParticles);
      await tsParticles.load({ id: "tsparticles", options });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position in state
    };

    window.addEventListener("scroll", handleScroll);

    const configs = {
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        links: { enable: true, distance: 200 },
        shape: { type: "circle" },
        opacity: { value: 1 },
        size: { value: { min: 4, max: 6 } },
        move: { enable: true, speed: 2 },
      },
      poisson: { enable: true },
    };

    loadParticles(configs);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate petal position and swaying effect based on scroll position
  const petalStyle = {
    transform: `translateX(${Math.sin(scrollY * 0.08) * 50}px) translateY(${scrollY * 0.2}px) rotate(${Math.sin(scrollY * 0.05) * 15}deg)`, // Sway, fall, and rotate effect
  };

  return (
    <>
      <div className="home-container">
        <div id="tsparticles" className="particles-area"></div>
        <div className="centered-image-container">
          <img
            src="https://static.igem.wiki/teams/5079/synaxis-logo-slogan.png"
            alt="Centered Graphic"
            className="centered-image"
          />
        </div>
        {/* Flower Petal */}
        <img
          src="https://static.igem.wiki/teams/5079/writeups/home/img-0437.png"
          alt="Falling Petal"
          className="petal"
          style={petalStyle} // Dynamically adjust position based on scroll
        />
      </div>

      <div className="secondpart">
        <img
          src="https://static.igem.wiki/teams/5079/img-0431.png"
          alt="Second Section Image"
          className="secondpart-image"
        />
        <div className="text-box-container">
          <div className="text-box1">
            <p>There is currently no disease modifying treatment for Parkinson's...</p>
          </div>
          <div className="text-box2">
            <p>We are changing that.</p>
          </div>

          <div className="image-container">
            <img
              src="https://static.igem.wiki/teams/5079/img-0430.png"
              alt="Image 1"
              className="overlap-image first-image"
            />
            <img
              src="https://static.igem.wiki/teams/5079/img-0430.png"
              alt="Image 2"
              className="overlap-image second-image"
            />
          </div>
        </div>
      </div>

      <div className="thirdpart">
        <div className="textbox">
          <p>From Gut Feeling To True Healing.</p>
        </div>
      </div>

      <div className="fourthpart">
        <img
          src="https://static.igem.wiki/teams/5079/img-0431.png" 
          alt="Top Right Image"
          className="right-image"
        />
      </div>

      <div className="fifthpart">
        <div className="centered-textbox">
          <p>SynAxis is a novel therapeutic approach to combat the gut pathology of Parkinson’s disease by harnessing Neurosin (KLK6), a natural enzyme with a remarkable ability to cleave alpha-synuclein pathological seeds.</p>
        </div>
      </div>

      <div className="sixthpart">
        <div className="right-hugging-textbox">
          <p>Parkinson's Disease (PD) is a chronic and progressive neurodegenerative disorder. PD results primarily from the death of dopaminergic neurons. PD includes various motor and nonmotor symptoms.</p>
        </div>
      </div>

      {/* Seventh part with two side-by-side textboxes */}
      <div className="seventhpart">
        <div className="left-textbox">
          <p>80%.</p>
        </div>
        <div className="right-textbox">
          <p>of patients had gastrointestinal (GIT) symptoms that can precede the onset of motor symptoms by decades.</p>
        </div>
      </div>

      {/* New Eighth part */}
      <div className="eighthpart">
        <div className="eighth-textbox">
          <p>We aim to target Parkinson’s at the earliest possible stage by focusing on gut pathology.</p>
        </div>
      </div>
    </>
  );
}
