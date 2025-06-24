import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [heure, setHeure] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHeure(new Date());
    }, 1000);

    return () => clearInterval(timer); // Nettoyage
  }, []);

  return (
    <div className="App">
      <h1>Horloge en Temps Réel 🕒</h1>
      <h2>{heure.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
