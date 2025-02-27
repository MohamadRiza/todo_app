// src/components/TodoList.jsx
import { useState, useEffect } from 'react';
import api from '../api';
import TodoForm from './TodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch To-Dos
  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching to-dos:', error);
      alert('Failed to load to-dos. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Delete a To-Do
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this to-do?')) return;

    setLoading(true);
    try {
      await api.delete(`/api/todos/${id}`);
      fetchTodos(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting to-do:', error);
      alert('Failed to delete to-do. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* To-Do Form */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {editingTodo ? 'Edit To-Do' : 'Add New To-Do'}
        </h2>
        <TodoForm
          onSubmit={fetchTodos}
          initialData={editingTodo}
        />
        {editingTodo && (
          <button
            onClick={() => setEditingTodo(null)}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out"
          >
            Cancel Edit
          </button>
        )}
      </div>

      {/* To-Do Items */}
      <div className="space-y-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading to-dos...</p>
        ) : todos.length === 0 ? (
          <p className="text-center text-gray-500">No to-dos found. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white shadow-md rounded-lg overflow-hidden p-6 space-y-4 transition duration-300 ease-in-out transform hover:shadow-lg"
            >
              {/* Heading */}
              <h3 className="text-xl font-bold text-gray-800">{todo.heading}</h3>

              {/* Description */}
              <p className="text-gray-600">{todo.description}</p>

              {/* Actions */}
              <div className="flex justify-end space-x-4">
                
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-600 hover:text-red-800 font-medium transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}