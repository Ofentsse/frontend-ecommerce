import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Mail, Lock, User, Eye, EyeOff, CheckCircle } from 'lucide-react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { registerSchema } from '../../utils/validation';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    setError
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur'
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      console.log('Registration data:', { 
        name: data.name, 
        email: data.email, 
        password: data.password 
      });

      // In production, make actual API call:
      // const response = await axios.post('/api/auth/register', data);
      
      // Show success message
      setRegistrationSuccess(true);
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login', { 
          state: { message: 'Registration successful! Please log in.' }
        });
      }, 2000);

    } catch (error) {
      // Handle API errors
      if (error.response?.data?.message) {
        setError('email', { 
          type: 'manual', 
          message: error.response.data.message 
        });
      }
    }
  };

  if (registrationSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your account has been created. Redirecting you to login...
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-black h-2 rounded-full animate-pulse w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-extrabold tracking-tight uppercase text-black">
            THRIFT SET
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mt-6">Create an account</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Join THRIFT SET and get 20% off your first order
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            icon={User}
            error={errors.name?.message}
            {...register('name')}
          />

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
            placeholder="Create a strong password"
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

          <Input
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            icon={Lock}
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />

          {/* Password Requirements */}
          {password && (
            <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-1">
              <p className="font-medium text-gray-700 mb-1">Password requirements:</p>
              <ul className="space-y-0.5 text-gray-600">
                <li className={`flex items-center gap-1.5 ${password.length >= 8 ? 'text-green-600' : ''}`}>
                  <span>{password.length >= 8 ? '✅' : '○'}</span> At least 8 characters
                </li>
                <li className={`flex items-center gap-1.5 ${/[A-Z]/.test(password) ? 'text-green-600' : ''}`}>
                  <span>{/[A-Z]/.test(password) ? '✅' : '○'}</span> At least one uppercase letter
                </li>
                <li className={`flex items-center gap-1.5 ${/[a-z]/.test(password) ? 'text-green-600' : ''}`}>
                  <span>{/[a-z]/.test(password) ? '✅' : '○'}</span> At least one lowercase letter
                </li>
                <li className={`flex items-center gap-1.5 ${/\d/.test(password) ? 'text-green-600' : ''}`}>
                  <span>{/\d/.test(password) ? '✅' : '○'}</span> At least one number
                </li>
              </ul>
            </div>
          )}

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 border-2 border-gray-300 rounded checked:bg-black checked:border-black focus:ring-0"
              {...register('terms')}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{' '}
              <Link to="/terms" className="text-black font-medium hover:underline">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-black font-medium hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-600">{errors.terms.message}</p>
          )}

          <Button 
            type="submit" 
            isLoading={isSubmitting}
            className="w-full"
          >
            Create Account
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Social Sign Up */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-black font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}