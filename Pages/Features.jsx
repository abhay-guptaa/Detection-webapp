import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
// import "@lottiefiles/lottie-player";  // Uncomment if using the package
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Features = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Key Features of the Detection System</h1>

      <Row className="g-4">
        {/* Feature 1: Mask Detection */}
        <Col md={4}>
          <Card className="shadow-lg">
          <DotLottieReact
            src="https://lottie.host/e96e5ee8-2ab5-4314-8bc3-8b2bf4dcc6bd/bx0kTES7ON.lottie"
            background="transparent"
            speed="0.8"
            style={{ width: '100%', height: '350px' }}
            loop
            autoplay
          />
            <Card.Body>
              <Card.Title>Mask Detection</Card.Title>
              <Card.Text>
                The Mask Detection system instantly detects whether a person is wearing a mask or not, ensuring compliance with health guidelines.
              </Card.Text>
              <Button variant="primary" href="/mask">Explore</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 2: Expression Detection */}
        <Col md={4}>
          <Card className="shadow-lg">
          <DotLottieReact
            src="https://lottie.host/0d23a589-d515-4bce-a016-0eafe63cadd6/kMbxBr0iFb.lottie"
            background="transparent"
            speed="0.5"
            style={{ width: '100%', height: '350px' }}
            loop
            autoplay
          />
            <Card.Body>
              <Card.Title>Expression Detection</Card.Title>
              <Card.Text>
                Detect facial expressions such as happy, sad, angry, or neutral. This feature can be used in security, marketing, and research.
              </Card.Text>
              <Button variant="primary" href="/expression">Explore</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 3: Gender Detection */}
        <Col md={4}>
          <Card className="shadow-lg">
          <DotLottieReact
            src="https://lottie.host/fc2ca912-2c90-476e-907d-496066d253f9/TuFoMNTfXh.lottie"
            background="transparent"
            speed="0.8"
            style={{ width: '100%', height: '350px' }}
            loop
            autoplay
          />
            <Card.Body>
              <Card.Title>Gender Detection</Card.Title>
              <Card.Text>
                Our system can accurately predict the gender of an individual based on facial features, aiding in demographic analysis.
              </Card.Text>
              <Button variant="primary" href="/gender">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 my-5">
        {/* Feature 4: Hand Gesture Detection */}
        <Col md={4}>
          <Card className="shadow-lg">
            <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Hand+Gesture+Detection" />
            <Card.Body>
              <Card.Title>Hand Gesture Detection</Card.Title>
              <Card.Text>
                Detect and interpret hand gestures to control devices or interact with systems in a more intuitive way.
              </Card.Text>
              <h5 variant="primary">Stay Tuned...</h5>
            </Card.Body>
          </Card>
        </Col>

        {/* Feature 5: Pose Detection */}
        <Col md={4}>
          <Card className="shadow-lg">
            <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Pose+Detection" />
            <Card.Body>
              <Card.Title>Pose Detection</Card.Title>
              <Card.Text>
                Pose detection can analyze body movements, useful for fitness applications, gaming, and motion tracking.
              </Card.Text>
              <h5 variant="primary">Stay Tuned...</h5>
            </Card.Body>
          </Card>
        </Col>

        {/* Future Features */}
        <Col md={4}>
          <Card className="shadow-lg">
            <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Future+Models" />
            <Card.Body>
              <Card.Title>Future Models</Card.Title>
              <Card.Text>
                Our platform is continuously evolving, with plans to integrate new detection models like emotion recognition, object detection, and more.
              </Card.Text>
              <h5 variant="primary">Stay Tuned...</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row className="my-5">
        <Col>
          <h2 className="text-center">Why Choose Our Detection System?</h2>
          <p className="text-center">
          Our detection system offers accurate, real-time detection capabilities that cover multiple domains, including mask detection, expression recognition, and gender identification. With the increasing need for robust AI solutions in today’s digital landscape, we provide a versatile and scalable platform that delivers unmatched performance across a wide range of applications.We are dedicated to integrating cutting-edge technologies to provide an enhanced user experience and ensure safety in various environments. Our system doesn’t just stop at mask detection; it is designed with the future in mind. With upcoming features like hand gesture recognition, pose detection, and even emotion analysis, we ensure that your security and engagement tools evolve with the latest advancements in machine learning and AI.
          </p>
        </Col>
      </Row>

      {/* Call to Action */}
      {/* <Row className="text-center my-5">
        <Col>
          <Button variant="success" size="lg" href="#">
            Get Started Now
          </Button>
        </Col>
      </Row> */}
    </div>
  );
};

export default Features;
