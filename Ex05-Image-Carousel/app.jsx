import React, { useState, useEffect } from "react";
import "./app.css";

import i1 from "./src/i1.jpg";
import i2 from "./src/i2.jpg";
import i3 from "./src/i3.jpg";
import i4 from "./src/i4.jpg";

function App() {
  const images = [i1, i2, i3, i4];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Image
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Previous Image
  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  // Automatic Image Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">

      <h1>Image Carousel</h1>

      <div className="image-container">
        <img
          src={images[currentIndex]}
          alt="Carousel"
        />
      </div>

      <div className="buttons">
        <button onClick={previousImage}>
          Previous
        </button>

        <button onClick={nextImage}>
          Next
        </button>
      </div>

      <p>
        Image {currentIndex + 1} of {images.length}
      </p>

    </div>
  );
}

export default App;