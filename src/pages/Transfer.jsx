import Navbar from "../components/Navbar"
import TransferForm from "../components/TransferForm"

function Transfer() {
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Navbar />
            <div className="container mx-auto px-8">
                <div className="max-w-md mx-auto">
                    <h1 className="text-3xl text-left font-bold mb-5 mt-20">Transfer</h1>
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                        <TransferForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transfer;