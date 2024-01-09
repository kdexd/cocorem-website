import React, { useState, useEffect } from 'react';
import RLEtoMask from './RLEtoMask';

const ImageDisplay = ({ imageId, annotations1, annotations2 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderMasks = async (annotations, containerId, canvasClassName) => {
    const annotationList = annotations.annotations;
    const filteredAnnotations = annotationList.filter((annotation) => {
      return annotation.image_id === parseInt(imageId, 10);
    });

    const img = new Image();
    img.onload = () => {
      const imageContainer = document.getElementById(containerId);
      const existingCanvases = document.querySelectorAll(`.${canvasClassName}`);
      existingCanvases.forEach((canvas) => {
        imageContainer.removeChild(canvas);
      });

      const canvas = document.createElement('canvas');
      canvas.className = canvasClassName;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      imageContainer.appendChild(canvas);

      filteredAnnotations.forEach((annotation) => {
        const rleData = annotation.segmentation;
        const imageData = RLEtoMask({ rleData });

        const newCanvas = document.createElement('canvas');
        newCanvas.className = canvasClassName;
        newCanvas.width = img.width;
        newCanvas.height = img.height;
        const newCtx = newCanvas.getContext('2d');
        newCtx.drawImage(img, 0, 0);
        newCtx.globalCompositeOperation = 'source-in';
        newCtx.putImageData(imageData, 0, 0);

        newCanvas.style.position = 'absolute';
        newCanvas.style.zIndex = '1';
        newCanvas.style.opacity = '0.8';
        newCanvas.style.left = '0';

        imageContainer.appendChild(newCanvas);
      });
    };

    img.src = `https://storage.googleapis.com/cocorem-images/val2017/${imageId}.jpg`;
    setImageLoaded(true);
  };

  useEffect(() => {
    renderMasks(annotations1, 'image-container1', 'mask-canvas1');
  }, [imageId, annotations1, imageLoaded]);

  useEffect(() => {
    renderMasks(annotations2, 'image-container2', 'mask-canvas2');
  }, [imageId, annotations2, imageLoaded]);

  return (
    <div>
      <div id="image-container1" style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
        <h1>COCO-2017</h1>
      </div>
      <div id="image-container2" style={{ position: 'relative', display: 'inline-block' }}>
        <h1>COCO-ReM</h1>
      </div>
    </div>
  );
};

export default ImageDisplay;

