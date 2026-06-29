import * as yup from 'yup';

export const registerSchema = yup.object({
    name: yup
        .string()
        .required('Full name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name is too long')
        .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
    
    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address')
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Please enter a valid email address'
        ),
    
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Password must contain at least one uppercase letter, one lowercase letter, and one number'
        ),
    
    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    
    terms: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions')
});

export const loginSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    
    rememberMe: yup.boolean()
});