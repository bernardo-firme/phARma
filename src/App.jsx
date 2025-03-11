import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Next-Gen Pharma Tech with AR
        </h1>
        <p className="text-lg mb-6 opacity-90">
          Optimized for the future. Leveraging cutting-edge technology to revolutionize the pharmaceutical industry.
        </p>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          href="#learn-more"
          className="bg-white text-indigo-600 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition-all"
        >
          Learn More
        </motion.a>
      </motion.div>
    </div>
  );
};

export default App;
