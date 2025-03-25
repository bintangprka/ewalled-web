import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AmountInput({ 
    label, 
    icon, 
    prefix, 
    value, 
    onChange, 
    placeholder = "0" 
}) {
    const handleAmountChange = (e) => {
        const value = e.target.value;
        // Remove all non-numeric characters
        const numericValue = value.replace(/[^\d]/g, '');
        
        if (numericValue === '' || /^\d+$/.test(numericValue)) {
            // Remove leading zeros
            let cleanValue = numericValue.replace(/^0+/, '');
            if (cleanValue === '') cleanValue = '0';
            
            // Add trailing zeros if needed
            if (cleanValue.length < 3) {
                cleanValue = cleanValue.padStart(3, '0');
            }
            
            // Format with dots for thousands and comma for decimal
            let formattedValue = cleanValue.slice(0, -2) + ',' + cleanValue.slice(-2);
            // Add dots for thousands
            formattedValue = formattedValue.slice(0, formattedValue.indexOf(','))
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                + formattedValue.slice(formattedValue.indexOf(','));

            onChange({
                target: {
                    value: formattedValue
                }
            });
        }
    };

    const handleFocus = (e) => {
        const value = e.target.value;
        // Remove formatting but keep decimal places
        const cleanValue = value.replace(/[^\d,]/g, '');
        onChange({
            target: {
                value: cleanValue
            }
        });
    };

    const handleBlur = (e) => {
        const value = e.target.value;
        if (value) {
            // Remove all non-numeric characters
            const numericValue = value.replace(/[^\d]/g, '');
            // Remove leading zeros
            let cleanValue = numericValue.replace(/^0+/, '');
            if (cleanValue === '') cleanValue = '0';
            
            // Format with dots for thousands and comma for decimal
            const formattedValue = cleanValue.slice(0, -2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.') 
                + ',' + cleanValue.slice(-2);
            
            onChange({
                target: {
                    value: formattedValue
                }
            });
        }
    };

    return (
        <div className="bg-[#FAFBFD] rounded-lg p-4 shadow-sm">
            <div className="flex items-center mb-1">
                <FontAwesomeIcon 
                    icon={icon} 
                    className="text-gray-400 mr-2"
                />
                <label className="text-sm text-gray-600 font-medium">{label}</label>
            </div>
            <div className="flex items-center mt-2">
                <span className="text-gray-900 font-semibold text-xl">{prefix}</span>
                <input
                    type="text"
                    value={value}
                    onChange={handleAmountChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="ml-2 w-full bg-transparent focus:outline-none text-xl font-semibold"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}

export default AmountInput;