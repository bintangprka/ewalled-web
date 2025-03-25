import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPlus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Navbar from "../components/Navbar"
import TransactionTable from "../components/TransactionTable"

function Dashboard() {
    const dummyUser = [
        {
            name: "Chelsea Islan",
            balance: 20000000000,
            accountNumber: "1234567890",
            accountType: "Personal Account",
            profilePict: "/profile-pict.jpg"
        }
    ];

    const [isBalanceVisible, setIsBalanceVisible] = useState(false);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Navbar />
            <div className="container mx-auto px-8 py-6">
                <div className="flex justify-between items-center space-y-2 pt-8">
                    <div className="greetings-section text-left">
                        <p className="text-7xl font-bold text-gray-900 pb-2">
                            Good morning, Chelsea
                        </p>
                        <p className="text-gray-600 text-xl mt-8">
                            Check all your incoming and outgoing transactions here
                        </p>
                    </div>
                    <div className="profile-section flex items-center">
                        <div className="profile-info text-right pr-5">
                            <p className="text-2xl font-bold text-gray-900">
                                {dummyUser[0].name}
                            </p>
                            <p className="text-gray-600 text-lg">
                                {dummyUser[0].accountType}
                            </p>
                        </div>
                        <div className="profile-pict">
                            <img
                                src={dummyUser[0].profilePict}
                                alt="Profile Picture"
                                className="w-20 h-20 rounded-full border-7 border-[#0061FF]"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid text-left grid-cols-12 gap-6 mt-8">
                    <div className="col-span-3 bg-[#0061FF] text-white p-6 rounded-3xl">
                        <p className="text-xl text-blue-200">
                            Account No.
                        </p>
                        <p className="text-2xl font-bold">
                            {dummyUser[0].accountNumber}
                        </p>
                    </div>

                    <div className="col-span-9 bg-white p-6 rounded-3xl shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl text-gray-500 mb-1">
                                    Balance
                                </p>
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-bold">
                                        {isBalanceVisible ? `Rp ${dummyUser[0].balance.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '**********'}
                                    </p>
                                    <button className="text-gray-400 hover:text-gray-600" onClick={toggleBalanceVisibility}>
                                        <FontAwesomeIcon icon={faEye} size="xl" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <a
                                    href="/top-up"
                                    className="w-15 h-15 bg-[#0061FF] text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faPlus} className="text-4xl" />
                                </a>
                                <a
                                    href="/transfer"
                                    className="w-15 h-15 bg-[#0061FF] text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} className="text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <TransactionTable />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;