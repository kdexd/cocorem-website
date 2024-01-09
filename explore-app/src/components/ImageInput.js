import React, { useState } from 'react';

const ImageInput = ({ onImageIdChange}) => {
  const [imageId, setImageId] = useState('');

  const handleChange = (event) => {
    const enteredValue = event.target.value;
    
    // Remove leading zeros and update the state
    setImageId(enteredValue.replace(/^0+/, ''));
    // const paddedValue = enteredValue.padStart(12, '0');
    // onImageIdChange(paddedValue);
  
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const paddedValue = imageId.padStart(12, '0');
    onImageIdChange(paddedValue);
  };

  return (
    <div>
      <div class="container">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter Image ID"
          aria-label="Search"
          value={imageId}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
    </div>
  );
};


export default ImageInput;