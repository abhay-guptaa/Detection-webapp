import React from 'react';
import MaskModel from '../Models/MaskModel';

// import "@lottiefiles/lottie-player";  // Uncomment if using the package
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Gender = () => {
  return (
    <div className="container my-4">
      <div className="row g-5">
        {/* Left Container */}
        <div className="col-12 col-md-5 text-center p-3 bg-light rounded shadow-sm">
          {/* Lottie Player */}
          <DotLottieReact
            src="https://lottie.host/fc2ca912-2c90-476e-907d-496066d253f9/TuFoMNTfXh.lottie"
            background="transparent"
            speed="0.8"
            style={{ width: '100%', height: '350px' }}
            loop
            autoplay
          />
          <p>A Gender Detection Machine using Machine Learning (ML) is a real-time model that identifies predict the gender of a person based on input features.</p>
        </div>

        {/* Right Container */}
        <div className="col-12 col-md-7 text-center p-3 bg-secondary text-white rounded shadow-sm">
          <h4>Gender Detection</h4>
          <MaskModel/>
        </div>
      </div>
    </div>
  );
}

export default Gender;
