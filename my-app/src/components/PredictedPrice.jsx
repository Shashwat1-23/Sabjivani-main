import React, { useState, useEffect } from 'react';


function App() {
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [graphImage, setGraphImage] = useState(null);

  useEffect(() => {
    // Replace 'Apple' with the actual item you want to predict
    const item = 'Apple';

    // Make an API request to your Flask server to get predicted data
    fetch(`http://localhost:8090/get_predicted_price/${item}`)
      .then((response) => response.json())
      .then((data) => {
        setPredictedPrice(data.predicted_price);
        setGraphImage(data.graph);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Price Prediction</h1>
      {predictedPrice !== null && (
        <div>
          <h2>Predicted Future Price:</h2>
          <p>{predictedPrice}</p>
        </div>
      )}
      {graphImage !== null && (
        <div>
          <h2>Price Prediction Graph:</h2>
          <img src={`data:image/png;base64,${graphImage}`} alt="Price Prediction Graph" />
        </div>
      )}
    </div>
  );
}

export default App;