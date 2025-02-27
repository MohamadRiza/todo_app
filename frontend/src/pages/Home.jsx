import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Welcome to the To-Do App
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Stay organized and productive with our sleek and intuitive to-do app. Manage your tasks effortlessly and achieve your goals faster.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="/todos"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </a>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
      </div>
    </div>
    </div>
  )
}

export default Home
