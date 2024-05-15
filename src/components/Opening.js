import React, { useState, useEffect } from "react";

const Opening = ({ onAnimationComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(step + 1);
    }, 1500);

    if (step === 3) {
      clearTimeout(timer);
      onAnimationComplete();
    }

    return () => clearTimeout(timer);
  }, [step, onAnimationComplete]);

  return (
    <div className="opening-background">
      <div className="opening-container">
        <h1 className={step === 0 || step === 1 || step === 2 ? "show" : ""}>
          Welcome!
        </h1>
        <h2 className={step === 1 || step === 2 ? "show" : ""}>
          Get ready for an
          <br />
          amazing experience
        </h2>
        <h2 className={step === 2 ? "show" : ""}>Let's dive in!</h2>
      </div>
    </div>
  );
};

export default Opening;
