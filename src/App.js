import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [joke, setJoke] = useState('');
  const [dogImage, setDogImage] = useState('');
  const [quote, setQuote] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup} - ${response.data.punchline}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const fetchDogImage = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(response.data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(`${response.data.content} - ${response.data.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <h1>Fun API Integrations</h1>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      <div>
        <button onClick={fetchJoke}>Get Random Joke on this date</button>
        <button onClick={fetchDogImage}>Get Random Dog Image on this date</button>
        <button onClick={fetchQuote}>Get Random Quote on this date</button>
      </div>
      {joke && <div><h2>Joke:</h2><p>{joke}</p></div>}
      {dogImage && <div><h2>Dog Image:</h2><img src={dogImage} alt="A random dog" /></div>}
      {quote && <div><h2>Quote:</h2><p>{quote}</p></div>}
    </div>
  );
};

export default App;
