interface InputProps {
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    bgColor?: string;
    textColor?: string;
}


const Input: React.FC<InputProps> = ({
    type,
    placeholder,
    disabled,
    value,
    onChange,
    bgColor,
    textColor
}) => {
    return (
        <input
        className="w-full text-black bg-neutral-100 rounded-md px-3 py-2 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition duration-200"
        onChange={onChange} 
        value={value} disabled={disabled} 
        type={type} placeholder={placeholder}
        style={{backgroundColor: bgColor, color: textColor}}
        />
    )
}

export default Input;