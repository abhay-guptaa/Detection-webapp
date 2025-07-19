import React, { useEffect, useRef, useState } from 'react';
import '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';

const ExpressionModel = () => {
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [webcam, setWebcam] = useState(null);
  const canvasRef = useRef(null);
  const labelContainerRef = useRef(null);

  const URL = 'https://teachablemachine.withgoogle.com/models/orIHD9n6r/';

  const init = async () => {
    const modelURL = `${URL}model.json`;
    const metadataURL = `${URL}metadata.json`;

    // Load the model and metadata
    const loadedModel = await tmPose.load(modelURL, metadataURL);
    setModel(loadedModel);
    setMaxPredictions(loadedModel.getTotalClasses());

    // Set up webcam
    const size = 200;
    const webcamInstance = new tmPose.Webcam(size, size, true); // width, height, flip
    await webcamInstance.setup();
    await webcamInstance.play();
    setWebcam(webcamInstance);

    // Initialize canvas
    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;

    // Start the animation loop
    window.requestAnimationFrame(loop);
  };

  useEffect(() => {
    init(); // Initialize the model when the component mounts

    return () => {
      // Cleanup function to stop the webcam on unmount
      if (webcam) webcam.stop();
    };
  }, []);

  const loop = async () => {
    if (webcam) {
      webcam.update(); // Update the webcam frame
      await predict();
      window.requestAnimationFrame(loop);
    }
  };

  const predict = async () => {
    if (model && webcam) {
      // Prediction #1: run input through posenet
      const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
      // Prediction 2: run input through teachable machine classification model
      const prediction = await model.predict(posenetOutput);
  
      // Extract probabilities for "person with mask" and "person without mask"
      let personWithMask = 0;
      let personWithoutMask = 0;
  
      for (let i = 0; i < maxPredictions; i++) {
          if (prediction[i].className === "person with mask") {
              personWithMask = prediction[i].probability;
          } else if (prediction[i].className === "person without mask") {
              personWithoutMask = prediction[i].probability;
          }
      }
  
      // Display result based on the comparison
      const result = document.getElementById("label-container");
      result.innerHTML = ""; // Clear previous results
  
      if (personWithMask > personWithoutMask) {
          result.innerHTML = `<div style="color: #347928; font-family: poppins; font-size: 1.5rem; font-weight: bold; text-align: center; background-color: #C0EBA6; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 128, 0, 0.3); width: 80%; margin: 20px auto;">Person with Mask</div>`;
      } else {
          result.innerHTML = `<div style="color: #C51605; font-size: 1.5rem; font-weight: bold; text-align: center; background-color: #f98686; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(255, 0, 0, 0.3); width: 80%; margin: 20px auto;">Person without Mask</div>`;
      }
  
      // Draw the pose
      drawPose(pose);
    }
    
  };

  const drawPose = (pose) => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.drawImage(webcam.canvas, 0, 0);

      if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  };

  return (
    <div className="model container my-5 p-5 bg-white shadow rounded">
      <div id="mod" className="text-center mb-5">
        <h1 className="fw-bold text-primary">Teachable Machine Pose Model</h1>
        <p className="text-muted">Utilize AI-powered pose detection for real-time insights.</p>
      </div>

      <div className="text-center mb-4">
        <button
          type="button"
          onClick={init}
          id="but"
          className="btn btn-lg btn-primary px-5 py-2 shadow-sm"
        >
          <span className="box fw-bold">Start</span>
        </button>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <canvas
          ref={canvasRef}
          className="border border-dark-200 rounded shadow"
          style={{ width: '70%', height: '400px' }}
        ></canvas>
      </div>

      <div id="label-container" ref={labelContainerRef} className="text-center">
        <p className="text-secondary">Labels will appear here during the analysis.</p>
      </div>
    </div>
  );
};

export default ExpressionModel;
