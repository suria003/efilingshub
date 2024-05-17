import React, { useState, useEffect } from 'react';
import './Congratulations.css'; 
import { FaCheckCircle } from 'react-icons/fa';

function Congratulations() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    
    setShowAnimation(true);

  
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="congratulations-container">
      {showAnimation && (
        <div className="congratulations-animation">
          <FaCheckCircle className="tick-icon" />
          <h1>Congratulations!</h1>
          <p>You did it!</p>
        </div>
      )}
    </div>
  );
}

export default Congratulations;
