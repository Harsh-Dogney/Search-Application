import { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Debouncing search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // Adjust the delay to your preference

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      onSearch(debouncedTerm); // Trigger search once the debounced term changes
    } else {
      onSearch(''); // Trigger search for empty string (to show all posts)
    }
  }, [debouncedTerm, onSearch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch(''); // Clear search results
  };

  return (
    <div className="search-bar flex items-center space-x-2 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search posts..."
        className="search-input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {searchTerm && (
        <button 
          className="clear-button p-1 text-gray-500 hover:text-gray-700"
          onClick={handleClear}
        >
          &#10005;
        </button>
      )}
    </div>
  );
}

export default SearchBar;
