import React, { useRef, useEffect } from 'react';

// Applies filter on the image
function FilteredImage({ imageUrl }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the original image on the canvas
      context.drawImage(image, 0, 0);

      // Apply comic effect (simplified for demonstration)
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Reduce the number of colors for a cartoonish effect
        data[i] = Math.floor(data[i] / 32) * 32;
        data[i + 1] = Math.floor(data[i + 1] / 32) * 32;
        data[i + 2] = Math.floor(data[i + 2] / 32) * 32;
      }

      // Update the canvas with the modified image data
      context.putImageData(imageData, 0, 0);
    };
  }, [imageUrl]);

  return <canvas ref={canvasRef} />;
};


export default FilteredImage;
