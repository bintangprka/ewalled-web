import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CustomDropdown from './CustomDropdown';

const dummyTransactions = [
    {
        id: 1,
        date: '20:10 - 30 June 2022',
        type: 'Transfer',
        fromTo: 'Sendy',
        description: 'Fore Coffee',
        amount: -75000.00
    },
    {
        id: 2,
        date: '15:30 - 29 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Topup from Bank Transfer',
        amount: 2500000.00
    },
    {
        id: 3,
        date: '09:45 - 28 June 2022',
        type: 'Transfer',
        fromTo: 'Spongebob',
        description: 'Movie Tickets',
        amount: -150000.00
    },
    {
        id: 4,
        date: '14:20 - 27 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Topup from Credit Card',
        amount: 1500000.00
    },
    {
        id: 5,
        date: '11:35 - 26 June 2022',
        type: 'Transfer',
        fromTo: 'Anwar',
        description: 'Dinner Payment',
        amount: -250000.00
    },
    {
        id: 6,
        date: '16:40 - 25 June 2022',
        type: 'Transfer',
        fromTo: 'Joko',
        description: 'Book Purchase',
        amount: -320000.00
    },
    {
        id: 7,
        date: '13:15 - 24 June 2022',
        type: 'Transfer',
        fromTo: 'Maria',
        description: 'Concert Tickets',
        amount: -450000.00
    },
    {
        id: 8,
        date: '10:50 - 23 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Topup from Debit Card',
        amount: 3000000.00
    },
    {
        id: 9,
        date: '17:25 - 22 June 2022',
        type: 'Transfer',
        fromTo: 'David',
        description: 'Gym Membership',
        amount: -800000.00
    },
    {
        id: 10,
        date: '12:30 - 21 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Topup from E-Wallet',
        amount: 1750000.00
    },
    {
        id: 11,
        date: '08:45 - 20 June 2022',
        type: 'Transfer',
        fromTo: 'Sarah',
        description: 'Birthday Gift',
        amount: -500000.00
    },
    {
        id: 12,
        date: '15:55 - 19 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Salary Deposit',
        amount: 5000000.00
    },
    {
        id: 13,
        date: '11:20 - 18 June 2022',
        type: 'Transfer',
        fromTo: 'Michael',
        description: 'Phone Bill',
        amount: -200000.00
    },
    {
        id: 14,
        date: '14:40 - 17 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Bonus Payment',
        amount: 2000000.00
    },
    {
        id: 15,
        date: '09:15 - 16 June 2022',
        type: 'Transfer',
        fromTo: 'Lisa',
        description: 'Internet Bill',
        amount: -350000.00
    },
    {
        id: 16,
        date: '16:30 - 15 June 2022',
        type: 'Transfer',
        fromTo: 'Kevin',
        description: 'Rent Payment',
        amount: -1500000.00
    },
    {
        id: 17,
        date: '13:25 - 14 June 2022',
        type: 'Transfer',
        fromTo: 'Emma',
        description: 'Shopping',
        amount: -650000.00
    },
    {
        id: 18,
        date: '10:10 - 13 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Investment Return',
        amount: 4500000.00
    },
    {
        id: 19,
        date: '17:05 - 12 June 2022',
        type: 'Transfer',
        fromTo: 'Daniel',
        description: 'Car Service',
        amount: -900000.00
    },
    {
        id: 20,
        date: '12:50 - 11 June 2022',
        type: 'Topup',
        fromTo: '',
        description: 'Freelance Payment',
        amount: 3500000.00
    }
];

