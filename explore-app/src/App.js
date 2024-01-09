import React, { useState, useEffect } from 'react';
import ImageInput from './components/ImageInput';
import ImageDisplay from './components/ImageDisplay';
import axios from 'axios';
import './App.css';

const App = () => {
  const [selectedImageId, setSelectedImageId] = useState('');
  const [annotations1, setAnnotations1] = useState([]);
  const [annotations2, setAnnotations2] = useState([]);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Fetch annotations when the component mounts
    axios.get('https://storage.googleapis.com/cocorem-images/annotations/instances_val2017.json')
      .then(response => setAnnotations1(response.data))
      .catch(error => console.error('Error loading annotations:', error));
  }, []);
  useEffect(() => {
    // Fetch annotations when the component mounts
    axios.get('https://storage.googleapis.com/cocorem-images/annotations/instances_valrem.json')
      .then(response => setAnnotations2(response.data))
      .catch(error => console.error('Error loading annotations:', error));
  }, []);

  const handleImageChangeAndDisplay = (imageId) => {
    setSelectedImageId(imageId);
    setShowImage(true);
  };

  return (
    <div className='App'>
      <ImageInput
        onImageIdChange={handleImageChangeAndDisplay}
      />
      {showImage && selectedImageId && (
        <ImageDisplay
          imageId={selectedImageId}
          annotations1={annotations1}
          annotations2={annotations2}
        />
      )}
    </div>
  );
};
  
export default App;


