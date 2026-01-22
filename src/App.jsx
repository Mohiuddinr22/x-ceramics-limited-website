import { useState } from "react";

import t1img1 from "./assets/tile1/img1.jpg";
import t1img2 from "./assets/tile1/img2.jpg";
import t1img3 from "./assets/tile1/img3.jpg";

import t2img1 from "./assets/tile2/img1.jpg";
import t2img2 from "./assets/tile2/img2.jpg";
import t2img3 from "./assets/tile2/img3.jpg";

function App() {
  const [activeTile, setActiveTile] = useState("tile1");

  const images = {
    tile1: [t1img1, t1img2, t1img3],
    tile2: [t2img1, t2img2, t2img3],
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">X-Ceramics Limited</div>
        <nav>
          <button
            className={activeTile === "tile1" ? "active" : ""}
            onClick={() => setActiveTile("tile1")}
          >
            Tile 1
          </button>
          <button
            className={activeTile === "tile2" ? "active" : ""}
            onClick={() => setActiveTile("tile2")}
          >
            Tile 2
          </button>
        </nav>
      </header>

      <main>
        {images[activeTile].map((img, index) => (
          <section key={index} className="image-section">
            <img src={img} alt="tile" />
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
