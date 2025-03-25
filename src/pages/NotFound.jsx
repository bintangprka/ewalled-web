import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="space-y-2">
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        className="text-blue-500 text-6xl animate-bounce"
                    />
                    <h1 className="text-8xl font-bold text-blue-500">404</h1>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-gray-600">
                        The page you are looking for might have been removed,
                        had its name changed, or is temporarily unavailable.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;