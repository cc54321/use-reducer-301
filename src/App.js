
import React, { useState } from 'react';
import Routes from './Routes';
import ApiData from './ApiData';

const App = () => {
  const [selectedRoute, setSelectedRoute] = useState('posts');
  const [selectedNumber, setSelectedNumber] = useState('');

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  const handleNumberChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <div className="container">
      <h1>API Data Display</h1>
      <div>
        <Routes
          selectedRoute={selectedRoute}
          handleRouteChange={handleRouteChange}
        />
        <input
          type="number"
          value={selectedNumber}
          onChange={handleNumberChange}
          placeholder="Enter number (optional)"
        />
      </div>
      <ApiData selectedRoute={selectedRoute} selectedNumber={selectedNumber} />
    </div>
  );
};

export default App;












