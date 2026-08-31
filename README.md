# Ex05 Image Carousel
## Date:31/08/2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM

```

app.jsx


import React, { useState, useEffect } from "react";
import "./app.css";

import i1 from "./src/i1.jpg";
import i2 from "./src/i2.jpg";
import i3 from "./src/i3.jpg";
import i4 from "./src/i4.jpg";

function App() {
  const images = [i1, i2, i3, i4];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Image/
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
```

```

app.css

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.carousel {
  text-align: center;
  width: 800px;
  margin: 50px auto;
}

.carousel h1 {
  margin-bottom: 20px;
}

.image-container {
  width: 800px;
  height: 450px;
  overflow: hidden;
  border-radius: 10px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buttons {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #444;
}

p {
  font-size: 16px;
}
```

## OUTPUT
<img width="1919" height="1132" alt="Screenshot 2026-08-31 082844" src="https://github.com/user-attachments/assets/3e3d1178-1dd9-415a-a8ac-fabeae560f9e" />
<img width="1912" height="1089" alt="Screenshot 2026-08-31 082838" src="https://github.com/user-attachments/assets/4c80ad34-258e-44c3-9307-fbe3af785507" />
<img width="1913" height="1157" alt="Screenshot 2026-08-31 082848" src="https://github.com/user-attachments/assets/d4b8a69d-e39b-44a5-8682-95d65a32da23" />
<img width="1919" height="1118" alt="Screenshot 2026-08-31 082854" src="https://github.com/user-attachments/assets/0734567c-1a34-4eb5-9ba3-fef74dc1d74b" />


## RESULT
The program for creating Image Carousel using React is executed successfully.
