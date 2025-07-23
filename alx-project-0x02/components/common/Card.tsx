import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="border border-amber-400 p-4 rounded-lg ">
            <h2 className="font-bold text-lg">{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default Card;