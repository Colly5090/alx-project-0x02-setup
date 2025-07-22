import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border border-blue-400 p-4 rounded-lg">
            <h2 className="font-bold text-lg mb-2">{name}</h2>
            <p className="text-gray-600 mb-1">{email}</p>
            <p className="text-gray-500">
                {address.street}, {address.city}, {address.zipcode}
            </p>
        </div>
    );
}

export default UserCard;