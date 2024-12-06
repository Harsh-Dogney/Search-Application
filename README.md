# Blog Post Application

A full-stack blog application built with React, Node.js, Express, and MongoDB. This application allows users to create blog posts and search through existing posts.

## Features

- Create blog posts with title and content
- Real-time search functionality
- Responsive design
- MongoDB integration for persistent data storage
- RESTful API architecture

## Tech Stack

### Frontend
- React 18
- Vite
- Axios for API calls
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- Environment variables support

## Project Structure

```
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── postController.js
│   ├── models/
│   │   └── Post.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── .env
│   └── server.js
├── src/
│   ├── components/
│   │   ├── PostForm.jsx
│   │   ├── PostList.jsx
│   │   └── SearchBar.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd blog-post-application
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add the following variables:
```
MONGODB_URI=mongodb://localhost:27017/blog_db
PORT=3000
```

4. Start the backend server:
```bash
npm run server
```

5. Start the frontend development server:
```bash
npm run dev
```

## API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts?search=query` - Search posts
- `POST /api/posts` - Create a new post

## Development

### Running in Development Mode

1. Start MongoDB service
2. Run the backend server: `npm run server`
3. Run the frontend dev server: `npm run dev`

### Building for Production

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
