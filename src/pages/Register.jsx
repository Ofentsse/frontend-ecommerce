import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center">
      <h1 className="text-4xl font-extrabold uppercase mb-4">Create an Account</h1>
      <p className="text-gray-500 mb-6">This is where the registration form will go!</p>
      <Link to="/" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
        Back to Home
      </Link>
    </div>
  );
}