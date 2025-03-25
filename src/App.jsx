import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'
import TopUp from './pages/TopUp'
import Transfer from './pages/Transfer'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('authToken')
    return isAuthenticated ? children : <Navigate to="/login" />
}

const PublicRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('authToken')
    return !isAuthenticated ? children : <Navigate to="/" />
}

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                <Route path="/signup" element={
                    <PublicRoute>
                        <SignUpPage />
                    </PublicRoute>
                } />

                <Route path="/" element={
                    <PublicRoute>
                        <Dashboard />
                    </PublicRoute>
                } />
                <Route path="/top-up" element={
                    <PublicRoute>
                        <TopUp />
                    </PublicRoute>
                } />
                <Route path="/transfer" element={
                    <PublicRoute>
                        <Transfer />
                    </PublicRoute>
                } />

                {/* Not Found Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
