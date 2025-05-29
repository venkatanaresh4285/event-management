import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center py-12 px-4">
      <AlertCircle className="h-16 w-16 text-purple-700 mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link to="/chat-support" className="btn btn-outline">
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;