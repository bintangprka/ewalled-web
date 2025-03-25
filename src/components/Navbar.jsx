import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="bg-white flex justify-between items-center px-8 py-4 shadow-sm">
            <div className="flex items-center">
                <img
                    src="/logo.png"
                    alt="Walled Logo"
                    className="w-8 h-8 mr-2"
                />
                <span className="text-xl font-large lexend-font">Walled</span>
            </div>

            <div className="flex items-center space-x-8">
                <nav className="flex items-center space-x-8">
                    <a
                        href="/"
                        className={`transition-colors text-base ${
                            currentPath === '/' 
                            ? 'text-blue-500 font-medium' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        Dashboard
                    </a>
                    <a
                        href="/transfer"
                        className={`transition-colors text-base ${
                            currentPath === '/transfer' 
                            ? 'text-blue-500 font-medium' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        Transfer
                    </a>
                    <a
                        href="/top-up"
                        className={`transition-colors text-base ${
                            currentPath === '/top-up' 
                            ? 'text-blue-500 font-medium' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        Topup
                    </a>
                    <a
                        href="/signout"
                        className={`transition-colors text-base ${
                            currentPath === '/signout' 
                            ? 'text-blue-500 font-medium' 
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                        Sign Out
                    </a>
                    <img
                        src="/line-separator.png"
                        alt="Line Separator"
                        className="h-6.5"
                    />
                    <img
                        src="/theme-switcher.png"
                        alt="Theme Switcher"
                        className="w-6.5 h-6.5 cursor-pointer"
                        onClick={() => {
                            document.documentElement.classList.toggle('dark');
                        }}
                    />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;