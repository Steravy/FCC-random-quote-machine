import { useCallback } from "react";

interface ButtonProps {
    label: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {

    const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        onClick();

    }, []);

    return (

        <button onClick={ (e) => handleClick(e)} id="new-quote" className=" bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" >
            {label}
        </button>
    )
}

export default Button