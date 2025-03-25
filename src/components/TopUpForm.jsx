import { useState } from 'react';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import AmountInput from '..//components/AmountInput';
import CustomDropdown from './CustomDropdown';
import NotesInput from './NotesInput';

function TopUpForm() {
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [notes, setNotes] = useState('');

    const paymentOptions = [
        { value: 'Credit Card', label: 'Credit Card' },
        { value: 'Debit Card', label: 'Debit Card' },
        { value: 'Bank Transfer', label: 'Bank Transfer' }
    ];

    const handlePaymentSelect = (option) => {
        setPaymentMethod(option.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(amount, paymentMethod, notes);
    };

    return (
        <div className="w-full max-w-md p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">

                <AmountInput
                    label="Amount"
                    icon={faWallet}
                    prefix="IDR"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0"
                />

                <CustomDropdown
                    label="From"
                    value={paymentMethod}
                    options={paymentOptions}
                    onChange={handlePaymentSelect}
                />

                <NotesInput
                    label="Notes:"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={amount === '0' || amount === '' || amount === null}
                    className={`w-full ${amount === '0' || amount === '' || amount === null ? 'bg-gray-500' : 'bg-blue-500'} text-white py-4 rounded-lg ${amount === '0' || amount === '' || amount === null ? '' : 'hover:bg-blue-600'} transition-colors font-medium`}
                >
                    Top Up
                </button>
            </form>
        </div>
    );
}

export default TopUpForm;