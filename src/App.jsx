import { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import { getPosts } from './services/api';  // Make sure getPosts is implemented in the service file
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  // Function to fetch posts based on search query
  const fetchPosts = async (searchQuery = '') => {
    try {
      const data = await getPosts(searchQuery);  // Fetch posts from API
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Fetch posts when the component mounts (empty dependency array)
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle a newly created post and update the state
  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);  // Add new post at the top of the list
  };

  // Handle search and trigger fetch with search term
  const handleSearch = (searchTerm) => {
    fetchPosts(searchTerm);
  };

  return (
    <div className="app min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Blog Posts</h1>
      <div className="container mx-auto space-y-6">
        <SearchBar onSearch={handleSearch} />  {/* Search functionality */}
        <PostForm onPostCreated={handlePostCreated} />  {/* Create new post functionality */}
        <PostList posts={posts} />  {/* Display posts */}
      </div>
    </div>
  );
}

export default App;
