import React from 'react';
import MaskModel from '../Models/MaskModel';

// import "@lottiefiles/lottie-player";  // Uncomment if using the package
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Expression = () => {
  return (
    <div className="container my-4">
      <div className="row g-5">
        {/* Left Container */}
        <div className="col-12 col-md-5 text-center p-3 bg-light rounded shadow-sm">
          {/* Lottie Player */}
          <DotLottieReact
            src="https://lottie.host/0d23a589-d515-4bce-a016-0eafe63cadd6/kMbxBr0iFb.lottie"
            background="transparent"
            speed="0.5"
            style={{ width: '100%', height: '350px' }}
            loop
            autoplay
          />
          <p>A Expression Detection Machine using Machine Learning (ML) that utilizes machine learning algorithms to recognize and interpret human facial expressions in real-time.</p>
        </div>

        {/* Right Container */}
        <div className="col-12 col-md-7 text-center p-3 bg-secondary text-white rounded shadow-sm">
          <h4>Expression Detection</h4>
          <MaskModel/>
        </div>
      </div>
    </div>
  );
}

export default Expression;
