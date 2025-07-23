import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {

    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    const className = `border ${shape} ${sizeClasses[size]}`;

    return (
        <button className={className}>
            {title || "Button"}
        </button>
    );
}

export default Button;