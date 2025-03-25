function NotesInput({ 
    label, 
    value, 
    onChange, 
    maxLength = "30" 
}) {
    return (
        <div className="bg-gray-50 flex items-center rounded-2xl">
            <div className="flex items-center p-3">
                <label className="text-md text-gray-600 font-bold">{label}</label>
            </div>
            <div className="flex items-center w-full pl-2 overflow-hidden">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent focus:outline-none"
                    maxLength={maxLength}
                />
            </div>
        </div>
    );
}

export default NotesInput;