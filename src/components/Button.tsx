import { useCallback } from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    color: string;
    colorSetter: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color, colorSetter }: ButtonProps) => {

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        onClick();
        colorSetter();

    }, [onClick, colorSetter]);

    return (

        <button onClick={(e) => handleClick(e)} id="new-quote" className={`text-white font-bold py-2 px-4 rounded`} style={{ backgroundColor: color, transition: 'all 1s' }} >
            {label}
        </button>
    )
}

export default Button;