const TransactionTable = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showCount, setShowCount] = useState('10');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('date');
    const [sortOrder, setSortOrder] = useState('desc');

    const showOptions = [
        { value: '10', label: 'Last 10 transactions' },
        { value: '20', label: 'Last 20 transactions' },
        { value: '30', label: 'Last 30 transactions' }
    ];

    const sortByOptions = [
        { value: 'date', label: 'Date' },
        { value: 'amount', label: 'Amount' },
        { value: 'type', label: 'Type' }
    ];

    const sortOrderOptions = [
        { value: 'desc', label: 'Descending' },
        { value: 'asc', label: 'Ascending' }
    ];

    const handleShowCountChange = (option) => {
        setShowCount(option.value);
        setCurrentPage(1);
    };

    const handleSortByChange = (option) => {
        setSortBy(option.value);
    };

    const handleSortOrderChange = (option) => {
        setSortOrder(option.value);
    };

    const filteredAndSortedTransactions = dummyTransactions
        .filter(transaction => {
            const searchLower = searchQuery.toLowerCase();
            return (
                transaction.date.toLowerCase().includes(searchLower) ||
                transaction.type.toLowerCase().includes(searchLower) ||
                transaction.fromTo.toLowerCase().includes(searchLower) ||
                transaction.description.toLowerCase().includes(searchLower) ||
                transaction.amount.toString().includes(searchLower)
            );
        })
        .sort((a, b) => {
            let comparison = 0;

            switch (sortBy) {
                case 'date':
                    comparison = new Date(a.date) - new Date(b.date);
                    break;
                case 'amount':
                    comparison = a.amount - b.amount;
                    break;
                case 'type':
                    comparison = a.type.localeCompare(b.type);
                    break;
                default:
                    comparison = 0;
            }

            return sortOrder === 'desc' ? -comparison : comparison;
        });

    const itemsPerPage = parseInt(showCount);
    const indexOfLastTransaction = currentPage * itemsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
    const currentTransactions = filteredAndSortedTransactions.slice(
        indexOfFirstTransaction,
        indexOfLastTransaction
    );

    const totalPages = Math.ceil(filteredAndSortedTransactions.length / itemsPerPage);

    return (
        <div className="bg-white rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-4 focus:ring-purple-600 shadow-lg border-2 border-gray-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                </div>

                <div className="flex gap-4">
                    <CustomDropdown
                        label="Show"
                        value={`Last ${showCount} transactions`}
                        options={showOptions}
                        onChange={handleShowCountChange}
                    />

                    <CustomDropdown
                        label="Sort by"
                        value={sortByOptions.find(option => option.value === sortBy).label}
                        options={sortByOptions}
                        onChange={handleSortByChange}
                    />

                    <CustomDropdown
                        value={sortOrderOptions.find(option => option.value === sortOrder).label}
                        options={sortOrderOptions}
                        onChange={handleSortOrderChange}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <div className="min-h-[600px]">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="sticky top-0 w-[180px] text-left py-4 px-4 font-semibold text-gray-600 border-b border-gray-200">
                                    Date & Time
                                </th>
                                <th className="sticky top-0 w-[100px] text-left py-4 px-4 font-semibold text-gray-600 border-b border-gray-200">
                                    Type
                                </th>
                                <th className="sticky top-0 w-[140px] text-left py-4 px-4 font-semibold text-gray-600 border-b border-gray-200">
                                    From / To
                                </th>
                                <th className="sticky top-0 w-[200px] text-left py-4 px-4 font-semibold text-gray-600 border-b border-gray-200">
                                    Description
                                </th>
                                <th className="sticky top-0 w-[140px] text-left py-4 px-4 font-semibold text-gray-600 border-b border-gray-200">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {currentTransactions.map((transaction) => (
                                <tr
                                    key={transaction.id}
                                    className="h-[60px] hover:bg-gray-50 transition-colors"
                                >
                                    <td className="py-4 px-4 whitespace-nowrap text-left">{transaction.date}</td>
                                    <td className="py-4 px-4 text-left">
                                        <span className={`inline-flex px-2 py-1 rounded-full text-sm ${transaction.type === 'Transfer'
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-green-100 text-green-700'
                                            }`}>
                                            {transaction.type}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4 truncate text-left">{transaction.fromTo || '-'}</td>
                                    <td className="py-4 px-4 truncate text-left">{transaction.description}</td>
                                    <td className={`py-4 px-4 font-medium whitespace-nowrap text-left ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                                        }`}>
                                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('id-ID', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}
                                    </td>
                                </tr>
                            ))}
                            {/* Fill remaining space with empty rows */}
                            {Array.from({ length: Math.max(itemsPerPage - currentTransactions.length, 0) }).map((_, index) => (
                                <tr key={`empty-${index}`} className="h-[60px]">
                                    <td colSpan="5" className="py-4 px-4 text-left">&nbsp;</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6">
                <button
                    className={`px-4 py-2 rounded-lg transition-colors ${currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border border-gray-200 hover:bg-gray-50 text-gray-700'
                        }`}
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                        pageNum = i + 1;
                    } else if (currentPage <= 3) {
                        pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                    } else {
                        pageNum = currentPage - 2 + i;
                    }

                    return (
                        <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === pageNum
                                    ? 'bg-blue-500 text-white'
                                    : 'border border-gray-200 hover:bg-gray-50 text-gray-700'
                                }`}
                        >
                            {pageNum}
                        </button>
                    );
                })}
                <button
                    className={`px-4 py-2 rounded-lg transition-colors ${currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'border border-gray-200 hover:bg-gray-50 text-gray-700'
                        }`}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TransactionTable; 