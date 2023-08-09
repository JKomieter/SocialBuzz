interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    bgColor?: string;
    textColor?: string;
    children?: React.ReactNode;
    padding?: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    disabled,
    bgColor,
    textColor,
    children,
    padding,
    width
}) => {
    return (
        <button style={{backgroundColor: bgColor, color: textColor, 
            padding: padding, width: width}} 
        className="w-full bg-blue-500
        text-white font-semibold py-2 rounded-md
        hover:bg-blue-600 transition duration-200
        " onClick={onClick} disabled={disabled}>
            <div className="flex items-center justify-center gap-2">
                {children}
                {text}
            </div>
        </button>
    )
}

export default Button;