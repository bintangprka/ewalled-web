import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { loading, error, fetchData } = useFetch('/login');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const data = await fetchData({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (data.success) {
                if (data.token) {
                    localStorage.setItem('authToken', data.token);
                }
                navigate('/dashboard');
            }
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <div className="loginForm w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col text-black">
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className={`p-2 bg-gray-200 rounded mb-4 ${error ? 'border-red-500 border-2' : ''}`}
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    className={`p-2 bg-gray-200 rounded mb-4 ${error ? 'border-red-500 border-2' : ''}`}
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
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
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            <p className="mt-4 text-left">
                Belum punya akun?{' '}
                <a href="/signup" className="text-blue-500">
                    Daftar di sini
                </a>
            </p>
        </div>
    );
}

export default LoginForm;