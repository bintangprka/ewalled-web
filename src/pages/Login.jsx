import LoginForm from "../components/LoginForm"

const LoginPage = () => (
    <div className="loginPage bg-white items-center grid grid-cols-1 md:grid-cols-2 overflow-hidden h-screen">
        <div className="flex flex-col items-center p-6">
            <div className="logo text-center mb-20 flex items-center justify-center">
                <img src="logo.png" alt="login" className="mr-4" />
                <h1 className="text-black lexend-font text-2xl">Walled</h1>
            </div>
            <LoginForm />
        </div>
        <div className="bannerLogin hidden md:block w-full h-full">
            <img src="banner1.png" alt="banner" className="w-full h-full object-cover" />
        </div>
    </div>
)

export default LoginPage