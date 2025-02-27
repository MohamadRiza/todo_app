// src/pages/Todos.jsx
import TodoList from "../components/TodoList";

export default function Todos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 py-12">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96  rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
            Your To-Do List
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Stay organized and productive by managing your tasks effortlessly.
          </p>
        </div>

        {/* To-Do List Section */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 space-y-8 transition duration-300 ease-in-out hover:shadow-3xl">
          <TodoList />
        </div>
      </div>
    </div>
  );
}