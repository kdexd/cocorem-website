import React, { useState } from 'react';

const ImageInput = ({ onImageIdChange }) => {
  const [imageId, setImageId] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const suggestions = ['139', '285', '1000', '2431', '2592', '14038','26926','28809','45472','50844','543528','54628', '67213', '82807', '228436','238866', '276434', '354072', '429281', '446117'];

  const handleChange = (event) => setImageId(event.target.value.replace(/^0+/, ''));

  const handleSuggestionClick = (suggestion) => {
    setImageId(suggestion);
    onImageIdChange(suggestion.padStart(12, '0'));
  };

  const handleSearchFocus = () => setIsSearchFocused(true);
  const handleSearchBlur = () => setIsSearchFocused(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onImageIdChange(imageId.padStart(12, '0'));
  };

  const getRandomSuggestions = () => suggestions.sort(() => Math.random() - 0.5).slice(0, 5);

  return (
    <div className="container my-3 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="d-flex">
        <div style={{ position: 'relative', width: '400px', display: 'flex' }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter Image ID"
            aria-label="Search"
            value={imageId}
            onChange={handleChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            list="suggestions"
            style={{
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #28a745',
              marginRight: '5px',
              padding: '5px',
              color: '#029E73',
            }}
          />
          {isSearchFocused && suggestions.length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 2,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '5px',
                border: '1px solid',
                marginTop: '5px',
              }}
            >
              {getRandomSuggestions().map((suggest, index) => (
                <div
                  key={index}
                  onMouseDown={() => handleSuggestionClick(suggest)}
                  style={{
                    cursor: 'pointer',
                    padding: '8px 10px',
                    borderBottom: '1px solid #28a745',
                    color: '#029E73',
                  }}
                >
                  {suggest}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="btn btn-outline-success"
          type="submit"
          style={{ backgroundColor: '#029E73', color: '#ffffff', borderRadius: '5px' }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ImageInput;
