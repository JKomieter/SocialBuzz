interface ButtonProps {
    text: string | React.ReactNode;
    onClick?: () => void;
}


const Button: React.FC<ButtonProps> = ({
    text,
    onClick
}) => {
    return (
        <button onClick={onClick}
         className='text-neutral-100 font-semibold text-sm rounded-lg bg-neutral-700 px-3 py-1'>
            {text}
        </button>
    )
}

export default Button;