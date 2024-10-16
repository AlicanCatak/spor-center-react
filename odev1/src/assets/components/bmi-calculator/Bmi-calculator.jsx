import React, { useState, useEffect } from "react";
import BmiImage from "../../images/bmi-index.jpg"; // BMI resmini ekliyoruz

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  // BMI Hesaplama fonksiyonu
  const calculateBmi = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      let position = 0;

      if (bmiValue < 18.5) {
        setBmiCategory("Underweight");
        position = 0; // Üçgeni resmin en soluna yerleştir
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiCategory("Normal");
        position = 120; // Üçgeni 'Normal' kategorisine yerleştir
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiCategory("Overweight");
        position = 240; // Üçgeni 'Overweight' kategorisine yerleştir
      } else if (bmiValue >= 30 && bmiValue < 34.9) {
        setBmiCategory("Obese");
        position = 360; // Üçgeni 'Obese' kategorisine yerleştir
      } else {
        setBmiCategory("Extremely Obese");
        position = 480; // Üçgeni 'Extremely Obese' kategorisine yerleştir
      }
      setIndicatorPosition(position); // Üçgeni yeni pozisyona taşı
    }
  };

  // Boy veya kilo değiştiğinde BMI'yi otomatik olarak hesaplayacağız
  useEffect(() => {
    calculateBmi();
  }, [height, weight]); // Height ve weight değiştiğinde hesaplama yap

  return (
    <section className="bmi-calculator-section">
      <div className="bmi-wrapper">
        <div className="container">
          <div className="bmi-text-content">
            <h1 className="bmi-title">BMI Calculator</h1>
            <p className="bmi-description">
              Vücut kitle indeksinizi hesaplayın ve sağlık durumunuzu öğrenin.
            </p>
            <div className="bmi-input-group">
              <input
                type="text"
                placeholder="Your Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="bmi-input"
              />
              <span className="bmi-unit">cm</span>
              <input
                type="text"
                placeholder="Your Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="bmi-input"
              />
              <span className="bmi-unit">kg</span>
            </div>
          </div>
          <div className="bmi-image-wrapper">
            <h1 className="bmi-heading">
              {bmiCategory} {bmi && `(${bmi})`}
            </h1>
            <div className="bmi-position">
              <img src={BmiImage} alt="BMI Index Image" className="bmi-image" />
              {/* Üçgeni dinamik olarak konumlandırıyoruz */}
              <div
                id="bmi-indicator"
                className="bmi-indicator"
                style={{ left: `${indicatorPosition}px` }} // Üçgeni dinamik pozisyona yerleştir
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
