import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <>
            <div className="border border-amber-400 p-4 rounded-lg space-y-4">
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{content}</p>
                <p className="text-sm text-gray-500">Posted by User ID: {userId}</p>
            </div>
        </>
    );
}

export default PostCard;