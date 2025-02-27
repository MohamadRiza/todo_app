import { useState } from 'react';
import api from '../api';

export default function TodoForm({ onSubmit, initialData = null }) {
  const [heading, setHeading] = useState(initialData?.heading || '');
  const [description, setDescription] = useState(initialData?.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const todoData = { heading, description };

      if (initialData) {
        // Update an existing to-do item
        await api.put(`/api/todos/${initialData.id}`, todoData);
      } else {
        // Create a new to-do item
        await api.post('/api/todos', todoData);
      }

      onSubmit(); // Trigger parent callback to refresh the list
      setHeading('');
      setDescription('');
    } catch (error) {
      console.error('Error saving to-do:', error);
      alert('Failed to save to-do. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="heading" className="block text-sm font-medium text-gray-700">
          Heading
        </label>
        <input
          type="text"
          id="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {initialData ? 'Update' : 'Add'} To-Do
      </button>
    </form>
  );
}