import Navbar from "../components/Navbar"
import TopUpForm from "../components/TopUpForm"

function TopUp() {
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Navbar />
            <div className="container mx-auto px-8">
                <div className="max-w-md mx-auto">
                    <h1 className="text-3xl text-left font-bold mb-5 mt-20">Top Up</h1>
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                        <TopUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopUp;