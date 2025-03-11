import React from "react";
import { motion } from "framer-motion";
import "./styles.css"; // Import external CSS file
import videoSource from "./assets/pharma-video.mp4"; // Import local video

const Navbar = () => {
  return (
    <nav className="navbar rounded">
      <ul className="nav-left">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

const Features = () => {
  return (
    <section id="features" className="features rounded section-spacing">
      <h2>Key Features</h2>
      <div className="feature-list">
        <div className="feature-item rounded">🔬 Cutting-Edge AR Technology</div>
        <div className="feature-item rounded">⚡ Enhanced Pharma Efficiency</div>
        <div className="feature-item rounded">📊 Real-Time Data Visualization</div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  return (
    <section id="video" className="video-section rounded section-spacing">
      <h2>Watch Our Technology in Action</h2>
      <div className="video-container rounded">
        <video width="800" height="450" controls className="rounded">
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

const AdditionalSection = () => {
  return (
    <section id="additional" className="features rounded section-spacing">
      <h2>Why Choose Our Technology?</h2>
      <div className="feature-list">
        <div className="feature-item rounded">🚀 Increased Precision & Accuracy</div>
        <div className="feature-item rounded">🛠️ Streamlined Pharma Workflow</div>
        <div className="feature-item rounded">📡 Real-Time Data Monitoring</div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer rounded section-spacing">
      <p>&copy; 2025 PhARma Augmented Reality. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="hero-section rounded section-spacing">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="content rounded"
        >
          <h1 className="title">
            Next-Gen Pharma Tech with AR
          </h1>
          <p className="description">
            Optimized for the future. Leveraging cutting-edge technology to revolutionize the pharmaceutical industry.
          </p>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            href="#learn-more"
            className="button rounded"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
      <VideoSection />
      <AdditionalSection />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
