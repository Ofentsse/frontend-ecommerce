import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { loginSchema } from '../../utils/validation';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    setError
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  });

  // Show success message from registration redirect
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear location state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const onSubmit = async (data) => {
    try {
      setLoginError('');
      
      // Simulate API call
      console.log('Login data:', { 
        email: data.email, 
        password: data.password,
        rememberMe: data.rememberMe 
      });

      // In production:
      // const response = await axios.post('/api/auth/login', data);
      // const { token, user } = response.data;
      // Store token in localStorage/sessionStorage based on rememberMe
      
      // Simulate successful login
      const mockUser = { 
        id: 1, 
        name: 'John Doe', 
        email: data.email,
        avatar: null
      };
      
      // Store auth data
      if (data.rememberMe) {
        localStorage.setItem('authToken', 'mock-jwt-token');
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        sessionStorage.setItem('authToken', 'mock-jwt-token');
        sessionStorage.setItem('user', JSON.stringify(mockUser));
      }

      // Redirect to dashboard or home
      navigate('/dashboard', { 
        state: { welcomeMessage: `Welcome back, ${mockUser.name}!` }
      });

    } catch (error) {
      // Handle API errors
      if (error.response?.status === 401) {
        setLoginError('Invalid email or password. Please try again.');
        setError('password', { 
          type: 'manual', 
          message: 'Invalid credentials' 
        });
      } else {
        setLoginError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-extrabold tracking-tight uppercase text-black">
            THRIFT SET
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mt-6">Welcome back</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Sign in to your account to continue shopping
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-700">{successMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {loginError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{loginError}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            icon={Mail}
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            icon={Lock}
            error={errors.password?.message}
            {...register('password')}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 border-2 border-gray-300 rounded checked:bg-black checked:border-black focus:ring-0"
                {...register('rememberMe')}
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link 
              to="/forgot-password" 
              className="text-sm text-black font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button 
            type="submit" 
            isLoading={isSubmitting}
            className="w-full"
          >
            Sign In
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => console.log('Google login')}
            >
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => console.log('Facebook login')}
            >
              <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-black font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}