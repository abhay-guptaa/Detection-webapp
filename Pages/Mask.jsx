import React from 'react';
import MaskModel from '../Models/MaskModel';

// import "@lottiefiles/lottie-player";  // Uncomment if using the package
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Mask = () => {
  return (
    <div className="container my-4">
      <div className="row g-5">
        {/* Left Container */}
        <div className="col-12 col-md-5 text-center p-3 bg-light rounded shadow-sm">
          {/* Lottie Player */}
          <DotLottieReact
            src="https://lottie.host/e96e5ee8-2ab5-4314-8bc3-8b2bf4dcc6bd/bx0kTES7ON.lottie"
            background="transparent"
            speed="0.8"
            style={{ width: '100%', height: '350px' }}
            loop
            autoplay
          />
          <p>A Mask Detection Machine using Machine Learning (ML) is a real-time model that automatically identifies whether individuals are wearing face masks or not.</p>
        </div>

        {/* Right Container */}
        <div className="col-12 col-md-7 text-center p-2 bg-secondary text-white rounded shadow-sm">
          <h4>Mask Detection</h4>
          <MaskModel/>
        </div>
      </div>
    </div>
  );
}

export default Mask;
