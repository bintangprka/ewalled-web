import { useState } from 'react';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import AmountInput from './AmountInput';
import CustomDropdown from './CustomDropdown';
import NotesInput from './NotesInput';

function TransferForm() {
    const [amount, setAmount] = useState('');
    const [accountNumber, setAccountNumber] = useState('Select Account');
    const [notes, setNotes] = useState('');

    const accountOptions = [
        { value: '1234567890', label: 'Account - 1234567890' },
        { value: '0987654321', label: 'Account - 0987654321' },
        { value: '5678901234', label: 'Account - 5678901234' }
    ];

    const handleAccountSelect = (option) => {
        setAccountNumber(option.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(amount, accountNumber, notes);
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
                    label="To"
                    value={accountNumber}
                    options={accountOptions}
                    onChange={handleAccountSelect}
                />

                <div className="flex items-center">
                    <label className="text-sm text-gray-600 font-medium">
                        Balance:
                    </label>
                    <span className="text-sm font-medium text-[#26AA99] pl-2">IDR 1,000,000</span>
                </div>

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
                    Transfer
                </button>
            </form>
        </div>
    );
}

export default TransferForm;