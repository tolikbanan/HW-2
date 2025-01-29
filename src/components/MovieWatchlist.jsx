import React, { useState } from 'react';

const MovieWatchlist = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie.trim()) {
      setMovies([...movies, newMovie.trim()]);
      setNewMovie('');
    }
  };

  const handleRemoveMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation bar */}
      <div className="bg-gray-200 p-2 flex items-center space-x-2 border-b border-gray-300">
        <button className="p-1 hover:bg-gray-300 rounded">←</button>
        <button className="p-1 hover:bg-gray-300 rounded">→</button>
        <button className="p-1 hover:bg-gray-300 rounded">✕</button>
        <button className="p-1 hover:bg-gray-300 rounded">⌂</button>
        <div className="flex-1 mx-2">
          <input
            type="text"
            placeholder="http://"
            className="w-full p-1 rounded border border-gray-300"
          />
        </div>
        <button className="p-1 hover:bg-gray-300 rounded">🔍</button>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
        <form onSubmit={handleAddMovie} className="flex gap-2 mb-4">
          <input
            type="text"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
            placeholder="Add a movie..."
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Add
          </button>
        </form>

        <div className="mt-4">
          <h2 className="text-lg mb-2">To watch list:</h2>
          {movies.map((movie, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mb-2"
            >
              <input
                type="text"
                value={movie}
                readOnly
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button
                onClick={() => handleRemoveMovie(index)}
                className="p-2 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieWatchlist;