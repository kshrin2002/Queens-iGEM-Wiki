import React, { useState, useEffect } from "react"; // Import useState and useEffect
import './ihp.css';

export function HumanPractices() {
  return (
    <>
      <IHPHeading />
      <OverviewSection />
      <PuzzleSection />
      <TreePuzzle/>
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

interface PuzzlePiece {
  id: number;
  text: string;
  image: string;
}

const TreePuzzle: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<PuzzlePiece | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const puzzlePieces: PuzzlePiece[] = [
    { id: 1, text: "This is the text for piece 1", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 2, text: "This is the text for piece 2", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 3, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 4, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 5, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 6, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 7, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 8, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 9, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 10, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 11, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 12, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    { id: 13, text: "This is the text for piece 3", image: "https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" },
    // Replace images with person replace text with their credentials
  ];

  const handleClickOutside = (event: MouseEvent) => {
    const pieces = document.querySelectorAll('.pieces .piece');
    const clickedInside = Array.from(pieces).some(piece => piece.contains(event.target as Node));
    
    if (!clickedInside) {
      setIsVisible(false); // Remove enlarged class if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handlePieceClick = (id: number) => {
    const piece = puzzlePieces.find(piece => piece.id === id) || null;
    setSelectedPiece(piece);
  };



  useEffect(() => {
    if (selectedPiece) {
      // Delay setting isVisible to true to ensure the component has rendered
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [selectedPiece]);

  useEffect(() => {
    if (!isVisible && selectedPiece) {
      // Delay unsetting selectedPiece to allow for closing animation
      const timer = setTimeout(() => setSelectedPiece(null), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, selectedPiece]);

  return (
    <div className="tree-container">
      <div className="level level-1">
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 1" onClick={() => handlePieceClick(1)} />
      </div>
      <div className="level level-2">
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 2" onClick={() => handlePieceClick(2)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 3" onClick={() => handlePieceClick(3)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 4" onClick={() => handlePieceClick(4)} />
      </div>
      <div className="level level-3">
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 5" onClick={() => handlePieceClick(2)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 6" onClick={() => handlePieceClick(3)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 7" onClick={() => handlePieceClick(4)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 8" onClick={() => handlePieceClick(2)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 9" onClick={() => handlePieceClick(3)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 10" onClick={() => handlePieceClick(4)} />
      </div>
      <div className="level level-4">
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 11" onClick={() => handlePieceClick(2)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 12" onClick={() => handlePieceClick(3)} />
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 13" onClick={() => handlePieceClick(4)} />
      </div>

      {selectedPiece && (
        <div className={`popup-overlay ${isVisible ? 'visible' : ''}`}>
          <div className="popup-content">
            <div className="popup-inner">
              <div className="popup-image">
                <img src={selectedPiece.image} alt={`Piece ${selectedPiece.id}`} />
              </div>
              <div className="popup-text">
                <h2>Puzzle Piece {selectedPiece.id}</h2>
                <p>{selectedPiece.text}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



const PuzzleSection: React.FC = () => {
  const [enlargedPiece, setEnlargedPiece] = useState<string | null>(null);

  const handlePieceClick = (piece: string) => {
    setEnlargedPiece(piece === enlargedPiece ? null : piece); // Toggle enlargement
  };

  const handleClickOutside = (event: MouseEvent) => {
    const pieces = document.querySelectorAll('.pieces .piece');
    const clickedInside = Array.from(pieces).some(piece => piece.contains(event.target as Node));
    
    if (!clickedInside) {
      setEnlargedPiece(null); // Remove enlarged class if clicked outside
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
          Section 0 Stakeholder's interest
      </h1>
      <p className="section-text">
        Talk about how we came up with the sections
      </p>
      <div className="brain-puzzle">
        <img src="https://static.igem.wiki/teams/5079/brainpuzzle/brain-puzzle.png" alt="brain" className="brain-shell" />
        <div className="pieces">
          <div onClick={() => handlePieceClick("piece-1")} className={`piece piece-1 ${enlargedPiece === "piece-1" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece1.png" alt="Piece 1" />
            {enlargedPiece === "piece-1" && <div className="piece-text">Text for Piece 1</div>}
          </div>
          <div onClick={() => handlePieceClick("piece-2")} className={`piece piece-2 ${enlargedPiece === "piece-2" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece2.png" alt="Piece 2" />
            {enlargedPiece === "piece-2" && <div className="piece-text">Text for Piece 2</div>}
          </div>
          <div onClick={() => handlePieceClick("piece-3")} className={`piece piece-3 ${enlargedPiece === "piece-3" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece3.png" alt="Piece 3" />
            {enlargedPiece === "piece-3" && <div className="piece-text">Text for Piece 3</div>}
          </div>
          <div onClick={() => handlePieceClick("piece-4")} className={`piece piece-4 ${enlargedPiece === "piece-4" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece4.png" alt="Piece 4" />
            {enlargedPiece === "piece-4" && <div className="piece-text">Text for Piece 4</div>}
          </div>
          <div onClick={() => handlePieceClick("piece-5")} className={`piece piece-5 ${enlargedPiece === "piece-5" ? "enlarged" : ""}`}>
            <img src="https://static.igem.wiki/teams/5079/brainpuzzle/piece5.png" alt="Piece 5" />
            {enlargedPiece === "piece-5" && <div className="piece-text">Text for Piece 5</div>}
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
        Talk about framework desgin replace image with diagram
      </p>
      <div className="diagram-container">
      <img src="https://static.igem.wiki/teams/5079/rose-logo.png" alt="" className="framework-diagram"/>
      </div>
      <h1 className="subsection-title">
          Subsection 2 Reflection Tool
      </h1>
      <p className="section-text">
        Talk about reflection tool replace image with diagram
      </p>
      <div className="diagram-container">
      <img src="https://static.igem.wiki/teams/5079/rose-logo.png" alt="" className="reflection-diagram"/>
      </div>

      <h1 className="section-title">
      Section Stage 2 Building the Snyaxis Network
      </h1>
    </div>

  );
};

export default HumanPractices;
