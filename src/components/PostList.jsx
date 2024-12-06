import { useState, useEffect } from 'react';

function PostList({ posts }) {
  // Ensure that posts is an array, and handle the case where there are no posts
  if (!Array.isArray(posts)) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  return (
    <div className="post-list space-y-4">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available. Create one to get started!</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id || post.id}
            className="post-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="post-title text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="post-content text-gray-700 mt-2">{post.content}</p>
            <small className="post-date text-gray-500 text-sm block mt-4">
              {new Date(post.createdAt).toLocaleDateString() || 'Date not available'}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
