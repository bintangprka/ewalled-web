import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function SignUpForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { fetchData } = useFetch('/signup');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone) {
            setError('All fields are required');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await fetchData({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.success) {
                if (response.token) {
                    localStorage.setItem('authToken', response.token);
                }
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signupForm w-full max-w-md mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col text-black">
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`p-2 bg-gray-200 rounded mb-4 ${error ? 'border-red-500 border-2' : ''}`}
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`p-2 bg-gray-200 rounded mb-4 ${error ? 'border-red-500 border-2' : ''}`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className={`p-2 bg-gray-200 rounded mb-4 ${error ? 'border-red-500 border-2' : ''}`}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                />
                
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    required
                    className={`p-2 bg-gray-200 rounded mb-4 ${error ? 'border-red-500 border-2' : ''}`}
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={loading}
                />

                {error && (
                    <div className="mb-4 text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    className={`mt-4 p-2 bg-blue-500 text-white rounded transition
                        ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    disabled={loading}
                >
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>
            <p className="mt-6 text-left">
                Sudah punya akun?{' '}
                <a href="/login" className="text-blue-500">
                Login di sini
                </a>
            </p>
        </div>
    );
}

export default SignUpForm;