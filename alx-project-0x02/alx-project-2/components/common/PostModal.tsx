import React, { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(postTitle, postContent);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Post Title"
                        name="post-title"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-black"
                    />
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded-lg mb-4 text-black"
                        placeholder="Write your post content here..."
                        rows={5}
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        name="post-content"
                    />
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            Submit Post
                        </button>
                        <button onClick={onClose} type="button" className="ml-2 bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostModal;