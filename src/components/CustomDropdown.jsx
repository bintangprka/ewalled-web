import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function CustomDropdown({ 
    label, 
    value, 
    options, 
    onChange 
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="flex items-center space-x-4">
            <label className="text-gray-600 font-medium">{label}</label>
            <div className="relative">
                <div
                    className="flex items-center justify-between bg-[#FAFBFD] border border-gray-300 rounded-lg px-4 py-2 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-gray-800 mr-2">{value}</span>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-gray-400 transition-transform duration-200 
                            ${isOpen ? 'transform rotate-180' : ''}`}
                    />
                </div>

                {isOpen && (
                    <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-10">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center
                                    ${value === option.value ? 'bg-gray-50' : ''}`}
                                onClick={() => handleSelect(option)}
                            >
                                <span className="font-medium mr-2">{option.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomDropdown;