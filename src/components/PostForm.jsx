import { useState } from 'react';
import { createPost } from '../services/api';

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');  // For displaying error messages
  const [isLoading, setIsLoading] = useState(false);  // Loading state to disable form during submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset any previous errors
    setIsLoading(true);

    try {
      // Create a new post via the API
      const newPost = await createPost({ title, content });
      onPostCreated(newPost);  // Pass the new post to parent component
      setTitle('');
      setContent('');
    } catch (error) {
      setError('Error creating post, please try again.');
      console.error('Error creating post:', error);
    } finally {
      setIsLoading(false);  // End the loading state
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content..."
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px] resize-none"
        />
      </div>

      {/* Display error if there is one */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button 
        type="submit" 
        className={`w-full py-3 rounded-md text-white ${isLoading ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none`}
        disabled={isLoading}  // Disable the button while submitting
      >
        {isLoading ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
}

export default PostForm;
