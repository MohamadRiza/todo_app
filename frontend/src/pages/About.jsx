// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 py-12">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
            About Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Discover how our To-Do App helps you stay organized and productive.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 transition duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800">Stay Organized</h2>
            <p className="text-gray-600">
              Keep track of all your tasks in one place and never miss a deadline again.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 transition duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800">Boost Productivity</h2>
            <p className="text-gray-600">
              Focus on what matters most with our intuitive task management tools.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 transition duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800">Simple and Elegant</h2>
            <p className="text-gray-600">
              Designed with simplicity in mind, our app is easy to use for everyone.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 bg-white shadow-lg rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower individuals and teams to achieve their goals by providing a seamless and efficient task management experience ;)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;