import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {

    return (
        <button className={` ${shape} ${size} border`}>
            {title}
        </button>
    );
}

export default Button;