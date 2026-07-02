export default function Button({ 
    children, 
    variant = 'primary', 
    isLoading = false,
    className = '',
    ...props 
}) {
    const variants = {
        primary: 'bg-black text-white hover:bg-gray-800',
        outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
        ghost: 'text-black hover:bg-gray-100',
    };

    return (
        <button
            className={`
                px-6 py-3 rounded-lg font-medium transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center gap-2
                ${variants[variant] || variants.primary}
                ${className}
            `}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating...
                </>
            ) : children}
        </button>
    );
}