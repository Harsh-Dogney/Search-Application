import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Ensure Tailwind is included in this file

// Render the root element with Tailwind applied globally
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <App />
    </div>
  </StrictMode>,
);
