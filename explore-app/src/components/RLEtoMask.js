const RLEtoMask = ({ rleData, isCrowd }) => {
  const imageWidth = rleData.size[1];
  const imageHeight = rleData.size[0];
  const counts = rleData.counts;

  let currentPixel = 0;
  let currentCount = 0;
  let currentBinaryValue = 0;

  const newBinaryArray = Array(imageWidth * imageHeight).fill(0);

  for (const count of counts) {
    currentCount += count;
    while (currentCount > 0) {
      newBinaryArray[currentPixel] = currentBinaryValue;
      currentPixel += 1;
      currentCount -= 1;
    }
    currentBinaryValue = 1 - currentBinaryValue;
  }

  const transposedBinaryArray = Array(imageHeight * imageWidth).fill(0);

  for (let i = 0; i < imageWidth; i++) {
    for (let j = 0; j < imageHeight; j++) {
      transposedBinaryArray[j * imageWidth + i] = newBinaryArray[i * imageHeight + j];
    }
  }

  const addBorder = (input, width, height, borderWidth) => {
    const borderedArray = Array(width * height).fill(0);

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        const index = y * width + x;

        if (input[index] > 0) {
          borderedArray[index] = 1; // Non-transparent pixel

          // Add border around non-transparent pixels
          for (let i = -borderWidth; i <= borderWidth; i++) {
            for (let j = -borderWidth; j <= borderWidth; j++) {
              if (
                x + i >= 0 &&
                x + i < width &&
                y + j >= 0 &&
                y + j < height &&
                input[(y + j) * width + (x + i)] === 0
              ) {
                borderedArray[(y + j) * width + (x + i)] = 2; // Border pixel
              }
            }
          }
        }
        
      }
    }

    return borderedArray;
  };
  const addSlantedStripes = (input, width, height) => {
    // Customize the angle, stripe width, and spacing based on your preference
    const angle = 135; // Angle of the slanted stripes in degrees
    const stripeWidth = 6; // Adjust the width of the stripes
    const stripeSpacing = 12; // Adjust the spacing between the stripes
  
    const radians = (angle * Math.PI) / 180;
    const tanTheta = Math.tan(radians);
  
    const stripedArray = Array(width * height).fill(0);
  
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (input[i * width + j] === 1) {
          // Check if a pixel is part of the mask (value equals 1)
          // If yes, add slanted parallel lines
          const distanceToLine = Math.abs(j - tanTheta * i) % stripeSpacing;
  
          if (distanceToLine < stripeWidth / 2) {
            stripedArray[i * width + j] = 0; // Inside the slanted stripe
          } else {
            stripedArray[i * width + j] = 1; // Outside the slanted stripe
          }
        } else {
          // Keep the existing logic for non-mask pixels
          stripedArray[i * width + j] = input[i * width + j];
        }
      }
    }
  
    return stripedArray;
  };
  

  const stripedArray = isCrowd ? addSlantedStripes(transposedBinaryArray, imageWidth, imageHeight) : transposedBinaryArray;
  const borderedArray = addBorder(stripedArray, imageWidth, imageHeight, 1);

  const arrayToImageData = (input) => {
    // Map the values to the [0, 255] range
    const NICE_COLORS = [
      [0.0039, 0.4509, 0.6980],  //blue
      [0.8705, 0.5607, 0.0196],  //orange
      [0.0078, 0.6196, 0.4509],  //green
      [0.9400, 0.2200, 0.1000],  //red
      [0.6980, 1.0000, 0.3500],  //lime green
      [0.6500, 0.3500, 0.9000],  //purple
      [0.5019, 0.8705, 0.9176],  //cyan
      [0.7921, 0.5686, 0.3803],  //brown
      [0.9843, 0.6862, 0.8941],  //pink
      [0.9254, 0.8823, 0.2001],  // gold
  ];
    
    
    // Select a random color from NICE_COLORS
    const randomColor = NICE_COLORS[Math.floor(Math.random() * NICE_COLORS.length)];
    
    // Map the values to the [0, 255] range
    const [r, g, b] = randomColor.map(value => Math.round(value * 255));
    
    // Set the alpha value to 255
    const a = 255;
    const arr = new Uint8ClampedArray(4 * imageWidth * imageHeight).fill(255);

    for (let i = 0; i < input.length; i++) {
      const value = input[i];

      if (value === 1) {
        arr[4 * i + 0] = r; // Red
        arr[4 * i + 1] = g;   // Green
        arr[4 * i + 2] = b;   // Blue
        arr[4 * i + 3] = a; // Alpha
      } else if (value === 2) {
        arr[4 * i + 0] = 0;   // Red
        arr[4 * i + 1] = 0;   // Green
        arr[4 * i + 2] = 0; // Blue
        arr[4 * i + 3] = 255; // Alpha
      }
      else{
        arr[4 * i + 0] = 88;
        arr[4 * i + 1] = 88;
        arr[4 * i + 2] = 88;
        arr[4 * i + 3] = 0;
        
      }
      // You can add more conditions for other values if needed
    }

    return new ImageData(arr, imageWidth, imageHeight);
  };

  return arrayToImageData(borderedArray);
};

export default RLEtoMask;

